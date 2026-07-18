import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_HERO } from "../constants";
import { cn } from "@/lib/utils";

export const HeroDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <ScrollReveal delay={300}>
      <p className={cn("text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-2xl", className)} {...props}>
        {RESEARCH_HERO.description}
      </p>
    </ScrollReveal>
  );
};
