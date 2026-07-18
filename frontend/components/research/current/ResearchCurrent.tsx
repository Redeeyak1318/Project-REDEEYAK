import * as React from "react";
import { Container } from "@/components/layout";
import { CurrentHeader } from "./CurrentHeader";
import { CurrentProjects } from "./CurrentProjects";
import { cn } from "@/lib/utils";

export interface ResearchCurrentProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchCurrent = ({ className, ...props }: ResearchCurrentProps) => {
  return (
    <section 
      aria-label="Current Research"
      className={cn("py-16 lg:py-24 bg-background", className)} 
      {...props}
    >
      <Container>
        <CurrentHeader />
        <CurrentProjects />
      </Container>
    </section>
  );
};
