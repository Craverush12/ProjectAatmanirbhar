import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import ShimmerImage from "../media/ShimmerImage";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[36px] bg-[var(--brand-ocean)] text-[var(--brand-ivory)]">
      <div className="absolute inset-0">
        <ShimmerImage
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=2400&q=80"
          alt="Dawn on the Yamuna river with boats and mist"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(5,9,18,0.78)] via-[rgba(12,22,28,0.55)] to-[rgba(28,140,138,0.65)]" />
      </div>
      <div className="relative grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-6">
          <div className="inline-flex flex-wrap items-center gap-3">
            <Badge className="bg-white/10 text-[var(--brand-ivory)] backdrop-blur">Yamuna Valley</Badge>
            <Badge className="bg-white/10 text-[var(--brand-ivory)] backdrop-blur">Women-led</Badge>
            <Badge className="bg-white/10 text-[var(--brand-ivory)] backdrop-blur">Vayu · Jal · Bhoomi</Badge>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            River dawn, people in motion
          </h1>
          <p className="max-w-2xl text-lg text-[var(--brand-ivory)]/85">
            Women-led stewardship across the Yamuna Valley, pairing sacred ecology with science. Nadi se nayi
            shuruat.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" size="lg" href="/volunteer" className="bg-[var(--brand-leaf)] text-[var(--brand-ocean)] hover:bg-[#ffc45b]">
              Join us
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/projects"
              className="border-[var(--brand-ivory)] text-[var(--brand-ivory)] hover:bg-[var(--brand-ivory)] hover:text-[var(--brand-ocean)]"
            >
              Watch story
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Villages in motion", value: "[placeholder]" },
              { label: "Women leading", value: "[placeholder]" },
              { label: "Active pillars", value: "Vayu · Jal · Bhoomi" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-ivory)]/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-leaf)]">
              Documentary + community
            </p>
            <p className="text-base text-[var(--brand-ivory)]/85">
              Sacred + scientific. Clean air corridors, living rivers, regenerative soils. Transparent, women-led,
              dignity-first.
            </p>
            <div className="space-y-2 text-sm text-[var(--brand-ivory)]/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-leaf)]" />
                Vayu — clean air pockets and canopy paths.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-leaf)]" />
                Jal — ghats revived, wetlands buffered, labs on the riverbank.
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--brand-leaf)]" />
                Bhoomi — regenerative farms and seed keepers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
