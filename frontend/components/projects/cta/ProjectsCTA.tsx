import { ProjectsCTAData } from "../types";
import { Button } from "@/components/ui/button";

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
          <Button
            size="lg"
            className="w-full sm:w-auto px-8"
            render={<a href={primaryAction.href} />}
          >
            {primaryAction.label}
          </Button>
        )}
        {secondaryAction && (
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto px-8"
            render={<a href={secondaryAction.href} />}
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
