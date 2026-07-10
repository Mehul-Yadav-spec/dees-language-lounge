// Per-page loading skeletons that mirror each portal page's real layout, so a
// navigation shows a placeholder shaped like the page being loaded — not a
// generic dashboard. Purely presentational; rendered via each route's
// loading.tsx. Dark blocks use bg-surface/bg-canvas to match the portal theme.

function Header({ w = "w-56" }: { w?: string }) {
  return (
    <div className="space-y-3">
      <div className={`h-9 ${w} rounded-input bg-surface`} />
      <div className="h-4 w-72 max-w-full rounded-input bg-surface" />
    </div>
  );
}

// /student — stats + two columns + resources
export function DashboardSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse space-y-10" aria-hidden>
      <Header w="w-72" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-28 rounded-card border border-hairline bg-surface" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-3">
          <div className="h-6 w-40 rounded-input bg-surface" />
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 rounded-card border border-hairline bg-surface" />
          ))}
        </div>
        <div className="space-y-3 lg:col-span-2">
          <div className="h-6 w-40 rounded-input bg-surface" />
          {[0, 1].map((i) => (
            <div key={i} className="h-20 rounded-card border border-hairline bg-surface" />
          ))}
        </div>
      </div>
    </div>
  );
}

// /student/recordings — month divider + grid of video cards
export function RecordingsSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse space-y-8" aria-hidden>
      <Header w="w-56" />
      <div className="flex items-center gap-4">
        <div className="h-3 w-20 rounded bg-surface" />
        <div className="h-px w-full bg-hairline" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-card border border-hairline bg-surface">
            <div className="aspect-video w-full bg-canvas" />
            <div className="space-y-2 p-5">
              <div className="h-4 w-3/4 rounded bg-canvas" />
              <div className="h-3 w-1/2 rounded bg-canvas" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// /student/live-classes — progress strips + tabs + class rows
export function LiveClassesSkeleton() {
  return (
    <div className="mx-auto max-w-5xl animate-pulse space-y-8" aria-hidden>
      <div className="flex items-end justify-between gap-4">
        <Header w="w-52" />
        <div className="h-4 w-32 shrink-0 rounded bg-surface" />
      </div>
      <div className="space-y-3">
        {[0, 1].map((i) => (
          <div key={i} className="space-y-2 rounded-card border border-hairline bg-surface p-4">
            <div className="flex justify-between">
              <div className="h-4 w-40 rounded bg-canvas" />
              <div className="h-4 w-24 rounded bg-canvas" />
            </div>
            <div className="h-1.5 w-full rounded-full bg-canvas" />
          </div>
        ))}
      </div>
      <div className="flex gap-8 border-b border-hairline pb-3">
        <div className="h-5 w-24 rounded bg-surface" />
        <div className="h-5 w-16 rounded bg-surface" />
      </div>
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-4 rounded-card border border-hairline bg-surface p-5">
            <div className="h-12 w-12 shrink-0 rounded bg-canvas" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/2 rounded bg-canvas" />
              <div className="h-3 w-1/3 rounded bg-canvas" />
            </div>
            <div className="h-10 w-24 shrink-0 rounded-input bg-canvas" />
          </div>
        ))}
      </div>
    </div>
  );
}

// /student/resources — filter bar + session divider + material cards
export function ResourcesSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse space-y-8" aria-hidden>
      <Header w="w-52" />
      <div className="flex flex-col gap-3 rounded-card border border-hairline bg-surface p-4 sm:flex-row">
        <div className="h-11 flex-1 rounded-input bg-canvas" />
        <div className="flex flex-wrap gap-3">
          <div className="h-11 w-28 rounded-input bg-canvas" />
          <div className="h-11 w-28 rounded-input bg-canvas" />
          <div className="h-11 w-28 rounded-input bg-canvas" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-4 w-48 rounded bg-surface" />
        <div className="h-px w-full bg-hairline" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4 rounded-card border border-hairline bg-surface p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-input bg-canvas" />
              <div className="h-3 w-16 rounded bg-canvas" />
            </div>
            <div className="h-4 w-3/4 rounded bg-canvas" />
            <div className="h-3 w-full rounded bg-canvas" />
            <div className="h-10 w-full rounded-input bg-canvas" />
          </div>
        ))}
      </div>
    </div>
  );
}

// /student/profile — avatar + form fields
export function ProfileSkeleton() {
  return (
    <div className="mx-auto max-w-2xl animate-pulse space-y-8" aria-hidden>
      <Header w="w-40" />
      <div className="flex items-center gap-5">
        <div className="h-20 w-20 rounded-full bg-surface" />
        <div className="space-y-2">
          <div className="h-5 w-40 rounded bg-surface" />
          <div className="h-3 w-56 max-w-full rounded bg-surface" />
        </div>
      </div>
      <div className="space-y-4 rounded-card border border-hairline bg-surface p-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-3 w-24 rounded bg-canvas" />
            <div className="h-10 w-full rounded-input bg-canvas" />
          </div>
        ))}
      </div>
    </div>
  );
}
