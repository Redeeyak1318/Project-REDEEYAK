import { Challenge } from "../types";

export function ChallengesSection({ challenges }: { challenges: Challenge[] }) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Challenges & Solutions
        </h2>
        <p className="text-muted-foreground text-lg">
          Key technical and design hurdles overcome during the project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="flex flex-col gap-4 p-6 rounded-2xl border bg-card shadow-sm">
            <h3 className="text-xl font-bold text-foreground">
              {challenge.title}
            </h3>
            
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold uppercase tracking-wider text-destructive/80">
                Challenge
              </span>
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>
            
            <div className="flex flex-col gap-1.5 mt-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/80">
                Solution
              </span>
              <p className="text-foreground leading-relaxed">
                {challenge.solution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
