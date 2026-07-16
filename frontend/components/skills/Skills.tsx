import * as React from "react";

import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

export interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

export const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <section
      id="skills"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        {/* TODO: Compose Skills section */}
      </Container>
    </section>
  );
};