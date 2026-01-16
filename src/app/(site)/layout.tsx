import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageTransition from "@/components/layouts/PageTransition";
import ScrollTopButton from "@/components/layouts/ScrollTopButton";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--brand-cloud)] text-[var(--brand-ink)]">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
        <PageTransition>{children}</PageTransition>
      </main>
      <ScrollTopButton />
      <Footer />
    </div>
  );
}
