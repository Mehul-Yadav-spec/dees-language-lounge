import { PortalSkeleton } from "@/components/portal/PortalSkeleton";

// Loading boundary at the `student` segment (not the parent group) so the
// skeleton shows when navigating BETWEEN /student/* pages, not just on first
// entry. The student pages nest one level deeper than the admin/tutor ones,
// so they need their own loading.tsx here.
export default function Loading() {
  return <PortalSkeleton />;
}
