import { createClient } from "@/lib/supabaseServer";
import { AddUserButton } from "@/components/admin/AddUserButton";
import { UsersTable, type UserRow } from "@/components/admin/UsersTable";

export default async function StudentsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("profiles")
    .select("id,full_name,email,phone,status")
    .eq("role", "student")
    .order("full_name");

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gold md:text-4xl">Students</h1>
          <p className="mt-1 text-muted">Everyone enrolled in your school. Enrol them into batches from Batches.</p>
        </div>
        <AddUserButton role="student" label="Add student" />
      </div>
      <UsersTable rows={(data ?? []) as UserRow[]} emptyText="No students yet — add your first student." />
    </div>
  );
}
