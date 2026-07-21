import * as React from "react";
import { cn } from "@/lib/utils";
import { CTAContent } from "./CTAContent";
import { CTAButtons } from "./CTAButtons";
import { CONTACT_CTA } from "../constants";
import type { ContactCTAData } from "../types";

export interface ContactCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  ctaData?: ContactCTAData;
}

export const ContactCTA = ({
  ctaData = CONTACT_CTA,
  className,
  ...props
}: ContactCTAProps) => {
  return (
    <div
      aria-labelledby="contact-cta-heading"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 p-8 sm:p-10 lg:p-12 text-center backdrop-blur-sm shadow-sm transition-all duration-300 hover:border-border/80 hover:shadow-md motion-reduce:transition-none flex flex-col items-center gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      <CTAContent ctaData={ctaData} />
      <CTAButtons ctaData={ctaData} />
    </div>
  );
};