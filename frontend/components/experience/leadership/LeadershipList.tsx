import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { LEADERSHIP_EXPERIENCE_DATA } from "../constants";
import { LeadershipCard } from "./LeadershipCard";
import { cn } from "@/lib/utils";

export const LeadershipList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-3 gap-6", className)} {...props}>
      {LEADERSHIP_EXPERIENCE_DATA.experiences.map((experience, index) => (
        <ScrollReveal key={experience.id} delay={150 * (index + 1)}>
          <LeadershipCard experience={experience} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
