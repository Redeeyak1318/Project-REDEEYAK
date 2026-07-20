import type { HTMLAttributes } from "react";

export interface FooterProps extends HTMLAttributes<HTMLElement> { }

export interface FooterBrandData {
    name: string;
    tagline: string;
}

export interface FooterBottomData {
    copyright: string;
    attribution: string;
}