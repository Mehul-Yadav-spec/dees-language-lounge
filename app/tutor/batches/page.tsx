import Link from "next/link";
import { createClient } from "@/lib/supabaseServer";
import { getSessionUser } from "@/lib/portal";

interface Batch {
  id: string;
  title: string;
  status: string;
  schedule_text: string | null;
  course: { title: string } | null;
}

export default async function TutorBatchesPage() {
  const user = await getSessionUser();
  const supabase = createClient();
  const { data } = await supabase
    .from("batches")
    .select("id,title,status,schedule_text,course:courses(title)")
    .eq("tutor_id", user?.id ?? "")
    .order("created_at", { ascending: false });
  const rows = (data ?? []) as unknown as Batch[];

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gold md:text-4xl">My Batches</h1>
        <p className="mt-1 text-muted">The cohorts you teach. Open one to take attendance and share materials.</p>
      </div>

      {rows.length === 0 ? (
        <p className="rounded-card border border-hairline bg-surface p-8 text-center text-muted">
          You haven&apos;t been assigned to any batches yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {rows.map((b) => (
            <Link
              key={b.id}
              href={`/tutor/batches/${b.id}`}
              className="rounded-card border border-hairline bg-surface p-6 transition-colors hover:border-gold/40 focus-gold"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-bold text-ink">{b.title}</h2>
                <span className="shrink-0 rounded-pill bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold capitalize text-gold">{b.status}</span>
              </div>
              <p className="mt-1 text-sm text-muted">{b.course?.title ?? "—"}</p>
              {b.schedule_text ? <p className="mt-2 text-xs text-muted">{b.schedule_text}</p> : null}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
