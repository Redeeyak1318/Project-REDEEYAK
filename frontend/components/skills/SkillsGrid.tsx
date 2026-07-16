import * as React from "react";
import { cn } from "@/lib/utils";
import { SKILLS_DATA } from "./constants";
import { SkillCard } from "./SkillCard";

export interface SkillsGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkillsGrid = ({ className, ...props }: SkillsGridProps) => {
  const { skills } = SKILLS_DATA;

  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
        className
      )}
      {...props}
    >
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
};
