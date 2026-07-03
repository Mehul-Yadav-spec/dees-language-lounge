// PLACEHOLDER — replace [bracketed] stats, teacher names/photos/credentials,
// batch dates & seat counts, and testimonials (incl. real photos) with the
// client's real, verifiable data before launch. Variant B homepage,
// **WhatsApp CTA edition** (ctaMode: 'whatsapp' in content/site.ts): no
// assessment offer; every CTA opens wa.me with a section-specific prefill.

import type {
  PromoBarContent,
  HeroContent,
  Stat,
  RecognitionContent,
  SectionHeadingContent,
  GoalSlide,
  Feature,
  RoadmapStep,
  CurriculumSlide,
  Teacher,
  Batch,
  Testimonial,
  FaqItem,
  FinalCtaContent,
  AccentHeading,
} from "./types";

export const homePromo: PromoBarContent = {
  id: "home-wa-2026-07",
  text: "New live batches for French, Spanish, German & IELTS start July 21 — seats are limited. Message us on WhatsApp to reserve yours.",
  mobileText: "New batches start July 21 — message us to reserve a seat.",
};

export const homeHero: HeroContent = {
  eyebrow: "Live classes · Certified trainers · Real conversation",
  heading: { before: "Speak a new", accent: "language", after: "with confidence." },
  subhead:
    "Live online classes in French, Spanish, German and IELTS English — taught the way languages are actually learned: small groups, certified trainers who explain in your language, and speaking from your very first class. Wherever you are in the world, world-class training comes to you.",
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
  ctaLabel: "Chat with us on WhatsApp",
  underCtaLine:
    "Real humans, real answers — batch dates, fees, and honest guidance on where to start, usually within minutes.",
  credibilityLine: "92% of our students reach their target level on the first attempt.",
  liveCard: { label: "Live: French Conversation Circle", participants: "6 participants" },
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuApfaoBKa2ZmAJT81lSP1xLQB9ZSJ-P7RM52qUecOn9yJkFX4vnUeisgqBc4OkCeVB4AiH31l1oFF0b08N3fftzcnUp6zlLrX-iHPKMuTX0_LIHvXXdqAjqTS81wn-mXUsJoYDlkKKXtOcY2Gqcl_N8B8x8nUsHtofSX1qldwwx3wb6k35NXOyB0bgPStpASrZ0N8iQTuwD5QTNKeZ79KloRBkfyIYEwMJW1fe2IksV5_Ah4PaArEAj",
    alt: "Professional taking a live online language class",
  },
};

// Prefill for the hero CTA is computed from the picker (see Hero.tsx), e.g.
// "Hi! I want to learn French. Can you share batch details and fees?"

export const homeStats: Stat[] = [
  { value: "4", label: "Languages taught live" },
  { value: "500+", label: "Students coached" },
  { value: "50+", label: "Live batches completed" },
  { value: "4.9/5", label: "Average rating" },
];

export const homeRecognition: RecognitionContent = {
  caption: "We prepare you for the certifications the world actually recognises.",
  logos: ["DELF/DALF", "DELE", "Goethe-Zertifikat", "IELTS", "TEF/TCF"],
};

export const homeGoalsHeading: SectionHeadingContent = {
  heading: { before: "Your partner in achieving your", accent: "goals" },
};

export const homeGoals: GoalSlide[] = [
  {
    title: "Advance your career",
    body: "Bilingual professionals get shortlisted first. Add a certified language to your CV and open doors in MNCs, client-facing roles, translation and beyond.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC67_kcvaGaAAxIQv2ZhbPmVZ8evksnZ-lU_ZT7Hcv19jQZ7Aef5XZAyxD2nBsSAAm6M5QSHzJLxLK_i8u5Rgwn44-jGrXHIc5S60xDYG6dkKoL0reQuc_s1ArzdiCbMX6Gk3e348Tjc3GhY0mO2Eu-blsbWyKZcKKF5jsHId9Pw4JYQDv0CbDweNepO9HGo0vG6n7ewwypBwRZDBzqDUZufU_sZh_jtJmU-APrkgBMac8JCQPD7Kke",
      alt: "Bilingual professional in a client meeting",
    },
  },
  {
    title: "Study or work abroad",
    body: "Universities and employers don't ask if you \"know\" a language — they ask for proof. DELF, DELE, Goethe, IELTS: we train you for the exact exam, not just the language.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH8MpDRRV6l7eEoWUeJdM7dbBiieQmF9mPZoiJtM75xUBhyCoDSaRFI9-DjH_HwR9tpF8UpPt4nrTVM5GSzQwMQhf992bhic0Uue7QEgec7X9FPc76hpBN4Oelf3WLChrsqrkzw8pcxYpIfD4ScWZkz4rkkXBc4RYNbh9Y-uannWkgr493g8afJoBJEkr8PSLLVLaRGUum4MaJ33ffy1rxa8kyHZB76-fqVYKGOmYdVZcaO3Psr7LT",
      alt: "Student preparing to study abroad",
    },
  },
  {
    title: "Travel and connect",
    body: "Order confidently in Paris. Make friends in Berlin. Bargain in Barcelona. Real conversation, real culture — not textbook drills.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy0NF_I-v7lvmEIHgVjzQlEFHLSAKi2kyako0j8V_9Ew7Met3cmNyJnRxvYjgy-nxrsAJV5BmMLhD_iNPTi0FABdQqtiyvLUp2YVVEMcia3lVkHyjGZx6-PkMfl5cgDWOgARPBiN0PolrW6C_tCSvkZAZdqLxgq80Okso0Pe0eEaDq7hNdpPBvA5lPLC7G4N2lsO-zuCNgPPy3vXWMld5UDT-dbvSKzy2JfcfiwW__qwC5RlJ8XAXu",
      alt: "Traveller connecting with locals",
    },
  },
];

