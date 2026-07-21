import * as React from "react";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CONTACT_SECTION, CONTACT_AVAILABILITY } from "../constants";
import { cn } from "@/lib/utils";

export interface ContactHeroProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactHero = ({ className, ...props }: ContactHeroProps) => {
  const { badge, title, description } = CONTACT_SECTION;
  const { status, message } = CONTACT_AVAILABILITY;

  return (
    <Container>
      <ScrollReveal>
        <div
          className={cn(
            "flex flex-col items-center text-center gap-4 sm:gap-6 max-w-3xl mx-auto",
            className
          )}
          {...props}
        >
          {/* Small Section Label */}
          {badge && (
            <span className="inline-flex items-center rounded-full border border-border/40 bg-secondary/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur-sm">
              {badge}
            </span>
          )}

          {/* Availability Badge */}
          {status && (
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                aria-hidden="true"
              />
              <span className="capitalize">{status}</span>
            </div>
          )}

          {/* Main Heading */}
          {title && (
            <h1
              id="contact-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight"
            >
              {title}
            </h1>
          )}

          {/* Supporting Description */}
          {description && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {/* Short Introductory Paragraph */}
          {message && (
            <p className="text-sm sm:text-base text-muted-foreground/80 max-w-xl leading-relaxed">
              {message}
            </p>
          )}
        </div>
      </ScrollReveal>
    </Container>
  );
};

export const ContactHeader = ContactHero;
export type ContactHeaderProps = ContactHeroProps;