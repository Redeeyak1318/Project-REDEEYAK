import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "./types";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = ({ project, className, ...props }: ProjectCardProps) => {
  const { title, description, imageSrc, technologies, highlights, githubUrl, liveUrl, featured } = project;

  return (
    <div
      className={cn("flex flex-col gap-6 rounded-xl border bg-card p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-md border">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${title}`}
          width={800}
          height={450}
          className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          {featured && (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Featured
            </span>
          )}
        </div>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="flex list-inside list-disc flex-col gap-1 text-sm text-muted-foreground">
          {highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={`${title}-${tech}`}
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
};
