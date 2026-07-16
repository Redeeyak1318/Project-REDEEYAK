import {
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa6";

import type { ContactInfoItem, SocialLink } from "./types";

export const CONTACT_INFO: ContactInfoItem[] = [
    {
        icon: Mail,
        label: "Email",
        value: "raktimsonowal@example.com",
        href: "mailto:raktimsonowal@example.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 XXXXX XXXXX",
        href: "tel:+91XXXXXXXXXX",
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
        href: "https://github.com/REDEEYAK",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/your-profile",
        icon: FaLinkedin,
    },
    {
        name: "Instagram",
        href: "https://instagram.com/your-profile",
        icon: FaInstagram,
    },
];

export const CONTACT_DATA = {
    badge: "Let's Connect",
    title: "Get in Touch",
    description:
        "Have an idea, project, or opportunity? Feel free to reach out. I'll get back to you as soon as possible.",
};