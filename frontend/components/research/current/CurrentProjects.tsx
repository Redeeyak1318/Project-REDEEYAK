import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_CURRENT } from "../constants";
import { CurrentProjectCard } from "./CurrentProjectCard";
import { cn } from "@/lib/utils";

export const CurrentProjects = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {RESEARCH_CURRENT.projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={150 * (index + 1)}>
          <CurrentProjectCard project={project} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
