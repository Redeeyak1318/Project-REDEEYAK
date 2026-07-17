import * as React from "react";
import { HERO_DATA } from "./constants";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { HeroActions } from "./HeroActions";
import { HeroSocials } from "./HeroSocials";
import { cn } from "@/lib/utils";

export interface HeroContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const HeroContent = ({ className, ...props }: HeroContentProps) => {
  return (
    <div className={cn("flex flex-col gap-6 lg:gap-8 max-w-2xl", className)} {...props}>
      <AvailabilityBadge text={HERO_DATA.badge} />

      <header className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg sm:text-xl font-medium text-primary tracking-wide">
            {HERO_DATA.greeting}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground">
            {HERO_DATA.name}
          </h1>
          {HERO_DATA.branding ? (
            <p className="text-xl sm:text-2xl font-medium text-muted-foreground mt-2">
              {HERO_DATA.branding}
            </p>
          ) : null}
        </div>

        {HERO_DATA.role ? (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground tracking-tight">
            {HERO_DATA.role}
          </h2>
        ) : null}
      </header>

      {HERO_DATA.description ? (
        <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
          {HERO_DATA.description}
        </p>
      ) : null}

      <div className="flex flex-col gap-6 pt-4">
        <HeroActions />
        <HeroSocials />
      </div>
    </div>
  );
};
