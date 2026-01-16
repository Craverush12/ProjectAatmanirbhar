/* eslint-disable @typescript-eslint/no-require-imports */
/* Crawl projectaatmanirbhar.org with Playwright to inventory content */
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const startUrl = "https://projectaatmanirbhar.org";
const origin = new URL(startUrl).origin;
const docsDir = path.join(process.cwd(), "docs");

async function extractPageData(page) {
  const url = page.url();
  return await page.evaluate((currentUrl) => {
    const pageTitle = document.title || "";
    const headings = Array.from(document.querySelectorAll("h1, h2, h3, h4")).map((el) => ({
      tag: el.tagName.toLowerCase(),
      text: el.textContent?.trim() || "",
    }));
    const paragraphs = Array.from(document.querySelectorAll("p"))
      .map((el) => el.textContent?.trim() || "")
      .filter(Boolean);
    const links = Array.from(document.querySelectorAll("a"))
      .map((el) => ({
        text: el.textContent?.trim() || "",
        href: el.getAttribute("href") || "",
      }))
      .filter((l) => l.href && !l.href.startsWith("#"));
    const buttons = Array.from(document.querySelectorAll("button, [role='button']"))
      .map((el) => el.textContent?.trim() || "")
      .filter(Boolean);
    const images = Array.from(document.querySelectorAll("img")).map((el) => ({
      src: el.getAttribute("src") || el.getAttribute("data-src") || "",
      alt: el.getAttribute("alt") || "",
    }));

    const sections = Array.from(document.querySelectorAll("section")).map((section, index) => {
      const sectionHeadings = Array.from(section.querySelectorAll("h1, h2, h3, h4")).map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim() || "",
      }));
      const sectionParagraphs = Array.from(section.querySelectorAll("p"))
        .map((el) => el.textContent?.trim() || "")
        .filter(Boolean);
      const sectionButtons = Array.from(section.querySelectorAll("a, button, [role='button']"))
        .map((el) => ({
          text: el.textContent?.trim() || "",
          href: el.getAttribute("href") || "",
        }))
        .filter((el) => el.text);
      const sectionImages = Array.from(section.querySelectorAll("img")).map((el) => ({
        src: el.getAttribute("src") || el.getAttribute("data-src") || "",
        alt: el.getAttribute("alt") || "",
      }));
      const textLength = (section.innerText || "").length;
      const imgCount = sectionImages.length;
      let density = "Balanced";
      if (textLength < 300 && imgCount >= 2) density = "Visual-first";
      else if (textLength > 700) density = "Text-heavy-required";
      return {
        index,
        headings: sectionHeadings,
        paragraphs: sectionParagraphs,
        buttons: sectionButtons,
        images: sectionImages,
        textLength,
        imageCount: imgCount,
        textDensity: density,
      };
    });

    const pageTextLength = (document.body?.innerText || "").length;
    const pageImageCount = images.length;
    let pageDensity = "Balanced";
    if (pageTextLength < 2000 && pageImageCount >= 4) pageDensity = "Visual-first";
    else if (pageTextLength > 4000) pageDensity = "Text-heavy-required";

    return {
      url: currentUrl,
      title: pageTitle,
      headings,
      paragraphs,
      links,
      buttons,
      images,
      sections,
      pageDensity,
      pageTextLength,
      pageImageCount,
    };
  }, url);
}

async function crawl() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ ignoreHTTPSErrors: true });
  const page = await context.newPage();

  const toVisit = [startUrl];
  const visited = new Set();
  const pages = [];

  while (toVisit.length) {
    const nextUrl = toVisit.shift();
    if (!nextUrl || visited.has(nextUrl)) continue;
    visited.add(nextUrl);

    try {
      await page.goto(nextUrl, { waitUntil: "domcontentloaded", timeout: 90000 });
      await page.waitForTimeout(1500);
      const data = await extractPageData(page);
      pages.push(data);

      const links = data.links
        .map((l) => l.href)
        .map((href) => {
          try {
            return new URL(href, nextUrl).toString();
          } catch {
            return null;
          }
        })
        .filter((href) => href && href.startsWith(origin))
        .map((href) => href.split("#")[0].replace(/\/+$/, "") || "/");

      for (const href of links) {
        if (!visited.has(href) && !toVisit.includes(href)) {
          toVisit.push(href);
        }
      }
    } catch (err) {
      console.error(`Failed to crawl ${nextUrl}:`, err.message);
    }
  }

  await browser.close();
  return pages;
}

function ensureDocsDir() {
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir);
}

function writeDocs(pages) {
  ensureDocsDir();
  const sitemapLines = ["# Sitemap", ""];
  pages.forEach((p) => {
    sitemapLines.push(`- ${p.url} — ${p.title} (${p.pageDensity})`);
  });
  fs.writeFileSync(path.join(docsDir, "sitemap.md"), sitemapLines.join("\n"), "utf-8");

  const contentInventory = pages.map((p) => ({
    url: p.url,
    title: p.title,
    pageDensity: p.pageDensity,
    sections: p.sections.map((s) => ({
      index: s.index,
      headings: s.headings,
      paragraphs: s.paragraphs,
      buttons: s.buttons,
      images: s.images,
      textDensity: s.textDensity,
    })),
    images: p.images,
    headings: p.headings,
  }));
  fs.writeFileSync(path.join(docsDir, "content-inventory.json"), JSON.stringify(contentInventory, null, 2), "utf-8");

  const md = ["# Content Inventory", ""];
  pages.forEach((p) => {
    md.push(`## ${p.title || p.url}`);
    md.push(`URL: ${p.url}`);
    md.push(`Page density: ${p.pageDensity}`);
    md.push("");
    p.sections.forEach((s) => {
      const headingText = s.headings.map((h) => h.text).filter(Boolean).join(" / ");
      md.push(`- Section ${s.index + 1}${headingText ? ` — ${headingText}` : ""} (${s.textDensity})`);
    });
    md.push("");
  });
  fs.writeFileSync(path.join(docsDir, "content-inventory.md"), md.join("\n"), "utf-8");
}

async function main() {
  const pages = await crawl();
  writeDocs(pages);
  console.log(`Crawled ${pages.length} pages. Docs written to /docs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
