import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/lib/social-links";
import type { ContactSectionData } from "./types";
import type {
  AvailabilityStatus,
  ContactCTAData,
  ContactMethod,
  FormFieldConfig,
  SocialLink,
} from "./types";


export const CONTACT_SECTION = {
  badge: "Contact",
  title: "Let's Connect",
  description:
    "I'm always open to discussing software development, research collaborations, internships, and exciting opportunities. The contact form is currently under development, so feel free to reach out via email or LinkedIn.",
} satisfies ContactSectionData;

export const CONTACT_METHODS: (ContactMethod & { label?: string; href: string })[] = [
  {
    id: "email",
    title: "Email",
    label: "Email",
    description: "My inbox is always open for inquiries, opportunities, and discussions.",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    icon: Mail,
    external: false,
    status: "Primary",
  },
  {
    id: "github",
    title: "GitHub",
    label: "GitHub",
    description: "Explore open-source projects, contributions, and code repositories.",
    value: "Redeeyak1318",
    href: socialLinks.github,
    icon: FaGithub,
    external: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    label: "LinkedIn",
    description: "Connect for professional networking, research, and career updates.",
    value: "raktim-sonowal-m1318",
    href: socialLinks.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "x",
    title: "X (Twitter)",
    label: "X / Twitter",
    description: "Follow for real-time technical updates, thoughts, and discussions.",
    value: "@redeeyak",
    href: socialLinks.x || "https://x.com/redeeyak",
    icon: FaXTwitter,
    external: true,
  },
  {
    id: "location",
    title: "Location",
    label: "Location",
    description: "Based in Assam, India. Available for remote & flexible arrangements.",
    value: "Assam, India",
    href: "https://maps.google.com/?q=Assam,India",
    icon: MapPin,
    external: true,
    status: "IST (UTC+5:30)",
  },
];

export const CONTACT_INFO = CONTACT_METHODS;

export const CONTACT_SOCIALS: SocialLink[] = [
  {
    id: "github",
    platform: "GitHub",
    url: socialLinks.github,
    icon: FaGithub,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: socialLinks.linkedin,
    icon: FaLinkedin,
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
  description:
    "Interested in software development, research collaboration, or open opportunities? Feel free to reach out via email or connect on LinkedIn.",
  buttonText: "Send a Message",
  buttonLink: `mailto:${socialLinks.email}`,
  primaryAction: {
    id: "primary-email",
    label: "Send a Message",
    href: `mailto:${socialLinks.email}`,
    primary: true,
    external: false,
  },
  secondaryAction: {
    id: "secondary-linkedin",
    label: "Connect on LinkedIn",
    href: socialLinks.linkedin,
    primary: false,
    external: true,
  },
  actions: [
    {
      id: "primary-email",
      label: "Send a Message",
      href: `mailto:${socialLinks.email}`,
      primary: true,
      external: false,
    },
    {
      id: "secondary-linkedin",
      label: "Connect on LinkedIn",
      href: socialLinks.linkedin,
      primary: false,
      external: true,
    },
  ],
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

export const FORM_HEADER_DATA = {
  title: "Send a Message",
  description:
    "Have a project in mind, a question, or an opportunity to discuss? Fill out the form below.",
};

export const FORM_FIELDS_CONFIG: FormFieldConfig[] = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your name",
    type: "text",
    required: true,
    autoComplete: "name",
    component: "input",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "you@example.com",
    type: "email",
    required: true,
    autoComplete: "email",
    component: "input",
  },
  {
    id: "subject",
    label: "Subject",
    placeholder: "How can I help?",
    type: "text",
    required: true,
    autoComplete: "off",
    component: "input",
  },
  {
    id: "message",
    label: "Message",
    placeholder: "Write your message...",
    required: true,
    autoComplete: "off",
    component: "textarea",
    rows: 6,
  },
];

