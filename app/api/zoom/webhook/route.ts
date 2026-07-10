import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";
import { verifyWebhook, webhookValidation } from "@/lib/zoom";

export const runtime = "nodejs";

// Zoom webhook receiver. Must ack within ~3s, so it does no heavy work: it
// verifies the event, maps recording.completed → the matching session, and
// inserts a 'processing' recording row. The cron worker (zoom-transfer) then
// downloads the file into Supabase Storage. Idempotent via the unique index on
// recordings.zoom_recording_id (phase0g) — duplicate deliveries are no-ops.
export async function POST(req: Request) {
  const raw = await req.text();
  let event: { event?: string; payload?: Record<string, unknown> };
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "bad_json" }, { status: 400 });
  }

  // 1) URL-validation handshake (no signature check needed here).
  if (event.event === "endpoint.url_validation") {
    const plainToken = String((event.payload as { plainToken?: string })?.plainToken ?? "");
    return NextResponse.json(webhookValidation(plainToken));
  }

  // 2) Verify every other event's signature.
  if (!verifyWebhook(raw, req.headers.get("x-zm-signature"), req.headers.get("x-zm-request-timestamp"))) {
    return NextResponse.json({ error: "bad_signature" }, { status: 401 });
  }

  if (event.event !== "recording.completed") {
    return NextResponse.json({ ok: true }); // ack + ignore other events
  }

  const obj = (event.payload as { object?: Record<string, unknown> })?.object ?? {};
  const meetingId = obj.id != null ? String(obj.id) : "";
  const meetingUuid = String(obj.uuid ?? ""); // instance uuid → idempotency key + worker handle
  if (!meetingId || !meetingUuid) return NextResponse.json({ ok: true });

  const svc = getServiceClient();
  if (!svc) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  // Map to our session. Unknown meeting (not created by us) → ack + ignore.
  const { data: session } = await svc
    .from("sessions")
    .select("id,title")
    .eq("zoom_meeting_id", meetingId)
    .maybeSingle();
  if (!session) return NextResponse.json({ ok: true });

  // Enqueue a processing row. On the unique-index conflict (dup webhook) this is
  // a no-op — swallow 23505 and still ack.
  const { error } = await svc.from("recordings").insert({
    session_id: session.id,
    title: (obj.topic as string) || session.title,
    status: "processing",
    zoom_recording_id: meetingUuid, // meeting instance uuid — the worker's handle
    recorded_at: (obj.start_time as string) ?? null,
  });
  if (error && error.code !== "23505") {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
