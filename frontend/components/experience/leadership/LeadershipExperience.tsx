import * as React from "react";
import { LeadershipHeader } from "./LeadershipHeader";
import { LeadershipList } from "./LeadershipList";
import { cn } from "@/lib/utils";

export interface LeadershipExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LeadershipExperience = ({ className, ...props }: LeadershipExperienceProps) => {
  return (
    <div 
      aria-label="Leadership & Community"
      className={cn("flex flex-col gap-8 lg:gap-12 w-full pt-8 sm:pt-12 border-t border-border/50", className)} 
      {...props}
    >
      <LeadershipHeader />
      <LeadershipList />
    </div>
  );
};
