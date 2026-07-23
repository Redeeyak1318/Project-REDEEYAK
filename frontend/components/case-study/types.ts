import type { ComponentType } from "react";

export interface CaseStudyHeroData {
  title: string;
  subtitle?: string;
  heroImageSrc: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  introduction?: string;
  duration?: string;
  role?: string;
  status?: string;
  year?: string;
}

export interface ProjectOverviewData {
  title?: string;
  role?: string;
  timeline?: string;
  teamSize?: string;
  overview: string | string[];
  highlight?: string;
  keyPoints?: string[];
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

export interface ProjectGalleryData {
  title?: string;
  images: GalleryImage[];
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
  gallery: ProjectGalleryData;
  technologies: Technology[];
  challenges: Challenge[];
  outcomes: Outcome[];
  navigation?: ProjectNavigationData;
}