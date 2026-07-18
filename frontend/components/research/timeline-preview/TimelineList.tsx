import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_TIMELINE_PREVIEW } from "../constants";
import { TimelineItem } from "./TimelineItem";
import { cn } from "@/lib/utils";

export const TimelineList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {RESEARCH_TIMELINE_PREVIEW.items.map((item, index) => (
        <ScrollReveal key={item.id} delay={150 * (index + 1)}>
          <TimelineItem item={item} />
        </ScrollReveal>
      ))}
    </div>
  );
};
