import * as React from "react";
import { ResearchPrinciple } from "../types";
import { cn } from "@/lib/utils";

interface PhilosophyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  principle: ResearchPrinciple;
}

export const PhilosophyCard = ({ principle, className, ...props }: PhilosophyCardProps) => {
  const Icon = principle.icon;

  return (
    <div 
      className={cn(
        "flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-card border border-border/50 transition-colors hover:bg-muted/50",
        className
      )} 
      {...props}
    >
      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-foreground tracking-tight">
        {principle.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {principle.description}
      </p>
    </div>
  );
};
