"use client";

export function ProjectsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)]"
        >
          <div className="h-40 bg-[var(--brand-slate)]/20" />
          <div className="space-y-3 p-4">
            <div className="h-4 w-2/3 rounded bg-[var(--brand-slate)]/30" />
            <div className="h-3 w-5/6 rounded bg-[var(--brand-slate)]/20" />
            <div className="h-3 w-1/2 rounded bg-[var(--brand-slate)]/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
