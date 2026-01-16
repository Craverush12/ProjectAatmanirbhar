"use client";

export function BlogListSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-5"
        >
          <div className="h-40 rounded-2xl bg-[var(--brand-slate)]/20" />
          <div className="mt-4 space-y-2">
            <div className="h-4 w-1/2 rounded bg-[var(--brand-slate)]/30" />
            <div className="h-3 w-2/3 rounded bg-[var(--brand-slate)]/20" />
            <div className="h-3 w-1/3 rounded bg-[var(--brand-slate)]/20" />
          </div>
        </div>
      ))}
    </div>
  );
}
