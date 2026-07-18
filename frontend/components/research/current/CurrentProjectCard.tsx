import * as React from "react";
import { CurrentResearchProject } from "../types";
import { cn } from "@/lib/utils";

interface CurrentProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: CurrentResearchProject;
}

export const CurrentProjectCard = ({ project, className, ...props }: CurrentProjectCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">
            {project.title}
          </h3>
          {project.badge && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {project.badge}
            </span>
          )}
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {project.status}
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed flex-grow">
        {project.description}
      </p>

      {/* Progress Indicator (Visual Only) */}
      <div className="flex flex-col gap-2" aria-hidden="true">
        <div className="h-2 w-full bg-secondary overflow-hidden rounded-full">
          <div 
            className="h-full bg-primary rounded-full" 
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Topics/Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {project.topics.map((topic) => (
          <span 
            key={topic} 
            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
