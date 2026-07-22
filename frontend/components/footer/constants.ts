import { siteConfig } from "@/lib/site-config";
import { navigationItems } from "@/components/navigation/config";
import { socialLinks } from "@/lib/social-links";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { FooterBrandData, FooterBottomData, FooterNavigationLink, FooterSocialLink } from "./types";

const currentYear = new Date().getFullYear();

export const FOOTER_BRAND: FooterBrandData = {
    name: siteConfig.name,
    title: "Full-Stack Developer & Computer Science Student",
    tagline: "Let's build something amazing together.",
    description: siteConfig.description,
};

export const FOOTER_NAVIGATION: FooterNavigationLink[] = navigationItems.map(
    (item) => ({
        id: item.label.toLowerCase().replace(/\s+/g, '-'),
        label: item.label,
        href: item.href,
    })
);

export const FOOTER_SOCIAL: FooterSocialLink[] = [
    {
        id: "github",
        platform: "GitHub",
        href: socialLinks.github,
        icon: FaGithub,
        external: true,
    },
    {
        id: "linkedin",
        platform: "LinkedIn",
        href: socialLinks.linkedin,
        icon: FaLinkedin,
        external: true,
    },
    {
        id: "x",
        platform: "X",
        href: socialLinks.x,
        icon: FaXTwitter,
        external: true,
    },
    {
        id: "email",
        platform: "Email",
        href: socialLinks.email ? `mailto:${socialLinks.email}` : "",
        icon: FaEnvelope,
        external: false,
    },
].filter((link) => link.href && link.href !== "mailto:");

export const FOOTER_BOTTOM: FooterBottomData = {
    copyright: `© ${currentYear} ${siteConfig.name}. All rights reserved.`,
    attribution: "Built with Next.js, React & TypeScript.",
};