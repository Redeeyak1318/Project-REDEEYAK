import * as React from "react";
import { cn } from "@/lib/utils";
import { SKILLS_DATA } from "./constants";

export interface SkillsHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkillsHeader = ({ className, ...props }: SkillsHeaderProps) => {
  const { title, subtitle } = SKILLS_DATA;

  if (!title && !subtitle) {
    return null;
  }

  return (
    <div
      className={cn("flex flex-col gap-4 items-center text-center", className)}
      {...props}
    >
      {title && (
        <h2 id="skills-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};
