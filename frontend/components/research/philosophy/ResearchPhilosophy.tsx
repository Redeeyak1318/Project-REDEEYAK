import * as React from "react";
import { Container } from "@/components/layout";
import { PhilosophyHeader } from "./PhilosophyHeader";
import { PhilosophyCards } from "./PhilosophyCards";
import { cn } from "@/lib/utils";

export interface ResearchPhilosophyProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchPhilosophy = ({ className, ...props }: ResearchPhilosophyProps) => {
  return (
    <section 
      aria-label="Research Philosophy"
      className={cn("py-16 lg:py-24 bg-background", className)} 
      {...props}
    >
      <Container>
        <PhilosophyHeader />
        <PhilosophyCards />
      </Container>
    </section>
  );
};
