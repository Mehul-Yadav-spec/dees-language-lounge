import { CTAButton } from "@/components/ui/CTAButton";
import { Icon } from "@/components/ui/Icon";
import { BatchCardArt } from "./BatchCardArt";
import { cn } from "@/lib/cn";
import type { Batch } from "@/content/types";

/**
 * BatchCardV2 — adds the BatchCardArt illustration header (whiteboard shows the
 * batch's exam name) with an "Online" tag pill overlapping its bottom-left.
 * Everything else (covered, dates, schedule, trainer, seats-left, featured
 * glow, WhatsApp CTA) matches BatchCard.
 */
export function BatchCardV2({ batch, ctaLabel }: { batch: Batch; ctaLabel: string }) {
  const rows = [
    { icon: "calendar_today", text: batch.dates },
    { icon: "schedule", text: batch.schedule },
    batch.level ? { icon: "trending_up", text: batch.level } : null,
    { icon: "person", text: `Faculty: ${batch.faculty}` },
  ].filter(Boolean) as { icon: string; text: string }[];

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-card bg-surface",
        batch.featured
          ? "border border-gold shadow-glow-card lg:-mt-3 lg:mb-3"
          : "border border-hairline",
      )}
    >
      {/* Illustration header with rounded top corners + "Online" pill */}
      <div className="relative border-b border-hairline bg-canvas/40">
        <BatchCardArt examName={batch.examName ?? "Live Class"} />
        <span className="absolute bottom-2 left-3 inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-canvas/90 px-3 py-1 text-eyebrow uppercase tracking-widest text-gold backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          Online
        </span>
        {batch.featured ? (
          <span className="absolute right-3 top-3 whitespace-nowrap rounded-pill bg-cta-gradient px-3 py-1 text-eyebrow uppercase tracking-widest text-canvas shadow-lg">
            Most Popular
          </span>
        ) : null}
      </div>

      <div className="flex flex-grow flex-col p-8">
        <div className="flex-grow">
          <h3 className="mb-3 text-lg font-bold text-ink">{batch.title}</h3>
          {batch.covered ? <p className="mb-4 text-sm text-gold">{batch.covered}</p> : null}

          <div className="mb-6 space-y-2">
            {rows.map((row) => (
              <p key={row.text} className="flex items-center gap-2 text-sm text-muted">
                <Icon name={row.icon} className="text-[16px] text-gold/70" />
                {row.text}
              </p>
            ))}
          </div>

          <span className="mb-6 inline-block rounded-pill bg-gold/10 px-3 py-1 text-eyebrow uppercase text-gold">
            {batch.seatsLeft}
          </span>
        </div>

        <CTAButton
          label={ctaLabel}
          size="md"
          fullWidth
          variant={batch.featured ? "primary" : "outlined"}
          context={batch.title}
          waMessage={`Hi! I want to reserve a seat in ${batch.title}.`}
          batch={batch.title}
          lang={batch.language}
        />
      </div>
    </div>
  );
}
