import {
  ProjectsHeroData,
  FeaturedProjectData,
  ProjectCategory,
  Project,
  ProjectsTimelineItem,
  ProjectsCTAData,
} from "./types";

export const PROJECTS_HERO: ProjectsHeroData = {
  heading: "Projects & Work",
  subtitle: "Showcasing my work in full-stack development, AI, and research.",
  introCopy: "A collection of projects spanning various technologies and domains, demonstrating my ability to build scalable and maintainable solutions.",
};

export const FEATURED_PROJECT: FeaturedProjectData = {
  title: "Featured Project",
  subtitle: "Highlighting recent significant work.",
  project: {
    id: "founderskick",
    title: "FoundersKick",
    description: "A full-stack networking platform designed to connect entrepreneurs, foster collaboration, and support startup communities.",
    imageSrc: "/projects/project_founderskick.png",
    technologies: [
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express" }
    ],
    status: "Live",
    githubUrl: "https://github.com/Redeeyak1318/FoundersKick",
    liveUrl: "https://founderskick.com",
    categoryId: "full-stack",
  },
};

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { id: "all", name: "All Projects" },
  { id: "full-stack", name: "Full-Stack Web App" },
  { id: "ai", name: "Artificial Intelligence" },
  { id: "research", name: "Research" },
];

export const PROJECTS_GRID: Project[] = [
  {
    id: "redeeyak",
    title: "Project REDEEYAK",
    description: "A comprehensive personal portfolio platform showcasing my projects, skills, and research.",
    imageSrc: "/projects/project_redeeyak.png",
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" }
    ],
    status: "Live",
    githubUrl: "https://github.com/Redeeyak1318/Project-REDEEYAK",
    liveUrl: "https://project-redeeyak.vercel.app",
    categoryId: "full-stack",
  },
  {
    id: "eureeka",
    title: "EUREEKA Internship",
    description: "Contributions made during the EUREEKA internship, focusing on software engineering best practices.",
    imageSrc: "/projects/project_eureeka.png",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Git" },
      { name: "Agile" }
    ],
    status: "Completed",
    liveUrl: "https://eureekainstitute.com",
    categoryId: "full-stack",
  },
  {
    id: "cp-journey",
    title: "Competitive Programming Journey",
    description: "A continuous journey of solving algorithmic challenges and participating in programming contests.",
    imageSrc: "/projects/project_cp_journey.png",
    technologies: [
      { name: "C++" },
      { name: "Java" },
      { name: "Algorithms" },
      { name: "Data Structures" }
    ],
    status: "Completed",
    githubUrl: "https://github.com/Redeeyak1318/cp-solutions",
    categoryId: "research",
  },
];

export const PROJECT_TIMELINE: ProjectsTimelineItem[] = [
  {
    id: "present",
    year: "Present",
    title: "Project REDEEYAK",
    description: "Designed and continue to develop a modern personal portfolio platform showcasing projects, research, and technical expertise using Next.js and a scalable component architecture.",
  },
  {
    id: "2026-founderskick",
    year: "2026",
    title: "FoundersKick Development",
    description: "Architected and built a comprehensive full-stack networking platform to connect and empower entrepreneurs globally.",
  },
  {
    id: "2026-eureeka",
    year: "2026",
    title: "EUREEKA Internship",
    description: "Contributed to production-ready features in an agile team environment, emphasizing software engineering best practices.",
  },
  {
    id: "learning",
    year: "Learning",
    title: "Competitive Programming Journey",
    description: "Began a rigorous journey solving hundreds of algorithmic challenges, achieving notable rankings in regional contests.",
  }
];

export const PROJECTS_CTA: ProjectsCTAData = {
  title: "Let's Build Something Great",
  description: "Have a project in mind or want to discuss potential collaborations? I'm always open to new opportunities and exciting challenges.",
  primaryAction: {
    label: "Get in Touch",
    href: "/contact",
  },
  secondaryAction: {
    label: "View Experience",
    href: "/experience",
  },
};

export const PROJECTS_SECTION = {
  hero: PROJECTS_HERO,
  featured: FEATURED_PROJECT,
  categories: PROJECT_CATEGORIES,
  projects: PROJECTS_GRID,
  timeline: PROJECT_TIMELINE,
  cta: PROJECTS_CTA,
};
