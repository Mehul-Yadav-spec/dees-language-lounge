import type { Metadata } from "next";
import { AccentTitle } from "@/components/ui/SectionHeading";
import { CTAButton } from "@/components/ui/CTAButton";
import { PillBadge } from "@/components/ui/PillBadge";
import { GlowContainer } from "@/components/ui/GlowContainer";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
// Stats band removed from the About page.
// import { StatsBar } from "@/components/sections/StatsBar";
// Founder section ("Who's behind this" — Deepa Khatri) removed.
// import { AboutFounder } from "@/components/sections/AboutFounder";
// Trainers section ("The people who'll actually teach you") removed.
// import { Teachers } from "@/components/sections/Teachers";
import { AboutHonesty } from "@/components/sections/AboutHonesty";
import { FinalCTABand } from "@/components/sections/FinalCTABand";
import { buildMetadata } from "@/content/seo";
import {
  aboutHero,
  aboutBeliefsHeading,
  aboutBeliefs,
  // Stats copy — unused since the stats band was removed.
  // aboutStats,
  // Founder copy — unused since the founder section was removed.
  // aboutFounder,
  // Trainer copy — unused since the trainers section was removed.
  // aboutTeachersHeading,
  // aboutTeachers,
  // aboutTeachersTrustLine,
  aboutHonesty,
  aboutFinalCta,
} from "@/content/about";

export const metadata: Metadata = buildMetadata("about");

const CTX = "the Lounge";

export default function AboutPage() {
  return (
    <main>
      {/* Hero — statement style (no image/picker) */}
      <GlowContainer className="mx-auto max-w-container px-5 pb-12 pt-16 text-center md:px-16 md:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <PillBadge>{aboutHero.eyebrow}</PillBadge>
          <AccentTitle
            as="h1"
            heading={aboutHero.heading}
            accentStyle="gradient"
            className="text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.05]"
          />
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{aboutHero.subhead}</p>
          <div className="mt-2">
            <CTAButton label={aboutHero.ctaLabel} context={CTX} waMessage={aboutHero.ctaWaMessage} />
          </div>
        </div>
      </GlowContainer>

      <FeatureGrid heading={aboutBeliefsHeading} features={aboutBeliefs} />
      {/* Stats band removed from the About page.
      <StatsBar stats={aboutStats} />
      */}
      {/* Founder section ("Who's behind this" — Deepa Khatri) removed.
      <AboutFounder content={aboutFounder} />
      */}
      {/* Trainers section ("The people who'll actually teach you") removed.
      <Teachers
        heading={aboutTeachersHeading}
        teachers={aboutTeachers}
        trustLine={aboutTeachersTrustLine}
      />
      */}
      <AboutHonesty content={aboutHonesty} />
      <FinalCTABand content={aboutFinalCta} context={CTX} />
    </main>
  );
}
