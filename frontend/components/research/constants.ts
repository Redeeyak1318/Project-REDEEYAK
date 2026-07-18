import { ResearchHeroData, ResearchPhilosophyData, ResearchCurrentData } from "./types";
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