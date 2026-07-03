"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";
import { footerForPath } from "@/lib/chrome";

// Route-aware footer wrapper (Variant-A gets its compliance-line footer).
export function SiteFooter() {
  const pathname = usePathname() || "/";
  return <Footer content={footerForPath(pathname)} />;
}
