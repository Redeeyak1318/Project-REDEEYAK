import * as React from "react";
import { cn } from "@/lib/utils";
import { EXPERIENCE_DATA } from "./constants";
import { ExperienceCard } from "./ExperienceCard";

export interface ExperienceTimelineProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ExperienceTimeline = ({ className, ...props }: ExperienceTimelineProps) => {
  const { experiences } = EXPERIENCE_DATA;

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      {experiences.map((experience) => (
        <ExperienceCard
          key={`${experience.organization}-${experience.role}`}
          experience={experience}
        />
      ))}
    </div>
  );
};
