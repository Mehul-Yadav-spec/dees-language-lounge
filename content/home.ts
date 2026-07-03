// PLACEHOLDER — replace [bracketed] stats, teacher names/photos/credentials,
// batch dates & seat counts, and testimonials with the client's real, verifiable
// data before launch. This is Variant B (the multi-language school homepage):
// it MUST contain ZERO Canada-PR / CLB 7 / TEF-TCF messaging.

import type {
  PromoBarContent,
  HeroContent,
  Stat,
  RecognitionContent,
  SectionHeadingContent,
  GoalSlide,
  Feature,
  RoadmapStep,
  CurriculumCard,
  Teacher,
  Batch,
  Testimonial,
  FaqItem,
  FinalCtaContent,
} from "./types";

export const homePromo: PromoBarContent = {
  id: "home-2026-07",
  text: "New live batches for French, Spanish, German & IELTS start July 21 — book your free level assessment. Limited seats per batch.",
  mobileText: "New live batches start July 21 — limited seats.",
};

export const homeHero: HeroContent = {
  heading: { before: "Speak a new", accent: "language", after: "with confidence." },
  subhead:
    "Live online classes in French, Spanish, German and IELTS English — small groups, certified trainers who explain in your language, and speaking practice from day one. Learn in weeks, not years.",
  picker: {
    label: "I want to learn",
    kind: "language",
    options: [
      { label: "French", value: "french" },
      { label: "Spanish", value: "spanish" },
      { label: "German", value: "german" },
      { label: "IELTS English", value: "ielts" },
    ],
  },
  ctaLabel: "Book a free level assessment",
  credibilityLine: "92% of our students reach their target level on the first attempt.",
  liveCard: { label: "Live: French Conversation Circle", participants: "6 participants" },
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfaoBKa2ZmAJT81lSP1xLQB9ZSJ-P7RM52qUecOn9yJkFX4vnUeisgqBc4OkCeVB4AiH31l1oFF0b08N3fftzcnUp6zlLrX-iHPKMuTX0_LIHvXXdqAjqTS81wn-mXUsJoYDlkKKXtOcY2Gqcl_N8B8x8nUsHtofSX1qldwwx3wb6k35NXOyB0bgPStpASrZ0N8iQTuwD5QTNKeZ79KloRBkfyIYEwMJW1fe2IksV5_Ah4PaArEAj",
    alt: "Professional taking a live online language class",
  },
};

export const homeStats: Stat[] = [
  { value: "4", label: "Languages taught live" },
  { value: "500+", label: "Students coached" },
  { value: "50+", label: "Live batches completed" },
  { value: "4.9/5", label: "Average rating" },
];

export const homeRecognition: RecognitionContent = {
  caption: "Preparing learners for the world's most recognised language certifications.",
  logos: ["DELF/DALF", "DELE", "Goethe-Zertifikat", "IELTS", "TEF/TCF"],
};

export const homeGoalsHeading: SectionHeadingContent = {
  heading: { before: "Your partner in achieving your", accent: "goals" },
};

export const homeGoals: GoalSlide[] = [
  {
    title: "Advance your career",
    body: "Bilingual professionals stand out — add a certified language to your CV and open doors in MNCs, client-facing roles and beyond.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC67_kcvaGaAAxIQv2ZhbPmVZ8evksnZ-lU_ZT7Hcv19jQZ7Aef5XZAyxD2nBsSAAm6M5QSHzJLxLK_i8u5Rgwn44-jGrXHIc5S60xDYG6dkKoL0reQuc_s1ArzdiCbMX6Gk3e348Tjc3GhY0mO2Eu-blsbWyKZcKKF5jsHId9Pw4JYQDv0CbDweNepO9HGo0vG6n7ewwypBwRZDBzqDUZufU_sZh_jtJmU-APrkgBMac8JCQPD7Kke",
      alt: "Bilingual professional in a client meeting",
    },
  },
  {
    title: "Study or work abroad",
    body: "DELF, DELE, Goethe, IELTS — universities and employers ask for proof. We prepare you for the exact exam.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8MpDRRV6l7eEoWUeJdM7dbBiieQmF9mPZoiJtM75xUBhyCoDSaRFI9-DjH_HwR9tpF8UpPt4nrTVM5GSzQwMQhf992bhic0Uue7QEgec7X9FPc76hpBN4Oelf3WLChrsqrkzw8pcxYpIfD4ScWZkz4rkkXBc4RYNbh9Y-uannWkgr493g8afJoBJEkr8PSLLVLaRGUum4MaJ33ffy1rxa8kyHZB76-fqVYKGOmYdVZcaO3Psr7LT",
      alt: "Student preparing to study abroad",
    },
  },
  {
    title: "Travel and connect",
    body: "Real conversation, culture and confidence — not just textbook drills.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy0NF_I-v7lvmEIHgVjzQlEFHLSAKi2kyako0j8V_9Ew7Met3cmNyJnRxvYjgy-nxrsAJV5BmMLhD_iNPTi0FABdQqtiyvLUp2YVVEMcia3lVkHyjGZx6-PkMfl5cgDWOgARPBiN0PolrW6C_tCSvkZAZdqLxgq80Okso0Pe0eEaDq7hNdpPBvA5lPLC7G4N2lsO-zuCNgPPy3vXWMld5UDT-dbvSKzy2JfcfiwW__qwC5RlJ8XAXu",
      alt: "Traveller connecting with locals",
    },
  },
];

