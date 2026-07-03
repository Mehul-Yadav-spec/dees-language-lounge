import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { RecognitionStrip } from "@/components/sections/RecognitionStrip";
import { GoalsCarousel } from "@/components/sections/GoalsCarousel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { BigClaim } from "@/components/sections/BigClaim";
import { Roadmap } from "@/components/sections/Roadmap";
import { CurriculumCarouselV2 } from "@/components/sections/CurriculumCarouselV2";
import { Teachers } from "@/components/sections/Teachers";
import { BatchesV2 } from "@/components/sections/BatchesV2";
import { TestimonialsV2 } from "@/components/sections/TestimonialsV2";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTABand } from "@/components/sections/FinalCTABand";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/content/seo";
import {
  homeHero,
  homeStats,
  homeRecognition,
  homeGoalsHeading,
  homeGoals,
  homeFeaturesHeading,
  homeFeatures,
  homeBigClaim,
  homeRoadmapHeading,
  homeRoadmap,
  homeCurriculumHeading,
  homeCurriculumSlides,
  homeCurriculumClosing,
  homeCurriculumClosingWaMessage,
  homeTeachersHeading,
  homeTeachersIntro,
  homeTeachers,
  homeTeachersTrustLine,
  homeBatchesHeading,
  homeBatchesIntro,
  homeBatches,
  homeBatchesFootnote,
  homeTestimonialsHeading,
  homeTestimonials,
  homeFaqHeading,
  homeFaq,
  homeFinalCta,
} from "@/content/home";

export const metadata: Metadata = buildMetadata("home");

const CTX = "a new language";

// Variant B — the multi-language school homepage, WhatsApp CTA edition.
// ZERO Canada-PR/immigration messaging in section copy (TEF/TCF exam names on
// batch cards are factual exam labels only).
export default function HomePage() {
  return (
    <main>
      <FaqJsonLd items={homeFaq} />

      <Hero content={homeHero} contextLabel={CTX} />
      <StatsBar stats={homeStats} />
      <RecognitionStrip content={homeRecognition} />
      <GoalsCarousel heading={homeGoalsHeading} slides={homeGoals} />
      <FeatureGrid heading={homeFeaturesHeading} features={homeFeatures} />
      <BigClaim heading={homeBigClaim.heading} footnote={homeBigClaim.footnote} />
      <Roadmap heading={homeRoadmapHeading} steps={homeRoadmap} />
      <CurriculumCarouselV2
        heading={homeCurriculumHeading}
        slides={homeCurriculumSlides}
        closing={homeCurriculumClosing}
        closingCtaLabel="Message us about your level"
        closingWaMessage={homeCurriculumClosingWaMessage}
      />
      <Teachers
        heading={homeTeachersHeading}
        intro={homeTeachersIntro}
        teachers={homeTeachers}
        trustLine={homeTeachersTrustLine}
      />
      <BatchesV2
        heading={homeBatchesHeading}
        intro={homeBatchesIntro}
        batches={homeBatches}
        ctaLabel="Reserve on WhatsApp"
        footnote={homeBatchesFootnote}
      />
      <TestimonialsV2 heading={homeTestimonialsHeading} testimonials={homeTestimonials} />
      <FAQ heading={homeFaqHeading} items={homeFaq} />
      <FinalCTABand content={homeFinalCta} context={CTX} />
    </main>
  );
}
