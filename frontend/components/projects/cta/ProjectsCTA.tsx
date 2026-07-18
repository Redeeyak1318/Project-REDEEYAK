import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROJECTS_CTA_DATA } from "../constants";
import { CTAContent } from "./CTAContent";
import { CTAActions } from "./CTAActions";

export const ProjectsCTA = () => {
  return (
    <section aria-label="Call to Action" className="py-16 lg:py-32 bg-muted/30 border-t border-border/50">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center px-4">
            <CTAContent ctaData={PROJECTS_CTA_DATA} />
            <CTAActions ctaData={PROJECTS_CTA_DATA} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
