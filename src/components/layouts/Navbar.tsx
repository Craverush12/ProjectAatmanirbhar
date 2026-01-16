"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "@/app/providers";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, options } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const paletteIds = options.map((option) => option.id);
  const currentPalette = options.find((option) => option.id === theme) ?? options[0];

  const handleCyclePalette = () => {
    const currentIndex = paletteIds.indexOf(theme);
    const nextId = paletteIds[(currentIndex + 1) % paletteIds.length];
    setTheme(nextId);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--brand-slate)]/10 bg-white/80 backdrop-blur dark:bg-[var(--surface)]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--brand-forest)] to-[var(--brand-leaf)] grid place-items-center text-white font-semibold">
            PA
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-forest)]">
              Project
            </p>
            <p className="text-lg font-bold text-[var(--brand-ink)]">Aatmanirbhar</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-[var(--brand-ink)] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-[var(--brand-forest)] transition",
                pathname === link.href && "text-[var(--brand-forest)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Cycle color aesthetic"
            onClick={handleCyclePalette}
            className="rounded-full border border-[var(--brand-slate)]/25 bg-[var(--surface)]/60 px-3 py-2 text-left shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)] backdrop-blur transition hover:border-[var(--brand-forest)]"
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[var(--brand-slate)]">
              Palette
            </span>
            <span className="block text-sm font-bold text-[var(--brand-ink)]">{currentPalette.name}</span>
          </button>
          <Button className="hidden md:inline-flex" size="sm" variant="primary" href="/donate">
            Donate
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--brand-slate)]/20 md:hidden"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden"
          >
            <div className="space-y-2 border-t border-[var(--brand-slate)]/10 bg-white px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm font-semibold text-[var(--brand-ink)] hover:bg-[var(--brand-forest)]/10",
                    pathname === link.href && "bg-[var(--brand-forest)]/10 text-[var(--brand-forest)]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
