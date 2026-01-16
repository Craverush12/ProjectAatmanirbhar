"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ShimmerImage from "@/components/media/ShimmerImage";
import type { ContentItem } from "@/lib/content";
import { useProjectFilter } from "@/store/filterStore";

type ProjectsClientProps = {
  projects: ContentItem[];
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const category = useProjectFilter((s) => s.category);
  const setCategory = useProjectFilter((s) => s.setCategory);

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.frontmatter.tags?.forEach((t: string) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(
    () => (category === "All" ? projects : projects.filter((p) => p.frontmatter.tags?.includes(category))),
    [category, projects]
  );

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
        <div className="space-y-3 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-leaf)]">Projects</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">Cinematic, photo-led initiatives</h1>
          <p className="max-w-3xl text-sm text-[var(--brand-ivory)]/80">
            Each initiative is co-created with local stewards. Browse, scan visuals, and dive into details.
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === category ? "primary" : "secondary"}
                size="sm"
                onClick={() => setCategory(cat)}
                className={cat === category ? "" : "border-white/30 text-[var(--brand-ivory)]"}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.frontmatter.slug}`}
            className="soft-card group overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
          >
            {project.frontmatter.cover && (
              <ShimmerImage
                src={project.frontmatter.cover}
                alt={project.frontmatter.title}
                width={800}
                height={500}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="space-y-3 p-4">
              <div className="flex flex-wrap gap-2">
                {project.frontmatter.tags?.map((tag: string) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                {project.frontmatter.location && (
                  <Badge className="bg-[var(--brand-leaf)]/20 text-[var(--brand-forest)]">
                    {project.frontmatter.location}
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold text-[var(--brand-ink)]">{project.frontmatter.title}</h3>
              <p className="text-sm text-[var(--muted)]">{project.frontmatter.summary}</p>
              <p className="text-xs font-semibold text-[var(--brand-forest)]">
                {project.frontmatter.status || "Active"}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-[24px] bg-[var(--brand-forest)] px-8 py-10 text-white shadow-lg shadow-emerald-200 md:flex md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-ocean)]/80">
            Bring a project to your community
          </p>
          <h3 className="text-2xl font-semibold">Partner with us to launch a pilot</h3>
          <p className="text-sm text-white/80">
            NGOs, CSR teams, and civic groups are welcome. We co-design, train, and hand over to local stewards.
          </p>
        </div>
        <Button
          variant="secondary"
          className="mt-4 bg-white text-[var(--brand-forest)] md:mt-0"
          href="/contact"
        >
          Start a conversation
        </Button>
      </div>
    </div>
  );
}
