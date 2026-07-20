import { ExperienceData, ProfessionalExperienceData, ResearchExperienceData } from "./types";

export const EXPERIENCE_DATA: ExperienceData = {
  title: "Experience",
  subtitle: "Every experience is an opportunity to learn, contribute, and grow.",
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
      organization: "EUREEKA Institute of Computer and Fine Arts",
      role: "Computer Science Intern",
      duration: "July 2026",
      description: [
        "Assisted in technical and educational initiatives.",
        "Conducted surveys and community engagement activities.",
        "Designed promotional materials and digital content.",
        "Produced educational and marketing videos.",
        "Contributed to institutional branding and outreach."
      ],
      technologies: [
        "Communication",
        "Teamwork",
        "Community Engagement",
        "Digital Content Creation",
        "Branding"
      ]
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

export const PROFESSIONAL_EXPERIENCE_DATA: ProfessionalExperienceData = {
  title: "Professional Experience",
  description: "Roles where I contributed to institutional goals, collaborated with teams, and applied technical skills in real-world environments.",
  experiences: [
    {
      id: "eureeka-intern",
      organization: "EUREEKA Institute of Computer and Fine Arts",
      role: "Computer Science Intern",
      duration: "July 2026",
      highlights: [
        "Assisted in technical and educational initiatives.",
        "Conducted surveys and community engagement activities.",
        "Designed promotional materials and digital content.",
        "Produced educational and marketing videos.",
        "Contributed to institutional branding and outreach."
      ],
      reflection: "This internship strengthened my understanding of communication, teamwork, and applying technical skills in a real-world educational environment."
    }
  ]
};

export const RESEARCH_EXPERIENCE_DATA: ResearchExperienceData = {
  title: "Research Experience",
  description: "Academic research has strengthened my analytical thinking, problem-solving abilities, and commitment to continuous learning.",
  experiences: [
    {
      id: "emg-ecg",
      title: "EMG & ECG Signal Analysis",
      status: "Ongoing",
      description: "Research focused on analyzing electromyography (EMG) and electrocardiography (ECG) signals for biomedical applications.",
      focusAreas: [
        "Biomedical Signal Processing",
        "Data Analysis",
        "Pattern Recognition"
      ]
    },
    {
      id: "hc-visualization",
      title: "Human-Centered Healthcare Visualization",
      status: "Active",
      description: "Exploring visualization techniques that improve accessibility and decision-making in healthcare systems through user-centered design.",
      focusAreas: [
        "Information Visualization",
        "Healthcare Systems",
        "Human-Centered Design"
      ]
    },
    {
      id: "math-applied-research",
      title: "Mathematics in Applied Research",
      status: "Review Paper",
      description: "Conducting a thematic review on mathematical methods, applications, and emerging research frontiers across artificial intelligence, software engineering, and interdisciplinary sciences.",
      focusAreas: [
        "Mathematical Modeling",
        "Literature Review",
        "Scientific Writing"
      ]
    }
  ]
};
