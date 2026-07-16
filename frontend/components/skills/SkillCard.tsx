import * as React from "react";
import { cn } from "@/lib/utils";
import type { Skill } from "./types";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: Skill;
}

export const SkillCard = ({ skill, className, ...props }: SkillCardProps) => {
  const { name, icon } = skill;

  if (!name) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border bg-card px-5 py-4 transition-colors",
        className
      )}
      {...props}
    >
      <span className="text-base font-medium text-foreground">
        {name}
      </span>
    </div>
  );
};
