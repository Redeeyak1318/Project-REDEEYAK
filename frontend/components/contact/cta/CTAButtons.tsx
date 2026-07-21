import * as React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CONTACT_CTA } from "../constants";
import type { ContactCTAAction, ContactCTAData } from "../types";

export interface CTAButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  ctaData?: ContactCTAData;
}

export const CTAButtons = ({
  ctaData = CONTACT_CTA,
  className,
  ...props
}: CTAButtonsProps) => {
  const actions: ContactCTAAction[] = ctaData.actions || [
    ...(ctaData.primaryAction ? [ctaData.primaryAction] : []),
    ...(ctaData.secondaryAction ? [ctaData.secondaryAction] : []),
  ];

  // Fallback to buttonText and buttonLink if actions array is empty
  const actionList: ContactCTAAction[] =
    actions.length > 0
      ? actions
      : [
          {
            id: "primary",
            label: ctaData.buttonText || "Send a Message",
            href: ctaData.buttonLink || "mailto:contact@example.com",
            primary: true,
            external: false,
          },
        ];

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
        className
      )}
      {...props}
    >
      {actionList.map((action) => {
        const { id, label, href, primary, external } = action;
        const isExternal =
          external ?? (href.startsWith("http://") || href.startsWith("https://"));

        return (
          <Button
            key={id}
            size="lg"
            variant={primary ? "default" : "outline"}
            className={cn(
              "w-full sm:w-auto px-6 font-medium group/btn transition-all duration-200",
              primary && "shadow-sm hover:shadow"
            )}
            render={
              isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                />
              ) : (
                <Link href={href} aria-label={label} />
              )
            }
          >
            {primary && (
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
            )}
            <span>{label}</span>
            {isExternal && (
              <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            )}
          </Button>
        );
      })}
    </div>
  );
};
