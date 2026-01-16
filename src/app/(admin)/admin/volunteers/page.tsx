"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const volunteers = [
  { name: "Ananya Sharma", interest: "River Revive", contact: "ananya@example.com", status: "New" },
  { name: "Rohit Verma", interest: "Learning Circles", contact: "rohit@example.com", status: "Contacted" },
  { name: "Meera Iyer", interest: "Agro-forest Lab", contact: "meera@example.com", status: "Scheduled" },
  { name: "Kabir Singh", interest: "Wildlife Shield", contact: "kabir@example.com", status: "New" },
];

export default function AdminVolunteers() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/admin/login");
  }, [status, router]);

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-xl font-semibold text-[var(--brand-ink)]">Volunteers</h1>
        <p className="text-sm text-[var(--muted)]">
          Review sign-ups from the public site and mark follow-up status.
        </p>
      </header>

      <div className="rounded-3xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] p-6 shadow-lg shadow-emerald-100">
        <div className="grid grid-cols-4 gap-4 text-xs font-semibold uppercase tracking-wide text-[var(--brand-forest)]">
          <span>Name</span>
          <span>Interest</span>
          <span>Contact</span>
          <span>Status</span>
        </div>
        <div className="mt-3 divide-y divide-[var(--brand-slate)]/10">
          {volunteers.map((volunteer) => (
            <div key={volunteer.contact} className="grid grid-cols-4 gap-4 py-3 text-sm">
              <span className="font-semibold text-[var(--brand-ink)]">{volunteer.name}</span>
              <span className="text-[var(--muted)]">{volunteer.interest}</span>
              <span className="text-[var(--muted)]">{volunteer.contact}</span>
              <span className="text-[var(--brand-forest)]">{volunteer.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
