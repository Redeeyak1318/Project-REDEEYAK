import { ProblemStatementData } from "../types";

export function ProblemStatement({
  title = "The Problem",
  statement,
  context,
}: ProblemStatementData) {
  return (
    <section className="flex flex-col gap-6 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        <p className="text-xl md:text-2xl font-medium text-foreground leading-snug">
          "{statement}"
        </p>
        {context && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {context}
          </p>
        )}
      </div>
    </section>
  );
}
