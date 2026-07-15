import * as React from "react";

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ElementType;
}

export interface HeroData {
  badge: string;
  greeting: string;
  name: string;
  role: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  socials: SocialLink[];
}
