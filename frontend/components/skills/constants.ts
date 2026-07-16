import { SkillsData } from "./types";

export const SKILLS_DATA: SkillsData = {
  title: "My Skills",
  subtitle: "Technologies I work with",
  skills: [
    { name: "C", category: "Languages", icon: "c" },
    { name: "C++", category: "Languages", icon: "cplusplus" },
    { name: "Python", category: "Languages", icon: "python" },
    { name: "JavaScript", category: "Languages", icon: "javascript" },
    { name: "TypeScript", category: "Languages", icon: "typescript" },

    { name: "HTML5", category: "Frontend", icon: "html5" },
    { name: "CSS3", category: "Frontend", icon: "css3" },
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Next.js", category: "Frontend", icon: "nextjs" },
    { name: "Tailwind CSS", category: "Frontend", icon: "tailwindcss" },

    { name: "Node.js", category: "Backend", icon: "nodejs" },
    { name: "Express.js", category: "Backend", icon: "express" },

    { name: "MongoDB", category: "Database", icon: "mongodb" },
    { name: "Prisma", category: "Database", icon: "prisma" },

    { name: "Git", category: "Tools", icon: "git" },
    { name: "GitHub", category: "Tools", icon: "github" },
  ],
};
