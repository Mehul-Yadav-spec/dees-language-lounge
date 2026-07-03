import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { Testimonial, SectionHeadingContent } from "@/content/types";

/**
 * TestimonialsV2 — adds a square (rounded-12px) real-person photo to each card,
 * top-left with the name + result beside it. Replaces the initial-avatar
 * Testimonials for the homepage; the original stays for /french-canada.
 * Photo is ~76px desktop / ≥64px mobile. Card surface + quote styling unchanged.
 */
export function TestimonialsV2({
  heading,
  testimonials,
}: {
  heading: SectionHeadingContent;
  testimonials: Testimonial[];
}) {
  return (
    <section className="w-full border-y border-hairline bg-surface section-y">
      <div className="mx-auto max-w-container-wide px-5 md:px-16">
        <SectionHeading heading={heading.heading} className="mb-7 lg:mb-14" />

        <div className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 md:gap-6 overflow-x-auto px-5 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative flex w-[85%] shrink-0 snap-center flex-col gap-6 overflow-hidden rounded-card border border-hairline bg-canvas/50 p-8 md:w-auto"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-2 select-none font-serif text-8xl text-gold/5"
              >
                &rdquo;
              </span>

              <div className="flex items-center gap-4">
                {t.image ? (
                  <Image
                    src={t.image.src}
                    alt={t.image.alt}
                    width={80}
                    height={80}
                    className="h-16 w-16 shrink-0 rounded-input border border-hairline object-cover md:h-[76px] md:w-[76px]"
                  />
                ) : (
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-input bg-gold/20 text-xl font-bold text-gold md:h-[76px] md:w-[76px]">
                    {t.name.charAt(0)}
                  </span>
                )}
                <figcaption>
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 flex items-center gap-1 text-sm text-gold">
                    <Icon name="verified" className="text-[15px]" filled />
                    {t.role}
                  </p>
                </figcaption>
              </div>

              <blockquote className="relative italic text-muted">&ldquo;{t.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
