import * as React from "react";
import { cn } from "@/lib/utils";

export const HeroBackground = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div 
      className={cn("absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none", className)} 
      aria-hidden="true" 
      {...props} 
    />
  );
};
