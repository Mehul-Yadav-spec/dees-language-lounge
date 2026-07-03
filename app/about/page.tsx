import type { Metadata } from "next";
import Image from "next/image";
import { AccentTitle } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { Chip } from "@/components/ui/PillBadge";
import { GlowContainer } from "@/components/ui/GlowContainer";
import { buildMetadata } from "@/content/seo";
import {
  aboutHero,
  aboutStory,
  aboutMethodHeading,
  aboutMethod,
  aboutFacultyHeading,
  aboutFaculty,
  aboutFinalCta,
} from "@/content/about";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = buildMetadata("about");

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-5 py-20 md:px-16 md:py-28">
        <div className="mx-auto max-w-container">
          <AccentTitle
            as="h1"
            heading={aboutHero.heading}
            className="mb-8 max-w-4xl text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05]"
          />
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{aboutHero.subhead}</p>
        </div>
      </section>

      {/* Our story */}
      <section className="px-5 py-16 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-container items-center gap-10 md:grid-cols-2">
          <div className="rounded-card border border-hairline bg-surface p-8 shadow-glow-card md:p-12">
            <span className="mb-6 block text-eyebrow uppercase text-gold">{aboutStory.eyebrow}</span>
            <h2 className="mb-6 text-3xl font-bold text-ink md:text-4xl">{aboutStory.title}</h2>
            {aboutStory.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mb-5 text-muted last:mb-0">{p}</p>
            ))}
          </div>
          <div className="overflow-hidden rounded-card border border-hairline">
            <Image
              src={aboutStory.image.src}
              alt={aboutStory.image.alt}
              width={720}
              height={540}
              className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-surface px-5 py-section md:px-16">
        <div className="mx-auto max-w-container">
          <AccentTitle heading={aboutMethodHeading.heading} className="mb-16 text-3xl md:text-5xl" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutMethod.map((tile) => (
              <div key={tile.number} className="group flex flex-col rounded-card border border-hairline bg-canvas/40 p-8 transition-colors hover:border-gold/30">
                <span className="mb-6 font-display text-6xl leading-none text-gold/20 transition-opacity group-hover:text-gold/60">
                  {tile.number}
                </span>
                <h3 className="mb-4 text-2xl font-bold text-ink">{tile.title}</h3>
                <p className="mt-auto text-muted">{tile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="px-5 py-section md:px-16">
        <div className="mx-auto max-w-container">
          <SectionHeading heading={aboutFacultyHeading.heading} align="right" className="mb-16" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutFaculty.map((f, i) => (
              <div key={f.name} className={i % 2 === 1 ? "md:mt-8" : ""}>
                <div className="relative mb-4 overflow-hidden rounded-card border border-hairline">
                  {f.image ? (
                    <Image
                      src={f.image.src}
                      alt={f.image.alt}
                      width={360}
                      height={480}
                      className="aspect-[3/4] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    />
                  ) : null}
                  {f.tag ? (
                    <span className="absolute bottom-4 left-4">
                      <Chip>{f.tag}</Chip>
                    </span>
                  ) : null}
                </div>
                <h3 className="text-xl font-bold text-ink">{f.name}</h3>
                <p className="mt-1 text-sm text-muted">{f.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full overflow-hidden py-section">
        <GlowContainer className="mx-auto max-w-3xl px-5 text-center md:px-16" glowClassName="h-[280px] w-[700px]">
          <AccentTitle
            heading={aboutFinalCta.heading}
            accentStyle="gradient"
            className="mb-10 text-[clamp(2.5rem,7vw,5rem)] leading-tight"
          />
          <CTAButton label={aboutFinalCta.ctaLabel} context="the Lounge" />
        </GlowContainer>
      </section>
    </main>
  );
}
