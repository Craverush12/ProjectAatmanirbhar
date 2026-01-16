import { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import { listContent, getContentBySlug } from "@/lib/content";
import ShimmerImage from "@/components/media/ShimmerImage";
import { ClosingCTA } from "@/components/sections/CTA";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return listContent("events").map((e) => ({ slug: e.frontmatter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const event = listContent("events").find((e) => e.frontmatter.slug === params.slug);
  return {
    title: event ? `${event.frontmatter.title} | Events` : "Event",
    description: event?.frontmatter.excerpt,
  };
}

export default function EventDetail({ params }: Props) {
  const event = getContentBySlug("events", params.slug);
  if (!event) return notFound();

  return (
    <div className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
        <div className="grid gap-6 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-leaf)]">
              {event.frontmatter.type || "Event"}
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{event.frontmatter.title}</h1>
            <p className="text-sm text-[var(--brand-ivory)]/80">{event.frontmatter.excerpt}</p>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--brand-ivory)]/80">
              <span>{formatDate(event.frontmatter.date || "")}</span>
              <span>{event.frontmatter.location}</span>
            </div>
          </div>
          {event.frontmatter.cover && (
            <div className="relative overflow-hidden rounded-3xl">
              <ShimmerImage
                src={event.frontmatter.cover}
                alt={event.frontmatter.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-transparent" />
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="prose prose-slate max-w-none text-[var(--brand-ink)] prose-headings:text-[var(--brand-ink)] prose-p:text-[var(--muted)]">
          <div dangerouslySetInnerHTML={{ __html: event.html }} />
        </div>
        <div className="space-y-3 rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Schedule</p>
          <p className="text-sm text-[var(--muted)]">[placeholder schedule] Add timings, station points, and contacts.</p>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">What to bring</p>
          <p className="text-sm text-[var(--muted)]">
            [placeholder kit list] Water, gloves, notebooks, cameras for documentation.
          </p>
        </div>
      </section>

      <ClosingCTA />
    </div>
  );
}
