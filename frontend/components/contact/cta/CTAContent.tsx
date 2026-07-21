import * as React from "react";
import { CONTACT_CTA } from "../constants";
import { cn } from "@/lib/utils";
import type { ContactCTAData } from "../types";

export interface CTAContentProps extends React.HTMLAttributes<HTMLDivElement> {
  ctaData?: ContactCTAData;
}

export const CTAContent = ({
  ctaData = CONTACT_CTA,
  className,
  ...props
}: CTAContentProps) => {
  const { title, description } = ctaData;

  return (
    <div
      className={cn("flex flex-col items-center gap-3 text-center max-w-2xl mx-auto", className)}
      {...props}
    >
      {title && (
        <h2
          id="contact-cta-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
