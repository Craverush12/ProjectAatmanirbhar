"use client";

export function EventCardsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse rounded-2xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-4"
        >
          <div className="h-32 rounded-xl bg-[var(--brand-slate)]/20" />
          <div className="mt-3 h-3 w-1/3 rounded bg-[var(--brand-slate)]/30" />
          <div className="mt-2 h-4 w-3/4 rounded bg-[var(--brand-slate)]/30" />
          <div className="mt-1 h-3 w-1/2 rounded bg-[var(--brand-slate)]/20" />
        </div>
      ))}
    </div>
  );
}
