import Link from "next/link";
import { listContent } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import ShimmerImage from "@/components/media/ShimmerImage";
import { EventCardsSkeleton } from "@/components/skeletons/EventCardsSkeleton";

export const metadata = {
  title: "Events | Project Aatmanirbhar",
  description: "Upcoming and past events with cinematic visuals.",
};

export default function EventsPage({ searchParams }: { searchParams: { type?: string } }) {
  const events = listContent("events");
  const active = searchParams.type || "upcoming";
  const now = new Date();
  const upcoming = events.filter((e) => (e.frontmatter.date ? new Date(e.frontmatter.date) >= now : false));
  const past = events.filter((e) => (e.frontmatter.date ? new Date(e.frontmatter.date) < now : false));
  const filtered = active === "past" ? past : active === "all" ? events : upcoming;

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[var(--brand-forest)]">Events</p>
        <h1 className="text-4xl font-semibold text-[var(--brand-ink)]">Calendar & drives</h1>
        <p className="text-sm text-[var(--muted)]">Scan upcoming drives or revisit past highlights.</p>
        <div className="flex gap-3">
          {[
            { label: "Upcoming", value: "upcoming" },
            { label: "Past", value: "past" },
            { label: "All", value: "all" },
          ].map((tab) => (
            <Link
              key={tab.value}
              href={`/events?type=${tab.value}`}
              className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                active === tab.value
                  ? "border-[var(--brand-forest)] bg-[var(--brand-forest)] text-white"
                  : "border-[var(--brand-slate)]/30 text-[var(--brand-ink)]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </header>

      {!events.length ? (
        <EventCardsSkeleton />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.frontmatter.slug}`}
              className="soft-card overflow-hidden rounded-3xl border border-[var(--brand-slate)]/15 bg-[var(--surface)] shadow-[0_18px_50px_-30px_rgba(0,0,0,0.35)]"
            >
              {event.frontmatter.cover && (
                <ShimmerImage
                  src={event.frontmatter.cover}
                  alt={event.frontmatter.title}
                  width={800}
                  height={400}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="space-y-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-forest)]">
                  {event.frontmatter.type || "Event"} · {formatDate(event.frontmatter.date || "")}
                </p>
                <h3 className="text-lg font-semibold text-[var(--brand-ink)]">{event.frontmatter.title}</h3>
                <p className="text-sm text-[var(--muted)]">{event.frontmatter.excerpt}</p>
                <p className="text-xs font-semibold text-[var(--brand-forest)]">
                  {event.frontmatter.location || "Yamuna Valley"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
