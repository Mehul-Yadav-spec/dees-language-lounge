import { cache } from "react";
import { createClient } from "@/lib/supabaseServer";
import { getServiceClient } from "@/lib/supabase";

export type Role = "student" | "tutor" | "admin";

export interface PortalUser {
  id: string;
  email: string | null;
  role: Role;
  fullName: string | null;
  timezone: string | null;
  avatarUrl: string | null;
  mustChangePassword: boolean;
}

// Server-side: the current authenticated user joined with their profile row.
// Returns null when there is no session. Use in portal layouts / server pages.
//
// Wrapped in React cache() so the layout and page of the SAME request share one
// execution instead of each doing its own getUser() + profiles + avatar-sign
// round-trips — a big per-navigation latency saving in the portals.
export const getSessionUser = cache(async (): Promise<PortalUser | null> => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, full_name, timezone, avatar_url, must_change_password")
    .eq("id", user.id)
    .single();

  // avatar_url stores a path in the private 'avatars' bucket — sign it for display.
  let avatarUrl: string | null = profile?.avatar_url ?? null;
  if (avatarUrl && !avatarUrl.startsWith("http")) {
    const svc = getServiceClient();
    const { data } = (await svc?.storage.from("avatars").createSignedUrl(avatarUrl, 3600)) ?? { data: null };
    avatarUrl = data?.signedUrl ?? null;
  }

  return {
    id: user.id,
    email: user.email ?? null,
    role: (profile?.role as Role) ?? "student",
    fullName: profile?.full_name ?? null,
    timezone: profile?.timezone ?? null,
    avatarUrl,
    mustChangePassword: profile?.must_change_password ?? false,
  };
});
