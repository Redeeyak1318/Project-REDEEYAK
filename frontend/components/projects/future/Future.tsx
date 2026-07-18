import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FutureGrid } from "./FutureGrid";

export const Future = () => {
  return (
    <section aria-label="Future Focus" className="py-12 lg:py-24 border-t border-border/50">
      <Container>
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Looking Ahead
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                As technology rapidly evolves, I'm constantly exploring new domains to expand my skill set and deliver more impactful solutions.
              </p>
            </div>
          </ScrollReveal>
          
          <FutureGrid />
        </div>
      </Container>
    </section>
  );
};
