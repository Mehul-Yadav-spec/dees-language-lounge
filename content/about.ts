// PLACEHOLDER — replace faculty names/photos and the story with Deepa's real
// bio, mission and credentialed trainers before launch.

import type { SectionHeadingContent, Teacher } from "./types";

export const aboutHero = {
  heading: { before: "The world's most", accent: "human", after: "language school." },
  subhead:
    "We don't just teach vocabulary. We break down borders, build global confidence, and empower ambitious professionals to thrive in any cultural context. Real fluency is human connection.",
};

export const aboutStory = {
  eyebrow: "Our Mission",
  title: "Forging global leaders",
  paragraphs: [
    "Founded on the principle that language is the ultimate currency of global business, Dees Language Lounge was built for those who refuse to be limited by geography. We strip away the archaic classroom model and replace it with high-intensity, career-aligned immersion.",
    "Our curriculum is designed not just to make you understood, but to make you influential. From boardroom negotiations to casual networking, we equip you with the linguistic authority to command any room.",
  ],
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaLxUxy6FpHBp1Cs9MAFMMEuQ5_VZBN4JrvTPR-sGo3g4oUzPpIk4d39cZltgLNLU1uv-_ADiymZA0i6_QdXv_xEvhv-IuvAvaInHCIcrPog3Wec2F60l_jZRxlHk15UfEcp6HXUY8of9rVzXFeu5JwRKzhNYfRqzeVC4B7hmGmnKUbnkQe-XnOsuuj28eRB9gSWWAVBT48rbH8arsT8C7KDrNwjMQMMK-jDSG9DxIB8pIlb89JbGX",
    alt: "Dees Language Lounge learning environment",
  },
};

export const aboutMethodHeading = {
  heading: { before: "Learning that", accent: "sticks." },
};

export const aboutMethod = [
  {
    number: "01",
    title: "Live-first cohorts",
    body: "No pre-recorded lectures. Engage in real-time, high-stakes scenarios with elite peers from around the globe.",
  },
  {
    number: "02",
    title: "Cultural immersion",
    body: "Master the unspoken rules. We teach the nuances of body language, tone and cultural expectations alongside vocabulary.",
  },
  {
    number: "03",
    title: "Career-aligned tracks",
    body: "Customized lexicons tailored to your industry. Whether it's finance, tech or diplomacy, you learn what matters most.",
  },
];

export const aboutFacultyHeading: SectionHeadingContent = {
  heading: { before: "Experts with a", accent: "passion", after: "for teaching." },
};

// PLACEHOLDER — replace with Deepa's real faculty and permissioned photos.
export const aboutFaculty: (Teacher & { tag?: string; specialty: string })[] = [
  {
    name: "Dr. Elena Rostova",
    credential: "Lead",
    tag: "Lead",
    specialty: "Diplomatic French & Russian",
    blurb: "Diplomatic French & Russian",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-Nepln4a8e8BFzcp8_P3KprDaZfmFQK8abTdufZ198S_VgpV3YRMWXa2M1VMZitZDyGH7rwYRcoNvIBd8TgLcCjy2RX-EAL9iRc7BHNOXJQoejqXaC7CndNcq5XcFQ9tz4D1Ikc6-t8QjyBbpxFk8cA7lrn_PpajJ3oZM0H8gqtEPZjPuDhgLq8TPVk86lpq4p0WjO3bRh6u0pFryhkZDO4D8K1sLPAO2eXgdqxn2udhQzHx5atsw",
      alt: "Portrait of Dr. Elena Rostova",
    },
  },
  {
    name: "Jameson Chen",
    credential: "Senior",
    tag: "Senior",
    specialty: "Corporate Mandarin & English",
    blurb: "Corporate Mandarin & English",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIVL2Oa-Vy5-0b_aZ3csgy8fGOh3LusQC1ShR79rFZiyqqKsZrqbMglX5gCfuGI6GtVRIClAeyCUAgTIc7kcedP2Klha9pmJXUcdCgvuz08UgmXg8IBi1vtqM_KmWP68cgxNgBXJrAepAW54fdw9Qd6RhGY1UtnSt2_W-LP9inko7ywKtqta0segqgLcwR7DM9CUkxuF8YLA1VMOrXvKcO8A7Qe5Lxo28inxsDbMePgUye071dwEsz",
      alt: "Portrait of Jameson Chen",
    },
  },
  {
    name: "Sofia Martinez",
    credential: "Faculty",
    specialty: "Legal Spanish & Nuance",
    blurb: "Legal Spanish & Nuance",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw4b4W7DPoZBWnv-lZ_vIuwMs8_IxPZgSNWusyVaPd8L6mqPSKy8erRczeOr7JoQI5S5MSz8TKYs1YhG4nV6-JuRzvdHTp70zTdfskfwmvISWzQXPVCFdXhCErTCikeAIjudFwueKvIDDxDobar5BsRHn9h1y4s0X06J_8blQKzJmVjmq4afJDF1xaGcp0fA2zNqytM1meyXJtkJZQlurLCwkdD0-PJaiO3pyIE9Cnj1JjFLujs7Tk",
      alt: "Portrait of Sofia Martinez",
    },
  },
  {
    name: "Klaus Weber",
    credential: "Faculty",
    specialty: "Financial German & Strategy",
    blurb: "Financial German & Strategy",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcHFx2_mBY-aUrrcs4wVoTBKWkq6ANH_TRD8XNuLNPMkJGfCWxs6rQwfEhxYe1NZrOttj6qdhv4NXBs2sZm9fABTB_j5gfjmXJ2ae6Bd5Ywl_ccS4lMdnTMO8Y6iGk0bzMSR9BeRfAmCXrd2sGW6Sbkm6NPA2yOHLCRjXSda1xU3A8YhBczpzYGn-Kt-Frfw_uDVd1L89ptjE0kRBsq2b_eiN4YjTuv1vjzq-oI9BCbQGRCbqMM_B8",
      alt: "Portrait of Klaus Weber",
    },
  },
];

export const aboutFinalCta = {
  heading: { before: "Ready to join the", accent: "Lounge", after: "?" },
  ctaLabel: "Book a free level assessment",
};
