// PLACEHOLDER — these are neutral placeholder legal texts for layout only.
// Replace with the client's real, lawyer-reviewed Privacy Policy, Terms of
// Service and Cookie Policy before launch (Phase-0 feature #20).

export interface LegalPage {
  slug: "privacy" | "terms" | "cookies";
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}

export const legalPages: Record<LegalPage["slug"], LegalPage> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "Last updated: July 2026",
    intro:
      "This placeholder describes how Dees Language Lounge collects and uses the information you share with us. Replace with your finalised, lawyer-reviewed policy before launch.",
    sections: [
      { heading: "Information we collect", body: "When you book a free assessment, contact us, or subscribe to our newsletter, we collect the details you provide — such as your name, email, phone number, language interest and message." },
      { heading: "How we use it", body: "We use your information solely to respond to your enquiry, place you in the right batch, and send you updates you have asked for. We do not sell your data." },
      { heading: "Your choices", body: "You can ask us to access, correct or delete your information at any time by contacting us." },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    updated: "Last updated: July 2026",
    intro:
      "This placeholder sets out the terms for using the Dees Language Lounge website and services. Replace with your finalised terms before launch.",
    sections: [
      { heading: "Use of the site", body: "By using this website you agree to use it lawfully and not to misuse the content, forms or booking flow." },
      { heading: "No guarantees", body: "Dees Language Lounge is a language school. We teach French, Spanish, German and IELTS English and prepare students for recognised exams. We do not guarantee exam outcomes, immigration results, or permanent residency." },
      { heading: "Contact", body: "Questions about these terms can be sent through our contact page." },
    ],
  },
  cookies: {
    slug: "cookies",
    title: "Cookie Policy",
    updated: "Last updated: July 2026",
    intro:
      "This placeholder explains how we use cookies and similar technologies. Replace with your finalised policy before launch.",
    sections: [
      { heading: "What we use", body: "We use essential cookies to run the site and, where enabled, analytics cookies (Google Analytics 4, Meta Pixel) to understand how visitors use our pages." },
      { heading: "Managing cookies", body: "You can control or delete cookies through your browser settings. Disabling some cookies may affect how the site works." },
    ],
  },
};
