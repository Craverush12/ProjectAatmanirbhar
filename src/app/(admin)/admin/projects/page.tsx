"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { projects as seededProjects } from "@/data/projects";
import { Project } from "@/types";
import { Input, TextArea } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function AdminProjects() {
  const router = useRouter();
  const { status } = useSession();
  const [list, setList] = useState<Project[]>(seededProjects);
  const [draft, setDraft] = useState<Project>({
    id: "",
    title: "",
    summary: "",
    category: "",
    impact: "",
    image: "",
    location: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/admin/login");
  }, [status, router]);

  const addProject = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!draft.title || !draft.summary) return;
    const id = draft.id || draft.title.toLowerCase().replace(/\s+/g, "-");
    setList((prev) => [{ ...draft, id }, ...prev]);
    setDraft({
      id: "",
      title: "",
      summary: "",
      category: "",
      impact: "",
      image: "",
      location: "",
    });
  };

  const removeProject = (id: string) => setList((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="space-y-10">
      <header className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-[var(--brand-ink)]">Projects</h1>
          <p className="text-sm text-[var(--muted)]">Add, edit, or archive initiatives.</p>
        </div>
      </header>

      <section className="rounded-3xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] p-6 shadow-lg shadow-emerald-100">
        <h2 className="text-lg font-semibold text-[var(--brand-ink)]">Add a project</h2>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={addProject}>
          <Input
            label="Title"
            name="title"
            value={draft.title}
            onChange={(e) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
          <Input
            label="Category"
            name="category"
            value={draft.category}
            onChange={(e) => setDraft((prev) => ({ ...prev, category: e.target.value }))}
          />
          <Input
            label="Location"
            name="location"
            value={draft.location}
            onChange={(e) => setDraft((prev) => ({ ...prev, location: e.target.value }))}
          />
          <Input
            label="Impact"
            name="impact"
            value={draft.impact}
            onChange={(e) => setDraft((prev) => ({ ...prev, impact: e.target.value }))}
          />
          <TextArea
            label="Summary"
            name="summary"
            className="md:col-span-2"
            value={draft.summary}
            onChange={(e) => setDraft((prev) => ({ ...prev, summary: e.target.value }))}
          />
          <Input
            label="Image URL"
            name="image"
            value={draft.image}
            onChange={(e) => setDraft((prev) => ({ ...prev, image: e.target.value }))}
          />
          <Button type="submit" variant="primary" className="md:col-span-2">
            Add project
          </Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-[var(--brand-ink)]">Project list</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-[var(--brand-slate)]/10 bg-[var(--surface)] p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--brand-ink)]">{project.title}</p>
                  <p className="text-xs text-[var(--muted)]">{project.summary}</p>
                  <p className="mt-2 text-xs font-semibold text-[var(--brand-forest)]">
                    {project.category} · {project.location || "Location pending"}
                  </p>
                  <p className="text-xs text-[var(--brand-forest)]">{project.impact || "Impact pending"}</p>
                </div>
                <button
                  onClick={() => removeProject(project.id)}
                  className="text-xs font-semibold text-red-600 hover:text-red-700"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
