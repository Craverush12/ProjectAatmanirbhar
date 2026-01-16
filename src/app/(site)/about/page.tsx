import { Metadata } from "next";
import ShimmerImage from "@/components/media/ShimmerImage";
import { FounderNote } from "@/components/sections/FounderNote";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Project Aatmanirbhar",
  description: "Origins, theory of change, and the people guiding Project Aatmanirbhar.",
};

const values = [
  { title: "Community-first", copy: "Co-created with women, elders, youth, and local councils." },
  { title: "Regeneration", copy: "Soil, water, and air restored together for long-term dignity." },
  { title: "Transparency", copy: "Open data, clear reporting, shared learnings." },
  { title: "Sacred + scientific", copy: "Ancient wisdom paired with field labs and simple tools." },
];

const milestones = [
  { year: "2018", detail: "[placeholder] First river clean-ups led by women volunteers." },
  { year: "2021", detail: "[placeholder] Community labs for air and water testing." },
  { year: "2023", detail: "[placeholder] Herbal livelihood clusters mapped." },
  { year: "2024", detail: "[placeholder] Field diary series and partner pilots." },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 md:space-y-16">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Our story</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Ancient wisdom, modern action</h1>
            <p className="text-sm text-[var(--brand-ivory)]/80">
              Rooted in Mathura and the Yamuna Valley, Project Aatmanirbhar is a women-led movement to heal air, water,
              and soil. We listen to elders, equip youth, and share transparent updates so every village can see its own
              progress.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Stat label="Pillars" value="Vayu · Jal · Bhoomi" />
              <Stat label="Approach" value="Sacred + scientific" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <ShimmerImage
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&q=80"
              alt="Community gathering near the river"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent" />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">Theory of change</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Women lead; the valley follows</h2>
          <p className="text-sm text-[var(--muted)]">Three steps: listen, pilot transparently, hand over stewardship.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {["Listen & map", "Pilot with proof", "Steward & scale"].map((item, idx) => (
            <div
              key={item}
              className="rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-forest)]">Step {idx + 1}</p>
              <p className="mt-2 text-lg font-semibold text-[var(--brand-ink)]">{item}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">[placeholder detail]</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">Values</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">What keeps us honest</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <Card key={value.title} className="soft-card border-[var(--brand-slate)]/15">
              <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{value.title}</h3>
                <p className="text-sm text-[var(--muted)]">{value.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">Milestones</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Moments that shaped us</h2>
        </header>
        <div className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]">
          <div className="grid gap-4 md:grid-cols-4">
            {milestones.map((item) => (
              <div key={item.year} className="space-y-2">
                <p className="text-2xl font-semibold text-[var(--brand-ink)]">{item.year}</p>
                <p className="text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">Team & partners</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">People behind the work</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {["[placeholder] Program lead", "[placeholder] Field coordinator", "[placeholder] Community archivist"].map(
            (name) => (
              <Card key={name}>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-[var(--brand-forest)]/15" />
                    <div>
                      <p className="text-base font-semibold text-[var(--brand-ink)]">{name}</p>
                      <p className="text-xs text-[var(--muted)]">Team</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted)]">[placeholder bio]</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {["[partner placeholder]", "[partner placeholder]", "[partner placeholder]"].map((partner) => (
            <Badge key={partner}>{partner}</Badge>
          ))}
        </div>
      </section>

      <FounderNote />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
      <p className="text-xs uppercase tracking-[0.2em] text-white/80">{label}</p>
      <p className="text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
