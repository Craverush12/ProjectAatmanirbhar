export function ImpactStrip() {
  const stats = [
    { label: "Women-led stewardship", value: "[placeholder]" },
    { label: "Villages engaged", value: "[placeholder]" },
    { label: "Trees / saplings", value: "[placeholder]" },
    { label: "River stretches", value: "[placeholder]" },
  ];

  return (
    <section className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-gradient-to-r from-[var(--brand-ocean)] to-[var(--brand-forest)] text-[var(--brand-ivory)]">
      <div className="grid gap-4 p-6 md:grid-cols-4 md:p-8">
        {stats.map((item) => (
          <div key={item.label} className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{item.label}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
