import { Project } from "../types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full">
      <div className="relative aspect-video w-full overflow-hidden bg-muted border-b">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/50">
            Image Placeholder
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-semibold tracking-tight line-clamp-1">
            {project.title}
          </h3>
          {project.status && (
            <span className="shrink-0 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium text-muted-foreground">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        <div className="flex items-center gap-4 mt-auto pt-4 border-t">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
