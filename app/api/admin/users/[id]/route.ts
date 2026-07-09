import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getServiceClient } from "@/lib/supabase";

// Admin-only: edit a user (name, WhatsApp) and/or toggle active/inactive.
// Deactivation bans the auth user (blocks login) and sets profiles.status; the
// role is never changed here. Reactivation lifts the ban.
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthenticated" }, { status: 401 });
  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (me?.role !== "admin") return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "invalid_input" }, { status: 400 });

  const svc = getServiceClient();
  if (!svc) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  const patch: Record<string, unknown> = {};
  if (typeof body.fullName === "string" && body.fullName.trim()) patch.full_name = body.fullName.trim();
  if (typeof body.phone === "string") patch.phone = body.phone.trim() || null;

  // Active/inactive toggle → ban/unban the auth user.
  if (body.status === "active" || body.status === "inactive") {
    patch.status = body.status;
    const ban_duration = body.status === "inactive" ? "876000h" : "none";
    const { error: banErr } = await svc.auth.admin.updateUserById(params.id, { ban_duration });
    if (banErr) return NextResponse.json({ error: banErr.message }, { status: 400 });
  }

  if (Object.keys(patch).length) {
    const { error } = await svc.from("profiles").update(patch).eq("id", params.id);
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
