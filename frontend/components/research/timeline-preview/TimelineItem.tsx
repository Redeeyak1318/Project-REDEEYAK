import * as React from "react";
import { ResearchTimelineItem } from "../types";
import { cn } from "@/lib/utils";

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ResearchTimelineItem;
}

export const TimelineItem = ({ item, className, ...props }: TimelineItemProps) => {
  return (
    <div className={cn("flex flex-col sm:flex-row gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 last:border-0", className)} {...props}>
      <div className="sm:w-32 shrink-0 pt-1">
        <span className="text-xl font-bold text-foreground/80">{item.year}</span>
      </div>
      
      <div className="flex flex-col gap-3 flex-grow">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-xl font-semibold text-foreground tracking-tight">
            {item.title}
          </h3>
          {item.category && (
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {item.category}
            </span>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          {item.description}
        </p>
      </div>
    </div>
  );
};
