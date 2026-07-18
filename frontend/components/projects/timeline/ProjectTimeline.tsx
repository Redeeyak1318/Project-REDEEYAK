import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROJECT_TIMELINE } from "../constants";
import { TimelineItem } from "./TimelineItem";

export const ProjectTimeline = () => {
  return (
    <section aria-label="Project Timeline" className="py-12 lg:py-24 bg-muted/20 border-t border-border/50">
      <Container>
        <div className="flex flex-col gap-12">
          <ScrollReveal>
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Project Journey
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A chronological overview of key milestones, major project releases, and pivotal learning experiences.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="flex flex-col">
            {PROJECT_TIMELINE.map((entry, index) => (
              <ScrollReveal key={`${entry.year}-${entry.title}`} delay={index * 100}>
                <TimelineItem 
                  entry={entry} 
                  isLast={index === PROJECT_TIMELINE.length - 1} 
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
