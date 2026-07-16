import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project } from "./types";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = ({ project, className, ...props }: ProjectCardProps) => {
  const { title, description, imageSrc, technologies } = project;

  return (
    <div
      className={cn("flex flex-col gap-6 rounded-xl border bg-card p-6", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-md border">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${title}`}
          width={800}
          height={450}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-base text-muted-foreground">{description}</p>
      </div>

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
    </div>
  );
};
