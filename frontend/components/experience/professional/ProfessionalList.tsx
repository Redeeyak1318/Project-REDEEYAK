import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROFESSIONAL_EXPERIENCE_DATA } from "../constants";
import { ProfessionalCard } from "./ProfessionalCard";
import { cn } from "@/lib/utils";

export const ProfessionalList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-col gap-6 lg:gap-8", className)} {...props}>
      {PROFESSIONAL_EXPERIENCE_DATA.experiences.map((experience, index) => (
        <ScrollReveal key={experience.id} delay={150 * (index + 1)}>
          <ProfessionalCard experience={experience} />
        </ScrollReveal>
      ))}
    </div>
  );
};
