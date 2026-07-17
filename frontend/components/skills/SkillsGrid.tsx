import * as React from "react";
import { cn } from "@/lib/utils";
import { SKILLS_DATA } from "./constants";
import { SkillCard } from "./SkillCard";

export interface SkillsGridProps extends React.HTMLAttributes<HTMLDivElement> { }

export const SkillsGrid = ({ className, ...props }: SkillsGridProps) => {
  const { skills } = SKILLS_DATA;

  if (!skills || skills.length === 0) {
    return null;
  }

  const categoryOrder = [
    "Programming Languages",
    "Frontend Development",
    "Backend Development",
    "Tools & Platforms",
    "Currently Exploring",
  ];

  const categories = categoryOrder.filter((category) =>
    skills.some((skill) => skill.category === category)
  );

  return (
    <div className={cn("flex flex-col gap-10", className)} {...props}>
      {categories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category);
        return (
          <div key={category} className="flex flex-col gap-5">
            <h3 className="text-xl font-semibold tracking-tight text-foreground border-b pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categorySkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
