import ShimmerImage from "../media/ShimmerImage";

export function FounderNote() {
  return (
    <section className="grid gap-6 rounded-[28px] border border-[var(--brand-slate)]/15 bg-[var(--surface)] p-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)] md:grid-cols-[1fr_1.1fr] md:p-10">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-forest)]">
          A note from the founder
        </p>
        <h3 className="text-2xl font-semibold text-[var(--brand-ink)]">Holding the river with you</h3>
        <p className="text-sm text-[var(--muted)]">
          This valley shaped my childhood. Each bend of the Yamuna carries songs, memories, and responsibilities. Our
          work is simple: keep dignity at the center, let women lead, and be transparent about every step. When we plant
          a tree, clean a ghat, or record air data, we are honoring those who came before and those who will inherit
          this river.
        </p>
        <p className="text-sm text-[var(--muted)]">
          Thank you for walking with us—whether you volunteer, donate, or simply spread the word. Together we can keep
          this flow sacred and thriving. [founder story detail here]
        </p>
        <p className="text-sm font-semibold text-[var(--brand-ink)]">Ranjeet Chaturvedi Pathak</p>
      </div>
      <div className="relative overflow-hidden rounded-3xl bg-[var(--brand-ocean)]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.55)]" />
        <ShimmerImage
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80"
          alt="Documentary portrait style placeholder"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
