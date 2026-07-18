import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {}

export const Experience = ({ className, ...props }: ExperienceProps) => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={cn("py-16 lg:py-28", className)}
      {...props}
    >
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-16">
            <ExperienceHeader />
            <ExperienceTimeline />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
