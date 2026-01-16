export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  impact: string;
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Upcoming" | "Past";
  description: string;
};

export type Testimonial = {
  name: string;
  quote: string;
  role: string;
};

export type Stat = { label: string; value: string; helper?: string };

export type Story = {
  title: string;
  excerpt: string;
  date: string;
  image: string;
};
