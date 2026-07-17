import * as React from "react";
import { HERO_DATA } from "./constants";
import { cn } from "@/lib/utils";

export interface HeroSocialsProps extends React.HTMLAttributes<HTMLDivElement> { }

export const HeroSocials = ({ className, ...props }: HeroSocialsProps) => {
  const { socials } = HERO_DATA;

  if (!socials || socials.length === 0) {
    return null;
  }

  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {socials.map((social) => {
        if (!social.href || !social.label || !social.icon) {
          return null;
        }

        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};
