import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_HERO } from "../constants";
import { cn } from "@/lib/utils";

export const HeroBadge = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ScrollReveal delay={0}>
      <p className={cn("text-lg sm:text-xl font-medium text-primary tracking-wide", className)} {...props}>
        {RESEARCH_HERO.badge}
      </p>
    </ScrollReveal>
  );
};