export const homeFeaturesHeading: SectionHeadingContent = {
  heading: { before: "Why learners", accent: "trust", after: "us" },
};

export const homeFeatures: Feature[] = [
  {
    icon: "record_voice_over",
    title: "Live classes, real speaking",
    body: "The skill apps can't teach. Every single week you speak, get corrected by a real trainer, and speak again — because confidence is built out loud, not on mute.",
  },
  {
    icon: "workspace_premium",
    title: "A curriculum that leads somewhere",
    body: "No wandering lessons. Every level (A1 → C1) is mapped to an official certification — DELF/DALF, DELE, Goethe, IELTS — so your progress is provable, not just a feeling.",
  },
  {
    icon: "translate",
    title: "Trainers who explain in your language",
    body: "Our trainers learned these languages as second languages themselves. They explain grammar through English and Hindi, know exactly where learners stumble, and get you past it faster. Every class works fully in English too.",
  },
  {
    icon: "groups",
    title: "Small groups. Your trainer knows your name.",
    body: "Maximum 12 per batch. Your weak spots get personal attention, every class is recorded, and nobody gets left behind.",
  },
];

export const homeBigClaim: { heading: AccentHeading; footnote: string } = {
  heading: { before: "92% of our students reach their", accent: "target level", after: "on the first attempt." },
  footnote: "Dees Language Lounge student outcomes.",
};

export const homeRoadmapHeading: SectionHeadingContent = {
  heading: { before: "Your journey starts", accent: "here" },
};

