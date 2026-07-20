import * as React from "react";
import { Container } from "@/components/layout";
import { ReadingHeader } from "./ReadingHeader";
import { ReadingGrid } from "./ReadingGrid";
import { cn } from "@/lib/utils";

export interface ResearchReadingProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchReading = ({ className, ...props }: ResearchReadingProps) => {
  return (
    <section 
      aria-label="Literature Reviews & Reading List"
      className={cn("py-16 lg:py-24 bg-muted/30", className)} 
      {...props}
    >
      <Container>
        <ReadingHeader />
        <ReadingGrid />
      </Container>
    </section>
  );
};
