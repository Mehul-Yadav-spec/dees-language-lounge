"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/lib/whatsapp";

// "Proficiency Levels" (french-canada) — elaborates the "92% reach CLB 7"
// claim into a CEFR ↔ CLB ladder. Accessible tab pattern: roving tabindex,
// arrow-key navigation, aria-selected / aria-controls. Reuses locked tokens
// (canvas #030712, surface #0B1220, gold #C5A36B), the .section-y rhythm and
// the page's check-bullet + WhatsApp closing pattern.
interface Level {
  id: string;
  descriptor: string;
  clb: string;
  bullets: string[];
  /** Persistent chip shown on the tab itself (B2 = the PR level). */
  tabChip?: string;
  /** Gold-bordered callout rendered below the bullets (B2 only). */
  callout?: string;
}

const LEVELS: Level[] = [
  {
    id: "A1",
    descriptor: "Beginner",
    clb: "≈ CLB 1–2",
    bullets: [
      "Introduce yourself",
      "Understand slow, familiar phrases",
      "Ask and answer basic personal questions",
      "Follow short, simple directions",
    ],
  },
  {
    id: "A2",
    descriptor: "Elementary",
    clb: "≈ CLB 3–4",
    bullets: [
      "Handle routine everyday exchanges",
      "Describe your background and immediate needs",
      "Understand common expressions about family, work and shopping",
      "Write short, simple notes",
    ],
  },
  {
    id: "B1",
    descriptor: "Intermediate",
    clb: "≈ CLB 5–6",
    bullets: [
      "Hold independent conversations on familiar topics",
      "Manage most travel situations",
      "Describe experiences, opinions and plans",
      "Write connected text on familiar subjects",
    ],
  },
  {
    id: "B2",
    descriptor: "Upper Intermediate",
    clb: "≈ CLB 7–8",
    tabChip: "≈ CLB 7 — the PR level",
    bullets: [
      "Interact fluently and spontaneously",
      "Argue a viewpoint with pros and cons",
      "Understand extended speech and complex text",
      "Write clear, detailed text on a wide range of subjects",
    ],
    callout:
      "CLB 7 in all four skills is what the French-language Express Entry draws require — and exactly where our A0 → CLB 7 track is aimed.",
  },
  {
    id: "C1",
    descriptor: "Advanced",
    clb: "≈ CLB 9–10",
    bullets: [
      "Express ideas fluently without searching for words",
      "Use French flexibly for professional and academic purposes",
      "Understand demanding texts and implicit meaning",
    ],
  },
  {
    id: "C2",
    descriptor: "Mastery",
    clb: "≈ CLB 11–12",
    bullets: [
      "Understand virtually everything heard or read",
      "Summarise from multiple sources",
      "Express yourself with precision in complex situations",
    ],
  },
];

const WA_MESSAGE = "Hi! I want to know my French level for the TEF/TCF Canada track.";

