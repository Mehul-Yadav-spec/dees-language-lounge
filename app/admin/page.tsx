import Link from "next/link";
import { createClient } from "@/lib/supabaseServer";
import { Icon } from "@/components/ui/Icon";

export default async function AdminDashboardPage() {
  const supabase = createClient();
  const [students, tutors, batches, enrolments] = await Promise.all([
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "student"),
    supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "tutor"),
    supabase.from("batches").select("*", { count: "exact", head: true }).in("status", ["open", "running"]),
    supabase.from("enrollments").select("*", { count: "exact", head: true }).eq("status", "active"),
  ]);

  const kpis = [
    { label: "Students", value: students.count ?? 0, icon: "school", href: "/admin/students" },
    { label: "Tutors", value: tutors.count ?? 0, icon: "co_present", href: "/admin/tutors" },
    { label: "Active batches", value: batches.count ?? 0, icon: "groups", href: "/admin/batches" },
    { label: "Active enrolments", value: enrolments.count ?? 0, icon: "how_to_reg", href: "/admin/batches" },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gold md:text-4xl">Admin</h1>
        <p className="mt-1 text-muted">Overview of your school.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {kpis.map((k) => (
          <Link
            key={k.label}
            href={k.href}
            className="rounded-card border border-hairline border-l-4 border-l-gold/40 bg-surface p-6 transition-colors hover:border-gold/40 focus-gold"
          >
            <Icon name={k.icon} className="text-3xl text-gold/50" />
            <p className="mt-3 text-3xl font-bold text-ink">{k.value}</p>
            <p className="text-[11px] uppercase tracking-widest text-muted">{k.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <Link href="/admin/students" className="rounded-pill bg-cta-gradient px-6 py-3 text-xs font-bold uppercase tracking-widest text-canvas shadow-glow-btn focus-gold">
          Add student
        </Link>
        <Link href="/admin/batches" className="rounded-pill border border-gold/50 px-6 py-3 text-xs font-bold uppercase tracking-widest text-gold transition-colors hover:bg-gold/10 focus-gold">
          Create batch
        </Link>
      </div>
    </div>
  );
}
