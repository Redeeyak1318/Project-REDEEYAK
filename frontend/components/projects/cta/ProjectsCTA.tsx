import { ProjectsCTAData } from "../types";

export function ProjectsCTA({ title, description, primaryAction, secondaryAction }: ProjectsCTAData) {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-12 px-4 bg-muted/30 rounded-3xl border border-muted/50">
      <div className="space-y-4 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
        {primaryAction && (
          <a
            href={primaryAction.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-11 px-8 py-2 w-full sm:w-auto"
          >
            {primaryAction.label}
          </a>
        )}
        {secondaryAction && (
          <a
            href={secondaryAction.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8 py-2 w-full sm:w-auto"
          >
            {secondaryAction.label}
          </a>
        )}
      </div>
    </div>
  );
}
