export const metadata = {
  title: "Privacy | Project Aatmanirbhar",
  description: "Privacy policy (placeholder text) with clear sections and anchors.",
};

const sections = [
  { id: "intro", title: "1. Introduction", body: "This placeholder privacy policy will be replaced with counsel-reviewed copy. We describe what we collect, why, and how to reach us." },
  { id: "data", title: "2. Data we collect", body: "Contact details you share via forms (name, email, phone, location), and your messages. No payments are processed on this site in the current build." },
  { id: "use", title: "3. How we use data", body: "To respond to your interest (volunteer, donate, contact), send updates, and improve services. No sale of data." },
  { id: "cookies", title: "4. Cookies & analytics", body: "Placeholder—add analytics provider details or note none are used. State cookie purposes and durations." },
  { id: "sharing", title: "5. Sharing", body: "Placeholder—list third parties (email/hosting/forms). No unauthorized sharing." },
  { id: "security", title: "6. Security", body: "We use reasonable safeguards; no system is perfect. Avoid sending sensitive data via forms." },
  { id: "rights", title: "7. Your rights", body: "Request access, correction, or deletion via hello@projectaatmanirbhar.org." },
  { id: "contact", title: "8. Contact", body: "Email: hello@projectaatmanirbhar.org. Address: [placeholder address]." },
  { id: "update", title: "9. Updates", body: "We may update this policy; latest version will be posted here with date." },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-6 rounded-[24px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-8 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]">
      <h1 className="text-3xl font-semibold text-[var(--brand-ink)]">Privacy Policy</h1>
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
