import * as React from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RESEARCH_CTA } from "../constants";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const CTAActions = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <ScrollReveal delay={200}>
      <div className={cn("flex flex-wrap justify-center gap-4 w-full", className)} {...props}>
        {RESEARCH_CTA.actions.map((action) => (
          <Button
            key={action.id}
            render={<Link href={action.href} />}
            size="lg"
            variant={action.primary ? "default" : "outline"}
            className={cn(
              "rounded-full font-medium px-8 w-full sm:w-auto",
              action.primary && "group"
            )}
          >
            {action.label}
            {action.primary && (
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </Button>
        ))}
      </div>
    </ScrollReveal>
  );
};
