import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export type Collection = "projects" | "blog" | "events";

type BaseFrontmatter = {
  title: string;
  slug: string;
  date?: string;
  excerpt?: string;
  cover?: string;
  tags?: string[];
  author?: string;
  location?: string;
  status?: string;
  pillar?: string;
  type?: string;
  summary?: string;
  [key: string]: unknown;
};

export type ContentItem = {
  slug: string;
  frontmatter: BaseFrontmatter;
  content: string;
  html: string;
};

const contentRoot = path.join(process.cwd(), "content");

function getDir(collection: Collection) {
  return path.join(contentRoot, collection);
}

export function listContent(collection: Collection): ContentItem[] {
  const dir = getDir(collection);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return getContentBySlug(collection, slug);
    })
    .filter((item): item is ContentItem => Boolean(item))
    .sort((a, b) => (b.frontmatter.date || "").localeCompare(a.frontmatter.date || ""));
}

export function getContentBySlug(collection: Collection, slug: string): ContentItem | null {
  const filepath = path.join(getDir(collection), `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  return {
    slug,
    frontmatter: {
      title: data.title || slug,
      slug: data.slug || slug,
      date: data.date,
      excerpt: data.excerpt,
      cover: data.cover,
      tags: data.tags || [],
      ...data,
    },
    content,
    html: typeof html === "string" ? html : String(html),
  };
}
