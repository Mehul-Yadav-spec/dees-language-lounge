import type { LegalPage as LegalPageContent } from "@/content/legal";

// Shared layout for Privacy / Terms / Cookies. Readable body on canvas (white /
// cool-grey, per accessibility rules).
export function LegalPageView({ page }: { page: LegalPageContent }) {
  return (
    <main>
      <article className="mx-auto max-w-3xl px-5 py-20 md:px-16 md:py-28">
        <p className="mb-3 text-eyebrow uppercase text-gold">{page.updated}</p>
        <h1 className="mb-6 text-[clamp(2.25rem,6vw,3.5rem)] font-bold leading-tight text-ink">
          {page.title}
        </h1>
        <p className="mb-12 text-lg text-muted">{page.intro}</p>

        <div className="space-y-10">
          {page.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="mb-3 text-xl font-bold text-ink">{s.heading}</h2>
              <p className="leading-relaxed text-muted">{s.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
