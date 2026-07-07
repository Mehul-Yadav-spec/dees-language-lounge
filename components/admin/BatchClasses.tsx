"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabaseClient";
import { Icon } from "@/components/ui/Icon";
import { computeState } from "@/lib/sessionState";

export interface SessionRow {
  id: string;
  title: string;
  starts_at: string;
  ends_at: string | null;
  join_url: string | null;
  topic: string | null;
}
export interface RosterStudent {
  studentId: string;
  fullName: string | null;
}

const inputClass =
  "min-h-[44px] w-full rounded-input border border-hairline bg-canvas px-3 text-sm text-ink placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelClass = "mb-1 block text-[10px] font-bold uppercase tracking-widest text-gold";

const STATE_LABEL: Record<string, string> = {
  upcoming: "Upcoming",
  joinable: "Joining",
  live: "Live",
  processing: "Ended",
  ready: "Ended",
  unavailable: "Ended",
};

function fmt(iso: string, tz: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function BatchClasses({
  batchId,
  roster,
  sessions,
  tz,
}: {
  batchId: string;
  roster: RosterStudent[];
  sessions: SessionRow[];
  tz: string;
}) {
  const router = useRouter();
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [attendFor, setAttendFor] = useState<SessionRow | null>(null);
  const [uploadFor, setUploadFor] = useState<{ session: SessionRow; kind: "material" | "recording" } | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setScheduleOpen(true)}
          className="rounded-pill bg-cta-gradient px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-canvas shadow-glow-btn focus-gold"
        >
          Schedule session
        </button>
      </div>

      {sessions.length === 0 ? (
        <p className="rounded-card border border-hairline bg-surface p-6 text-center text-sm text-muted">
          No sessions yet — schedule the first class.
        </p>
      ) : (
        <div className="space-y-3">
          {sessions.map((s) => {
            const state = computeState(s.starts_at, s.ends_at, null, Date.now());
            const ended = state === "processing" || state === "ready" || state === "unavailable";
            return (
              <div key={s.id} className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="font-bold text-ink">{s.title}</p>
                  <p className="text-xs text-muted">{fmt(s.starts_at, tz)}</p>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-2">
                  <span className="rounded-pill bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                    {STATE_LABEL[state]}
                  </span>
                  <IconBtn icon="upload_file" label="Add material" onClick={() => setUploadFor({ session: s, kind: "material" })} />
                  <IconBtn icon="video_call" label="Add recording" onClick={() => setUploadFor({ session: s, kind: "recording" })} />
                  {ended ? (
                    <button
                      type="button"
                      onClick={() => setAttendFor(s)}
                      className="rounded-input border border-gold/40 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gold hover:bg-gold/10 focus-gold"
                    >
                      Attendance
                    </button>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {scheduleOpen ? (
        <ScheduleDialog batchId={batchId} tz={tz} onClose={() => setScheduleOpen(false)} onDone={() => { setScheduleOpen(false); router.refresh(); }} />
      ) : null}
      {attendFor ? (
        <AttendanceDialog session={attendFor} roster={roster} onClose={() => setAttendFor(null)} onDone={() => { setAttendFor(null); router.refresh(); }} />
      ) : null}
      {uploadFor ? (
        <UploadDialog session={uploadFor.session} kind={uploadFor.kind} onClose={() => setUploadFor(null)} onDone={() => { setUploadFor(null); router.refresh(); }} />
      ) : null}
    </div>
  );
}

function IconBtn({ icon, label, onClick }: { icon: string; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-input border border-hairline text-muted transition-colors hover:border-gold hover:text-gold focus-gold"
    >
      <Icon name={icon} className="text-base" />
    </button>
  );
}

function UploadDialog({ session, kind, onClose, onDone }: { session: SessionRow; kind: "material" | "recording"; onClose: () => void; onDone: () => void }) {
  const isMaterial = kind === "material";
  const [title, setTitle] = useState(isMaterial ? "" : session.title);
  const [type, setType] = useState("pdf");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const accept = !isMaterial ? "video/*" : type === "pdf" ? ".pdf" : type === "audio" ? "audio/*" : "video/*";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) {
      setError("Choose a file.");
      return;
    }
    if (isMaterial && !title.trim()) {
      setError("Title is required.");
      return;
    }
    setError(undefined);
    setLoading(true);
    const fd = new FormData();
    fd.append("file", file);
    fd.append("sessionId", session.id);
    fd.append("title", (isMaterial ? title : title || session.title).trim());
    if (isMaterial) {
      fd.append("type", type);
      fd.append("description", description);
    }
    const res = await fetch(isMaterial ? "/api/admin/resources" : "/api/admin/recordings", { method: "POST", body: fd });
    const d = await res.json().catch(() => ({}));
    setLoading(false);
    if (!res.ok) {
      setError(d.error === "too_large" ? "File too large (max 50 MB on the current plan)." : d.error || "Upload failed.");
      return;
    }
    onDone();
  }

  return (
    <Modal title={isMaterial ? "Add material" : "Add recording"} onClose={onClose}>
      <p className="mb-4 text-sm text-muted">{session.title}</p>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelClass}>Title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required={isMaterial} placeholder={session.title} className={inputClass} />
        </div>
        {isMaterial ? (
          <>
            <div>
              <label className={labelClass}>Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className={inputClass}>
                <option value="pdf">PDF</option>
                <option value="audio">Audio</option>
                <option value="video">Video (watch-only)</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Description (optional)</label>
              <input value={description} onChange={(e) => setDescription(e.target.value)} className={inputClass} />
            </div>
          </>
        ) : null}
        <div>
          <label className={labelClass}>File</label>
          <input
            type="file"
            accept={accept}
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
            className="w-full text-sm text-muted file:mr-3 file:rounded-input file:border-0 file:bg-gold/10 file:px-3 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-gold"
          />
        </div>
        {error ? <p className="text-sm" style={{ color: "#ffb4ab" }}>{error}</p> : null}
        <button type="submit" disabled={loading} className="w-full rounded-pill bg-cta-gradient py-3 text-xs font-bold uppercase tracking-widest text-canvas shadow-glow-btn disabled:opacity-60 focus-gold">
          {loading ? "Uploading…" : "Upload"}
        </button>
      </form>
    </Modal>
  );
}

function ScheduleDialog({ batchId, tz, onClose, onDone }: { batchId: string; tz: string; onClose: () => void; onDone: () => void }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("19:00");
  const [duration, setDuration] = useState("120");
  const [joinUrl, setJoinUrl] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !date || !time) {
      setError("Title, date and time are required.");
      return;
    }
    // Interpret the entered date+time in the admin's local timezone → UTC.
    const start = new Date(`${date}T${time}`);
    const end = new Date(start.getTime() + Number(duration || 120) * 60000);
    setError(undefined);
    setLoading(true);
    const { error: err } = await createClient().from("sessions").insert({
      batch_id: batchId,
      title: title.trim(),
      starts_at: start.toISOString(),
      ends_at: end.toISOString(),
      provider: "zoom",
      join_url: joinUrl.trim() || null,
      topic: topic.trim() || null,
      status: "scheduled",
    });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    onDone();
  }

  return (
    <Modal title="Schedule session" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className={labelClass}>Session title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="TEF Speaking Practice — Unit 5" className={inputClass} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Time ({tz.split("/").pop()?.replace(/_/g, " ")})</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required className={inputClass} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={labelClass}>Duration (min)</label>
            <input type="number" min="15" step="15" value={duration} onChange={(e) => setDuration(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Join link</label>
            <input value={joinUrl} onChange={(e) => setJoinUrl(e.target.value)} placeholder="https://zoom.us/j/…" className={inputClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Today&apos;s topic (optional)</label>
          <input value={topic} onChange={(e) => setTopic(e.target.value)} className={inputClass} />
        </div>
        {error ? <p className="text-sm" style={{ color: "#ffb4ab" }}>{error}</p> : null}
        <button type="submit" disabled={loading} className="w-full rounded-pill bg-cta-gradient py-3 text-xs font-bold uppercase tracking-widest text-canvas shadow-glow-btn disabled:opacity-60 focus-gold">
          {loading ? "Scheduling…" : "Schedule session"}
        </button>
      </form>
    </Modal>
  );
}

function AttendanceDialog({ session, roster, onClose, onDone }: { session: SessionRow; roster: RosterStudent[]; onClose: () => void; onDone: () => void }) {
  const [marks, setMarks] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  // Load any existing attendance for this session.
  useEffect(() => {
    let active = true;
    createClient()
      .from("attendance")
      .select("student_id,status")
      .eq("session_id", session.id)
      .then(({ data }) => {
        if (!active) return;
        const m: Record<string, string> = {};
        (data ?? []).forEach((a: { student_id: string; status: string }) => (m[a.student_id] = a.status));
        setMarks(m);
      });
    return () => {
      active = false;
    };
  }, [session.id]);

  async function save() {
    setLoading(true);
    const rows = roster
      .filter((r) => marks[r.studentId])
      .map((r) => ({ session_id: session.id, student_id: r.studentId, status: marks[r.studentId] }));
    if (rows.length) {
      await createClient().from("attendance").upsert(rows, { onConflict: "session_id,student_id" });
    }
    setLoading(false);
    onDone();
  }

  return (
    <Modal title="Attendance" onClose={onClose}>
      <p className="mb-4 text-sm text-muted">{session.title}</p>
      <div className="space-y-2">
        {roster.length === 0 ? (
          <p className="text-sm text-muted">No students enrolled.</p>
        ) : (
          roster.map((r) => (
            <div key={r.studentId} className="flex items-center justify-between gap-3 rounded-input border border-hairline bg-canvas px-3 py-2">
              <span className="text-sm text-ink">{r.fullName ?? "Student"}</span>
              <select
                value={marks[r.studentId] ?? ""}
                onChange={(e) => setMarks((m) => ({ ...m, [r.studentId]: e.target.value }))}
                className="rounded-input border border-hairline bg-surface px-2 py-1 text-xs text-ink focus:border-gold focus:outline-none"
              >
                <option value="">—</option>
                <option value="present">Present</option>
                <option value="late">Late</option>
                <option value="absent">Absent</option>
                <option value="excused">Excused</option>
              </select>
            </div>
          ))
        )}
      </div>
      <button type="button" onClick={save} disabled={loading} className="mt-5 w-full rounded-pill bg-cta-gradient py-3 text-xs font-bold uppercase tracking-widest text-canvas shadow-glow-btn disabled:opacity-60 focus-gold">
        {loading ? "Saving…" : "Save attendance"}
      </button>
    </Modal>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-h-[85vh] w-full max-w-md overflow-y-auto rounded-card border border-hairline bg-surface p-6 shadow-glow-card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-ink">{title}</h3>
          <button type="button" onClick={onClose} aria-label="Close" className="text-muted hover:text-gold focus-gold">
            <Icon name="close" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
