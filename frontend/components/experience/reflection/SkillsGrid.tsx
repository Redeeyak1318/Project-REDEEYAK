import * as React from "react";
import { cn } from "@/lib/utils";
import { REFLECTION_DATA } from "./constants";
import { SkillCategory } from "./SkillCategory";

export interface SkillsGridProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SkillsGrid = ({ className, ...props }: SkillsGridProps) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", 
        className
      )} 
      {...props}
    >
      {REFLECTION_DATA.categories.map((category) => (
        <SkillCategory key={category.id} category={category} />
      ))}
    </div>
  );
};
