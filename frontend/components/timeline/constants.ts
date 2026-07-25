import { TimelineSectionData } from "./types";

export const TIMELINE_DATA: TimelineSectionData = {
  title: "My Journey",
  items: [
    {
      id: "project-redeeyak",
      title: "Project Lead & Full-Stack Developer",
      organization: "Project REDEEYAK",
      duration: "2026 – Present",
      location: "Remote",
      description: "Designed a modular component-based architecture using Next.js and React. Built reusable UI components with TypeScript and Tailwind CSS.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      achievements: [
        "Deployed and maintained the portfolio using Vercel.",
        "Implemented a robust Timeline module with continuous connectors."
      ],
      current: true,
    },
    {
      id: "eureeka-intern",
      title: "Computer Science Intern",
      organization: "EUREEKA Institute of Computer and Fine Arts",
      duration: "July 2026",
      location: "On-site",
      description: "Assisted in technical and educational initiatives. Conducted surveys and community engagement activities.",
      technologies: ["Digital Content Creation", "Branding"],
      achievements: [
        "Produced educational and marketing videos.",
        "Contributed to institutional branding and outreach."
      ]
    },
    {
      id: "independent-research",
      title: "Undergraduate Research",
      organization: "Independent Academic Research",
      duration: "2026",
      description: "Conducted literature review and thematic analysis. Explored mathematical applications in AI and software engineering.",
      technologies: ["Data Analysis", "Pattern Recognition", "Scientific Writing"],
      achievements: [
        "Improved research manuscripts through peer-review revisions."
      ]
    }
  ]
};
