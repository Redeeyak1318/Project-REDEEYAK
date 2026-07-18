import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export const HeroDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <ScrollReveal delay={300}>
      <p 
        className={cn("text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center", className)} 
        {...props}
      >
        Every project is an experiment in solving problems, refining ideas, and learning through execution.
      </p>
    </ScrollReveal>
  );
};
