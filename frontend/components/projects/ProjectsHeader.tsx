import * as React from "react";
import { cn } from "@/lib/utils";
import { PROJECTS_DATA } from "./constants";

export interface ProjectsHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ProjectsHeader = ({ className, ...props }: ProjectsHeaderProps) => {
  const { title, subtitle } = PROJECTS_DATA;

  return (
    <div
      className={cn("flex flex-col items-center gap-4 text-center", className)}
      {...props}
    >
      <h2 id="projects-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};
