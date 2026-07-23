import type { ComponentType } from "react";

export interface CaseStudyHeroData {
  title: string;
  subtitle?: string;
  heroImageSrc: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectOverviewData {
  role: string;
  timeline: string;
  teamSize?: string;
  overview: string;
}

export interface ProblemStatementData {
  title?: string;
  statement: string;
  context?: string;
}

export interface SolutionOverviewData {
  title?: string;
  description: string;
  keyFeatures: string[];
}

export interface TechnicalArchitectureData {
  title?: string;
  description: string;
  architectureImageSrc?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Technology {
  name: string;
  icon?: ComponentType<{
    className?: string;
  }>;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  solution: string;
}

export interface Outcome {
  id: string;
  metric?: string;
  description: string;
}

export interface ProjectNavigationData {
  previousProject?: {
    title: string;
    href: string;
  };
  nextProject?: {
    title: string;
    href: string;
  };
}

export interface CaseStudy {
  id: string;
  hero: CaseStudyHeroData;
  overview: ProjectOverviewData;
  problem: ProblemStatementData;
  solution: SolutionOverviewData;
  architecture: TechnicalArchitectureData;
  gallery: GalleryImage[];
  technologies: Technology[];
  challenges: Challenge[];
  outcomes: Outcome[];
  navigation?: ProjectNavigationData;
}
