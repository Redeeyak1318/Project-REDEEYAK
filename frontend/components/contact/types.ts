import type { HTMLAttributes, AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export interface ContactSectionData {
  title: string;
  description: string;
}

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  value: string;
  link: string;
  icon?: ReactNode;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: ReactNode;
}

export interface AvailabilityStatus {
  status: "available" | "unavailable" | "limited";
  message: string;
  timeline?: string;
}

export interface ContactMethodsData {
  methods: ContactMethod[];
}

export interface ContactAvailabilityData {
  availability: AvailabilityStatus;
}

export interface ContactSocialData {
  socials: SocialLink[];
}

export interface ContactCTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
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

export interface ContactCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: any;
  label: string;
  value: string;
  href: string;
}

export interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "idle" | "loading" | "success" | "disabled";
  children?: ReactNode;
}

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  id: string;
  error?: string;
  children?: ReactNode;
}