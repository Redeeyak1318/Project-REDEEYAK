import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}

export interface FooterBrandData {
    name: string;
    title: string;
    tagline: string;
    description?: string;
}

export interface FooterNavigationLink {
    id: string;
    label: string;
    href: string;
}

export interface FooterSocialLink {
    id: string;
    platform: string;
    href: string;
    icon: IconType;
    external: boolean;
}

export interface FooterBottomData {
    copyright: string;
    attribution: string;
}