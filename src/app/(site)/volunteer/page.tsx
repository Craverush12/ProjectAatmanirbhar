import type { Metadata } from "next";
import { IntentForm } from "@/components/forms/IntentForm";
import ShimmerImage from "@/components/media/ShimmerImage";

export const metadata: Metadata = {
  title: "Volunteer | Project Aatmanirbhar",
  description: "Premium, visual-first volunteer call-to-action.",
};

const pathways = [
  { title: "Field teams", copy: "Plant, clean ghats, run river labs, and document impact." },
  { title: "Learning mentors", copy: "STEM + Sanskriti clubs, storytelling, and career guidance." },
  { title: "Remote allies", copy: "Design toolkits, tech builds, fundraising, or content." },
];

export default function VolunteerPage() {
  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Volunteer</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Walk with the river</h1>
            <p className="text-sm text-[var(--brand-ivory)]/80">
              Join field labs, clean-ups, and learning circles. Training, safety, and community provided. Bring your
              hands, heart, and curiosity.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {pathways.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-leaf)]">{item.title}</p>
                  <p className="text-sm text-[var(--brand-ivory)]/80">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <ShimmerImage
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Volunteers planting trees near the river"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">
            What you get
          </p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Skills, community, and proof</h2>
          <ul className="space-y-3 text-sm text-[var(--muted)]">
            <li>• Field kits, safety briefings, and micro-labs to learn by doing.</li>
            <li>• Mentorship from local leaders and researchers; documentation templates provided.</li>
            <li>• Community ledger of hours and outcomes for transparency.</li>
          </ul>
        </div>
        <IntentForm type="volunteer" />
      </section>
    </div>
  );
}
