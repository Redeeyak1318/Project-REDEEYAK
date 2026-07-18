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
        "group/card flex items-center justify-center rounded-xl border px-5 py-4 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md hover:border-border/80 motion-reduce:transition-none motion-reduce:hover:scale-100",
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
