import type {
    HTMLAttributes,
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

import type { IconType } from "react-icons";

export interface ContactProps extends HTMLAttributes<HTMLElement> { }

export interface ContactInfoItem {
    icon: IconType;
    label: string;
    value: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: IconType;
}

export interface ContactCardProps extends HTMLAttributes<HTMLAnchorElement> {
    icon: IconType;
    label: string;
    value: string;
    href: string;
}



export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    id: string;
    error?: string;
    children: ReactNode;
}

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    status?: "idle" | "loading" | "success" | "disabled";
}

export interface ContactFormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface AvailabilityData {
    title: string;
    description: string;
    items: string[];
}

export interface FormMessages {
    idle: string;
    loading: string;
    success: string;
    disabled: string;
    disabledSubtext: string;
    error: string;
    validation: {
        required: string;
        email: string;
    };
}