export const homeRoadmap: RoadmapStep[] = [
  {
    number: 1,
    title: "Say hello on WhatsApp",
    body: "Tell us your goal and your current level — even if it's zero. A real person (not a bot) replies with honest guidance: which language track, which batch, what timeline is realistic. No forms, no pressure, no spam.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLt6O41NB4uDrnjso_cQennzHzOqMN19MSA5A3_MdN7UzGkJ80UIO1XBalFdgyccCsSFqCC9GQKr8FAvguytRd8Li7ySiCUBzvF2bodhmnWKk6C3IAxLX0MAnfSfaui-s5b7kCke_sXrzYERL2qR52acPkNw4cyuot6nQIfPw7-NSryjL2jbKhpFrMrRzEi6DatUNX88Wjn8MZQ_AvI5EtnUipjour9Yzx5xmMLCpkjwQ8s25gw132ACq7c",
      alt: "Student messaging Dees Language Lounge on WhatsApp",
    },
  },
  {
    number: 2,
    title: "Join your live batch",
    body: "Small groups, certified trainers, evening and weekend slots. You'll speak in your very first class — and every session is recorded, so life never knocks you off track.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLuPg3Xsx6dUFAdCNbPbUqEAY8K3nUDcEkWTy7Spg0S9YD3RHSiap2RjX7YTlX2tZGS_BrGSMUqDugU7wdqCEo2nRc8dCbq1wAcuJMb8nP9pLJ-DceNtVBUQOCY_hdckenq8QKSsaJfhuiFm-odKEwGmhyzJx1qjPGREz2jyaLSuT08kG4JRm_kaA9OlhwdFHSfxtdwDNmWqdQKMdTOz2k-pQB8vL_wcJ-TqgB3H7HtCCeKhvGAbJsWG60g",
      alt: "Live online cohort class in session",
    },
  },
  {
    number: 3,
    title: "Certify your level",
    body: "Sit your DELF, DELE, Goethe or IELTS exam with graded mock tests behind you — and add a certificate the whole world recognises to your name.",
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

// Rich carousel slides — one language each, no background image. "What you'll
// cover" is now pain-point pairs: a learner frustration + how we fix it.
export const homeCurriculumSlides: CurriculumSlide[] = [
  {
    flag: "🇫🇷",
    name: "French",
    levelsTrack: "Levels A1 → C1 · Tracks: DELF/DALF · TEF/TCF Canada",
    covers: [
      { pain: "I can read French but freeze when someone speaks", solution: "listening trained on native-speed audio, including one-play drills" },
      { pain: "I've studied for years and still can't hold a conversation", solution: "live speaking in every single class, from week one" },
      { pain: "Grammar rules never stick", solution: "explained through English/Hindi with patterns, not memorisation" },
      { pain: "Writing feels impossible under time pressure", solution: "exam-task templates, connectors, and graded feedback" },
      { pain: "I don't know if I'm actually improving", solution: "weekly mock orals scored against the real exam grid" },
    ],
    outcome: "A certification recognised by universities, employers and governments worldwide.",
    link: { label: "Preparing for Canada? See the TEF/TCF track →", href: "/french-canada" },
  },
  {
    flag: "🇪🇸",
    name: "Spanish",
    levelsTrack: "Levels A1 → C1 · Track: DELE",
    covers: [
      { pain: "Ser vs estar and the subjunctive break my brain", solution: "taught through patterns and real usage, demystified" },
      { pain: "I understand Spanish in class but not real people", solution: "listening across Latin American AND European accents" },
      { pain: "Apps got me vocabulary but no conversation", solution: "speaking-first method from your very first class" },
      { pain: "I want proof, not just progress", solution: "full DELE task training — reading, writing, listening, oral interview" },
      { pain: "I'm scared of speaking badly in front of others", solution: "small groups and weekly conversation circles built for mistakes" },
    ],
    outcome: "The DELE — the lifetime-valid Spanish diploma issued by Instituto Cervantes.",
  },
  {
    flag: "🇩🇪",
    name: "German",
    levelsTrack: "Levels A1 → C1 · Track: Goethe-Zertifikat",
    covers: [
      { pain: "Der/die/das and the cases feel random", solution: "cases and word order taught through patterns, not tables to memorise" },
      { pain: "German word order scrambles everything I say", solution: "sentence-building drills until structure becomes instinct" },
      { pain: "I know words but can't speak in real situations", solution: "practical conversation for work, study and daily life" },
      { pain: "Exam German feels different from textbook German", solution: "Goethe training for all four modules with graded mocks" },
      { pain: "I need German for my career, not small talk", solution: "vocabulary built for careers and university" },
    ],
    outcome: "The Goethe-Zertifikat — the German credential employers and universities ask for by name.",
  },
  {
    flag: "🇬🇧",
    name: "IELTS English",
    levelsTrack: "Formats: Academic & General Training · Goal: your target band",
    covers: [
      { pain: "My English is fine but my band score isn't", solution: "band-score strategy for all four modules — the exam is a technique, and we teach it" },
      { pain: "Writing Task 2 always drags me down", solution: "essay structures with examiner-style feedback on every draft" },
      { pain: "I panic in the speaking interview", solution: "cue-card drills and live mock interviews until it feels routine" },
      { pain: "I run out of time in reading", solution: "timed drills at real exam pace, every week" },
      { pain: "I keep making the same mistakes", solution: "error-pattern analysis so your band moves, not just your effort" },
    ],
    outcome: "The IELTS score your university, employer or visa application requires.",
  },
];

export const homeCurriculumClosing =
  "Not sure which level you are? Message us — we'll place you honestly, even if that means telling you to start smaller.";

// Prefill for the curriculum closing CTA.
export const homeCurriculumClosingWaMessage =
  "Hi! I'm not sure what level I am in French. Can you help?";

export const homeTeachersHeading: SectionHeadingContent = {
  heading: { before: "Learn from trainers who've", accent: "been there" },
};

export const homeTeachersIntro =
  "Every Dees trainer holds a verified international certification — and learned their language as a second language, just like you. They remember what confused them at A1. That's why their students move faster.";

// PLACEHOLDER — Stitch-invented profiles. Replace with Deepa's real trainers,
// photos (with permission) and real credentials before launch.
export const homeTeachers: Teacher[] = [
  {
    name: "Sarah Dubois",
    credential: "DALF C1",
    blurb: "8 yrs teaching · 200+ students certified · English/Hindi/French",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY12xoy8b9ecZ3T88L1zs4m_1EQFrpRhfST9bf6dZ1JGLjUzlSOQaXnOjwc-ZAUuwAil4jPndYsp9V85LHXSyw4WR0K64qHjUdHQmSpd8ftrPuTZnkb7HCgwwqYtS16HT3LBsyCzEOapw4CbhOkwsS865EGOmXVN4GEPo0-QZXW2OKGWg38LX3QEbQD_QbaWUOvV9MUyspNaeGRDjVYaIyOEkkImvCI60eHATCoCeubEOiTkUKDzJF",
      alt: "Portrait of French trainer Sarah Dubois",
    },
  },
  {
    name: "Carlos Mendez",
    credential: "DELE C1",
    blurb: "7 yrs teaching · 180+ students certified · English/Hindi/Spanish",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuANrLE4HjUqQn719JyqEXzpwer-NixZjrpNs-37Bvg3VA142xpUr1dm3nsUu2UYieeTCyGmw3GdiHF_mCLkYrgSEA8UJ1uEfk-0mIo7AGJwsujZ9p5htsKEO9yIvG86ZaCnL4FZwQZ-HhsrHG_P6TldgvXAyaCs_A3QN6-xkE0b5lyjvDRxpa1DJeQ3kPZMpRrWnYmckbV5asMLFJyBwSSddwyL5dqlTBxfaNu-QmwiPmCmDUqcO485",
      alt: "Portrait of Spanish trainer Carlos Mendez",
    },
  },
  {
    name: "Anna Schmidt",
    credential: "Goethe C1",
    blurb: "9 yrs teaching · 220+ students certified · English/German",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4FT5COJwS-3m2l0OQkpXspGST-7QEcrz_Ab21YeA6kiP5LbhswMLkOqHPW4mSNzOV_yn69qlTA3GEOapK-owkhiBhwCpObqAb8bzPZQfL-2yHSRFtu-oiP1uiaIFi7z1hRyCyBjW5rA3RPw3-dlKUSjnJU-VfqKse2Y3zvxJ6B-oubd8JQSV8DuOc5B0VMmXKb3kYUBWNhkwbgWyiDEF1rMjEq8f49daXbZqjkm6H82RiH-oTz9BO",
      alt: "Portrait of German trainer Anna Schmidt",
    },
  },
  {
    name: "David Chen",
    credential: "IELTS 8.5",
    blurb: "6 yrs teaching · 150+ students certified · English",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kSCr3WWncVwyB0319_VY5FHj38QAiw0eDxQXsvfN9vcO-g5N-ZMOoWitU5KUXcw_uy42HL_1C4HFV5HEbY8J1pKGVEO0rC3jCxvYFz0rvcahqrRdM0xvnPMKGf0GhYp6j99_-IE19ALG2s3PG6esO3CCY5pkCG5TATtBZuKRk289v3YFqF3KOX7pmEGvZynf98goHSEDPmMvqejNCCR90j0PhnEg5V3nOt-eQi78B3jmBba5zrL",
      alt: "Portrait of IELTS coach David Chen",
    },
  },
];

