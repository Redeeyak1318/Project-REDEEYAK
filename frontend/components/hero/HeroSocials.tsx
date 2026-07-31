import * as React from "react";
import { HERO_DATA } from "./constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
          <Button
            key={social.label}
            variant="ghost"
            size="icon"
            className="rounded-full h-10 w-10"
            render={
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              />
            }
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </Button>
        );
      })}
    </div>
  );
};
