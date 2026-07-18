import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_PHILOSOPHY } from "../constants";
import { PhilosophyCard } from "./PhilosophyCard";
import { cn } from "@/lib/utils";

export const PhilosophyCards = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {RESEARCH_PHILOSOPHY.principles.map((principle, index) => (
        <ScrollReveal key={principle.id} delay={150 * (index + 1)}>
          <PhilosophyCard principle={principle} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
