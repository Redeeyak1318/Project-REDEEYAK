import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";

export interface ExperienceProps extends React.HTMLAttributes<HTMLElement> {}

export const Experience = ({ className, ...props }: ExperienceProps) => {
  return (
    <section
      id="experience"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        {/* TODO: Compose Experience section */}
      </Container>
    </section>
  );
};
