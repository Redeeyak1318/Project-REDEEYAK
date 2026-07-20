import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_AREAS } from "../constants";
import { AreaCard } from "./AreaCard";
import { cn } from "@/lib/utils";

export const AreasGrid = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {RESEARCH_AREAS.areas.map((area, index) => (
        <ScrollReveal key={area.id} delay={150 * (index + 1)}>
          <AreaCard area={area} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