export const homeFeaturesHeading: SectionHeadingContent = {
  heading: { before: "Everything you need to", accent: "learn", after: "— in class and beyond." },
};

export const homeFeatures: Feature[] = [
  {
    icon: "record_voice_over",
    title: "Live classes, real speaking",
    body: "The skill apps can't teach: every week you speak, get corrected, and speak again.",
  },
  {
    icon: "workspace_premium",
    title: "Certification-aligned curriculum",
    body: "CEFR levels A1–C1 mapped to DELF/DALF, DELE, Goethe and IELTS.",
  },
  {
    icon: "translate",
    title: "Trainers who explain in your language",
    body: "Grammar through English and Hindi; every class works fully in English too.",
  },
  {
    icon: "groups",
    title: "Small groups, personal attention",
    body: "Max 12 per batch, every class recorded.",
  },
];

export const homeRoadmapHeading: SectionHeadingContent = {
  heading: { before: "Your journey starts", accent: "here" },
};

// PR-free roadmap per Homepage-Content-VariantB-Final.md (replaces the rendered
// "roadmap to CLB 7" / "TEF/TCF strategies" / "Claim your PR" steps).
export const homeRoadmap: RoadmapStep[] = [
  {
    number: 1,
    title: "Free level assessment",
    body: "A 30-minute session that finds your true starting level and gives you a personalised plan — which language, which batch, and a realistic timeline to your goal.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLt6O41NB4uDrnjso_cQennzHzOqMN19MSA5A3_MdN7UzGkJ80UIO1XBalFdgyccCsSFqCC9GQKr8FAvguytRd8Li7ySiCUBzvF2bodhmnWKk6C3IAxLX0MAnfSfaui-s5b7kCke_sXrzYERL2qR52acPkNw4cyuot6nQIfPw7-NSryjL2jbKhpFrMrRzEi6DatUNX88Wjn8MZQ_AvI5EtnUipjour9Yzx5xmMLCpkjwQ8s25gw132ACq7c",
      alt: "Student in a free level assessment call",
    },
  },
  {
    number: 2,
    title: "Join your live batch",
    body: "Small groups, certified trainers, evening and weekend slots. Speaking practice from the very first class, and every session recorded.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLuPg3Xsx6dUFAdCNbPbUqEAY8K3nUDcEkWTy7Spg0S9YD3RHSiap2RjX7YTlX2tZGS_BrGSMUqDugU7wdqCEo2nRc8dCbq1wAcuJMb8nP9pLJ-DceNtVBUQOCY_hdckenq8QKSsaJfhuiFm-odKEwGmhyzJx1qjPGREz2jyaLSuT08kG4JRm_kaA9OlhwdFHSfxtdwDNmWqdQKMdTOz2k-pQB8vL_wcJ-TqgB3H7HtCCeKhvGAbJsWG60g",
      alt: "Live online cohort class in session",
    },
  },
  {
    number: 3,
    title: "Certify your level",
    body: "Sit your DELF, DELE, Goethe or IELTS exam with graded mock tests behind you — and add a globally recognised certificate to your name.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLumjICWVbp6Gah-q7Hqbz2vA2ttzBdvLP4Mz5fDE2ZcQD3QAmk30trDo1pO6cWL1l66VpgvnM3DQUFEBXzakJK-WN-Gz9E8Cwsx3D4pDhyxIw2z3Y9tMyv9iZTvpK5FZJksTNCPBvjArZF4IznjkyrIrJJZsOKutMJszcLDGCVzJb36wrEntRPS57aih36djjEA-v-GOdLvE64tQwu8XUwiigfUSGarOPx57ezCBs9UCB4f6zibK1dla_k",
      alt: "Student receiving a language certificate",
    },
  },
];

