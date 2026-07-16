import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";

export interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {}

export const Experience = ({ className, ...props }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          <ExperienceHeader />
          <ExperienceTimeline />
        </div>
      </Container>
    </section>
  );
};
