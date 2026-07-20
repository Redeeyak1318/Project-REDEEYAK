import * as React from "react";
import { ProfessionalExperienceEntry } from "../types";
import { cn } from "@/lib/utils";

interface ProfessionalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: ProfessionalExperienceEntry;
}

export const ProfessionalCard = ({ experience, className, ...props }: ProfessionalCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">
            {experience.role}
          </h3>
          <p className="text-base font-medium text-primary">
            {experience.organization}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-secondary/50 px-3 py-1 text-sm font-medium text-secondary-foreground whitespace-nowrap">
          {experience.duration}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Highlights</h4>
          <ul className="space-y-2">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2.5 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                <span className="text-muted-foreground leading-relaxed">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {experience.reflection && (
          <div className="pt-4 border-t border-border/50">
            <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">Reflection</h4>
            <p className="text-muted-foreground leading-relaxed italic">
              &quot;{experience.reflection}&quot;
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
