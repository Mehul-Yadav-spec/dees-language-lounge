import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/portal";
import { PortalShell } from "@/components/portal/PortalShell";

// Authed shell for every portal route. Middleware already blocks anonymous
// users; here we also force the first-login password change and keep the shell
// server-rendered with the user's profile.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  if (user.mustChangePassword) redirect("/set-password");

  return <PortalShell user={user}>{children}</PortalShell>;
}
