import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TECHNOLOGIES_DATA } from "../constants";
import { TechnologyCategory } from "./TechnologyCategory";

export const TechnologiesInPractice = () => {
  return (
    <section aria-label="Technologies in Practice" className="py-12 lg:py-24 border-t border-border/50">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Technologies in Practice
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A curated selection of the frameworks, languages, and tools I use to build scalable architectures and robust applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {TECHNOLOGIES_DATA.map((category) => (
                <TechnologyCategory key={category.title} category={category} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
