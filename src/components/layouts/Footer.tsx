import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/events", label: "Events" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--brand-ink)] text-[var(--brand-ivory)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:justify-between md:px-8">
        <div className="max-w-md space-y-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--brand-forest)] text-white font-bold">
              PA
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--brand-leaf)]">
                Project Aatmanirbhar
              </p>
              <p className="text-lg font-semibold text-white">Ancient wisdom. Modern action.</p>
            </div>
          </div>
          <p className="text-sm text-[var(--brand-ivory)]/80">
            We partner with communities to restore land, unlock learning, and build self-reliant futures.
            Join us as a volunteer, donor, or collaborator.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Navigate</p>
            <div className="space-y-2 text-sm">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-[var(--brand-ivory)]/80 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Connect</p>
            <div className="space-y-2 text-sm text-[var(--brand-ivory)]/80">
              <p>hello@projectaatmanirbhar.org</p>
              <p>+91 98765 43210</p>
              <p>Mathura, Uttar Pradesh</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Social</p>
            <div className="space-y-2 text-sm text-[var(--brand-ivory)]/80">
              <Link href="https://www.instagram.com" className="block hover:text-white">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com" className="block hover:text-white">
                LinkedIn
              </Link>
              <Link href="https://www.facebook.com" className="block hover:text-white">
                Facebook
              </Link>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Registrations</p>
            <div className="space-y-2 text-sm text-[var(--brand-ivory)]/80">
              <p>80G and 12A compliant</p>
              <p>Society Reg No.: available on request</p>
              <p>HQ: Mathura, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 text-xs text-[var(--brand-ivory)]/80 md:flex-row md:items-center md:justify-between md:px-8">
          <p>(c) {new Date().getFullYear()} Project Aatmanirbhar. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
