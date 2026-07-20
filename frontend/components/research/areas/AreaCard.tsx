import * as React from "react";
import { ResearchArea } from "../types";
import { cn } from "@/lib/utils";

interface AreaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  area: ResearchArea;
}

export const AreaCard = ({ area, className, ...props }: AreaCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          {area.title}
        </h3>
        <p className="text-sm font-medium text-primary">
          Focus: {area.focus}
        </p>
      </div>

      <p className="text-muted-foreground leading-relaxed flex-grow">
        {area.description}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 pt-2">
        {area.keywords.map((keyword) => (
          <span 
            key={keyword} 
            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};
