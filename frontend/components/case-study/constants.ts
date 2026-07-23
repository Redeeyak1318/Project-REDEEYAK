import { CaseStudy } from "./types";

export const CASE_STUDY_DATA: CaseStudy = {
  id: "sample-case-study",
  hero: {
    title: "Project Alpha",
    subtitle: "A revolutionary way to manage tasks.",
    heroImageSrc: "/images/case-study-placeholder.jpg",
    tags: ["Productivity", "Web App"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/repo",
  },
  overview: {
    role: "Lead Developer",
    timeline: "Jan 2026 - Mar 2026",
    teamSize: "3 Members",
    overview: "Project Alpha was conceived to address the growing complexity of task management for remote teams, delivering a seamless experience across all devices.",
  },
  problem: {
    title: "The Problem",
    statement: "Remote teams struggle with scattered communication and disorganized tasks, leading to decreased productivity.",
    context: "With the rise of remote work in recent years, traditional tools failed to bridge the gap effectively.",
  },
  solution: {
    title: "The Solution",
    description: "We built a unified platform that integrates task management, real-time messaging, and progress tracking.",
    keyFeatures: [
      "Real-time collaboration",
      "Intuitive drag-and-drop interface",
      "Advanced reporting and analytics",
    ],
  },
  architecture: {
    title: "Technical Architecture",
    description: "The application relies on a modern serverless architecture powered by Next.js App Router and a robust headless CMS.",
  },
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "Dashboard View", caption: "Main user dashboard." },
    { src: "/images/gallery-2.jpg", alt: "Task Detail", caption: "Detailed view of a single task." },
  ],
  technologies: [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
  ],
  challenges: [
    {
      id: "c1",
      title: "Real-time Synchronization",
      description: "Ensuring all clients see state changes immediately without refreshing.",
      solution: "Implemented WebSockets with a robust fallback polling mechanism.",
    },
  ],
  outcomes: [
    {
      id: "o1",
      metric: "30%",
      description: "Increase in team productivity reported by early adopters.",
    },
    {
      id: "o2",
      description: "Successfully launched MVP ahead of schedule.",
    },
  ],
  navigation: {
    previousProject: { title: "Project Beta", href: "/projects/beta" },
    nextProject: { title: "Project Gamma", href: "/projects/gamma" },
  },
};
