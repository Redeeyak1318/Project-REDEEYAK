import { Outcome } from "../types";

export function ProjectOutcomes({ outcomes }: { outcomes: Outcome[] }) {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 py-8 border-t">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        Project Outcomes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((outcome) => (
          <div key={outcome.id} className="flex flex-col gap-3 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            {outcome.metric && (
              <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                {outcome.metric}
              </span>
            )}
            <p className="text-foreground font-medium leading-snug">
              {outcome.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
