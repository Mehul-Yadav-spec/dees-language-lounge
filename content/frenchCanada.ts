// PLACEHOLDER — replace [bracketed] stats, teacher profiles, batch dates & seat
// counts, promo-bar CRS numbers, and testimonials with real, verifiable data
// before launch. This is Variant A (the Canada-PR landing page): it is SUPPOSED
// to be immigration-focused (TEF/TCF · CLB 7 · PR). Never promise PR or a timeline.

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
  FooterContent,
} from "./types";

export const fcPromo: PromoBarContent = {
  id: "fc-2026-07",
  // Update the two CRS numbers after every draw (every 2–3 weeks) — freshness signal.
  text: "🇨🇦 Latest French Express Entry draw: CRS 400 — general draws sit at 514+. New live cohort starts July 21. Limited seats.",
  mobileText: "🇨🇦 French draw CRS 400 vs 514+ general — new cohort July 21.",
};

export const fcHero: HeroContent = {
  eyebrow: "Built for TEF & TCF Canada",
  heading: { before: "Turn", accent: "French", after: "into Canada PR — faster than you think." },
  subhead:
    "Live online classes built around the TEF/TCF Canada exam — taught by trainers who explain French through English and Hindi, at times that fit Canadian evenings. Reach CLB 7 in all four skills and qualify for draws cutting off 100+ points below general.",
  picker: {
    label: "I'm learning for",
    kind: "goal",
    options: [
      { label: "Canada PR", value: "canada-pr" },
      { label: "DELF–DALF", value: "study-abroad" },
      { label: "Career", value: "career" },
    ],
  },
  ctaLabel: "Book a free level assessment",
  underCtaLine:
    "Free 30-minute assessment · Know your exact starting level and a realistic timeline to CLB 7 — no commitment.",
  credibilityLine: "92% of our students reach CLB 7 on their first attempt.",
  liveCard: { label: "Live: TEF Speaking Drill", participants: "6 participants" },
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAd6o1zpVk4mMuFTxh8ac4_Pydpm2Q-m_DgFCYmuzGVAp4TLs8xoGV27Xm2NVH_oh0h7qui64r1kXhdJZ-IPymBhAdsPqWh1K5RBnpRu3KJaewvJ4O3VGg84w7I7JyXkFVjiaLLy9OjxYHgvSJ7yq3Otsr-4K4jHG6TSk_HfW-_DMH6Z8Jkt5HE_-oyYXFGqV33r-GnkxK1HBx_sIHtVEJ6LRgb0JdJZt3ILw2r1MWl1OzuqfIoOZqaKBFXnAxHmliUYEnc6uYa1rM",
    alt: "Professional preparing for the TEF Canada exam online",
  },
};

export const fcStats: Stat[] = [
  { value: "500+", label: "Students coached to TEF/TCF" },
  { value: "92%", label: "Reach CLB 7 first attempt" },
  { value: "50+", label: "Live cohorts completed" },
  { value: "4.9/5", label: "Average student rating" },
];

export const fcRecognition: RecognitionContent = {
  caption: "Preparing learners for Canada's French-language pathways — aligned to the exams IRCC accepts.",
  logos: ["TEF Canada", "TCF Canada", "DELF / DALF"],
};

export const fcGoalsHeading: SectionHeadingContent = {
  heading: { before: "Your partner in achieving your", accent: "goals" },
};

export const fcGoals: GoalSlide[] = [
  {
    title: "Land your Canada PR",
    body: "French-language draws have invited candidates at CRS cut-offs more than 100 points below general draws — and they're the only category IRCC has confirmed will grow. CLB 7 in all four skills is the door. We get you through it.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATlxQWY8Qmx_3iTxDpF_8B7pHZ3tkcFTy-_lm4GmWea7DRWsz_ZTdK8yJp_ZEw0PAHPCesk0hdyR1TUvJRZe5Q57evEaiSmNMtowofiByWvOLy1LJiK7CKvvX_TcsXOrFS2JiVkELFRCa41OfrW5Ty5zw7U78Lt9lzkMarBUAf8Grd3kfQVwo35Tf--5PmkPXirZc19xv_syJvqVqXIsOUD-QRaDgQzlH7WjTJrvjnt0HFDT3GYKT4e0Dfevk86jREcE4fKg_m0uU",
      alt: "New permanent resident arriving in Canada",
    },
  },
  {
    title: "Beat the clock on your permit",
    body: "On a PGWP or work permit with an expiry date? You don't have years — you have a window. Our exam-focused track is built to get you test-ready in months, not semesters, with a timeline mapped to your date.",
  },
  {
    title: "Pass your DELF/DALF or grow your career",
    body: "A lifetime-valid French diploma for university, bilingual roles, or your next promotion — same live format, same exam-first method.",
  },
];

