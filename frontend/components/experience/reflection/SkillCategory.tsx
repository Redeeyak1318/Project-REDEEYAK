import * as React from "react";
import { cn } from "@/lib/utils";
import type { SkillCategoryData } from "./types";

export interface SkillCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  category: SkillCategoryData;
}

export const SkillCategory = ({ category, className, ...props }: SkillCategoryProps) => {
  return (
    <div
      className={cn(
        "group/card flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md hover:border-border/80 motion-reduce:transition-none motion-reduce:hover:scale-100",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        {category.icon && (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-secondary/40 text-primary">
            {category.icon}
          </div>
        )}

        <h3 className="text-xl font-semibold text-foreground tracking-tight">
          {category.title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {category.description}
        </p>
      </div>

      {category.skills && category.skills.length > 0 && (
        <div className="mt-auto pt-2 flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center rounded-md border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {skill.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
