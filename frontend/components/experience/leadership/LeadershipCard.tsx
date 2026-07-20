import * as React from "react";
import { LeadershipExperienceEntry } from "../types";
import { cn } from "@/lib/utils";

interface LeadershipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: LeadershipExperienceEntry;
}

export const LeadershipCard = ({ experience, className, ...props }: LeadershipCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
              {experience.title}
            </h3>
            <p className="text-base font-medium text-primary">
              {experience.organization}
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground whitespace-nowrap">
            {experience.duration}
          </span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
      </div>

      <div className="pt-4 border-t border-border/50">
        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Highlights</h4>
        <ul className="flex flex-wrap gap-2">
          {experience.highlights.map((highlight, index) => (
            <li 
              key={index} 
              className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
