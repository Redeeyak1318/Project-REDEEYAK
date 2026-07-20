import * as React from "react";
import { ResearchHeader } from "./ResearchHeader";
import { ResearchList } from "./ResearchList";
import { cn } from "@/lib/utils";

export interface ResearchExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ResearchExperience = ({ className, ...props }: ResearchExperienceProps) => {
  return (
    <div 
      aria-label="Research Experience"
      className={cn("flex flex-col gap-8 lg:gap-12 w-full pt-8 sm:pt-12 border-t border-border/50", className)} 
      {...props}
    >
      <ResearchHeader />
      <ResearchList />
    </div>
  );
};
