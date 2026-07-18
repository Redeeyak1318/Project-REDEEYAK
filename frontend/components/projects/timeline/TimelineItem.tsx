import * as React from "react";
import { TimelineEntry } from "../types";
import { Badge } from "@/components/ui/badge";
import { TimelineConnector } from "./TimelineConnector";

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast?: boolean;
}

export const TimelineItem = ({ entry, isLast }: TimelineItemProps) => {
  return (
    <div className="relative flex gap-6 md:gap-8 lg:gap-12 pb-12 last:pb-0">
      <div className="relative flex flex-col items-center shrink-0">
        <div className="relative z-10 flex h-8 w-8 md:h-12 md:w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-sm">
          <div className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary" />
        </div>
      </div>
      
      {!isLast && <TimelineConnector />}
      
      <div className="flex flex-col gap-3 pt-1 md:pt-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm md:text-base font-semibold text-primary">{entry.year}</span>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">{entry.title}</h3>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          {entry.description}
        </p>
        
        {entry.technologies && entry.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {entry.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
