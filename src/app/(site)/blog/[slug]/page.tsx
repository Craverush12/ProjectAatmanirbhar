import { Metadata } from "next";
import { notFound } from "next/navigation";
import ShimmerImage from "@/components/media/ShimmerImage";
import { listContent, getContentBySlug } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return listContent("blog").map((p) => ({ slug: p.frontmatter.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = listContent("blog").find((p) => p.frontmatter.slug === params.slug);
  return {
    title: post ? `${post.frontmatter.title} | Blog` : "Story",
    description: post?.frontmatter.excerpt,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getContentBySlug("blog", params.slug);
  if (!post) return notFound();

  return (
    <article className="space-y-10">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
        {post.frontmatter.cover && (
          <div className="relative h-[320px] w-full overflow-hidden">
            <ShimmerImage
              src={post.frontmatter.cover}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
          </div>
        )}
        <div className="space-y-3 p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">
            {formatDate(post.frontmatter.date || "")} · {post.frontmatter.author || "Field Team"}
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{post.frontmatter.title}</h1>
          <p className="max-w-3xl text-sm text-[var(--brand-ivory)]/80">{post.frontmatter.excerpt}</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[1fr_0.65fr]">
        <div className="prose prose-slate max-w-none text-[var(--brand-ink)] prose-headings:text-[var(--brand-ink)] prose-p:text-[var(--muted)]">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <aside className="space-y-3 rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-5 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">Pull quote</p>
          <p className="text-lg font-semibold text-[var(--brand-ink)]">
            “Field diary entries keep the river’s memory alive. Each note is a promise to return.”
          </p>
          <p className="text-xs text-[var(--muted)]">Documentary writing tone · add source when available.</p>
        </aside>
      </section>

      <div className="rounded-[24px] border border-[var(--brand-slate)]/15 bg-[var(--brand-forest)]/10 p-6 text-sm text-[var(--muted)]">
        <p>
          Need to add footnotes, methodology links, or related stories?{" "}
          <Link href="/contact" className="font-semibold text-[var(--brand-forest)]">
            Contact the team
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
