import { LucideIcon } from "lucide-react";

export interface ResearchHeroStat {
  label: string;
  value: string;
}

export interface ResearchHeroAction {
  label: string;
  href: string;
  primary?: boolean;
}

export interface ResearchHeroData {
  badge: string;
  title: string;
  description: string;
  actions: ResearchHeroAction[];
  stats: ResearchHeroStat[];
}

export interface ResearchPrinciple {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ResearchPhilosophyData {
  title: string;
  description: string;
  principles: ResearchPrinciple[];
}

export interface CurrentResearchProject {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
  topics: string[];
  badge?: string;
}

export interface ResearchCurrentData {
  title: string;
  description: string;
  projects: CurrentResearchProject[];
}

export interface ResearchTimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
  category?: string;
}

export interface ResearchTimelinePreviewData {
  title: string;
  description: string;
  items: ResearchTimelineItem[];
}

export interface ResearchPublication {
  id: string;
  title: string;
  type: string;
  status: string;
  venue: string;
  year: string;
  description: string;
  tags: string[];
}

export interface ResearchPublicationsPreviewData {
  title: string;
  description: string;
  publications: ResearchPublication[];
}