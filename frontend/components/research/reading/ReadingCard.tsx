import * as React from "react";
import { ResearchReadingItem } from "../types";
import { cn } from "@/lib/utils";

interface ReadingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ResearchReadingItem;
}

export const ReadingCard = ({ item, className, ...props }: ReadingCardProps) => {
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
            {item.title}
          </h3>
          {item.status && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {item.status}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span>{item.authors}</span>
          <span>&bull;</span>
          <span>{item.category}</span>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Topics */}
      <div className="flex flex-wrap gap-2 pt-2 mt-auto">
        {item.topics.map((topic) => (
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
