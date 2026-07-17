import {
    Mail,
    MapPin,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
} from "react-icons/fa6";

import type { ContactInfoItem, SocialLink } from "./types";
import { socialLinks } from "@/lib/social-links";

export const CONTACT_INFO: ContactInfoItem[] = [
    {
        icon: Mail,
        label: "Email",
        value: socialLinks.email,
        href: `mailto:${socialLinks.email}`,
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Assam, India",
        href: "https://maps.google.com/?q=Assam,India",
    },
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        href: socialLinks.github,
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: socialLinks.linkedin,
        icon: FaLinkedin,
    },
];

export const CONTACT_DATA = {
    badge: "Contact",
    title: "Let's Connect",
    description:
        "I'm always open to discussing software development, research collaborations, internships, and exciting opportunities. The contact form is currently under development, so feel free to reach out via email or LinkedIn.",
};
