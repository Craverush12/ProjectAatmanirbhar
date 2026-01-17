import { stats } from "@/data/stats";

export function ImpactStrip() {
  const featured = [
    "Trees planted",
    "Volunteers mobilized",
    "Villages engaged",
    "Children supported",
  ].map((label) => stats.find((item) => item.label === label) || { label, value: "In field" });

  return (
    <section className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-gradient-to-r from-[var(--brand-ocean)] to-[var(--brand-forest)] text-[var(--brand-ivory)]">
      <div className="grid gap-4 p-6 md:grid-cols-4 md:p-8">
        {featured.map((item) => (
          <div key={item.label} className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{item.label}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
            {item.helper && <p className="text-xs text-white/70">{item.helper}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
