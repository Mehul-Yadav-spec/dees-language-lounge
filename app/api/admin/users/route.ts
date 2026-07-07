import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabaseServer";
import { getServiceClient } from "@/lib/supabase";
import { tempPassword } from "@/lib/tempPassword";

// Admin-only: create a student or tutor account (build doc §10). Generates a
// readable temp password, sets the role + must_change_password, and returns the
// password once so the admin can DM it on WhatsApp. Never public.
export async function POST(req: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "unauthenticated" }, { status: 401 });

  const { data: me } = await supabase.from("profiles").select("role").eq("id", user.id).single();
  if (me?.role !== "admin") return NextResponse.json({ error: "forbidden" }, { status: 403 });

  const body = await req.json().catch(() => null);
  const email = String(body?.email ?? "").trim().toLowerCase();
  const fullName = String(body?.fullName ?? "").trim();
  const phone = String(body?.phone ?? "").trim();
  const role = body?.role;
  if (!email || !fullName || (role !== "student" && role !== "tutor")) {
    return NextResponse.json({ error: "invalid_input" }, { status: 400 });
  }

  const svc = getServiceClient();
  if (!svc) return NextResponse.json({ error: "server_not_configured" }, { status: 500 });

  const password = tempPassword();
  const { data: created, error } = await svc.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });
  if (error || !created?.user) {
    return NextResponse.json({ error: error?.message ?? "create_failed" }, { status: 400 });
  }

  // The trigger created the profile; set role + first-login reset + details.
  await svc
    .from("profiles")
    .update({ role, must_change_password: true, full_name: fullName, phone: phone || null })
    .eq("id", created.user.id);

  return NextResponse.json({ ok: true, id: created.user.id, email, tempPassword: password });
}
