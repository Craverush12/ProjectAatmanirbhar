import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { listContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects | Project Aatmanirbhar",
  description: "Gallery of initiatives with filters for category and location.",
};

export default function ProjectsPage() {
  const projects = listContent("projects");
  return <ProjectsClient projects={projects} />;
}
