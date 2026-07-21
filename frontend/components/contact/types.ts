import type {
  HTMLAttributes,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactNode,
} from "react";

export interface ContactSectionData {
  badge: string;
  title: string;
  description: string;
}

export interface ContactMethod {
  id: string;
  title: string;
  description: string;
  value: string;
  href?: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
  status?: string;
  badge?: string;
}

export interface MethodCardProps extends HTMLAttributes<HTMLDivElement> {
  method: ContactMethod;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
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

export interface ContactCTAAction {
  id: string;
  label: string;
  href: string;
  primary?: boolean;
  external?: boolean;
}

export interface ContactCTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  primaryAction?: ContactCTAAction;
  secondaryAction?: ContactCTAAction;
  actions?: ContactCTAAction[];
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
  icon: ComponentType<{ className?: string }>;
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

export interface FormFieldConfig {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  component?: "input" | "textarea";
  rows?: number;
}