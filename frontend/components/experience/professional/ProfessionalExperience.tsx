import * as React from "react";
import { ProfessionalHeader } from "./ProfessionalHeader";
import { ProfessionalList } from "./ProfessionalList";
import { cn } from "@/lib/utils";

export interface ProfessionalExperienceProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ProfessionalExperience = ({ className, ...props }: ProfessionalExperienceProps) => {
  return (
    <div 
      aria-label="Professional Experience"
      className={cn("flex flex-col gap-8 lg:gap-12 w-full pt-8 sm:pt-12 border-t border-border/50", className)} 
      {...props}
    >
      <ProfessionalHeader />
      <ProfessionalList />
    </div>
  );
};
