import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PROJECTS_DATA } from "../constants";
import { FeaturedContent } from "./FeaturedContent";
import { FeaturedStats } from "./FeaturedStats";
import { FeaturedActions } from "./FeaturedActions";

export const FeaturedProject = () => {
  const project = PROJECTS_DATA.featuredProject;

  if (!project) return null;

  return (
    <section aria-label="Featured Project" className="py-12 lg:py-24">
      <Container>
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 order-2 lg:order-1">
              <FeaturedContent project={project} />
              <FeaturedStats project={project} />
              <FeaturedActions project={project} />
            </div>
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden order-1 lg:order-2 bg-muted border border-border/50">
              <Image
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
