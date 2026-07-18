import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

export const HeroTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <ScrollReveal delay={150}>
      <h1 
        className={cn("text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground leading-tight text-center", className)} 
        {...props}
      >
        Projects
      </h1>
    </ScrollReveal>
  );
};
