-- ═══════════════════════════════════════════════════════════════════════════
-- Dees Language Lounge — Phase 0j (indexes for portal count/filter queries)
-- Run AFTER phase0i.sql. Idempotent, additive — safe to re-run.
--
-- The admin dashboard and list pages filter on these columns every load:
--   profiles.role      → KPI counts (students / tutors) + role lookups
--   batches.status     → "active batches" count (in open/running)
--   enrollments.status → "active enrolments" count
-- Without an index Postgres seq-scans the whole table for each. These btree
-- indexes turn those into index scans as the tables grow.
-- ═══════════════════════════════════════════════════════════════════════════

create index if not exists idx_profiles_role     on public.profiles(role);
create index if not exists idx_batches_status     on public.batches(status);
create index if not exists idx_enrollments_status on public.enrollments(status);

-- Done.
