import Link from "next/link";
import { listContent } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import ShimmerImage from "@/components/media/ShimmerImage";
import { Badge } from "@/components/ui/badge";
import { BlogListSkeleton } from "@/components/skeletons/BlogListSkeleton";

export const metadata = {
  title: "Blog | Project Aatmanirbhar",
  description: "Field diaries and impact stories with documentary visuals.",
};

export default function BlogPage({ searchParams }: { searchParams: { tag?: string } }) {
  const posts = listContent("blog");
  const active = searchParams.tag || "All";
  const tags = ["All", ...new Set(posts.flatMap((p) => p.frontmatter.tags || []))];
  const filtered = active === "All" ? posts : posts.filter((p) => p.frontmatter.tags?.includes(active));

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Stories</p>
        <h1 className="text-4xl font-semibold text-[var(--brand-ink)]">Field diaries & impact notes</h1>
        <p className="text-sm text-[var(--muted)]">Photo-led stories; filter by tag.</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={tag === "All" ? "/blog" : `/blog?tag=${tag}`}
              className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                tag === active
                  ? "border-[var(--brand-forest)] bg-[var(--brand-forest)] text-white"
                  : "border-[var(--brand-slate)]/30 text-[var(--brand-ink)]"
              }`}
            >
              {tag}
            </Link>
          ))}
        </div>
      </header>

      {!posts.length ? (
        <BlogListSkeleton />
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.frontmatter.slug}`}
              className="group overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
            >
              {post.frontmatter.cover && (
                <ShimmerImage
                  src={post.frontmatter.cover}
                  alt={post.frontmatter.title}
                  width={800}
                  height={500}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="space-y-2 p-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--brand-forest)]">
                  {formatDate(post.frontmatter.date || "")} · {post.frontmatter.author || "Team"}
                </p>
                <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{post.frontmatter.title}</h3>
                <p className="text-sm text-[var(--muted)]">
                  {post.frontmatter.excerpt || post.content.slice(0, 120)}
                </p>
                <div className="flex flex-wrap gap-1">
                  {post.frontmatter.tags?.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
