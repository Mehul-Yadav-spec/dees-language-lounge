// All portal times are stored in UTC and rendered through the student's
// timezone (build doc §9 golden rule). These helpers format in a given IANA tz.

export function partOfDay(tz: string, now: Date = new Date()): "morning" | "afternoon" | "evening" {
  const h = Number(
    new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", hour12: false }).format(now),
  );
  if (h < 12) return "morning";
  if (h < 17) return "afternoon";
  return "evening";
}

export function dateBadge(iso: string, tz: string): { month: string; day: string } {
  const p = new Intl.DateTimeFormat("en-US", { timeZone: tz, month: "short", day: "2-digit" })
    .formatToParts(new Date(iso));
  return {
    month: (p.find((x) => x.type === "month")?.value ?? "").toUpperCase(),
    day: p.find((x) => x.type === "day")?.value ?? "",
  };
}

export function weekday(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, weekday: "long" })
    .format(new Date(iso))
    .toUpperCase();
}

export function timeLabel(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit" }).format(
    new Date(iso),
  );
}

export function dateTimeLabel(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

// "Today" / "Tomorrow" / "in 3 days" — based on the calendar day in the tz.
export function relativeDay(iso: string, tz: string, now: Date = new Date()): string {
  const dayKey = (d: Date) =>
    new Intl.DateTimeFormat("en-CA", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
  const target = new Date(iso);
  const a = dayKey(now);
  const b = dayKey(target);
  if (a === b) return "Today";
  const diffDays = Math.round(
    (Date.parse(b + "T00:00:00Z") - Date.parse(a + "T00:00:00Z")) / 86400000,
  );
  if (diffDays === 1) return "Tomorrow";
  if (diffDays > 1) return `in ${diffDays} days`;
  if (diffDays === -1) return "Yesterday";
  return `${Math.abs(diffDays)} days ago`;
}

export function monthLabel(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, month: "long", year: "numeric" })
    .format(new Date(iso))
    .toUpperCase();
}

export function fullDate(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", { timeZone: tz, month: "long", day: "numeric", year: "numeric" }).format(
    new Date(iso),
  );
}

export function durationLabel(minutes: number | null | undefined): string {
  if (!minutes) return "";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h ? `${h}h ${m ? `${m}m` : ""}`.trim() : `${m}m`;
}
