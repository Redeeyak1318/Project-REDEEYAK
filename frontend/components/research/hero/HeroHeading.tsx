import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_HERO } from "../constants";
import { cn } from "@/lib/utils";

export const HeroHeading = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <ScrollReveal delay={150}>
      <h1 className={cn("text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-tight", className)} {...props}>
        {RESEARCH_HERO.title}
      </h1>
    </ScrollReveal>
  );
};
