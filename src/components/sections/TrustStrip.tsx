import Link from "next/link";
import { Badge } from "../ui/badge";

export function TrustStrip() {
  const partners = ["[partner placeholder]", "[partner placeholder]", "[partner placeholder]"];
  const reports = [
    { label: "Impact report [placeholder year]", href: "#" },
    { label: "Financials [placeholder year]", href: "#" },
  ];

  return (
    <section className="overflow-hidden rounded-[28px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ink)] text-[var(--brand-ivory)]">
      <div className="grid gap-6 p-8 md:grid-cols-[1fr_1fr] md:p-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Proof & trust</p>
          <h3 className="text-2xl font-semibold">Transparent and partner-led</h3>
          <p className="text-sm text-[var(--brand-ivory)]/80">
            Open updates, reports, and partners who walk with us. Methodology is shared and community-owned.
          </p>
          <div className="flex flex-wrap gap-2">
            {partners.map((p) => (
              <Badge key={p} className="bg-white/10 text-[var(--brand-ivory)] backdrop-blur">
                {p}
              </Badge>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Downloads</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {reports.map((report) => (
              <Link
                key={report.label}
                href={report.href}
                className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-[var(--brand-ivory)] hover:border-[var(--brand-leaf)]"
              >
                {report.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
