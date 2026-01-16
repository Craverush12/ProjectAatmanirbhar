"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Initiative = {
  title: string;
  pillar: string;
  copy: string;
};

type InitiativesSectionProps = {
  initiatives: Initiative[];
};

const InitiativesSection = ({ initiatives }: InitiativesSectionProps) => (
  <section className="space-y-6">
    <header className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">
          Initiatives
        </p>
        <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Impact in motion</h2>
        <p className="text-sm text-[var(--muted)]">Six pathways where ancient wisdom meets modern action.</p>
      </div>
      <Button variant="ghost" className="text-[var(--brand-forest)]" href="/projects">
        View all
      </Button>
    </header>
    <div className="grid gap-6 md:grid-cols-3">
      {initiatives.map((item, idx) => (
        <motion.article
          key={item.title}
          className="group overflow-hidden rounded-2xl border border-[var(--brand-slate)]/20 bg-[var(--surface)] p-5 shadow-lg shadow-[rgba(11,15,20,0.08)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.04 }}
        >
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-forest)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-leaf)]" />
            {item.pillar}
          </div>
          <h3 className="mt-3 text-lg font-semibold text-[var(--brand-ink)]">{item.title}</h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{item.copy}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-forest)]">
            Learn more
            <span aria-hidden>-&gt;</span>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default InitiativesSection;
