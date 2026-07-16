import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export interface ProjectsProps extends React.HTMLAttributes<HTMLElement> {}

export const Projects = ({ className, ...props }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          <ProjectsHeader />
          <ProjectsGrid />
        </div>
      </Container>
    </section>
  );
};
