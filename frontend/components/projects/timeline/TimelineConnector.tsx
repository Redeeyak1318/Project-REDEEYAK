import * as React from "react";
import { cn } from "@/lib/utils";

export const TimelineConnector = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn(
        "absolute top-8 md:top-12 bottom-0 left-4 md:left-6 w-px bg-border/50 -translate-x-1/2", 
        className
      )} 
      {...props} 
    />
  );
};