export const homeCurriculumHeading: SectionHeadingContent = {
  eyebrow: "CEFR-ALIGNED, EXAM-READY",
  heading: { before: "Structured for", accent: "certification", after: ", level by level" },
};

export const homeCurriculum: CurriculumCard[] = [
  { title: "French", flag: "🇫🇷", lines: ["A1–C1 · DELF/DALF track · weekly mock orals"] },
  { title: "Spanish", flag: "🇪🇸", lines: ["A1–C1 · DELE track · speaking-first method"] },
  { title: "German", flag: "🇩🇪", lines: ["A1–C1 · Goethe-Zertifikat track · grammar made simple"] },
  { title: "IELTS English", flag: "🇬🇧", lines: ["Academic & General · band-score strategy · weekly mock tests"] },
];

export const homeCurriculumClosing =
  "Not sure which level you are? That's what the free assessment finds out.";

export const homeTeachersHeading: SectionHeadingContent = {
  heading: { before: "Learn from trainers who've", accent: "been there" },
};

// PLACEHOLDER — Stitch-invented profiles. Replace with Deepa's real trainers,
// photos (with permission) and real credentials before launch.
export const homeTeachers: Teacher[] = [
  {
    name: "Sarah Dubois",
    credential: "DALF C1",
    blurb: "A veteran DELF examiner with over 8 years helping professionals master French for international careers.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY12xoy8b9ecZ3T88L1zs4m_1EQFrpRhfST9bf6dZ1JGLjUzlSOQaXnOjwc-ZAUuwAil4jPndYsp9V85LHXSyw4WR0K64qHjUdHQmSpd8ftrPuTZnkb7HCgwwqYtS16HT3LBsyCzEOapw4CbhOkwsS865EGOmXVN4GEPo0-QZXW2OKGWg38LX3QEbQD_QbaWUOvV9MUyspNaeGRDjVYaIyOEkkImvCI60eHATCoCeubEOiTkUKDzJF",
      alt: "Portrait of French trainer Sarah Dubois",
    },
  },
  {
    name: "Carlos Mendez",
    credential: "DELE C1",
    blurb: "A native speaker from Madrid specialising in conversational Spanish and DELE preparation.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANrLE4HjUqQn719JyqEXzpwer-NixZjrpNs-37Bvg3VA142xpUr1dm3nsUu2UYieeTCyGmw3GdiHF_mCLkYrgSEA8UJ1uEfk-0mIo7AGJwsujZ9p5htsKEO9yIvG86ZaCnL4FZwQZ-HhsrHG_P6TldgvXAyaCs_A3QN6-xkE0b5lyjvDRxpa1DJeQ3kPZMpRrWnYmckbV5asMLFJyBwSSddwyL5dqlTBxfaNu-QmwiPmCmDUqcO485",
      alt: "Portrait of Spanish trainer Carlos Mendez",
    },
  },
  {
    name: "Anna Schmidt",
    credential: "Goethe C1",
    blurb: "A linguist and native speaker bringing a structured yet natural approach to German grammar and accent.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FT5COJwS-3m2l0OQkpXspGST-7QEcrz_Ab21YeA6kiP5LbhswMLkOqHPW4mSNzOV_yn69qlTA3GEOapK-owkhiBhwCpObqAb8bzPZQfL-2yHSRFtu-oiP1uiaIFi7z1hRyCyBjW5rA3RPw3-dlKUSjnJU-VfqKse2Y3zvxJ6B-oubd8JQSV8DuOc5B0VMmXKb3kYUBWNhkwbgWyiDEF1rMjEq8f49daXbZqjkm6H82RiH-oTz9BO",
      alt: "Portrait of German trainer Anna Schmidt",
    },
  },
  {
    name: "David Chen",
    credential: "IELTS 8.5",
    blurb: "A high-performance IELTS coach who has helped 100+ students reach band 7.5 or higher.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kSCr3WWncVwyB0319_VY5FHj38QAiw0eDxQXsvfN9vcO-g5N-ZMOoWitU5KUXcw_uy42HL_1C4HFV5HEbY8J1pKGVEO0rC3jCxvYFz0rvcahqrRdM0xvnPMKGf0GhYp6j99_-IE19ALG2s3PG6esO3CCY5pkCG5TATtBZuKRk289v3YFqF3KOX7pmEGvZynf98goHSEDPmMvqejNCCR90j0PhnEg5V3nOt-eQi78B3jmBba5zrL",
      alt: "Portrait of IELTS coach David Chen",
    },
  },
];

