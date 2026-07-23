import { ChallengesSectionData } from "../types";

export function ChallengesSection({
  title,
  challenges,
}: ChallengesSectionData) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      <ul className="flex flex-col gap-6 md:gap-8">
        {challenges.map((challenge) => (
          <li
            key={challenge.id}
            className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl border bg-card shadow-sm"
          >
            <h3 className="text-2xl font-bold text-foreground">
              {challenge.title}
            </h3>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-destructive/80">
                Challenge
              </span>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary/80">
                Solution
              </span>
              <p className="text-lg text-foreground leading-relaxed">
                {challenge.solution}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

