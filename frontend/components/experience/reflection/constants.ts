import { ReflectionSectionData } from "./types";

export const REFLECTION_DATA: ReflectionSectionData = {
  title: "Skills Developed & Reflection",
  description: "A summary of the core competencies built across varied experiences and a look at my continued journey of growth.",
  categories: [
    {
      id: "software-engineering",
      title: "Software Engineering",
      description: "Building robust, scalable, and modern applications.",
      skills: [
        { name: "React & Next.js" },
        { name: "TypeScript" },
        { name: "Frontend Architecture" },
        { name: "UI/UX Development" }
      ]
    },
    {
      id: "research-analysis",
      title: "Research & Analysis",
      description: "Applying rigorous methodologies to technical problems.",
      skills: [
        { name: "Literature Review" },
        { name: "Mathematical Modeling" },
        { name: "Data Analysis" },
        { name: "Scientific Writing" }
      ]
    },
    {
      id: "leadership",
      title: "Leadership",
      description: "Guiding projects and engaging with communities.",
      skills: [
        { name: "Project Management" },
        { name: "Community Engagement" },
        { name: "Event Coordination" },
        { name: "Mentorship" }
      ]
    },
    {
      id: "problem-solving",
      title: "Problem Solving",
      description: "Tackling complex challenges with structured approaches.",
      skills: [
        { name: "Algorithm Design" },
        { name: "Debugging & Troubleshooting" },
        { name: "Rapid Prototyping" },
        { name: "System Design" }
      ]
    }
  ],
  narrative: [
    {
      id: "p1",
      text: "My journey through internships, academic research, and personal projects has been defined by an unwavering commitment to continuous learning. By building through real-world projects, I have developed a deep appreciation for the practical application of theoretical concepts, ensuring that my work always remains grounded in solving tangible problems."
    },
    {
      id: "p2",
      text: "A research-driven engineering mindset has been crucial to my development. It teaches me to validate assumptions, embrace analytical rigor, and look beyond surface-level solutions. At the same time, embracing a leadership mindset and focusing on community contribution—whether through IEEE initiatives or collaborative hackathons—has shown me that technology's greatest impact comes from empowering others and working together."
    },
    {
      id: "p3",
      text: "As I look ahead, my focus remains on long-term professional growth. I am driven by the desire to continually refine my skills, bridge the gap between complex ideas and intuitive digital experiences, and contribute meaningfully to the ever-evolving landscape of software engineering."
    }
  ]
};
