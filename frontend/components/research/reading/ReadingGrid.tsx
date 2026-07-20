import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_READING } from "../constants";
import { ReadingCard } from "./ReadingCard";
import { cn } from "@/lib/utils";

export const ReadingGrid = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {RESEARCH_READING.items.map((item, index) => (
        <ScrollReveal key={item.id} delay={150 * (index + 1)}>
          <ReadingCard item={item} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
