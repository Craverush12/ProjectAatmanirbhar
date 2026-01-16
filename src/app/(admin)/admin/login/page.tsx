"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/field";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@aatmanirbhar.org");
  const [password, setPassword] = useState("seedchange");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.ok) {
      router.replace("/admin");
    } else {
      setError("Invalid credentials. Try the seeded admin login.");
    }
  };

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 rounded-3xl bg-[var(--surface)] p-8 shadow-lg shadow-emerald-100">
      <div className="space-y-2 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-forest)]">
          Admin login
        </p>
        <h1 className="text-2xl font-semibold text-[var(--brand-ink)]">Welcome back</h1>
        <p className="text-sm text-[var(--muted)]">Use the seeded credentials to explore the console.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="primary" className="w-full">
          Sign in
        </Button>
        {error && <p className="text-sm font-semibold text-red-600">{error}</p>}
      </form>
    </div>
  );
}
