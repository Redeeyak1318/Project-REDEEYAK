import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_HERO } from "../constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroActions = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  if (!RESEARCH_HERO.actions || RESEARCH_HERO.actions.length === 0) return null;

  return (
    <ScrollReveal delay={450}>
      <div className={cn("pt-4 flex flex-wrap gap-4", className)} {...props}>
        {RESEARCH_HERO.actions.map((action, i) => (
          <Button
            key={i}
            size="lg"
            variant={action.primary ? "default" : "outline"}
            className={cn("rounded-full font-medium px-8", action.primary && "group")}
          >
            {action.label}
            {action.primary && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
          </Button>
        ))}
      </div>
    </ScrollReveal>
  );
};
