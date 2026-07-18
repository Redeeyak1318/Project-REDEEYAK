import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "@/components/projects/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = ({ project, className, ...props }: ProjectCardProps) => {
  const { title, description, imageSrc, technologies, highlights, githubUrl, liveUrl } = project;

  return (
    <div
      className={cn("group/card flex flex-col h-full gap-6 rounded-xl border bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.01] hover:shadow-md hover:border-border/80 motion-reduce:transition-none motion-reduce:hover:scale-100", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-md border">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${title}`}
          width={800}
          height={450}
          className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
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
          <Badge key={`${title}-${tech}`} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      {(githubUrl || liveUrl) && (
        <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto">
          {githubUrl && (
            <Button
              variant="outline"
              render={<a href={githubUrl} target="_blank" rel="noopener noreferrer" />}
            >
              GitHub
            </Button>
          )}
          {liveUrl && (
            <Button
              render={<a href={liveUrl} target="_blank" rel="noopener noreferrer" />}
            >
              Live Demo
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
