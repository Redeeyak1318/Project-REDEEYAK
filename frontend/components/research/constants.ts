import { ResearchHeroData, ResearchPhilosophyData, ResearchCurrentData, ResearchTimelinePreviewData, ResearchPublicationsPreviewData, ResearchCTAData } from "./types";
import { BrainCircuit, Cpu, Lightbulb, Users } from "lucide-react";

export const RESEARCH_HERO: ResearchHeroData = {
  badge: "",
  title: "Research",
  description: "Exploring questions before building solutions.",
  actions: [],
  stats: [],
};

export const RESEARCH_PHILOSOPHY: ResearchPhilosophyData = {
  title: "Research Philosophy",
  description:
    "I approach research as a process of asking meaningful questions before building solutions. My work combines curiosity-driven learning, interdisciplinary thinking, applied mathematics, and evidence-based engineering to understand complex problems before attempting to solve them. Rather than pursuing technology for its own sake, I focus on research that can translate into practical impact, particularly in healthcare technology, biomedical signal analysis, and human-centered visualization. Every investigation contributes to a deeper understanding of how engineering principles, data, and thoughtful design can improve real-world systems while creating opportunities for future collaboration and continuous learning.",
  principles: [
    {
      id: "curiosity-driven",
      title: "Curiosity-Driven Learning",
      description: "Continuously exploring new paradigms, languages, and frameworks to uncover how they solve fundamental engineering problems.",
      icon: Lightbulb,
    },
    {
      id: "interdisciplinary-thinking",
      title: "Interdisciplinary Thinking",
      description: "Applying insights from cognitive science, design, and systems architecture to build more intuitive software.",
      icon: Users,
    },
    {
      id: "practical-impact",
      title: "Practical Impact",
      description: "Ensuring research translates into tools, libraries, or patterns that solve real-world problems for users and developers.",
      icon: Cpu,
    },
    {
      id: "engineering-through-evidence",
      title: "Engineering Through Evidence",
      description: "Relying on empirical data, performance metrics, and rigorous studies rather than assumptions to guide architectural decisions.",
      icon: BrainCircuit,
    }
  ]
};

export const RESEARCH_CURRENT: ResearchCurrentData = {
  title: "Current Research",
  description: "Active investigations at the intersection of biomedical engineering, healthcare technology, and applied mathematics.",
  projects: [
    {
      id: "emg-ecg-analysis",
      title: "EMG & ECG Signal Analysis",
      description:
        "Exploring computational techniques for processing electromyography (EMG) and electrocardiography (ECG) signals to support biomedical analysis and future healthcare applications.",
      status: "Ongoing",
      progress: 60,
      topics: ["Biomedical Signals", "Signal Processing", "Data Analysis"],
      badge: "Active"
    },
    {
      id: "healthcare-visualization",
      title: "Human-Centered Healthcare Visualization",
      description:
        "Investigating human-centered visualization techniques that improve the interpretation and communication of complex healthcare data for researchers and practitioners.",
      status: "Active",
      progress: 45,
      topics: ["HCI", "Data Visualization", "Health Informatics"]
    },
    {
      id: "applied-math-engineering",
      title: "Applied Mathematics in Engineering Research",
      description:
        "Conducting a review of mathematical methods and their applications in modern engineering research to identify emerging trends, methodologies, and future research opportunities.",
      status: "Review Paper",
      progress: 30,
      topics: ["Applied Mathematics", "Systems Engineering", "Literature Review"],
      badge: "Drafting"
    }
  ]
};

export const RESEARCH_TIMELINE_PREVIEW: ResearchTimelinePreviewData = {
  title: "Research Milestones",
  description: "Key developments and paradigm shifts in our continuous exploration of human-computer interaction.",
  items: [
    {
      id: "milestone-1",
      year: "2024",
      title: "Agentic Design Systems",
      description: "Published foundational research on generative design systems capable of autonomous evolution.",
      category: "Publication"
    },
    {
      id: "milestone-2",
      year: "2023",
      title: "Semantic UI Framework",
      description: "Developed a declarative UI framework powered by large language models for real-time interface synthesis.",
      category: "Open Source"
    },
    {
      id: "milestone-3",
      year: "2022",
      title: "Cognitive Load Mapping",
      description: "Conducted empirical studies on the relationship between interface density and developer productivity.",
      category: "Research Study"
    }
  ]
};

export const RESEARCH_PUBLICATIONS_PREVIEW: ResearchPublicationsPreviewData = {
  title: "Featured Publication",
  description: "Highlighting the manuscript currently under development and the research directions it explores.",
  publications: [
    {
      id: "pub-1",
      title: "Mathematics in Applied Research: A Thematic Review of Methods, Applications, and Emerging Frontiers",
      type: "Review Paper",
      status: "In Progress",
      year: "2026",
      description: "A review manuscript examining mathematical methods, their applications across engineering disciplines, and emerging research directions to provide a structured overview of current trends and future opportunities.",
      tags: ["Applied Mathematics", "Engineering", "Literature Review", "Research Methods"]
    },
    {
      id: "pub-3",
      title: "The Agentic DOM: A New Paradigm for Web Architecture",
      type: "Conference Paper",
      status: "Under Review",
      venue: "CHI 2025",
      year: "2025",
      description: "Proposing a new architecture where DOM elements possess autonomous behaviors to adapt to user interaction patterns.",
      tags: ["Web Architecture", "Agentic Systems"]
    },
    {
      id: "pub-3",
      title: "Cognitive Density in IDE Workflows",
      type: "Technical Report",
      status: "Preprint",
      venue: "arXiv",
      year: "2023",
      description: "Empirical study measuring the impact of information density on developer cognitive load during complex debugging tasks.",
      tags: ["Developer Experience", "Cognitive Load"]
    }
  ]
};

export const RESEARCH_CTA: ResearchCTAData = {
  title: "Ready to Collaborate?",
  description: "Whether you're interested in discussing research ideas, exploring potential collaborations, or simply connecting professionally, I'm always open to new conversations.",
  actions: [
    {
      id: "collaborate",
      label: "Get in Touch",
      href: "/contact",
      primary: true,
    },
    {
      id: "portfolio",
      label: "Explore Portfolio",
      href: "/portfolio",
    }
  ]
};