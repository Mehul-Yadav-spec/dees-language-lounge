import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getServiceClient } from "@/lib/supabase";

// Admin: upload a class recording to a session → private 'recordings' bucket +
// a recordings row marked 'ready' (the manual stand-in for the Zoom pipeline).
export async function POST(req: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (me?.role !== "admin") return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const form = await req.formData();
  const file = form.get("file");
  const sessionId = String(form.get("sessionId") ?? "");
  const title = String(form.get("title") ?? "").trim();
  if (!(file instanceof File) || !sessionId) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  if (file.size > 50 * 1024 * 1024) return NextResponse.json({ error: "too_large" }, { status: 400 });

  const svc = getServiceClient();
  if (!svc) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  const { data: sess } = await svc.from("sessions").select("title,starts_at,ends_at").eq("id", sessionId).single();
  if (!sess) return NextResponse.json({ error: "bad_session" }, { status: 400 });
  const duration = sess.ends_at ? Math.round((Date.parse(sess.ends_at) - Date.parse(sess.starts_at)) / 60000) : null;

  const ext = (file.name.split(".").pop() || "mp4").toLowerCase();
  const path = `${sessionId}/${Date.now()}.${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await svc.storage
    .from("recordings")
    .upload(path, buffer, { contentType: file.type || "video/mp4" });
  if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

  const now = new Date().toISOString();
  const { error: insErr } = await svc.from("recordings").insert({
    session_id: sessionId,
    title: title || sess.title,
    storage_path: path,
    duration,
    status: "ready",
    synced_at: now,
    recorded_at: now,
  });
  if (insErr) return NextResponse.json({ error: insErr.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
