import { IconType } from "react-icons";

export interface FooterBrand {
    name: string;
    tagline: string;
}

export interface FooterNavigationItem {
    label: string;
    href: string;
}

export interface FooterSocialItem {
    label: string;
    href: string;
    icon: IconType;
}

export interface FooterData {
    brand: FooterBrand;
    navigation: FooterNavigationItem[];
    socials: FooterSocialItem[];
}