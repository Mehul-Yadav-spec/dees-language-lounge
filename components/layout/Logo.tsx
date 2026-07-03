import Link from "next/link";
import { site } from "@/content/site";

// Circular gold monogram + wordmark (DESIGN.md §4 navigation).
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 focus-gold rounded-icon"
      aria-label={`${site.name} — home`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta-gradient shadow-glow-logo">
        <span className="font-display text-lg leading-none text-canvas">{site.monogram}</span>
      </span>
      {!compact ? (
        <span className="whitespace-nowrap text-lg font-bold uppercase tracking-widest text-gold md:text-xl">
          {site.wordmark}
        </span>
      ) : null}
    </Link>
  );
}
