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