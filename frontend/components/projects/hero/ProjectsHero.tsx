import * as React from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";

export interface ProjectsHeroProps extends React.HTMLAttributes<HTMLElement> {}

export const ProjectsHero = ({ className, ...props }: ProjectsHeroProps) => {
  return (
    <section
      aria-label="Projects Hero"
      className={cn("relative flex flex-col justify-center pt-16 pb-12 lg:pt-32 lg:pb-24 overflow-hidden", className)}
      {...props}
    >
      <Container>
        <div className="flex flex-col gap-6 lg:gap-8 items-center text-center relative z-10">
          <HeroTitle />
          <HeroDescription />
        </div>
      </Container>
    </section>
  );
};
