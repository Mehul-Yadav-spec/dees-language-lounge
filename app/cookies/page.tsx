import type { Metadata } from "next";
import { LegalPageView } from "@/components/LegalPage";
import { buildMetadata } from "@/content/seo";
import { legalPages } from "@/content/legal";

export const metadata: Metadata = buildMetadata("cookies");

export default function CookiesPage() {
  return <LegalPageView page={legalPages.cookies} />;
}
