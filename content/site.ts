import type { NavItem, FooterContent } from "./types";

/**
 * Site-wide config and shared chrome (nav + footer model).
 *
 * ctaMode is the SINGLE switch for the entire booking flow:
 *   'form'     → every CTA routes to /book-assessment (default)
 *   'whatsapp' → every CTA opens a wa.me deep-link with page/section context
 * Switching later is this one-line change. Both paths are fully built.
 */
export const site = {
  name: "Dees Language Lounge",
  wordmark: "Dees Language Lounge",
  monogram: "D",
  ctaMode: "form" as "form" | "whatsapp",
  ctaLabel: "Book a free level assessment",

  // The one conversion destination when ctaMode === 'form'.
  bookingPath: "/book-assessment",

  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    x: "#",
    discord: "#",
  },
} as const;

// Site-wide nav (kickoff Functionality #2). French IS the TEF/TCF Canada page,
// so there is no separate "TEF-TCF Canada" item.
export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Courses",
    dropdown: [
      { label: "French", href: "/french-canada" },
      { label: "Spanish", href: "/courses/spanish" },
      { label: "German", href: "/courses/german" },
      { label: "IELTS English", href: "/courses/ielts" },
    ],
  },
  {
    label: "Free Resources",
    dropdown: [
      { label: "Free Level Test", href: "/free-resources" },
      { label: "CRS Points Guide", href: "/free-resources" },
      { label: "TEF vs TCF Guide", href: "/free-resources" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Default footer (multi-language school voice — Variant B / homepage).
// The /french-canada page passes its own footer override with the compliance line.
export const footer: FooterContent = {
  blurb:
    "Live online classes in French, Spanish, German and IELTS English — small groups, certified trainers, real conversation. Learn for your career, your studies, or the joy of it.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Mentors", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Courses",
      links: [
        { label: "French (TEF/TCF Canada)", href: "/french-canada" },
        { label: "Spanish", href: "/courses/spanish" },
        { label: "German", href: "/courses/german" },
        { label: "IELTS English", href: "/courses/ielts" },
      ],
    },
    {
      title: "Links",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ],
  legal: "© 2026 Dees Language Lounge. All rights reserved.",
};
