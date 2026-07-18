import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ProjectsHero } from "@/components/projects/hero/ProjectsHero";
import { ProjectsGrid } from "@/components/projects/collection/ProjectsGrid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> { }

export const Projects = ({ className, ...props }: ProjectsProps) => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-16">
            <ProjectsHero />
            <ProjectsGrid />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
