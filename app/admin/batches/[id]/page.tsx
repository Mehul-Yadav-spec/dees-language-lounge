import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabaseServer";
import { Icon } from "@/components/ui/Icon";
import { BatchRoster, type RosterRow } from "@/components/admin/BatchRoster";

interface Batch {
  id: string;
  title: string;
  course_id: string;
  schedule_text: string | null;
  status: string;
  course: { title: string } | null;
  tutor: { full_name: string | null } | null;
}

export default async function BatchDetailPage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: batchData } = await supabase
    .from("batches")
    .select("id,title,course_id,schedule_text,status,course:courses(title),tutor:profiles(full_name)")
    .eq("id", params.id)
    .single();
  const batch = batchData as unknown as Batch | null;
  if (!batch) notFound();

  const [{ data: enr }, { data: courseEnr }, { data: students }] = await Promise.all([
    supabase.from("enrollments").select("id,student_id,student:profiles(full_name,email)").eq("batch_id", params.id),
    supabase.from("enrollments").select("student_id").eq("course_id", batch.course_id),
    supabase.from("profiles").select("id,full_name").eq("role", "student").eq("status", "active").order("full_name"),
  ]);

  const roster: RosterRow[] = ((enr ?? []) as unknown as {
    id: string;
    student_id: string;
    student: { full_name: string | null; email: string | null } | null;
  }[]).map((e) => ({
    enrollmentId: e.id,
    studentId: e.student_id,
    fullName: e.student?.full_name ?? null,
    email: e.student?.email ?? null,
  }));

  const taken = new Set((courseEnr ?? []).map((e: { student_id: string }) => e.student_id));
  const available = ((students ?? []) as { id: string; full_name: string | null }[]).filter((s) => !taken.has(s.id));

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link href="/admin/batches" className="text-xs font-bold text-muted hover:text-gold focus-gold">
          ← Batches
        </Link>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gold md:text-4xl">{batch.title}</h1>
        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
          <span className="flex items-center gap-1"><Icon name="menu_book" className="text-sm text-gold" /> {batch.course?.title ?? "—"}</span>
          <span className="flex items-center gap-1"><Icon name="person" className="text-sm text-gold" /> {batch.tutor?.full_name ?? "Unassigned"}</span>
          {batch.schedule_text ? <span className="flex items-center gap-1"><Icon name="schedule" className="text-sm text-gold" /> {batch.schedule_text}</span> : null}
          <span className="rounded-pill bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold capitalize text-gold">{batch.status}</span>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-ink">Roster</h2>
        <BatchRoster batchId={batch.id} courseId={batch.course_id} roster={roster} available={available} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-ink">Classes</h2>
        <p className="rounded-card border border-hairline bg-surface p-6 text-sm text-muted">
          Scheduling live sessions, attendance and materials — coming next.
        </p>
      </section>
    </div>
  );
}
