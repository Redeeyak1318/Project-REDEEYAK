import * as React from "react";
import { ResearchPublication } from "../types";
import { cn } from "@/lib/utils";

interface PublicationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  publication: ResearchPublication;
}

export const PublicationCard = ({ publication, className, ...props }: PublicationCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 p-6 sm:p-8 rounded-2xl bg-card border border-border/50",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-muted-foreground">
            {publication.year}
          </span>
          <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
            {publication.status}
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            {publication.type}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground tracking-tight leading-snug mt-2">
          {publication.title}
        </h3>
        
        {publication.venue && (
          <p className="text-sm font-medium text-foreground/70">
            {publication.venue}
          </p>
        )}
      </div>

      <p className="text-muted-foreground leading-relaxed flex-grow text-sm sm:text-base mt-2">
        {publication.description}
      </p>

      {/* Tags */}
      {publication.tags && publication.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-border/50">
          {publication.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
