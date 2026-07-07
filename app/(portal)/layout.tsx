import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/portal";
import { PortalShell, type NavItem } from "@/components/portal/PortalShell";

const STUDENT_NAV: NavItem[] = [
  { label: "Dashboard", href: "/student", icon: "dashboard" },
  { label: "Live Classes", href: "/student/live-classes", icon: "live_tv" },
  { label: "Recordings", href: "/student/recordings", icon: "video_library" },
  { label: "Resources", href: "/student/resources", icon: "folder_open" },
];

// Authed shell for the student portal. Middleware already blocks anonymous
// users; here we also force the first-login password change.
export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  if (user.mustChangePassword) redirect("/set-password");

  return (
    <PortalShell user={user} nav={STUDENT_NAV} homeHref="/student" profileHref="/student/profile">
      {children}
    </PortalShell>
  );
}
