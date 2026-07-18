import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_CTA } from "../constants";
import { cn } from "@/lib/utils";

export const CTAContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ScrollReveal>
      <div className={cn("flex flex-col gap-4 mb-8", className)} {...props}>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {RESEARCH_CTA.title}
        </h2>
        <p className="text-lg text-muted-foreground">
          {RESEARCH_CTA.description}
        </p>
      </div>
    </ScrollReveal>
  );
};
