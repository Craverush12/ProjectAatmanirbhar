import Link from "next/link";
import { type ContentItem } from "@/lib/content";
import ShimmerImage from "../media/ShimmerImage";

type Props = {
  stories: ContentItem[];
};

export function FieldStories({ stories }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Field stories</p>
          <h2 className="text-3xl font-semibold text-[var(--brand-ink)]">Faces of the river</h2>
        </div>
        <Link href="/blog" className="text-sm font-semibold text-[var(--brand-forest)]">
          View blog
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {stories.slice(0, 3).map((story) => (
          <Link
            key={story.slug}
            href={`/blog/${story.frontmatter.slug}`}
            className="group overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
          >
            {story.frontmatter.cover && (
              <ShimmerImage
                src={story.frontmatter.cover}
                alt={story.frontmatter.title}
                width={800}
                height={500}
                className="h-48 w-full object-cover"
              />
            )}
            <div className="space-y-2 p-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--brand-forest)]">
                {story.frontmatter.tags?.join(" · ")}
              </p>
              <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{story.frontmatter.title}</h3>
              <p className="text-sm text-[var(--muted)]">{story.frontmatter.excerpt || story.content.slice(0, 120)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
