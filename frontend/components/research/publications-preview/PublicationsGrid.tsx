import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_PUBLICATIONS_PREVIEW } from "../constants";
import { PublicationCard } from "./PublicationCard";
import { cn } from "@/lib/utils";

export const PublicationsGrid = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {RESEARCH_PUBLICATIONS_PREVIEW.publications.map((publication, index) => (
        <ScrollReveal key={publication.id} delay={150 * (index + 1)}>
          <PublicationCard publication={publication} className="h-full" />
        </ScrollReveal>
      ))}
    </div>
  );
};
