"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/providers";

const pillars = [
  {
    name: "Vayu",
    copy: "Clean air corridors, canopy pockets, and climate classrooms for cooler hamlets.",
    icon: "🌿",
    theme: "vayu-air",
  },
  {
    name: "Jal",
    copy: "Ghats revived, wetlands buffered, citizen water labs along the river.",
    icon: "💧",
    theme: "jal-river",
  },
  {
    name: "Bhoomi",
    copy: "Regenerative farms, seed banks, and river-safe livelihoods.",
    icon: "🌱",
    theme: "bhoomi-earth",
  },
] as const;

export function Pillars() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Pillars</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Ancient wisdom meets modern action</h2>
          <p className="text-sm text-[var(--muted)]">Vayu · Jal · Bhoomi — three lenses, one valley.</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div
            key={pillar.name}
            role="button"
            tabIndex={0}
            onClick={() => setTheme(pillar.theme)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setTheme(pillar.theme);
            }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_18px_60px_-28px_rgba(0,0,0,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-forest)]"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[var(--brand-leaf)]/12 blur-2xl" />
            <div className="relative space-y-2">
              <div className="text-2xl">{pillar.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-forest)]">
                {pillar.name}
              </p>
              <p className="text-base font-semibold text-[var(--brand-ink)]">{pillar.copy}</p>
              {theme === pillar.theme && (
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-forest)]">
                  Active palette
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
