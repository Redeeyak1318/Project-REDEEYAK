import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { socialLinks } from "@/lib/social-links";
import * as React from "react";
import type {
  AvailabilityStatus,
  ContactCTAData,
  ContactMethod,
  SocialLink,
} from "./types";

export const CONTACT_SECTION = {
  badge: "Contact",
  title: "Let's Connect",
  description:
    "I'm always open to discussing software development, research collaborations, internships, and exciting opportunities. The contact form is currently under development, so feel free to reach out via email or LinkedIn.",
};

export const CONTACT_METHODS: (ContactMethod & { label: string; href: string })[] = [
  {
    id: "email",
    title: "Email",
    label: "Email",
    description: "My inbox is always open.",
    value: socialLinks.email,
    link: `mailto:${socialLinks.email}`,
    href: `mailto:${socialLinks.email}`,
    icon: Mail as unknown as React.ReactNode,
  },
  {
    id: "location",
    title: "Location",
    label: "Location",
    description: "Assam, India",
    value: "Assam, India",
    link: "https://maps.google.com/?q=Assam,India",
    href: "https://maps.google.com/?q=Assam,India",
    icon: MapPin as unknown as React.ReactNode,
  },
];

export const CONTACT_INFO = CONTACT_METHODS;

export const CONTACT_SOCIALS: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    url: socialLinks.github,
    icon: React.createElement(FaGithub),
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: socialLinks.linkedin,
    icon: React.createElement(FaLinkedin),
  },
];

export const CONTACT_AVAILABILITY = {
  title: "Availability",
  description:
    "Currently available and open to discussing new opportunities for Software Engineering Roles, Research Collaborations, and Open Source Projects.",
  status: "available" as const,
  message:
    "Currently available and open to discussing new opportunities for Software Engineering Roles, Research Collaborations, and Open Source Projects.",
  timeline: "",
  items: [
    "Software Engineering Roles",
    "Research Collaborations",
    "Open Source Projects",
  ],
};

export const AVAILABILITY = CONTACT_AVAILABILITY;

export const CONTACT_CTA: ContactCTAData = {
  title: "Ready to work together?",
  description: "Let's build something great.",
  buttonText: "Send a Message",
  buttonLink: `mailto:${socialLinks.email}`,
};

export const CONTACT_DATA = {
  badge: CONTACT_SECTION.badge,
  title: CONTACT_SECTION.title,
  description: CONTACT_SECTION.description,
  methods: CONTACT_METHODS,
  socials: CONTACT_SOCIALS,
  availability: CONTACT_AVAILABILITY,
  cta: CONTACT_CTA,
};

export const FORM_MESSAGES = {
  idle: "Send Message",
  loading: "Sending...",
  success: "Message Sent Successfully",
  disabled: "Contact Form Coming Soon",
  disabledSubtext:
    "In the meantime, feel free to reach out via email or LinkedIn.",
  error: "Failed to send message. Please try again.",
  validation: {
    required: "This field is required",
    email: "Please enter a valid email address",
  },
};
