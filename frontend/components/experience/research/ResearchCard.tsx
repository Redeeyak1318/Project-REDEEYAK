import * as React from "react";
import { ResearchExperienceEntry } from "../types";
import { cn } from "@/lib/utils";

interface ResearchCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: ResearchExperienceEntry;
}

export const ResearchCard = ({ experience, className, ...props }: ResearchCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
          {experience.title}
        </h3>
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary whitespace-nowrap">
          {experience.status}
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        {experience.description}
      </p>

      <div className="pt-4 border-t border-border/50">
        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Focus Areas</h4>
        <ul className="flex flex-wrap gap-2">
          {experience.focusAreas.map((area, index) => (
            <li 
              key={index} 
              className="inline-flex items-center rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
