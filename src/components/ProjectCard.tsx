import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types";

type Props = {
  project: Project;
  compact?: boolean;
};

const ProjectCard = ({ project, compact = false }: Props) => {
  return (
    <article className="soft-card overflow-hidden rounded-2xl border border-emerald-100 bg-white transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700">
          {project.category}
        </span>
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold text-emerald-950">{project.title}</h3>
        <p className="text-sm leading-relaxed text-emerald-800/80">{project.summary}</p>
        <div className="flex items-center justify-between text-sm font-semibold text-emerald-700">
          <span>{project.impact}</span>
          {!compact && (
            <Link href="/projects" className="text-emerald-700 hover:text-emerald-900">
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
