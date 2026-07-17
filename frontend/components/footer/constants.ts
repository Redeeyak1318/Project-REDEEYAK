import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaXTwitter,
} from "react-icons/fa6";

import { FooterData } from "./types";

export const FOOTER_DATA: FooterData = {
    brand: {
        name: "REDEEYAK",
        tagline:
            "Building thoughtful digital experiences through clean code, scalable architecture, and modern web technologies.",
    },

    navigation: [
        { label: "Home", href: "#hero" },
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],

    socials: [
        {
            label: "GitHub",
            href: "https://github.com/REDEEYAK",
            icon: FaGithub,
        },
        {
            label: "LinkedIn",
            href: "YOUR_LINKEDIN_URL",
            icon: FaLinkedin,
        },
        {
            label: "X",
            href: "YOUR_X_URL",
            icon: FaXTwitter,
        },
        {
            label: "Email",
            href: "mailto:YOUR_EMAIL",
            icon: FaEnvelope,
        },
    ],
};