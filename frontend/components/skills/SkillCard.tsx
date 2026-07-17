import * as React from "react";
import { cn } from "@/lib/utils";
import type { Skill } from "./types";

export interface SkillCardProps extends React.HTMLAttributes<HTMLDivElement> {
  skill: Skill;
}

export const SkillCard = ({ skill, className, ...props }: SkillCardProps) => {
  const { name, category } = skill;

  if (!name) {
    return null;
  }

  const isExploring = category === "Currently Exploring";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl border px-5 py-4 transition-colors",
        isExploring
          ? "border-primary/40 bg-primary/5 text-primary hover:bg-primary/10 border-dashed"
          : "bg-card text-foreground hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <span className="text-base font-medium text-center">
        {name}
      </span>
    </div>
  );
};
