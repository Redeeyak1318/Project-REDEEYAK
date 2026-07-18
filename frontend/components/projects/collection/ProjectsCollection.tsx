import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectsGrid } from "./ProjectsGrid";

export const ProjectsCollection = () => {
  return (
    <section aria-label="Projects Collection" className="py-12 lg:py-24 bg-muted/30">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                All Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Explore a comprehensive collection of my work, spanning full-stack web applications, open source, and research.
              </p>
            </div>
            
            <ProjectsGrid />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
