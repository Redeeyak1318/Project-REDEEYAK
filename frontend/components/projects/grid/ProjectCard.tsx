import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground transition-colors">
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden border-b bg-muted transition-colors">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={`Preview of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/20">
            No Image Available
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        {/* Header: Title and Badges */}
        <div className="mb-4 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.badge && (
              <span className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors">
                {project.badge}
              </span>
            )}
            {project.status && (
              <span className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors">
                {project.status}
              </span>
            )}
          </div>

          <h4 className="text-xl font-bold tracking-tight line-clamp-2">
            {project.title}
          </h4>
        </div>

        {/* Description */}
        <p className="mb-6 flex-1 text-muted-foreground line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-md border border-transparent bg-secondary/50 px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-3 border-t pt-4">
            {project.liveUrl && (
              <Button size="sm" render={<Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" render={<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
