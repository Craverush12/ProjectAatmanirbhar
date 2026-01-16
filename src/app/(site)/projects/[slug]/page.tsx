import { Metadata } from "next";
import { notFound } from "next/navigation";
import ShimmerImage from "@/components/media/ShimmerImage";
import { ClosingCTA } from "@/components/sections/CTA";
import { getContentBySlug, listContent } from "@/lib/content";
import { Badge } from "@/components/ui/badge";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return listContent("projects").map((p) => ({ slug: p.frontmatter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = listContent("projects").find((p) => p.frontmatter.slug === params.slug);
  return {
    title: project ? `${project.frontmatter.title} | Projects` : "Project",
    description: project?.frontmatter.summary,
  };
}

export default function ProjectDetail({ params }: Props) {
  const project = getContentBySlug("projects", params.slug);
  if (!project) return notFound();

  const impact = (project.frontmatter.impact as string[]) || [];

  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">
              {project.frontmatter.location || "Yamuna Valley"}
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{project.frontmatter.title}</h1>
            <p className="text-sm text-[var(--brand-ivory)]/80">{project.frontmatter.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.frontmatter.tags?.map((tag: string) => (
                <Badge key={tag} className="bg-white/10 text-[var(--brand-ivory)]">
                  {tag}
                </Badge>
              ))}
              {project.frontmatter.status && (
                <Badge className="bg-[var(--brand-leaf)]/90 text-[var(--brand-ocean)]">
                  {project.frontmatter.status}
                </Badge>
              )}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {impact.slice(0, 4).map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-sm text-[var(--brand-ivory)]/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {project.frontmatter.cover && (
            <div className="relative overflow-hidden rounded-3xl">
              <ShimmerImage
                src={project.frontmatter.cover}
                alt={project.frontmatter.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-transparent" />
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-6 rounded-[28px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
        <div className="prose prose-slate max-w-none text-[var(--brand-ink)] prose-headings:text-[var(--brand-ink)] prose-p:text-[var(--muted)]">
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
        <div className="space-y-3 rounded-2xl border border-[var(--brand-slate)]/15 bg-[var(--brand-leaf)]/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">
            Field diary prompt
          </p>
          <p className="text-sm text-[var(--muted)]">
            Capture a 60-second clip with: team member name, location pin, today&apos;s action, and one observation
            about air/water/soil. Upload with date stamp.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
