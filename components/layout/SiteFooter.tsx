"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { complianceNoteForPath } from "@/lib/chrome";

// One shared footer for every page (content from content/site.ts). Only the
// additive compliance note varies by route (/french-canada).
export function SiteFooter() {
  const pathname = usePathname() || "/";
  return <Footer complianceNote={complianceNoteForPath(pathname)} />;
}
