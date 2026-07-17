import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { HeroData } from "./types";

export const HERO_DATA: HeroData = {
  badge: "Open to Internships & Collaborations",
  greeting: "Hi, I'm",
  name: "Raktim Sonowal",
  branding: "also known as REDEEYAK",
  role: "Computer Science Student • Full-Stack Developer • AI & Research Enthusiast",
  description: "Building meaningful software, one project at a time. I'm a Computer Science student driven by curiosity, combining full-stack development with research to build modern, user-focused digital experiences and solve real-world challenges.",
  image: {
    src: "/hero_placeholder_dev.png",
    alt: "Developer Profile",
  },
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Download Resume",
    href: "#resume",
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
