export const metadata = {
  title: "Terms | Project Aatmanirbhar",
  description: "Terms of use (placeholder) with clear anchors.",
};

const sections = [
  { id: "acceptance", title: "1. Acceptance", body: "By using this site you agree to these placeholder terms. Replace with counsel-reviewed text before launch." },
  { id: "use", title: "2. Permitted use", body: "Use the site for information and engagement only. Do not misuse content or attempt unauthorized access." },
  { id: "content", title: "3. Content ownership", body: "Content belongs to Project Aatmanirbhar unless stated. Do not reuse without permission." },
  { id: "links", title: "4. Third-party links", body: "We are not responsible for external sites." },
  { id: "liability", title: "5. Liability", body: "Site provided as-is; no warranties. Limit liability to the extent permitted by law." },
  { id: "termination", title: "6. Termination", body: "We may restrict access if terms are violated." },
  { id: "law", title: "7. Governing law", body: "[placeholder jurisdiction]." },
  { id: "contact", title: "8. Contact", body: "Questions? hello@projectaatmanirbhar.org." },
];

export default function TermsPage() {
  return (
    <div className="space-y-6 rounded-[24px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-8 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]">
      <h1 className="text-3xl font-semibold text-[var(--brand-ink)]">Terms of Use</h1>
      <p className="text-sm text-[var(--muted)]">Last updated: [placeholder date]</p>
      <nav className="space-y-1 text-sm text-[var(--brand-forest)] underline">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`}>
            {s.title}
          </a>
        ))}
      </nav>
      <div className="prose prose-slate max-w-none text-[var(--brand-ink)] prose-p:text-[var(--muted)]">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-m-20">
            <h2 className="text-xl font-semibold text-[var(--brand-ink)]">{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
