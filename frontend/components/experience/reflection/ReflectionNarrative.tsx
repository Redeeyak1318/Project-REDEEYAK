import * as React from "react";
import { cn } from "@/lib/utils";
import { REFLECTION_DATA } from "./constants";

export interface ReflectionNarrativeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ReflectionNarrative = ({ className, ...props }: ReflectionNarrativeProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl bg-muted/30 p-6 md:p-8 border border-border/50", 
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-5 max-w-4xl text-base md:text-lg text-foreground/80 leading-relaxed">
        {REFLECTION_DATA.narrative.map((paragraph) => (
          <p key={paragraph.id}>
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  );
};
