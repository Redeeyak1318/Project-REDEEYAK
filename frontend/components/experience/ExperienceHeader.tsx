import * as React from "react";
import { cn } from "@/lib/utils";
import { EXPERIENCE_DATA } from "./constants";

export interface ExperienceHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExperienceHeader = ({ className, ...props }: ExperienceHeaderProps) => {
  const { title, subtitle } = EXPERIENCE_DATA;

  if (!title && !subtitle) {
    return null;
  }

  return (
    <div
      className={cn("flex flex-col items-center gap-4 text-center", className)}
      {...props}
    >
      {title && (
        <h2 id="experience-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};
