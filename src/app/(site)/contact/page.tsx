import { IntentForm } from "@/components/forms/IntentForm";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact | Project Aatmanirbhar",
  description: "Contact form, map snapshot, and quick links.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-8 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.35)] md:p-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Contact</p>
          <h1 className="text-4xl font-semibold text-[var(--brand-ink)]">Let&apos;s build together</h1>
          <p className="max-w-3xl text-sm text-[var(--muted)]">
            Partnerships, media, CSR, volunteering, or questions—drop a note. We respond within two working days.
          </p>
        </div>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <IntentForm type="contact" />
          <Card className="soft-card">
            <CardContent className="space-y-4">
              <div className="h-40 w-full rounded-xl bg-[radial-gradient(circle_at_20%_20%,rgba(28,140,138,0.2),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,179,65,0.2),transparent_40%),linear-gradient(135deg,rgba(12,18,30,0.04),rgba(12,18,30,0.08))]" />
              <div className="space-y-2 text-sm text-[var(--brand-ink)]">
                <p className="font-semibold">Reach us</p>
                <p>hello@projectaatmanirbhar.org</p>
                <p>[placeholder phone]</p>
                <p>Mathura district · Yamuna Valley</p>
              </div>
              <div className="space-y-2 text-sm text-[var(--brand-ink)]">
                <p className="font-semibold">Social</p>
                <p>[placeholder socials]</p>
              </div>
              <div className="space-y-2 text-sm text-[var(--brand-ink)]">
                <p className="font-semibold">Visit</p>
                <p>[placeholder address / ghat meeting point]</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
