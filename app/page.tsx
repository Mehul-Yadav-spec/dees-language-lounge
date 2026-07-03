import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { RecognitionStrip } from "@/components/sections/RecognitionStrip";
import { GoalsCarousel } from "@/components/sections/GoalsCarousel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Roadmap } from "@/components/sections/Roadmap";
import { Curriculum } from "@/components/sections/Curriculum";
import { Teachers } from "@/components/sections/Teachers";
import { Batches } from "@/components/sections/Batches";
import { Testimonials } from "@/components/sections/Testimonials";
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
  homeRoadmapHeading,
  homeRoadmap,
  homeCurriculumHeading,
  homeCurriculum,
  homeCurriculumClosing,
  homeTeachersHeading,
  homeTeachers,
  homeTeachersTrustLine,
  homeBatchesHeading,
  homeBatches,
  homeTestimonialsHeading,
  homeTestimonials,
  homeFaqHeading,
  homeFaq,
  homeFinalCta,
} from "@/content/home";

export const metadata: Metadata = buildMetadata("home");

const CTX = "a new language";

// Variant B — the multi-language school homepage. ZERO Canada-PR messaging.
export default function HomePage() {
  return (
    <main>
      <FaqJsonLd items={homeFaq} />

      <Hero content={homeHero} contextLabel={CTX} />
      <StatsBar stats={homeStats} />
      <RecognitionStrip content={homeRecognition} />
      <GoalsCarousel heading={homeGoalsHeading} slides={homeGoals} />
      <FeatureGrid heading={homeFeaturesHeading} features={homeFeatures} />
      <Roadmap heading={homeRoadmapHeading} steps={homeRoadmap} />
      <Curriculum
        heading={homeCurriculumHeading}
        cards={homeCurriculum}
        closing={homeCurriculumClosing}
        variant="grid"
      />
      <Teachers heading={homeTeachersHeading} teachers={homeTeachers} trustLine={homeTeachersTrustLine} />
      <Batches heading={homeBatchesHeading} batches={homeBatches} ctaLabel={homeFinalCta.ctaLabel} />
      <Testimonials heading={homeTestimonialsHeading} testimonials={homeTestimonials} />
      <FAQ heading={homeFaqHeading} items={homeFaq} />
      <FinalCTABand content={homeFinalCta} context={CTX} />
    </main>
  );
}
