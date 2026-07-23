"use client";

import { useState, useMemo } from "react";
import { Project, ProjectCategory } from "./types";
import { ProjectCategories } from "./categories";
import { ProjectsGrid } from "./grid";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface ProjectsFilterContainerProps {
  categoriesProps: {
    title: string;
    description: string;
    categories: ProjectCategory[];
  };
  projects: Project[];
}

export function ProjectsFilterContainer({
  categoriesProps,
  projects,
}: ProjectsFilterContainerProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.categoryId === activeCategory);
  }, [activeCategory, projects]);

  return (
    <>
      <ScrollReveal delay={150}>
        <ProjectCategories
          title={categoriesProps.title}
          description={categoriesProps.description}
          categories={categoriesProps.categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <ProjectsGrid projects={filteredProjects} />
      </ScrollReveal>
    </>
  );
}
