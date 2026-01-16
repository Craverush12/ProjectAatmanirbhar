import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
  name: string;
  helperText?: string;
  error?: string;
  className?: string;
};

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextAreaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, name, helperText, error, className, ...props },
  ref
) {
  return (
    <label className="block space-y-2 text-sm font-semibold text-[var(--brand-ink)]">
      <span>{label}</span>
      <div className="relative">
        <input
          ref={ref}
          name={name}
          className={cn(
            "peer w-full rounded-xl border border-[var(--brand-slate)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--brand-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition focus:border-[var(--brand-forest)] focus:ring-2 focus:ring-[var(--brand-leaf)] focus:ring-offset-1 focus:ring-offset-transparent",
            error && "border-red-400 focus:ring-red-200",
            className
          )}
          {...props}
        />
        <span className="pointer-events-none absolute left-3 top-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-slate)]/80 transition peer-focus:translate-y-[-18px] peer-focus:text-[var(--brand-forest)] peer-valid:translate-y-[-18px] peer-valid:text-[var(--brand-forest)]">
          {label}
        </span>
      </div>
      {error ? (
        <p className="text-xs font-semibold text-red-600">{error}</p>
      ) : (
        helperText && <p className="text-xs text-[var(--brand-slate)]/80">{helperText}</p>
      )}
    </label>
  );
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { label, name, helperText, error, className, ...props },
  ref
) {
  return (
    <label className="block space-y-2 text-sm font-semibold text-[var(--brand-ink)]">
      <span>{label}</span>
      <div className="relative">
        <textarea
          ref={ref}
          name={name}
          className={cn(
            "peer min-h-[140px] w-full rounded-xl border border-[var(--brand-slate)]/15 bg-white/80 px-4 py-3 text-sm text-[var(--brand-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition focus:border-[var(--brand-forest)] focus:ring-2 focus:ring-[var(--brand-leaf)] focus:ring-offset-1 focus:ring-offset-transparent",
            error && "border-red-400 focus:ring-red-200",
            className
          )}
          {...props}
        />
        <span className="pointer-events-none absolute left-3 top-3 text-xs uppercase tracking-[0.18em] text-[var(--brand-slate)]/80 transition peer-focus:translate-y-[-18px] peer-focus:text-[var(--brand-forest)] peer-valid:translate-y-[-18px] peer-valid:text-[var(--brand-forest)]">
          {label}
        </span>
      </div>
      {error ? (
        <p className="text-xs font-semibold text-red-600">{error}</p>
      ) : (
        helperText && <p className="text-xs text-[var(--brand-slate)]/80">{helperText}</p>
      )}
    </label>
  );
});
