import { createClient } from "@/lib/supabaseServer";
import { AddUserButton } from "@/components/admin/AddUserButton";
import { UsersTable, type UserRow } from "@/components/admin/UsersTable";

export default async function TutorsPage() {
  const supabase = createClient();
  const { data } = await supabase
    .from("profiles")
    .select("id,full_name,email,phone,status")
    .eq("role", "tutor")
    .order("full_name");

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gold md:text-4xl">Tutors</h1>
          <p className="mt-1 text-muted">Trainers who lead your batches.</p>
        </div>
        <AddUserButton role="tutor" label="Add tutor" />
      </div>
      <UsersTable rows={(data ?? []) as UserRow[]} emptyText="No tutors yet — add your first trainer." />
    </div>
  );
}
