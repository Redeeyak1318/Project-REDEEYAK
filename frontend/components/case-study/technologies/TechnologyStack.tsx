import { TechnologyStackData } from "../types";

export function TechnologyStack({
  title,
  technologies,
}: TechnologyStackData) {
  if (!technologies || technologies.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <li
              key={`tech-${index}`}
              className="flex flex-col items-center justify-center gap-4 rounded-2xl border bg-card p-6 shadow-sm text-center h-full"
            >
              {Icon && (
                <Icon className="size-10 text-primary" aria-hidden="true" />
              )}
              <span className="text-lg font-medium text-foreground">
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
