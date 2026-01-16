import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "rounded-2xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] shadow-[0_18px_40px_-24px_rgba(15,36,26,0.25)]",
      className
    )}
  >
    {children}
  </div>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={cn("p-6", className)}>{children}</div>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={cn("p-6 pb-0", className)}>{children}</div>
);
