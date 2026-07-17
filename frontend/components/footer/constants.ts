import { siteConfig } from "@/lib/site-config";
import { socialLinks } from "@/lib/social-links";
import { navigationItems } from "@/components/navigation/config";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaXTwitter,
} from "react-icons/fa6";

import { FooterData } from "./types";

export const FOOTER_DATA: FooterData = {
    brand: {
        name: siteConfig.name,
        tagline: siteConfig.description,
    },
    navigation: [...navigationItems],

    socials: [
        {
            label: "GitHub",
            href: socialLinks.github,
            icon: FaGithub,
        },
        {
            label: "LinkedIn",
            href: socialLinks.linkedin,
            icon: FaLinkedin,
        },
        {
            label: "X",
            href: socialLinks.x,
            icon: FaXTwitter,
        },
        {
            label: "Email",
            href: `mailto:${socialLinks.email}`,
            icon: FaEnvelope,
        },
    ],
};