export function ProficiencyLevels() {
  const [active, setActive] = useState(0);
  // Mobile accordion open state (independent of the desktop tab state).
  const [openId, setOpenId] = useState<string | null>("A1");
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const waHref = whatsappLink({ message: WA_MESSAGE });

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    const count = LEVELS.length;
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % count;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + count) % count;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = count - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabsRef.current[next]?.focus();
  }

  const level = LEVELS[active];

  return (
    <section className="mx-auto max-w-container-wide px-5 section-y md:px-16">
      <SectionHeading
        eyebrow="THE LADDER TO CLB 7"
        heading={{ before: "Every level, mapped to your", accent: "goal" }}
        className="mb-6"
      />
      <p className="mx-auto mb-7 lg:mb-12 max-w-3xl text-center text-lg text-muted">
        CEFR levels, their CLB equivalents (NCLC — the French-language scale), and what you can actually do at each.
      </p>

      {/* Desktop tabs — centered pill bar (md+ only; mobile uses the accordion below). */}
      <div
        role="tablist"
        aria-label="CEFR proficiency levels"
        onKeyDown={onKeyDown}
        className="mb-6 hidden gap-2 md:flex md:flex-wrap md:justify-center"
      >
        {LEVELS.map((l, i) => {
          const isActive = i === active;
          return (
            <button
              key={l.id}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`level-tab-${l.id}`}
              aria-selected={isActive}
              aria-controls={`level-panel-${l.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "flex shrink-0 snap-start items-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-colors focus-gold",
                isActive
                  ? "border-gold bg-gold text-canvas"
                  : "border-hairline bg-surface text-muted hover:border-gold/40 hover:text-ink",
              )}
            >
              {l.id}
              {l.tabChip ? (
                <span
                  className={cn(
                    "rounded-pill border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                    // Gold-outline when inactive; flips to dark-on-gold when the
                    // tab is active so the chip stays legible either way.
                    isActive ? "border-canvas/40 text-canvas" : "border-gold/50 text-gold",
                  )}
                >
                  {l.tabChip}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Active level panel */}
      <div
        role="tabpanel"
        id={`level-panel-${level.id}`}
        aria-labelledby={`level-tab-${level.id}`}
        tabIndex={0}
        className="mx-auto hidden max-w-5xl rounded-card border border-hairline bg-surface p-8 focus-gold md:block md:p-10"
      >
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-hairline pb-5">
          <h3 className="text-2xl font-bold text-ink">{level.id}</h3>
          <span className="text-lg text-muted">· {level.descriptor}</span>
          <span className="rounded-pill border border-gold/40 bg-gold/10 px-3 py-1 text-eyebrow uppercase text-gold sm:ml-auto">
            {level.clb}
          </span>
        </div>

        <ul className="space-y-4">
          {level.bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <Icon name="check" className="mt-0.5 shrink-0 text-gold" />
              <span className="text-muted">{b}</span>
            </li>
          ))}
        </ul>

        {level.callout ? (
          <div className="mt-6 flex items-start gap-3 rounded-card border border-gold/50 bg-gold/5 p-5">
            <Icon name="workspace_premium" filled className="mt-0.5 shrink-0 text-gold" />
            <p className="font-medium text-ink">{level.callout}</p>
          </div>
        ) : null}
      </div>

      {/* Mobile — vertical single-open accordion (desktop tabs above untouched).
          Height animates via the grid-rows 0fr→1fr trick (no JS measuring). */}
      <div className="space-y-3 md:hidden">
        {LEVELS.map((l) => {
          const open = openId === l.id;
          return (
            <div key={l.id} className="overflow-hidden rounded-card border border-hairline bg-surface">
              <h3>
                <button
                  type="button"
                  id={`acc-header-${l.id}`}
                  aria-expanded={open}
                  aria-controls={`acc-panel-${l.id}`}
                  onClick={() => setOpenId(open ? null : l.id)}
                  className="flex w-full items-start gap-3 px-4 py-4 text-left focus-gold"
                >
                  <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-serif text-xl text-ink">{l.id}</span>
                    <span className="text-muted">{l.descriptor}</span>
                    <span className="rounded-pill border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                      {l.clb}
                    </span>
                    {/* B2 keeps its PR-level chip visible while collapsed. */}
                    {l.tabChip ? (
                      <span className="rounded-pill border border-gold/50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-gold">
                        {l.tabChip}
                      </span>
                    ) : null}
                  </div>
                  <Icon
                    name="expand_more"
                    className={cn("mt-1 shrink-0 text-muted transition-transform duration-300", open && "rotate-180")}
                  />
                </button>
              </h3>

              <div
                id={`acc-panel-${l.id}`}
                role="region"
                aria-labelledby={`acc-header-${l.id}`}
                className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-hairline px-4 pb-5 pt-4">
                    <ul className="space-y-4">
                      {l.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <Icon name="check" className="mt-0.5 shrink-0 text-gold" />
                          <span className="text-muted">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {l.callout ? (
                      <div className="mt-5 flex items-start gap-3 rounded-card border border-gold/50 bg-gold/5 p-4">
                        <Icon name="workspace_premium" filled className="mt-0.5 shrink-0 text-gold" />
                        <p className="font-medium text-ink">{l.callout}</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing WhatsApp line (page pattern). Strings kept as JS expressions so
          the apostrophe/em-dash don't trip react/no-unescaped-entities. */}
      <p className="mx-auto mt-8 max-w-3xl text-center text-muted">
        {"Not sure where you are on this ladder? "}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-gold hover:underline focus-gold"
        >
          Message us
        </a>
        {" — we’ll place you honestly, even if that means starting smaller."}
      </p>
    </section>
  );
}
