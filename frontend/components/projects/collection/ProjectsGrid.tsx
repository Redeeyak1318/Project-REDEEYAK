import * as React from "react";
import { cn } from "@/lib/utils";
import { PROJECTS_DATA } from "@/components/projects/constants";
import { ProjectCard } from "@/components/projects/collection/ProjectCard";

export interface ProjectsGridProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ProjectsGrid = ({ className, ...props }: ProjectsGridProps) => {
  const { projects } = PROJECTS_DATA;

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}
      {...props}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};
