import { ProjectOutcomesData } from "../types";

export function ProjectOutcomes({ title, outcomes }: ProjectOutcomesData) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((outcome) => (
          <li
            key={outcome.id}
            className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl border bg-card shadow-sm h-full"
          >
            {outcome.metric && (
              <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {outcome.metric}
              </span>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {outcome.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

