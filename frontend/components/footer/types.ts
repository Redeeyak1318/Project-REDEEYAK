import type { HTMLAttributes } from "react";
import type { IconType } from "react-icons";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}

export interface FooterBrandData {
    name: string;
    tagline: string;
}

export interface FooterNavigationLink {
    label: string;
    href: string;
}

export interface FooterSocialLink {
    platform: string;
    href: string;
    icon: IconType;
}

export interface FooterBottomData {
    copyright: string;
    attribution: string;
}