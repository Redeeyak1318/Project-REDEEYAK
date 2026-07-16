export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}
