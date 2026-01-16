"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import { stats } from "@/data/stats";

type Counts = { volunteer: number; contact: number; donate: number };

export default function AdminDashboard() {
  const { status } = useSession();
  const router = useRouter();
  const [counts, setCounts] = useState<Counts>({ volunteer: 0, contact: 0, donate: 0 });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function load() {
      const types = ["volunteer", "contact", "donate"] as const;
      const result: Partial<Counts> = {};
      for (const type of types) {
        try {
          const res = await fetch(`/api/forms/${type}`);
          const data = await res.json();
          result[type] = Array.isArray(data.entries) ? data.entries.length : 0;
        } catch {
          result[type] = 0;
        }
      }
      setCounts({
        volunteer: result.volunteer || 0,
        contact: result.contact || 0,
        donate: result.donate || 0,
      });
    }
    load();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[var(--brand-ink)]">Dashboard</h2>
          <p className="text-sm text-[var(--muted)]">Quick view of projects and inbound forms.</p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/projects"
            className="rounded-full border border-[var(--brand-forest)]/40 px-4 py-2 text-sm font-semibold text-[var(--brand-forest)] hover:border-[var(--brand-forest)]"
          >
            Manage projects
          </Link>
          <Link
            href="/admin/volunteers"
            className="rounded-full bg-[var(--brand-forest)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-200 hover:bg-[var(--brand-ink)]"
          >
            View volunteers
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="rounded-full border border-[var(--brand-slate)]/30 px-4 py-2 text-xs font-semibold text-[var(--brand-ink)]"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card title="Live projects" metric={projects.length.toString()} helper="published" />
        <Card title="Volunteers" metric={counts.volunteer.toString()} helper="form entries" />
        <Card title="Contacts" metric={counts.contact.toString()} helper="form entries" />
        <Card title="Donate intent" metric={counts.donate.toString()} helper="form entries" />
        <Card title="Impact updates" metric={stats[0].value} helper="latest plantation count" />
      </div>

      <div className="rounded-3xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] p-6 shadow-lg shadow-emerald-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--brand-ink)]">Recent project activity</h3>
          <Link href="/admin/projects" className="text-sm font-semibold text-[var(--brand-forest)]">
            Open projects
          </Link>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[var(--brand-slate)]/10 bg-[var(--brand-leaf)]/10 p-4"
            >
              <p className="text-sm font-semibold text-[var(--brand-ink)]">{project.title}</p>
              <p className="text-xs text-[var(--muted)]">{project.summary}</p>
              <p className="mt-2 text-xs font-semibold text-[var(--brand-forest)]">Impact: {project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ title, metric, helper }: { title: string; metric: string; helper: string }) {
  return (
    <div className="rounded-2xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-forest)]">{title}</p>
      <p className="mt-2 text-3xl font-semibold text-[var(--brand-ink)]">{metric}</p>
      <p className="text-xs text-[var(--muted)]">{helper}</p>
    </div>
  );
}
