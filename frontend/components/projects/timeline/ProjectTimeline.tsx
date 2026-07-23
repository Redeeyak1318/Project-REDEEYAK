import { ProjectsTimelineItem } from "../types";

interface ProjectTimelineProps {
  items: ProjectsTimelineItem[];
}

export function ProjectTimeline({ items }: ProjectTimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold tracking-tight">
        Timeline
      </h2>
      <div className="relative border-l border-muted-foreground/20 ml-3 md:ml-4">
        {items.map((item) => (
          <div key={item.id} className="mb-10 ml-6 md:ml-8 relative last:mb-0">
            <span className="absolute -left-[33px] md:-left-[41px] flex items-center justify-center w-4 h-4 rounded-full bg-background border border-primary ring-4 ring-background" />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-primary bg-primary/10 w-fit px-2.5 py-0.5 rounded-full mb-2">
                {item.year}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
