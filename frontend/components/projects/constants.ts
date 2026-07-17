import { Project } from "./types";

export const PROJECTS_DATA = {
  title: "Featured Projects",
  subtitle: "Showcasing my work in full-stack development, AI, and research.",
  projects: [
    {
      id: "redeeyak",
      title: "Project REDEEYAK",
      description: "A comprehensive personal portfolio platform showcasing my projects, skills, and research.",
      imageSrc: "/projects/project_redeeyak.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Built with modern Next.js App Router for optimal performance.",
        "Features a dynamic, responsive design with dark mode support.",
        "Showcases scalable component architecture."
      ],
      githubUrl: "https://github.com/Redeeyak1318/Project-REDEEYAK",
      liveUrl: "https://project-redeeyak.vercel.app",
      featured: true,
    },
    {
      id: "founderskick",
      title: "FoundersKick",
      description: "A full-stack networking platform designed to connect entrepreneurs, foster collaboration, and support startup communities.",
      imageSrc: "/projects/project_founderskick.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express"],
      highlights: [
        "Developed full-stack features to support user interactions.",
        "Optimized database queries for efficient data retrieval.",
        "Implemented secure authentication and user profiles."
      ],
      githubUrl: "https://github.com/Redeeyak1318/FoundersKick",
      liveUrl: "https://founderskick.com",
    },
    {
      id: "eureeka",
      title: "EUREEKA Internship",
      description: "Contributions made during the EUREEKA internship, focusing on software engineering best practices.",
      imageSrc: "/projects/project_eureeka.png",
      technologies: ["React", "TypeScript", "Git", "Agile"],
      highlights: [
        "Collaborated with a cross-functional team in an agile environment.",
        "Delivered production-ready features ahead of schedule.",
        "Participated in code reviews and architecture planning."
      ],
      liveUrl: "https://eureekainstitute.com",
    },
    {
      id: "cp-journey",
      title: "Competitive Programming Journey",
      description: "A continuous journey of solving algorithmic challenges and participating in programming contests.",
      imageSrc: "/projects/project_cp_journey.png",
      technologies: ["C++", "Java", "Algorithms", "Data Structures"],
      highlights: [
        "Solved 500+ algorithmic problems across various platforms.",
        "Achieved notable rankings in regional coding competitions.",
        "Deepened understanding of graph theory and dynamic programming."
      ],
      githubUrl: "https://github.com/Redeeyak1318/cp-solutions",
    },
  ] as Project[],
};
