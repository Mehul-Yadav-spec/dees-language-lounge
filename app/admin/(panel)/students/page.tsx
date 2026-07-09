import { createClient } from "@/lib/supabaseServer";
import { getServiceClient } from "@/lib/supabase";
import { AddUserButton } from "@/components/admin/AddUserButton";
import { UsersTable, type UserRow } from "@/components/admin/UsersTable";

interface ActiveEnr {
  student_id: string;
  batch: { title: string | null } | null;
}

export default async function StudentsPage() {
  const supabase = createClient();
  const svc = getServiceClient();
  const [{ data }, { data: enr }, { data: batchData }, authList] = await Promise.all([
    supabase
      .from("profiles")
      .select("id,full_name,email,phone,status,must_change_password")
      .eq("role", "student")
      .order("full_name"),
    supabase.from("enrollments").select("student_id,batch:batches(title)").eq("status", "active"),
    supabase.from("batches").select("id,title").in("status", ["open", "running"]).order("created_at", { ascending: false }),
    svc ? svc.auth.admin.listUsers({ page: 1, perPage: 1000 }) : Promise.resolve(null),
  ]);
  const batches = (batchData ?? []) as { id: string; title: string }[];

  const batchByStudent = new Map(
    ((enr ?? []) as unknown as ActiveEnr[]).map((e) => [e.student_id, e.batch?.title ?? null]),
  );
  const lastLoginById = new Map(
    (authList?.data?.users ?? []).map((u) => [u.id, u.last_sign_in_at ?? null]),
  );

  const rows: UserRow[] = ((data ?? []) as UserRow[]).map((r) => ({
    ...r,
    batch_name: batchByStudent.get(r.id) ?? null,
    last_sign_in_at: lastLoginById.get(r.id) ?? null,
  }));

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gold md:text-4xl">Students</h1>
          <p className="mt-1 text-muted">Everyone enrolled in your school. Enrol them into batches from Batches.</p>
        </div>
        <AddUserButton role="student" label="Add student" batches={batches} />
      </div>
      <UsersTable rows={rows} emptyText="No students yet — add your first student." showBatch />
    </div>
  );
}
