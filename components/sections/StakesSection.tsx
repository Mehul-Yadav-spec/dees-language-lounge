import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { Icon } from "@/components/ui/Icon";
import type { StakesContent } from "@/content/types";

/**
 * "The Stakes" — two draw queues compared. The general draw is the muted,
 * LOCKED bar (periwinkle = "locked/losing" per DESIGN.md §2); the French draw
 * is the gold, glowing OPEN bar. A lower cut-off = a shorter, more attainable
 * bar, so the gold bar reads as the open door.
 */
export function StakesSection({ content }: { content: StakesContent }) {
  const max = Math.max(content.general.amount, content.french.amount) || 1;
  const generalW = Math.round((content.general.amount / max) * 100);
  const frenchW = Math.round((content.french.amount / max) * 100);

  return (
    <section className="mx-auto max-w-container px-5 py-section md:px-16">
      <SectionHeading eyebrow={content.eyebrow} heading={content.heading} className="mb-12" />

      <div className="mx-auto max-w-3xl space-y-5">
        {/* General draw — muted, locked */}
        <div className="rounded-card border border-hairline bg-surface p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-medium text-periwinkle">
              <Icon name="lock" className="text-[18px]" />
              {content.general.label}
            </span>
            <span className="text-lg font-bold text-periwinkle">{content.general.value}</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-pill bg-white/5">
            <div className="h-full rounded-pill bg-periwinkle/40" style={{ width: `${generalW}%` }} />
          </div>
        </div>

        {/* French draw — gold, open, glowing */}
        <div className="rounded-card border border-gold bg-surface p-5 shadow-glow-card">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-sm font-semibold text-gold">
              <Icon name="lock_open" className="text-[18px]" />
              {content.french.label}
            </span>
            <span className="text-lg font-bold text-gold">{content.french.value}</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-pill bg-white/5">
            <div
              className="h-full rounded-pill bg-cta-gradient shadow-glow-btn"
              style={{ width: `${frenchW}%` }}
            />
          </div>
        </div>

        <p className="pt-4 text-center text-muted md:text-left">{content.caption}</p>

        <div className="flex flex-col items-center gap-5 rounded-card border border-hairline bg-surface/60 p-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-ink">{content.subline}</p>
          <div className="shrink-0">
            <CTAButton label={content.ctaLabel} size="md" context="the French draw" waMessage={content.waMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}