export const homeTeachersTrustLine =
  "Every trainer is credential-verified. Meet yours in your free assessment.";

export const homeBatchesHeading: SectionHeadingContent = {
  heading: { before: "Reserve your", accent: "seat" },
};

// PLACEHOLDER — use real dates and real seat counts only before launch.
export const homeBatches: Batch[] = [
  {
    title: "French A1 Beginners — Batch 8",
    covered: "Grammar fundamentals, everyday conversation, DELF A1 prep",
    dates: "July 21, 2026 – Oct 15, 2026",
    schedule: "Tue & Thu, 7–9 PM EST",
    faculty: "Sarah Dubois",
    seatsLeft: "4 of 12 seats left",
    language: "french",
  },
  {
    title: "Spanish A1 Beginners — Batch 3",
    covered: "Basic verb conjugation, essential travel phrases, DELE A1 introduction",
    dates: "July 24, 2026 – Oct 30, 2026",
    schedule: "Mon & Wed, 8–10 PM EST",
    faculty: "Carlos Mendez",
    seatsLeft: "6 of 12 seats left",
    featured: true,
    language: "spanish",
  },
  {
    title: "IELTS Fast Track — Batch 15",
    covered: "Intensive band 8+ strategies for Reading, Writing, Listening and Speaking",
    dates: "July 25, 2026 – Aug 24, 2026",
    schedule: "Weekends, 10 AM–1 PM EST",
    faculty: "David Chen",
    seatsLeft: "2 of 12 seats left",
    language: "ielts",
  },
];

export const homeTestimonialsHeading: SectionHeadingContent = {
  heading: { before: "Rated 4.9/5 by our", accent: "learners" },
};

// PLACEHOLDER — replace with real, permissioned student testimonials.
export const homeTestimonials: Testimonial[] = [
  {
    name: "Marketing Manager",
    role: "DELF B1 in 7 months",
    outcome: "DELF B1",
    quote: "The structured approach and live correction made all the difference. I felt completely prepared for the DELF exam.",
  },
  {
    name: "Design Student",
    role: "DELE A2",
    outcome: "DELE A2",
    quote: "Finally, classes that focus on speaking rather than just filling out workbook exercises. Highly recommend!",
  },
  {
    name: "Engineer",
    role: "IELTS 8.0 first attempt",
    outcome: "IELTS 8.0",
    quote: "The mock speaking tests and detailed feedback helped me secure the band I needed for my visa application.",
  },
];

export const homeFaqHeading: SectionHeadingContent = {
  heading: { before: "Frequently asked", accent: "questions" },
};

export const homeFaq: FaqItem[] = [
  {
    question: "How long does it take to learn a language?",
    answer:
      "Honestly: it depends on the language, your starting level and your weekly hours — and we'll tell you precisely in your free assessment. As a guide, a focused learner reaches A2 in 3–5 months and B1 in 8–12 months. No \"fluent in 30 days\" promises — nobody honest can make them.",
  },
  {
    question: "I'm a complete beginner — is that okay?",
    answer:
      "It's our most common starting point. Beginner batches assume zero knowledge, and you'll speak simple sentences in your first week.",
  },
  {
    question: "Why live classes instead of free apps?",
    answer:
      "Apps are a good supplement — but they can't correct your pronunciation, hold a conversation with you, or push you past the intermediate plateau. Speaking is a live skill; it needs a live class.",
  },
  {
    question: "Which language should I choose?",
    answer:
      "Depends on your goal: French and German open Europe and global careers; Spanish is the world's second-most spoken native language; IELTS is the gateway to English-speaking universities and jobs. Tell us your goal in the free assessment and we'll give you a straight recommendation.",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "You'll receive our course completion certificate at each level — and more importantly, we prepare you for the official exams (DELF/DALF, DELE, Goethe, IELTS) recognised worldwide.",
  },
  {
    question: "I work full-time — how does scheduling work?",
    answer:
      "Batches run on evenings and weekends across timezones, every class is recorded, and groups are small enough that missing a week doesn't mean falling behind.",
  },
  {
    question: "Do I need to know Hindi to join?",
    answer:
      "Not at all. Classes run in English plus the target language; our trainers can explain through Hindi when it helps — but every batch is fully accessible in English.",
  },
];

export const homeFinalCta: FinalCtaContent = {
  heading: { before: "Ready to", accent: "speak", after: "a new language?" },
  body: "Your level, your plan, your first class — start with a free 30-minute assessment.",
  ctaLabel: "Book a free level assessment",
};
