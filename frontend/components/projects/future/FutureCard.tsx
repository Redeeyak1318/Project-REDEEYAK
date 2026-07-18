import * as React from "react";
import { FutureFocus } from "../types";
import { Badge } from "@/components/ui/badge";

export interface FutureCardProps {
  focus: FutureFocus;
}

export const FutureCard = ({ focus }: FutureCardProps) => {
  const Icon = focus.icon;

  return (
    <div className="flex flex-col gap-4 h-full rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-border/80">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-xl font-bold tracking-tight text-foreground">{focus.title}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">{focus.description}</p>
      </div>

      {focus.tags && focus.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-border/40">
          {focus.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-2.5 py-0.5 text-xs font-medium">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
