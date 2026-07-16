import * as React from "react";

import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsGrid } from "./SkillsGrid";

export interface SkillsProps extends React.HTMLAttributes<HTMLElement> {}

export const Skills = ({ className, ...props }: SkillsProps) => {
  return (
    <section
      id="skills"
      className={cn("py-20 lg:py-28", className)}
      {...props}
    >
      <Container>
        <div className="flex flex-col gap-12 lg:gap-16">
          <SkillsHeader />
          <SkillsGrid />
        </div>
      </Container>
    </section>
  );
};