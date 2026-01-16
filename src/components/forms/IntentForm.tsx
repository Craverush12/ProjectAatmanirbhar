"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  location: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(4),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  type: "volunteer" | "contact" | "donate";
  title?: string;
  className?: string;
};

export function IntentForm({ type, title = "Raise your hand", className }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch(`/api/forms/${type}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)]/90 p-6 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.4)] backdrop-blur",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">
          {type === "volunteer" ? "Volunteer form" : type === "donate" ? "Donate interest" : "Contact"}
        </p>
        <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{title}</h3>
      </div>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Field label="Name" error={errors.name?.message}>
          <input {...register("name")} className="input" placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className="input" placeholder="you@example.com" type="email" />
        </Field>
        <div className="grid gap-3 md:grid-cols-2">
          <Field label="Phone" error={errors.phone?.message}>
            <input {...register("phone")} className="input" placeholder="+91" />
          </Field>
          <Field label="Location" error={errors.location?.message}>
            <input {...register("location")} className="input" placeholder="City / Village" />
          </Field>
        </div>
        <Field label="Focus" error={errors.interest?.message}>
          <input
            {...register("interest")}
            className="input"
            placeholder={type === "volunteer" ? "Eg. river clean-ups, field labs" : "Eg. CSR, partnerships"}
          />
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} className="input h-24" placeholder="Tell us more" />
        </Field>
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-full bg-[var(--brand-forest)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 hover:bg-[var(--brand-ink)] disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : status === "success" ? "Sent" : "Submit"}
        </motion.button>
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong. Please try again in a moment.</p>
        )}
      </form>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1 text-sm font-semibold text-[var(--brand-ink)]">
      <span>{label}</span>
      {children}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  );
}
