import * as React from "react";
import { HeroBackground } from "./HeroBackground";
import { HeroBadge } from "./HeroBadge";
import { HeroHeading } from "./HeroHeading";
import { HeroDescription } from "./HeroDescription";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

export interface ResearchHeroProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchHero = ({ className, ...props }: ResearchHeroProps) => {
  return (
    <section
      aria-label="Research Introduction"
      className={cn("relative flex flex-col justify-center pt-16 pb-12 lg:pt-32 lg:pb-24 overflow-hidden", className)}
      {...props}
    >
      <HeroBackground />
      <Container>
        <div className="flex flex-col gap-6 lg:gap-8 relative z-10">
          <HeroBadge />
          <HeroHeading />
          <HeroDescription />
          <HeroActions />
          <HeroStats />
        </div>
      </Container>
    </section>
  );
};