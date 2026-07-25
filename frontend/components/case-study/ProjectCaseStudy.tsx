import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CaseStudy } from "./types";
import { CaseStudyHero } from "./hero";
import { ProjectOverview } from "./overview";
import { ProblemStatement } from "./problem";
import { SolutionOverview } from "./solution";
import { TechnicalArchitecture } from "./architecture";
import { ProjectGallery } from "./gallery";
import { TechnologyStack } from "./technologies";
import { ChallengesSection } from "./challenges";
import { ProjectOutcomes } from "./outcomes";
import { ProjectNavigation } from "./navigation";

export function ProjectCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  if (!caseStudy) return null;

  return (
    <Container className="py-20 md:py-32 flex flex-col gap-24 md:gap-32">
      <ScrollReveal>
        <CaseStudyHero {...caseStudy.hero} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProjectOverview {...caseStudy.overview} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ProblemStatement {...caseStudy.problem} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <SolutionOverview {...caseStudy.solution} />
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <TechnicalArchitecture {...caseStudy.architecture} />
      </ScrollReveal>

      {caseStudy.gallery && caseStudy.gallery.images?.length > 0 && (
        <ScrollReveal delay={150}>
          <ProjectGallery {...caseStudy.gallery} />
        </ScrollReveal>
      )}

      {caseStudy.technologies && caseStudy.technologies.technologies?.length > 0 && (
        <ScrollReveal delay={150}>
          <TechnologyStack {...caseStudy.technologies} />
        </ScrollReveal>
      )}

      {caseStudy.challenges && caseStudy.challenges.challenges?.length > 0 && (
        <ScrollReveal delay={150}>
          <ChallengesSection {...caseStudy.challenges} />
        </ScrollReveal>
      )}

      {caseStudy.outcomes && caseStudy.outcomes.outcomes?.length > 0 && (
        <ScrollReveal delay={150}>
          <ProjectOutcomes {...caseStudy.outcomes} />
        </ScrollReveal>
      )}

      {caseStudy.navigation && (
        <ScrollReveal delay={150}>
          <ProjectNavigation {...caseStudy.navigation} />
        </ScrollReveal>
      )}
    </Container>
  );
}
