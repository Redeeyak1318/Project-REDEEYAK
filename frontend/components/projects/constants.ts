import { Project } from "./types";

export const PROJECTS_DATA = {
  title: "Featured Projects",
  subtitle: "Showcasing my work in full-stack development and software engineering.",
  projects: [
    {
      id: "project-1",
      title: "Placeholder Project 1",
      description: "This is a placeholder description for the first project showcasing full-stack capabilities.",
      imageSrc: "/projects/project-1.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/Redeeyak1318/project-one",
      liveUrl: "https://project-one.vercel.app",
      featured: true,
    },
    {
      id: "project-2",
      title: "Placeholder Project 2",
      description: "This is a placeholder description for the second project focusing on robust backend architecture.",
      imageSrc: "/projects/project-2.png",
      technologies: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/Redeeyak1318/project-two",
    },
    {
      id: "project-3",
      title: "Placeholder Project 3",
      description: "This is a placeholder description for the third project highlighting database management.",
      imageSrc: "/projects/project-3.png",
      technologies: ["Next.js", "Prisma", "TypeScript"],
      featured: false,
    },
  ] as Project[],
};
