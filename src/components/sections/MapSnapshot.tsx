export function MapSnapshot() {
  return (
    <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
      <div className="grid gap-6 p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Map snapshot</p>
          <h3 className="text-2xl font-semibold">Yamuna Valley focus</h3>
          <p className="text-sm text-[var(--brand-ivory)]/80">
            Mathura and surrounding ghats, wetlands, and farms. Pins for clean-up stretches, canopy corridors,
            and regenerative plots.
          </p>
          <div className="space-y-2 text-sm text-[var(--brand-ivory)]/80">
            <p>• Teal: wetlands + ghats</p>
            <p>• Saffron: women-led livelihood hubs</p>
            <p>• Leaf: canopy corridors / field labs</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(28,140,138,0.12)] p-4">
          <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(255,179,65,0.2),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(28,140,138,0.25),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
        </div>
      </div>
    </section>
  );
}
