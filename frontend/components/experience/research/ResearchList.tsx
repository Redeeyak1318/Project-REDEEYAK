import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_EXPERIENCE_DATA } from "../constants";
import { ResearchCard } from "./ResearchCard";
import { cn } from "@/lib/utils";

export const ResearchList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-6", className)} {...props}>
      {RESEARCH_EXPERIENCE_DATA.experiences.map((experience, index) => (
        <ScrollReveal key={experience.id} delay={150 * (index + 1)}>
          <ResearchCard experience={experience} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
