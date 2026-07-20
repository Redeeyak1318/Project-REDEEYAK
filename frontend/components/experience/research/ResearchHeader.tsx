import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_EXPERIENCE_DATA } from "../constants";
import { cn } from "@/lib/utils";

export const ResearchHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-col gap-4 max-w-3xl mb-12 lg:mb-16", className)} {...props}>
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {RESEARCH_EXPERIENCE_DATA.title}
        </h2>
      </ScrollReveal>
      {RESEARCH_EXPERIENCE_DATA.description && (
        <ScrollReveal delay={150}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {RESEARCH_EXPERIENCE_DATA.description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};
