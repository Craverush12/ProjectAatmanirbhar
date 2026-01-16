export const aestheticOptions = [
  {
    id: "river-dawn",
    name: "River Dawn",
    tagline: "Mist ivory, river teal, saffron spark",
    description: "Soft morning light with clean teal waters and warm saffron accents.",
    swatches: ["#1c8c8a", "#ffb341", "#f6f2ea"],
  },
  {
    id: "vayu-air",
    name: "Vayu Air",
    tagline: "Sky drift, eucalyptus mint",
    description: "Light, breathable palette with airy blues and eucalyptus greens.",
    swatches: ["#6ad0ff", "#d6f2ff", "#1a3a5a"],
  },
  {
    id: "jal-river",
    name: "Jal River",
    tagline: "Deep indigo, river jade",
    description: "Cool, flowing hues inspired by dusk on the Yamuna.",
    swatches: ["#0b223a", "#1f8a9d", "#e8f5ff"],
  },
  {
    id: "bhoomi-earth",
    name: "Bhoomi Earth",
    tagline: "Terracotta, neem, grain",
    description: "Earth-warm story with clay, olive, and sunlit grain.",
    swatches: ["#a34a2c", "#6f8c4e", "#f3e6d5"],
  },
  {
    id: "night-river",
    name: "Night River",
    tagline: "Ink depths, teal glow",
    description: "Deep ink base with cool teal and warm sand for a refined dark mode.",
    swatches: ["#050912", "#5fd3cf", "#ffd27a"],
  },
  {
    id: "field-notes",
    name: "Field Notes",
    tagline: "Paper, charcoal, muted green",
    description: "Textured paper tones with grounded charcoal and gentle agro-green accents.",
    swatches: ["#f7f1e3", "#1f1b16", "#6c8a6a"],
  },
] as const;

export type AestheticId = (typeof aestheticOptions)[number]["id"];