export const fcFeaturesHeading: SectionHeadingContent = {
  heading: { before: "Everything you need to pass — in class and", accent: "beyond." },
};

export const fcFeatures: Feature[] = [
  {
    icon: "record_voice_over",
    title: "Live classes, real speaking",
    body: "Speaking is where most candidates lose CLB 7 — and it's the one skill no app can grade. Every week you speak, get corrected, and speak again, live.",
  },
  {
    icon: "menu_book",
    title: "Exam-aligned curriculum (TEF/TCF)",
    body: "No generic French. Every module maps to a real test section — the once-only listening, the timed writing tasks, the oral role-plays — so you train exactly what's scored.",
    featured: true,
  },
  {
    icon: "translate",
    title: "Teachers who explain in your language",
    body: "Our trainers teach French through English and Hindi, and know exactly where speakers of Indian languages stumble — so grammar clicks in minutes. Comfortable in English only? Every class works fully in English too.",
  },
  {
    icon: "checklist",
    title: "All four skills, no weak links",
    body: "IRCC counts your lowest skill. One CLB 6 blocks the whole profile. We diagnose your weakest skill first and train it hardest — so nothing drags you under the line.",
  },
];

export const fcBigClaim = {
  heading: { before: "92% hit", accent: "CLB 7", after: "on first try." },
  footnote: "Dees Language Lounge student outcomes. Individual results depend on starting level and study time.",
};

export const fcRoadmapHeading: SectionHeadingContent = {
  heading: { before: "The Learning", accent: "Roadmap" },
};

export const fcRoadmap: RoadmapStep[] = [
  {
    number: 1,
    title: "Free level assessment",
    body: "A 30-minute session that finds your true starting level (A0 to B1+) and gives you an honest, personalised timeline to CLB 7 — including whether your permit window is realistic.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLumjICWVbp6Gah-q7Hqbz2vA2ttzBdvLP4Mz5fDE2ZcQD3QAmk30trDo1pO6cWL1l66VpgvnM3DQUFEBXzakJK-WN-Gz9E8Cwsx3D4pDhyxIw2z3Y9tMyv9iZTvpK5FZJksTNCPBvjArZF4IznjkyrIrJJZsOKutMJszcLDGCVzJb36wrEntRPS57aih36djjEA-v-GOdLvE64tQwu8XUwiigfUSGarOPx57ezCBs9UCB4f6zibK1dla_k",
      alt: "Free TEF/TCF level assessment call",
    },
  },
  {
    number: 2,
    title: "Join your live cohort",
    body: "Small groups, live trainers, classes scheduled for Canadian evenings and weekends (EST/PST-friendly). Every class recorded, weekly mock orals from month one.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLumjICWVbp6Gah-q7Hqbz2vA2ttzBdvLP4Mz5fDE2ZcQD3QAmk30trDo1pO6cWL1l66VpgvnM3DQUFEBXzakJK-WN-Gz9E8Cwsx3D4pDhyxIw2z3Y9tMyv9iZTvpK5FZJksTNCPBvjArZF4IznjkyrIrJJZsOKutMJszcLDGCVzJb36wrEntRPS57aih36djjEA-v-GOdLvE64tQwu8XUwiigfUSGarOPx57ezCBs9UCB4f6zibK1dla_k",
      alt: "Live TEF/TCF cohort class",
    },
  },
  {
    number: 3,
    title: "Pass TEF/TCF and claim your points",
    body: "Sit the exam with graded mock tests behind you — then take your CLB 7 into the French draw and your bilingual bonus.",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AP1WRLumjICWVbp6Gah-q7Hqbz2vA2ttzBdvLP4Mz5fDE2ZcQD3QAmk30trDo1pO6cWL1l66VpgvnM3DQUFEBXzakJK-WN-Gz9E8Cwsx3D4pDhyxIw2z3Y9tMyv9iZTvpK5FZJksTNCPBvjArZF4IznjkyrIrJJZsOKutMJszcLDGCVzJb36wrEntRPS57aih36djjEA-v-GOdLvE64tQwu8XUwiigfUSGarOPx57ezCBs9UCB4f6zibK1dla_k",
      alt: "Candidate passing the TEF Canada exam",
    },
  },
];

