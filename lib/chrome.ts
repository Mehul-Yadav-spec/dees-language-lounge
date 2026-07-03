import { footer as defaultFooter } from "@/content/site";
import { homePromo } from "@/content/home";
import { fcPromo, fcFooter } from "@/content/frenchCanada";
import type { PromoBarContent, FooterContent } from "@/content/types";

// Resolves the promo bar + footer for a given route. Keeps the shared layout
// generic while letting /french-canada carry its own promo and its
// compliance-line footer (Variant A). Everything else uses the school defaults.

export function promoForPath(path: string): PromoBarContent {
  if (path.startsWith("/french-canada")) return fcPromo;
  return homePromo;
}

export function footerForPath(path: string): FooterContent {
  if (path.startsWith("/french-canada")) return fcFooter;
  return defaultFooter;
}
