import * as React from "react";
import { buttonVariants } from "@/components/ui/button";
import { HERO_DATA } from "./constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> { }

export const HeroActions = ({ className, ...props }: HeroActionsProps) => {
  const { primaryCta, secondaryCta } = HERO_DATA;

  if (!primaryCta && !secondaryCta) {
    return null;
  }

  return (
    <div className={cn("flex flex-col sm:flex-row items-stretch sm:items-center gap-4", className)} {...props}>
      {primaryCta ? (
        <Link
          href={primaryCta.href}
          className={cn(buttonVariants({ size: "lg" }), "rounded-full font-medium px-8")}
        >
          {primaryCta.label}
        </Link>
      ) : null}

      {secondaryCta ? (
        <Link
          href={secondaryCta.href}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-medium px-8")}
        >
          {secondaryCta.label}
        </Link>
      ) : null}
    </div>
  );
};