export const fcCurriculumHeading: SectionHeadingContent = {
  eyebrow: "EXAM-ALIGNED, NOT GENERIC",
  heading: { before: "Trained for the", accent: "exam", after: ", not just the language" },
};

export const fcCurriculum: CurriculumCard[] = [
  {
    title: "TEF Canada",
    lines: [
      "Listening (Compréhension orale): audio plays ONCE — we drill one-play listening from week one",
      "Reading (Compréhension écrite): speed-reading under exam timing",
      "Writing (Expression écrite): two timed tasks with templates and graded feedback",
      "Speaking (Expression orale): two live role-plays, rehearsed weekly in mock orals",
    ],
    footnote: "Weekly graded mock tests with skill-by-skill CLB scoring",
  },
  {
    title: "TCF Canada",
    lines: [
      "Listening & Reading: computer-based format practice with real timing",
      "Writing (3 tasks): structure and scoring drills — one point separates CLB 6 from CLB 7",
      "Speaking (3 tasks): live examiner-style practice, recorded and reviewed",
    ],
    footnote: "Weekly graded mock tests with skill-by-skill CLB scoring",
  },
];

export const fcCurriculumClosing =
  "Levels A0 → B2/CLB 7, in structured stages. Your free assessment tells you exactly which stage you start at.";

export const fcTeachersHeading: SectionHeadingContent = {
  heading: { before: "Learn from trainers who've", accent: "been there" },
};

export const fcTeachersIntro =
  "Our faculty consists of veteran French examiners and TEF/TCF specialists who understand the high stakes of the Canada PR process.";

// PLACEHOLDER — replace with Deepa's real trainers, photos and REAL credentials.
export const fcTeachers: Teacher[] = [
  { name: "Valérie D.", credential: "DALF C2", blurb: "8 yrs teaching · 200+ students to CLB 7 · English/Hindi" },
  { name: "Antoine L.", credential: "Native Speaker", blurb: "6 yrs teaching · Exam Specialist · English/French" },
  { name: "Sophie M.", credential: "TEF Evaluator", blurb: "10 yrs teaching · 300+ success stories · English/French" },
  { name: "Julien B.", credential: "DALF C2", blurb: "5 yrs teaching · Mock Test Expert · English/Hindi" },
];

export const fcTeachersTrustLine =
  "Every trainer is credential-verified. Meet yours in your free assessment.";

export const fcBatchesHeading: SectionHeadingContent = {
  heading: { before: "Reserve your", accent: "seat" },
};

// PLACEHOLDER — real dates and real seat counts only. Fake scarcity gets shared.
export const fcBatches: Batch[] = [
  {
    title: "TEF Canada Intensive — Batch 12",
    dates: "Starts Nov 15, 2026",
    schedule: "Tue & Thu 7–9 PM EST + Sat mock test",
    level: "A2 → B2/CLB 7 Track",
    faculty: "Valérie D.",
    seatsLeft: "3 seats left",
    language: "french",
  },
  {
    title: "TEF Canada Intensive — Batch 13",
    dates: "Starts Nov 22, 2026",
    schedule: "Mon & Wed 7–9 PM EST + Sat mock test",
    level: "A2 → B2/CLB 7 Track",
    faculty: "Antoine L.",
    seatsLeft: "2 seats left",
    featured: true,
    language: "french",
  },
  {
    title: "TCF Canada Intensive — Batch 08",
    dates: "Starts Dec 1, 2026",
    schedule: "Sat & Sun 10 AM–12 PM EST + Wed mock test",
    level: "B1 → C1 Track",
    faculty: "Sophie M.",
    seatsLeft: "4 seats left",
    language: "french",
  },
];

export const fcTestimonialsHeading: SectionHeadingContent = {
  heading: { before: "Rated 4.9/5 by our", accent: "learners" },
};

