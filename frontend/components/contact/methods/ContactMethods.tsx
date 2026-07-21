import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CONTACT_METHODS } from "../constants";
import { MethodCard } from "./MethodCard";
import { cn } from "@/lib/utils";

export interface ContactMethodsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactMethods = ({ className, ...props }: ContactMethodsProps) => {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
          className
        )}
        {...props}
      >
        {CONTACT_METHODS.map((method, index) => (
          <ScrollReveal key={method.id || method.title} delay={index * 100}>
            <MethodCard method={method} className="h-full" />
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  );
};

export const ContactCards = ContactMethods;
export type ContactCardsProps = ContactMethodsProps;
