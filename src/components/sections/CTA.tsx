import { Button } from "../ui/button";

export function ClosingCTA() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-gradient-to-r from-[var(--brand-forest)] to-[var(--brand-leaf)] text-[var(--brand-ocean)]">
      <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-ocean)]/80">Take action</p>
          <h3 className="text-2xl font-semibold">Step into the mission</h3>
          <p className="text-sm text-[var(--brand-ocean)]/80">
            Volunteer on the ground, back pilots, or co-create research with the valley.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" href="/volunteer" className="bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
            Volunteer
          </Button>
          <Button variant="secondary" href="/donate" className="border-[var(--brand-ocean)] text-[var(--brand-ocean)]">
            Donate
          </Button>
        </div>
      </div>
    </section>
  );
}