// PLACEHOLDER — replace with real, permissioned student testimonials.
export const fcTestimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Canada PR Program",
    outcome: "CLB 7 in 4 months",
    quote: "The structured approach to TEF was exactly what I needed. I hit CLB 7 in 4 months and just received my ITA!",
  },
  {
    name: "David K.",
    role: "Professional Program",
    outcome: "Speaking score jump",
    quote: "I tried apps for a year with no progress. Two months with Dees and my speaking score jumped significantly.",
  },
  {
    name: "James L.",
    role: "Career Program",
    outcome: "Exam-ready",
    quote: "The mock orals were a game changer. I felt so prepared for the actual exam pressure. Highly recommend!",
  },
];

export const fcFaqHeading: SectionHeadingContent = {
  heading: { before: "Frequently asked", accent: "questions" },
};

export const fcFaq: FaqItem[] = [
  {
    question: "Can I really learn enough French in time?",
    answer:
      "Honestly: it depends where you start, and we'll tell you in your free assessment. From zero, CLB 7 typically takes 10–14 months of consistent study; from A2/B1, often 4–6 months of exam-focused prep. What we won't do is promise a timeline we can't back — if your window is too tight, we'll say so and show you the fastest realistic plan.",
  },
  {
    question: "Isn't French too hard?",
    answer:
      "You don't need to be fluent — you need CLB 7, a specific, teachable target. It's roughly B2: structured opinions, clear writing, confident everyday speech. Thousands of first-generation learners clear it every year with exam-focused training.",
  },
  {
    question: "Why not just use free apps or YouTube?",
    answer:
      "Apps are great to B1 — then they stall. The exam is won in speaking and listening: the TEF audio plays once, and the oral is a live graded conversation. No app corrects your speech or simulates the exam. That's exactly what our live classes do.",
  },
  {
    question: "What if Canada changes the French category?",
    answer:
      "Fair question. French draws are currently the only Express Entry category IRCC has publicly committed to growing, with francophone targets rising through 2028 — but policy can change, and we won't pretend otherwise. What doesn't change: CLB 7 French also earns up to 50 bilingual CRS points, opens LMIA-exempt Francophone Mobility work permits, and boosts PNP options. The skill keeps its value across pathways.",
  },
  {
    question: "Is this legit, or another consultant scam?",
    answer:
      "We're a language school, not an immigration consultancy — we never sell PR promises, and we're not licensed to give immigration advice. What we do: teach French, prepare you for TEF/TCF, and publish our real outcomes. Transparent pricing, named trainers with credentials, and a free assessment before you pay anything.",
  },
  {
    question: "I work full-time — how does scheduling work?",
    answer:
      "Cohorts run on Canadian evenings and weekends (EST/PST-friendly), every class is recorded, and batches are small enough that missing a week doesn't mean falling behind.",
  },
  {
    question: "Do I need to know Hindi to join?",
    answer:
      "Not at all. Classes run in English with French; our trainers can explain through Hindi when it helps, which many of our students love — but every cohort is fully accessible in English.",
  },
];

export const fcFinalCta: FinalCtaContent = {
  heading: { before: "Ready to turn", accent: "French", after: "into your PR shortcut?" },
  body: "Your level, your timeline, your plan — free, in 30 minutes.",
  ctaLabel: "Book a free level assessment",
};

// Variant-A footer: Canada-pathways blurb + required compliance line.
export const fcFooter: FooterContent = {
  blurb:
    "Live online French classes built for Canada's French-language pathways — TEF, TCF, DELF and beyond. Taught by trainers who explain in your language, at hours that fit your life in Canada.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "/contact" },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "TEF Canada", href: "/french-canada" },
        { label: "TCF Canada", href: "/french-canada" },
        { label: "DELF / DALF", href: "/french-canada" },
        { label: "French for Careers", href: "/french-canada" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Free Level Test", href: "/free-resources" },
        { label: "CRS Points Guide", href: "/free-resources" },
        { label: "TEF vs TCF Guide", href: "/free-resources" },
      ],
    },
  ],
  legal: "© 2026 Dees Language Lounge. All rights reserved.",
  complianceLine:
    "Dees Language Lounge is a language school and does not provide immigration advice or representation. Draw cut-offs and CRS figures reflect published IRCC data at time of writing and change frequently.",
};
