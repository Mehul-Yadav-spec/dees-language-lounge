export interface UserRow {
  id: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  status: string;
}

function StatusPill({ status }: { status: string }) {
  const active = status === "active";
  const color = active ? "#22c55e" : "#8A93A3";
  return (
    <span className="rounded-pill px-2.5 py-0.5 text-[11px] font-bold capitalize" style={{ color, backgroundColor: `${color}1a` }}>
      {status}
    </span>
  );
}

export function UsersTable({ rows, emptyText }: { rows: UserRow[]; emptyText: string }) {
  if (!rows.length) {
    return <p className="rounded-card border border-hairline bg-surface p-8 text-center text-muted">{emptyText}</p>;
  }
  return (
    <div className="overflow-x-auto rounded-card border border-hairline bg-surface">
      <table className="w-full min-w-[560px] text-sm">
        <thead>
          <tr className="border-b border-hairline text-left text-[11px] uppercase tracking-widest text-muted">
            <th className="px-4 py-3 font-bold">Name</th>
            <th className="px-4 py-3 font-bold">Email</th>
            <th className="px-4 py-3 font-bold">Phone</th>
            <th className="px-4 py-3 font-bold">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b border-hairline/50 last:border-0">
              <td className="px-4 py-3 font-medium text-ink">{r.full_name || "—"}</td>
              <td className="px-4 py-3 text-muted">{r.email || "—"}</td>
              <td className="px-4 py-3 text-muted">{r.phone || "—"}</td>
              <td className="px-4 py-3"><StatusPill status={r.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
