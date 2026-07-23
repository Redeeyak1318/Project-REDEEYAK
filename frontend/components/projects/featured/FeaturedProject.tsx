import { FeaturedProjectData } from "../types";

export function FeaturedProject({ title, subtitle, project }: FeaturedProjectData) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="group relative overflow-hidden rounded-2xl border bg-card p-4 sm:p-6 md:p-8 transition-colors hover:bg-accent/50">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4 w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-xl md:text-2xl font-bold tracking-tight">
                {project.title}
              </h4>
              {project.status && (
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                  {project.status}
                </span>
              )}
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                >
                  View Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-video bg-muted rounded-xl border overflow-hidden relative">
            {/* Image Placeholder */}
            {project.imageSrc ? (
              <img
                src={project.imageSrc}
                alt={project.title}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Image Placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
