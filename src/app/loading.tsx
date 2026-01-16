"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[var(--brand-forest)] to-[var(--brand-leaf)] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_45%)]" />
        <span className="text-lg font-semibold tracking-[0.2em]">PA</span>
      </motion.div>
      <motion.div
        className="mt-6 h-2 w-48 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="h-full w-1/3 rounded-full bg-[var(--brand-leaf)]"
          animate={{ x: ["0%", "200%"] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>
      <p className="mt-4 text-sm uppercase tracking-[0.3em] text-[var(--brand-leaf)]">River dawn</p>
    </div>
  );
}
