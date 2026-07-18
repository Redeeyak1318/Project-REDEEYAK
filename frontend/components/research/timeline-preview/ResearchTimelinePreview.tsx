import * as React from "react";
import { Container } from "@/components/layout";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineList } from "./TimelineList";
import { cn } from "@/lib/utils";

export interface ResearchTimelinePreviewProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchTimelinePreview = ({ className, ...props }: ResearchTimelinePreviewProps) => {
  return (
    <section 
      aria-label="Research Timeline Preview"
      className={cn("py-16 lg:py-24 bg-background", className)} 
      {...props}
    >
      <Container>
        <div className="max-w-4xl mx-auto w-full">
          <TimelineHeader />
          <TimelineList />
        </div>
      </Container>
    </section>
  );
};
