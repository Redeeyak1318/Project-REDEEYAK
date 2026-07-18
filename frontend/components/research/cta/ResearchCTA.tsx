import * as React from "react";
import { Container } from "@/components/layout";
import { CTAContent } from "./CTAContent";
import { CTAActions } from "./CTAActions";
import { cn } from "@/lib/utils";

export interface ResearchCTAProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchCTA = ({ className, ...props }: ResearchCTAProps) => {
  return (
    <section 
      aria-label="Research Call to Action"
      className={cn("py-16 lg:py-24 bg-background", className)} 
      {...props}
    >
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <CTAContent />
          <CTAActions />
        </div>
      </Container>
    </section>
  );
};
