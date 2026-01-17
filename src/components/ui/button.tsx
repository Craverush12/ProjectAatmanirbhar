"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  asChild?: boolean;
};

const styles = {
  base: "inline-flex items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:ring-[var(--brand-leaf)]",
  primary:
    "bg-[var(--brand-forest)] text-white shadow-lg shadow-emerald-200 hover:bg-[var(--brand-ink)]",
  secondary:
    "border border-[var(--brand-forest)] text-[var(--brand-forest)] hover:bg-[var(--brand-forest)] hover:text-white",
  ghost: "text-[var(--brand-forest)] hover:text-[var(--brand-ink)]",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  href,
}: ButtonProps) {
  const classes = cn(styles.base, styles[variant], styles[size], className);

  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={classes} onClick={onClick}>
          <motion.span whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {children}
          </motion.span>
        </Link>
      );
    }

    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
