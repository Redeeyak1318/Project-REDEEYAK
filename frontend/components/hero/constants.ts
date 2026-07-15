import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroData } from "./types";

export const HERO_DATA: HeroData = {
  badge: "Available for new opportunities",
  greeting: "Hello, I'm",
  name: "Redeeyak",
  role: "",
  description: "",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact Me",
    href: "#contact",
  },
  socials: [
    {
      label: "GitHub",
      href: "",
      icon: GithubIcon,
    },
    {
      label: "LinkedIn",
      href: "",
      icon: LinkedinIcon,
    },
    {
      label: "Email",
      href: "",
      icon: Mail,
    },
  ],
};
