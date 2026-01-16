import type { Metadata } from "next";
import { IntentForm } from "@/components/forms/IntentForm";
import ShimmerImage from "@/components/media/ShimmerImage";

export const metadata: Metadata = {
  title: "Donate | Project Aatmanirbhar",
  description: "Support a women-led, transparent movement in the Yamuna Valley.",
};

const uses = [
  { title: "River care", copy: "Wetland buffers, ghat clean-ups, citizen water labs." },
  { title: "Air + canopy", copy: "Pocket forests, shade corridors, school climate labs." },
  { title: "Livelihoods", copy: "Herbal processing, seed banks, women-led co-ops." },
];

export default function DonatePage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Donate</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Fuel the movement</h1>
            <p className="text-sm text-[var(--brand-ivory)]/80">
              Your support powers women-led stewardship of air, water, and soil. Transparent reporting and
              documentation shared with every donor.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {uses.map((use) => (
                <div key={use.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-leaf)]">{use.title}</p>
                  <p className="text-sm text-[var(--brand-ivory)]/80">{use.copy}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--brand-ivory)]/70">
              Payment rails are not wired in this demo. Use the form to share intent; we&apos;ll reply with options.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <ShimmerImage
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80"
              alt="Women-led community gathering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">
            Trust & transparency
          </p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">See where it flows</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>• Reports and ledgers shared with donors. [placeholder link]</li>
            <li>• Community sign-off for every pilot.</li>
            <li>• Media proof: before/after shots, field diaries.</li>
          </ul>
        </div>
        <IntentForm type="donate" title="Donate interest form" />
      </section>
    </div>
  );
}
