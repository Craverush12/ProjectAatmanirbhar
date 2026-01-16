"use client";

import { motion } from "framer-motion";
import { Testimonial } from "@/types";

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => (
  <section className="space-y-6">
    <header className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">
        Sacred ecology | Community voices
      </p>
      <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Voices from the field</h2>
      <p className="text-sm text-[var(--muted)]">Stories from volunteers, farmers, and students shaping the mission.</p>
    </header>
    <div className="overflow-hidden rounded-[28px] bg-[var(--surface)] p-4 shadow-lg shadow-[rgba(11,15,20,0.08)]">
      <div className="flex gap-4 overflow-x-auto pb-4 pr-2 md:pr-4" style={{ scrollSnapType: "x mandatory" }}>
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.name}
            className="min-w-[260px] snap-start rounded-2xl border border-[var(--brand-slate)]/20 bg-[var(--surface)] p-6 shadow-sm md:min-w-[320px]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <p className="text-lg font-semibold text-[var(--brand-ink)]">{item.name}</p>
            <p className="text-sm font-semibold text-[var(--brand-forest)]">{item.role}</p>
            <p className="mt-3 text-sm text-[var(--muted)]">&quot;{item.quote}&quot;</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsCarousel;
