import { ResearchHeroData, ResearchPhilosophyData, ResearchCurrentData, ResearchTimelinePreviewData, ResearchPublicationsPreviewData, ResearchCTAData, ResearchAreasData, ResearchReadingData } from "./types";
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
  title: "Research Journey",
  description: "Key milestones that reflect my evolving interests in engineering, applied mathematics, and research.",
  items: [
    {
      id: "milestone-1",
      year: "2025",
      title: "Beginning Applied Mathematics Research",
      description: "Started exploring mathematical methods used in engineering research, laying the foundation for future review work.",
      category: "Research"
    },
    {
      id: "milestone-2",
      year: "2026",
      title: "Review Manuscript Development",
      description: "Began developing the review manuscript 'Mathematics in Applied Research: A Thematic Review of Methods, Applications, and Emerging Frontiers.'",
      category: "Publication"
    },
    {
      id: "milestone-3",
      year: "Present",
      title: "Biomedical & Healthcare Research",
      description: "Expanding research interests toward biomedical signal processing, healthcare visualization, and interdisciplinary engineering applications.",
      category: "Current Focus"
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
    }
  ]
};

export const RESEARCH_CTA: ResearchCTAData = {
  title: "Research Collaboration",
  description: "I'm always interested in discussing research ideas, exchanging knowledge, and exploring opportunities for collaboration in applied mathematics, biomedical engineering, healthcare technology, and software engineering research.",
  actions: [
    {
      id: "collaborate",
      label: "Get in Touch",
      href: "/contact",
      primary: true,
    },
    {
      id: "portfolio",
      label: "View Projects",
      href: "/portfolio",
    }
  ]
};

export const RESEARCH_AREAS: ResearchAreasData = {
  title: "Research Areas",
  description: "Research domains that define my current academic interests and guide ongoing investigations.",
  areas: [
    {
      id: "biomedical-signal-processing",
      title: "Biomedical Signal Processing",
      description: "Research focused on computational methods for processing and analyzing physiological signals such as EMG and ECG.",
      focus: "EMG, ECG, biomedical data analysis",
      keywords: ["EMG", "ECG", "Signal Processing", "Biomedical Engineering"]
    },
    {
      id: "healthcare-visualization",
      title: "Healthcare Visualization",
      description: "Research exploring human-centered visualization techniques that improve the interpretation of healthcare data.",
      focus: "Human-centered visualization for healthcare systems",
      keywords: ["Healthcare", "Visualization", "HCI", "Information Design"]
    },
    {
      id: "applied-mathematics",
      title: "Applied Mathematics",
      description: "Research examining mathematical methods and quantitative models used across modern engineering disciplines.",
      focus: "Mathematical methods applied to engineering research",
      keywords: ["Applied Mathematics", "Engineering", "Modeling", "Research Methods"]
    }
  ]
};

export const RESEARCH_READING: ResearchReadingData = {
  title: "Literature Reviews & Reading List",
  description: "A curated collection of books, papers, and reviews currently informing my research.",
  items: [
    {
      id: "reading-1",
      title: "Biomedical Signal Processing and Signal Analysis",
      authors: "Various Authors",
      category: "Book",
      status: "Currently Studying",
      description:
        "Studying foundational concepts and computational methods used in biomedical signal analysis.",
      topics: ["Biomedical Signals", "EMG", "ECG"]
    },
    {
      id: "reading-2",
      title: "Human–Computer Interaction for Healthcare",
      authors: "Various Authors",
      category: "Research Papers",
      status: "Reading",
      description:
        "Reviewing research on human-centered interaction and visualization techniques for healthcare applications.",
      topics: ["HCI", "Healthcare", "Visualization"]
    },
    {
      id: "reading-3",
      title: "Applied Mathematics in Engineering",
      authors: "Various Authors",
      category: "Literature Review",
      status: "Reviewing",
      description:
        "Exploring mathematical models and analytical methods commonly applied in engineering research.",
      topics: ["Mathematics", "Engineering", "Modeling"]
    }
  ]
};