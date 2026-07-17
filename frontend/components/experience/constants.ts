import { ExperienceData } from "./types";

export const EXPERIENCE_DATA: ExperienceData = {
  title: "Experience",
  subtitle: "Building experience through projects, research, and real-world collaboration.",
  experiences: [
    {
      organization: "Project REDEEYAK",
      role: "Project Lead & Full-Stack Developer",
      duration: "2026 – Present",
      description: [
        "Designed a modular component-based architecture using Next.js and React.",
        "Built reusable UI components with TypeScript and Tailwind CSS.",
        "Deployed and maintained the portfolio using Vercel."
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
      organization: "EUREEKA Education & Services",
      role: "Software & Digital Marketing Intern",
      duration: "July 2026",
      description: [
        "Conducted field surveys and market research.",
        "Designed digital promotional content.",
        "Contributed to educational outreach initiatives."
      ],
      technologies: ["Market Research", "Digital Marketing", "Content Design"]
    },
    {
      organization: "Independent Academic Research",
      role: "Undergraduate Research",
      duration: "2026",
      description: [
        "Conducted literature review and thematic analysis.",
        "Explored mathematical applications in AI and software engineering.",
        "Improved research manuscripts through peer-review revisions."
      ],
      technologies: [
        "Literature Review",
        "Mathematical Modeling",
        "Scientific Writing"
      ]
    }
  ],
};
