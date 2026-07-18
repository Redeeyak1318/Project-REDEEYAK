export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  category?: string;
  status?: string;
  timeline?: string;
  impact?: string;
}

export interface TechnologyCategoryData {
  title: string;
  technologies: string[];
}
