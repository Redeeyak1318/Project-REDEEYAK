import * as React from "react";
import { cn } from "@/lib/utils";
import { ReflectionHeader } from "./ReflectionHeader";
import { SkillsGrid } from "./SkillsGrid";
import { ReflectionNarrative } from "./ReflectionNarrative";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface ExperienceReflectionProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ExperienceReflection = ({ className, ...props }: ExperienceReflectionProps) => {
  return (
    <ScrollReveal>
      <div
        className={cn("flex flex-col gap-10", className)}
        {...props}
      >
        <ReflectionHeader />
        <SkillsGrid />
        <ReflectionNarrative />
      </div>
    </ScrollReveal>
  );
};
