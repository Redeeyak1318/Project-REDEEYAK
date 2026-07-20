export interface ExperienceEntry {
  organization: string;
  role: string;
  duration: string;
  location?: string;
  description: string[];
  technologies?: string[];
  link?: string;
}

export interface ExperienceData {
  title: string;
  subtitle?: string;
  experiences: ExperienceEntry[];
}

export interface ProfessionalExperienceEntry {
  id: string;
  organization: string;
  role: string;
  duration: string;
  highlights: string[];
  reflection?: string;
}

export interface ProfessionalExperienceData {
  title: string;
  description?: string;
  experiences: ProfessionalExperienceEntry[];
}

export interface ResearchExperienceEntry {
  id: string;
  title: string;
  status: string;
  description: string;
  focusAreas: string[];
}

export interface ResearchExperienceData {
  title: string;
  description?: string;
  experiences: ResearchExperienceEntry[];
}
