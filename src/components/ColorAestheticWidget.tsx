"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "@/app/providers";
import { cn } from "@/lib/utils";

export default function ColorAestheticWidget() {
  const { theme, setTheme, options } = useContext(ThemeContext);

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/25 bg-[var(--brand-ocean)] text-[var(--brand-ivory)] shadow-[0_24px_70px_-30px_rgba(0,0,0,0.55)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-[var(--brand-leaf)]/12 to-transparent opacity-80" />
      <div className="relative space-y-5 p-6 md:p-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--brand-leaf)]">
              Color Studio
            </p>
            <h2 className="text-2xl font-semibold md:text-3xl">Bold aesthetic switcher</h2>
            <p className="text-sm text-[var(--brand-ivory)]/80">
              Tap a palette to recolor the site instantly—layout stays familiar while hues shift.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-ivory)]">
            Active · {options.find((o) => o.id === theme)?.name ?? "River Dawn"}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {options.slice(0, 6).map((option) => {
            const isActive = theme === option.id;
            return (
              <motion.button
                key={option.id}
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setTheme(option.id)}
                aria-pressed={isActive}
                className={cn(
                  "group h-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition",
                  isActive
                    ? "ring-2 ring-[var(--brand-leaf)] ring-offset-2 ring-offset-[var(--brand-ocean)]"
                    : "hover:border-[var(--brand-leaf)]/50 hover:bg-white/8"
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--brand-leaf)]">
                      {option.tagline}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{option.name}</p>
                  </div>
                  {isActive && (
                    <span className="rounded-full bg-[var(--brand-leaf)]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--brand-ivory)]">
                      Active
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[var(--brand-ivory)]/75">{option.description}</p>
                <div className="mt-3 flex gap-2">
                  {option.swatches.map((swatch) => (
                    <span
                      key={swatch}
                      aria-hidden
                      className="h-8 w-8 rounded-xl border border-white/15 shadow-[0_12px_30px_-18px_rgba(0,0,0,0.6)]"
                      style={{ background: swatch }}
                    />
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
