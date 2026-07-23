import Image from "next/image";
import Link from "next/link";
import { FeaturedProjectData } from "../types";
import { Button } from "@/components/ui/button";

export function FeaturedProject({ title, subtitle, project }: FeaturedProjectData) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{title}</h3>
        {subtitle && (
          <p className="text-muted-foreground">{subtitle}</p>
        )}
      </div>

      <div className="group relative overflow-hidden rounded-2xl border bg-card p-4 sm:p-6 md:p-8 transition-colors hover:bg-accent/50">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6 w-full">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
                  {project.badge}
                </span>
                {project.status && (
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-primary text-primary-foreground">
                    {project.status}
                  </span>
                )}
              </div>

              <h4 className="text-2xl md:text-3xl font-bold tracking-tight">
                {project.title}
              </h4>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 pt-4">
              {project.liveUrl && (
                <Button render={<Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" render={<Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
                  GitHub
                </Button>
              )}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden border bg-muted transition-colors">
            {project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={`Preview of ${project.title}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                No Image Available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
