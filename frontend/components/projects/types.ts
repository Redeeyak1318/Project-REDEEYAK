export type ProjectStatus = "Live" | "In Progress" | "Planned" | "Completed";

export interface Technology {
  name: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: Technology[];
  status?: ProjectStatus;
  githubUrl?: string;
  liveUrl?: string;
  categoryId?: string;
}

export interface FeaturedProjectData {
  title: string;
  subtitle: string;
  project: Project;
}

export interface ProjectsHeroData {
  heading: string;
  subtitle: string;
  introCopy: string;
}

export interface ProjectsCTAData {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

export interface ProjectsTimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

