import { Technology } from "../types";

export function TechnologyStack({ technologies }: { technologies: Technology[] }) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="flex flex-col gap-6">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight">
        Technology Stack
      </h3>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded-lg border bg-card px-4 py-2 shadow-sm"
            >
              {Icon && <Icon className="size-5 text-primary" aria-hidden="true" />}
              <span className="font-medium text-foreground">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
