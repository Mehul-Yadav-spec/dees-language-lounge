// The single source of truth for a session's computed state (build doc §1).
// Derived from starts_at/ends_at + the recording's sync status — never a stored
// flag. Shared by the dashboard hero, live classes, and recordings surfaces.

export type SessionState = "upcoming" | "joinable" | "live" | "processing" | "ready" | "unavailable";

export const JOIN_WINDOW_MS = 15 * 60 * 1000; // gold Join opens 15 min before start
const H48_MS = 48 * 3600 * 1000;

export function computeState(
  startsAt: string,
  endsAt: string | null,
  recordingStatus: "processing" | "ready" | "unavailable" | null,
  now: number = Date.now(),
): SessionState {
  const start = new Date(startsAt).getTime();
  const end = endsAt ? new Date(endsAt).getTime() : start + 2 * 3600 * 1000;
  if (now < start - JOIN_WINDOW_MS) return "upcoming";
  if (now < start) return "joinable";
  if (now <= end) return "live";
  // ended
  if (recordingStatus === "ready") return "ready";
  if (recordingStatus === "unavailable") return "unavailable";
  if (now - end > H48_MS) return "unavailable";
  return "processing";
}

export const isJoinable = (s: SessionState) => s === "joinable" || s === "live";
export const hasEnded = (s: SessionState) =>
  s === "processing" || s === "ready" || s === "unavailable";
