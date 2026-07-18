import { ResearchHeroData, ResearchPhilosophyData, ResearchCurrentData, ResearchTimelinePreviewData, ResearchPublicationsPreviewData } from "./types";
import { BrainCircuit, Cpu, Lightbulb, Users } from "lucide-react";

export const RESEARCH_HERO: ResearchHeroData = {
  badge: "Research Portfolio",
  title: "Exploring the Intersections of Computation and Cognition",
  description: "I investigate novel paradigms in software architecture, focusing on how artificial intelligence can be seamlessly integrated into developer workflows and user experiences to augment human capabilities.",
  actions: [
    {
      label: "Explore Publications",
      href: "/research/publications",
      primary: true,
    }
  ],
  stats: [
    {
      label: "Publications",
      value: "12+"
    },
    {
      label: "Citations",
      value: "350+"
    }
  ]
};

export const RESEARCH_PHILOSOPHY: ResearchPhilosophyData = {
  title: "Research Philosophy",
  description: "My approach is driven by the conviction that computation should adapt to human cognition, not the other way around. I focus on building systems that amplify capability through intuitive design.",
  principles: [
    {
      id: "human-centric",
      title: "Human-Centric Architecture",
      description: "Systems should be designed with deep empathy for the user, minimizing cognitive load and abstracting away unnecessary complexity.",
      icon: Users,
    },
    {
      id: "symbiotic-ai",
      title: "Symbiotic Intelligence",
      description: "Artificial intelligence should act as an amplifier of human capability, functioning as a collaborative partner rather than a replacement.",
      icon: BrainCircuit,
    },
    {
      id: "emergent-design",
      title: "Emergent Design",
      description: "Robust solutions emerge from simple, composable primitives that interact in predictable ways, avoiding monolithic fragility.",
      icon: Cpu,
    },
    {
      id: "continuous-discovery",
      title: "Continuous Discovery",
      description: "Research is an iterative process of prototyping, validation, and refinement, guided by empirical evidence and user feedback.",
      icon: Lightbulb,
    }
  ]
};

export const RESEARCH_CURRENT: ResearchCurrentData = {
  title: "Current Research",
  description: "Active projects exploring the next generation of software architecture and human-computer interaction.",
  projects: [
    {
      id: "adaptive-interfaces",
      title: "Adaptive User Interfaces",
      description: "Investigating UI components that dynamically adapt their complexity based on user context and cognitive load.",
      status: "Prototyping Phase",
      progress: 65,
      topics: ["HCI", "React", "State Machines"],
      badge: "Work In Progress"
    },
    {
      id: "agentic-orchestration",
      title: "Agentic Orchestration Patterns",
      description: "Developing robust architectural patterns for coordinating multiple autonomous agents within a single application context.",
      status: "Literature Review & Architecture",
      progress: 30,
      topics: ["AI", "Architecture", "Distributed Systems"]
    },
    {
      id: "semantic-memory",
      title: "Semantic Memory for IDEs",
      description: "Exploring how integrated development environments can leverage vector databases to provide highly contextual code generation.",
      status: "Evaluation Phase",
      progress: 85,
      topics: ["LLMs", "Developer Tools", "Vector Search"],
      badge: "In Review"
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
  title: "Selected Publications",
  description: "A curated selection of peer-reviewed papers, preprints, and ongoing manuscripts detailing our core research findings.",
  publications: [
    {
      id: "pub-1",
      title: "Generative UI: Synthesizing Interfaces in Real-Time",
      type: "Journal Article",
      status: "Published",
      venue: "ACM Transactions on Computer-Human Interaction",
      year: "2024",
      description: "An exploration of large language models as rendering engines, capable of generating context-aware user interfaces on the fly.",
      tags: ["Generative UI", "HCI", "LLMs"]
    },
    {
      id: "pub-2",
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