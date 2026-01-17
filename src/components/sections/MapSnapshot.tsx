import { listContent } from "@/lib/content";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const pinPositions = [
  { top: "16%", left: "22%" },
  { top: "32%", left: "64%" },
  { top: "58%", left: "42%" },
  { top: "68%", left: "18%" },
];

export function MapSnapshot() {
  const projects = listContent("projects");
  const events = listContent("events");

  const focusAreas = Array.from(
    projects.reduce((acc, project) => {
      const location = project.frontmatter.location || "Yamuna Valley";
      acc.set(location, (acc.get(location) || 0) + 1);
      return acc;
    }, new Map<string, number>())
  ).map(([name, count]) => ({ name, count }));

  const pins = focusAreas.slice(0, pinPositions.length).map((area, idx) => ({
    ...area,
    position: pinPositions[idx],
  }));

  return (
    <section className="overflow-hidden rounded-[32px] border border-[var(--brand-slate)]/15 bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
      <div className="grid gap-6 p-8 md:grid-cols-[1fr_1.2fr] md:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">Map snapshot</p>
          <h3 className="text-2xl font-semibold">Yamuna Valley focus</h3>
          <p className="text-sm text-[var(--brand-ivory)]/80">
            Clusters across ghats, wetlands, and farm belts. Pins show where projects and drives are active, with quick
            counts you can expand inside Projects.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-ivory)]/70">Projects live</p>
              <p className="text-2xl font-semibold">{projects.length}</p>
              <p className="text-xs text-[var(--brand-ivory)]/70">Documented in this build</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--brand-ivory)]/70">Events mapped</p>
              <p className="text-2xl font-semibold">{events.length}</p>
              <p className="text-xs text-[var(--brand-ivory)]/70">Calendar drives</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <Badge key={area.name} className="bg-white/10 text-[var(--brand-ivory)] backdrop-blur">
                {area.name} ({area.count})
              </Badge>
            ))}
          </div>
          <Button variant="secondary" href="/projects" className="border-[var(--brand-ivory)] text-[var(--brand-ivory)] hover:bg-[var(--brand-ivory)] hover:text-[var(--brand-ocean)]">
            Open project map
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[rgba(255,255,255,0.06)] to-[rgba(28,140,138,0.12)] p-4">
          <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_20%_30%,rgba(255,179,65,0.2),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(28,140,138,0.25),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]">
            <div className="h-full w-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(5,9,18,0.35),transparent_50%)]" />
          </div>
          <div className="pointer-events-none absolute inset-4">
            {pins.map((pin) => (
              <div
                key={pin.name}
                className="absolute"
                style={{ top: pin.position.top, left: pin.position.left }}
              >
                <span className="block h-3 w-3 rounded-full bg-[var(--brand-leaf)] shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />
                <p className="mt-1 rounded-full bg-[rgba(0,0,0,0.35)] px-3 py-1 text-[11px] font-semibold text-[var(--brand-ivory)]">
                  {pin.name} / {pin.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
