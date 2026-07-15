import * as React from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ScrollIndicatorProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ScrollIndicator = ({ className, ...props }: ScrollIndicatorProps) => {
  return (
    <div className={cn("w-fit", className)} {...props}>
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </a>
    </div>
  );
};
