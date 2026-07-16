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
