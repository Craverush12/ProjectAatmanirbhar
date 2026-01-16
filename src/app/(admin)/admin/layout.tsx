export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--brand-cloud)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-forest)]">
              Admin
            </p>
            <h1 className="text-2xl font-semibold text-[var(--brand-ink)]">Project Aatmanirbhar</h1>
          </div>
          <p className="rounded-full bg-[var(--brand-leaf)]/20 px-4 py-2 text-xs font-semibold text-[var(--brand-forest)]">
            Private access
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}
