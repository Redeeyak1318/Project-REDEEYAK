import { siteConfig } from "@/lib/site-config";
import { FooterBrandData, FooterBottomData } from "./types";

const currentYear = new Date().getFullYear();

export const FOOTER_BRAND: FooterBrandData = {
    name: siteConfig.name,
    tagline: siteConfig.description,
};

export const FOOTER_BOTTOM: FooterBottomData = {
    copyright: `© ${currentYear} ${siteConfig.name}. All rights reserved.`,
    attribution: "Built with Next.js, React & TypeScript.",
};