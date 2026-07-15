import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
}

export const ScrollIndicator = ({ className }: ScrollIndicatorProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 text-muted-foreground", className)} aria-hidden="true">
      <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
      <div className="p-2 rounded-full border border-border bg-background shadow-sm">
        <ArrowDown className="h-4 w-4" />
      </div>
    </div>
  );
};
