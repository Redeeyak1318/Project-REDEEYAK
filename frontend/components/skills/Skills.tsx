import * as React from "react";

import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsGrid } from "./SkillsGrid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

export const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={cn("py-16 lg:py-28", className)}
      {...props}
    >
      <Container>
        <ScrollReveal>
          <div className="flex flex-col gap-12 lg:gap-16">
            <SkillsHeader />
            <SkillsGrid />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};