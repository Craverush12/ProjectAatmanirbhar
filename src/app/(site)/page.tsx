import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { Pillars } from "@/components/sections/Pillars";
import { FieldStories } from "@/components/sections/FieldStories";
import { MapSnapshot } from "@/components/sections/MapSnapshot";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FounderNote } from "@/components/sections/FounderNote";
import { ClosingCTA } from "@/components/sections/CTA";
import ColorAestheticWidget from "@/components/ColorAestheticWidget";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Project Aatmanirbhar | Ancient Wisdom, Modern Action",
  description:
    "Project Aatmanirbhar blends sacred ecology with modern science to restore air, water, and soil across the Yamuna Valley. Join as a volunteer, donor, or collaborator.",
};

export default function HomePage() {
  const stories = listContent("blog");

  return (
    <div className="space-y-14 md:space-y-16">
      <HomeHero />
      <ImpactStrip />
      <ColorAestheticWidget />
      <Pillars />
      <FieldStories stories={stories} />
      <MapSnapshot />
      <TrustStrip />
      <FounderNote />
      <ClosingCTA />
    </div>
  );
}
