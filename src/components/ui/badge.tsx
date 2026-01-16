import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--brand-slate)]/15 bg-[var(--brand-ivory)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--brand-forest)]",
        className
      )}
    >
      {children}
    </span>
  );
}
