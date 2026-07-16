import type {
    ComponentType,
    HTMLAttributes,
    SVGProps,
} from "react";

export interface ContactProps extends HTMLAttributes<HTMLElement> { }

export interface ContactInfoItem {
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    label: string;
    value: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
}