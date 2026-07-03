// Shared content types. Every page's copy is a typed object built from these,
// so the eventual real-data swap is data-only and never touches components.

export type LanguageKey = "french" | "spanish" | "german" | "ielts";
export type GoalKey = "canada-pr" | "study-abroad" | "career" | "travel";

/** A headline split so exactly one accent word renders in glowing serif. */
export interface AccentHeading {
  /** Text before the accent word. */
  before: string;
  /** The single emphasized word/phrase (Libre Caslon italic, gold glow). */
  accent: string;
  /** Text after the accent word. */
  after?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Eyebrow {
  text: string;
}

export interface PromoBarContent {
  id: string; // bump to re-show after a dismissal
  text: string;
  mobileText?: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export interface HeroPickerOption {
  label: string;
  value: LanguageKey | GoalKey;
}

export interface HeroContent {
  eyebrow?: string;
  heading: AccentHeading;
  /** When true the whole heading renders in serif (matches a specific export). */
  headingSerifWhole?: boolean;
  subhead: string;
  picker?: {
    label: string;
    kind: "language" | "goal";
    options: HeroPickerOption[];
  };
  ctaLabel: string;
  underCtaLine?: string;
  credibilityLine?: string;
  liveCard?: { label: string; participants: string };
  image: { src: string; alt: string };
}

export interface RecognitionContent {
  caption: string;
  logos: string[];
}

export interface GoalSlide {
  title: string;
  body: string;
  image?: { src: string; alt: string };
}

export interface Feature {
  icon: string; // Material Symbols name
  title: string;
  body: string;
  featured?: boolean;
}

export interface RoadmapStep {
  number: number;
  title: string;
  body: string;
  image?: { src: string; alt: string };
}

export interface CurriculumCard {
  title: string;
  flag?: string;
  lines: string[];
  footnote?: string;
}

export interface Teacher {
  name: string;
  credential: string;
  blurb: string;
  image?: { src: string; alt: string };
}

export interface Batch {
  title: string;
  covered?: string;
  dates: string;
  schedule: string;
  level?: string;
  faculty: string;
  seatsLeft: string;
  featured?: boolean;
  language?: LanguageKey;
}

export interface Testimonial {
  name: string;
  role: string;
  outcome: string;
  quote: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SectionHeadingContent {
  eyebrow?: string;
  heading: AccentHeading;
}

export interface FinalCtaContent {
  heading: AccentHeading;
  body?: string;
  ctaLabel: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterContent {
  blurb: string;
  columns: FooterColumn[];
  legal: string;
  complianceLine?: string;
}
