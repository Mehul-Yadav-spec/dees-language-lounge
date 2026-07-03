import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { RecognitionStrip } from "@/components/sections/RecognitionStrip";
import { GoalsCarousel } from "@/components/sections/GoalsCarousel";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { BigClaim } from "@/components/sections/BigClaim";
import { Roadmap } from "@/components/sections/Roadmap";
import { Curriculum } from "@/components/sections/Curriculum";
import { Teachers } from "@/components/sections/Teachers";
import { Batches } from "@/components/sections/Batches";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTABand } from "@/components/sections/FinalCTABand";
import { CourseJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, pageSeo } from "@/content/seo";
import {
  fcHero,
  fcStats,
  fcRecognition,
  fcGoalsHeading,
  fcGoals,
  fcFeaturesHeading,
  fcFeatures,
  fcBigClaim,
  fcRoadmapHeading,
  fcRoadmap,
  fcCurriculumHeading,
  fcCurriculum,
  fcCurriculumClosing,
  fcTeachersHeading,
  fcTeachersIntro,
  fcTeachers,
  fcTeachersTrustLine,
  fcBatchesHeading,
  fcBatches,
  fcTestimonialsHeading,
  fcTestimonials,
  fcFaqHeading,
  fcFaq,
  fcFinalCta,
} from "@/content/frenchCanada";

export const metadata: Metadata = buildMetadata("frenchCanada");

const CTX = "French (Canada PR)";

export default function FrenchCanadaPage() {
  return (
    <main>
      <CourseJsonLd
        name="TEF/TCF Canada Preparation — Live French Classes"
        description={pageSeo.frenchCanada.description}
        path="/french-canada"
      />
      <FaqJsonLd items={fcFaq} />

      <Hero content={fcHero} contextLabel={CTX} />
      <StatsBar stats={fcStats} />
      <RecognitionStrip content={fcRecognition} />
      <GoalsCarousel heading={fcGoalsHeading} slides={fcGoals} />
      <FeatureGrid heading={fcFeaturesHeading} features={fcFeatures} />
      <BigClaim heading={fcBigClaim.heading} footnote={fcBigClaim.footnote} />
      <Roadmap heading={fcRoadmapHeading} steps={fcRoadmap} />
      <Curriculum
        heading={fcCurriculumHeading}
        cards={fcCurriculum}
        closing={fcCurriculumClosing}
        variant="detail"
      />
      <Teachers
        heading={fcTeachersHeading}
        intro={fcTeachersIntro}
        teachers={fcTeachers}
        trustLine={fcTeachersTrustLine}
      />
      <Batches
        heading={fcBatchesHeading}
        batches={fcBatches}
        ctaLabel={fcFinalCta.ctaLabel}
        footnote="Not sure which batch fits? That's what the free assessment is for."
      />
      <Testimonials heading={fcTestimonialsHeading} testimonials={fcTestimonials} />
      <FAQ heading={fcFaqHeading} items={fcFaq} />
      <FinalCTABand content={fcFinalCta} context={CTX} />
    </main>
  );
}