export const homeTeachersTrustLine =
  "Credentials verified. Ask to meet your trainer on WhatsApp before you enrol — we'll happily introduce you.";

export const homeBatchesHeading: SectionHeadingContent = {
  heading: { before: "Reserve your", accent: "seat" },
};

export const homeBatchesIntro =
  "Our next live French batches — TEF/TCF Canada exam track. Small groups; when a batch fills, it closes. We don't squeeze in extra seats.";

// PLACEHOLDER — real dates and real seat counts only. examName drives the
// whiteboard art on BatchCardV2.
export const homeBatches: Batch[] = [
  {
    title: "TEF Canada Beginners — Batch 12",
    examName: "TEF Canada",
    covered: "Grammar foundations, everyday conversation, exam format from month one.",
    level: "A0 → CLB 7 full track",
    dates: "Starts July 21, 2026",
    schedule: "Tue & Thu 7–9 PM EST + Sat mock test",
    faculty: "[Name]",
    seatsLeft: "4 of 12 seats left",
    language: "french",
  },
  {
    title: "TEF Canada Fast Track — Batch 7",
    examName: "TEF Canada",
    covered: "For B1+ learners · intensive exam strategy: one-play listening drills, timed writing, weekly graded mock orals.",
    level: "B1+ → exam-ready",
    dates: "Starts July 24, 2026",
    schedule: "Mon & Wed 8–10 PM EST + Sat mock test",
    faculty: "[Name]",
    seatsLeft: "3 of 12 seats left",
    featured: true,
    language: "french",
  },
  {
    title: "TCF Canada Prep — Batch 4",
    examName: "TCF Canada",
    covered: "For A2+ learners · all four TCF tasks, computer-based format practice, weekly graded mocks.",
    level: "A2+ → exam-ready",
    dates: "Starts July 28, 2026",
    schedule: "Weekends, 10 AM–1 PM EST",
    faculty: "[Name]",
    seatsLeft: "6 of 12 seats left",
    language: "french",
  },
];

