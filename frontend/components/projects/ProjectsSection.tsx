import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProjectsHero } from "./hero";
import { FeaturedProject } from "./featured";
import { ProjectCategories } from "./categories";
import { ProjectsGrid } from "./grid";
import { ProjectTimeline } from "./timeline";
import { ProjectsCTA } from "./cta";


import {
  PROJECTS_HERO,
  FEATURED_PROJECT,
  PROJECT_CATEGORIES,
  PROJECTS_GRID,
  PROJECT_TIMELINE,
  PROJECTS_CTA,
} from "./constants";

export function ProjectsSection() {
  return (
    <Container className="py-20 md:py-32 flex flex-col gap-24 md:gap-32">
      <ScrollReveal>
        <ProjectsHero {...PROJECTS_HERO} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <FeaturedProject {...FEATURED_PROJECT} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProjectCategories
          title={PROJECT_CATEGORIES.title}
          description={PROJECT_CATEGORIES.description}
          categories={PROJECT_CATEGORIES.categories}
        />
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <ProjectsGrid projects={PROJECTS_GRID} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProjectTimeline items={PROJECT_TIMELINE} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProjectsCTA {...PROJECTS_CTA} />
      </ScrollReveal>
    </Container>
  );
}
