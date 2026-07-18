import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_HERO } from "../constants";
import { cn } from "@/lib/utils";

export const HeroStats = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  if (!RESEARCH_HERO.stats || RESEARCH_HERO.stats.length === 0) return null;

  return (
    <ScrollReveal delay={600}>
      <div className={cn("flex flex-wrap gap-8 pt-8", className)} {...props}>
        {RESEARCH_HERO.stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-3xl font-bold text-foreground">{stat.value}</span>
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
};