export const homeBatchesFootnote =
  "Learning Spanish, German or IELTS instead? Message us — batches for all languages run every month.";
export const homeBatchesFootnoteWaMessage = "Hi! When does the next Spanish batch start?";

export const homeTestimonialsHeading: SectionHeadingContent = {
  heading: { before: "Rated 4.9/5 by our", accent: "learners" },
};

// PLACEHOLDER — replace with real, permissioned student testimonials AND photos.
// Placeholder portraits live in /public/images/testimonials/ (swap for real photos).
export const homeTestimonials: Testimonial[] = [
  {
    name: "Marketing Manager",
    role: "DELF B1 in 7 months",
    outcome: "DELF B1",
    quote: "The structured approach and live correction made all the difference. I walked into the DELF exam already knowing what it would feel like.",
    image: { src: "/images/testimonials/marketing-manager.svg", alt: "Portrait of a Dees Language Lounge student" },
  },
  {
    name: "Design Student",
    role: "DELE A2",
    outcome: "DELE A2",
    quote: "Finally, classes about speaking, not filling workbooks. My trainer knew my weak spots by week two.",
    image: { src: "/images/testimonials/design-student.svg", alt: "Portrait of a Dees Language Lounge student" },
  },
  {
    name: "Engineer",
    role: "IELTS 8.0 first attempt",
    outcome: "IELTS 8.0",
    quote: "The mock tests and detailed feedback got me the band I needed for my visa. First attempt.",
    image: { src: "/images/testimonials/engineer.svg", alt: "Portrait of a Dees Language Lounge student" },
  },
];

export const homeFaqHeading: SectionHeadingContent = {
  heading: { before: "Frequently asked", accent: "questions" },
};

export const homeFaq: FaqItem[] = [
  {
    question: "How long does it take to learn a language?",
    answer:
      "Honestly: it depends on the language, your starting level and your weekly hours. As a guide, a focused learner reaches A2 (confident basics) in 3–5 months and B1 (independent conversation) in 8–12 months. What we'll never tell you is \"fluent in 30 days\" — nobody honest can. Message us your goal and we'll give you a straight answer for your case.",
  },
  {
    question: "I'm a complete beginner — is that okay?",
    answer:
      "It's our most common starting point. Beginner batches assume zero knowledge, and you'll speak your first full sentences in week one.",
  },
  {
    question: "Why live classes instead of free apps?",
    answer:
      "Apps are a fine supplement — but they can't correct your pronunciation, hold a conversation, or push you past the intermediate plateau. Speaking is a live skill. It needs a live class.",
  },
  {
    question: "Which language should I choose?",
    answer:
      "Depends on your goal: French and German open Europe and global careers; Spanish is the world's second-most spoken native language; IELTS is the gateway to English-speaking universities and jobs abroad. Tell us your goal on WhatsApp and we'll give you a straight recommendation — even if it's \"you don't need us yet.\"",
  },
  {
    question: "Do I get a certificate?",
    answer:
      "You'll receive our completion certificate at every level — and far more importantly, we prepare you for the official exams (DELF/DALF, DELE, Goethe, IELTS) that universities and employers worldwide actually recognise.",
  },
  {
    question: "I work full-time — how does scheduling work?",
    answer:
      "Batches run on evenings and weekends across timezones, every class is recorded, and groups are small enough that missing a week doesn't mean falling behind.",
  },
  {
    question: "Do I need to know Hindi to join?",
    answer:
      "Not at all. Classes run in English plus your target language; our trainers can explain through Hindi when it helps — but every batch is fully accessible in English.",
  },
  {
    question: "How do I enrol?",
    answer:
      "One WhatsApp message. Tell us your language and goal, we'll confirm your batch, fees and start date — and you're in. No forms, no call centres.",
  },
];

export const homeFinalCta: FinalCtaContent = {
  heading: { before: "Ready to", accent: "speak", after: "a new language?" },
  body: "One message is all it takes — your goal, your level, your batch, sorted on WhatsApp today.",
  ctaLabel: "Chat with us on WhatsApp",
  waMessage: "Hi! I'm ready to start. Help me pick my batch.",
};
