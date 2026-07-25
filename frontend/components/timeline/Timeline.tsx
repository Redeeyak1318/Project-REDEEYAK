import * as React from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { TimelineSection } from "./TimelineSection";
import { TIMELINE_DATA } from "./constants";

export interface TimelineProps extends React.HTMLAttributes<HTMLElement> {}

export const Timeline = ({ className, ...props }: TimelineProps) => {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className={cn("py-16 lg:py-28 bg-muted/50", className)}
      {...props}
    >
      <Container>
        <ScrollReveal>
          <TimelineSection {...TIMELINE_DATA} />
        </ScrollReveal>
      </Container>
    </section>
  );
};
