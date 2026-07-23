import { ProblemStatementData } from "../types";

export function ProblemStatement({
  title,
  statement,
  context,
}: ProblemStatementData) {
  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-6">
        <p className="text-xl md:text-2xl font-medium text-foreground leading-snug">
          {statement}
        </p>
        
        {context && (
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {context}
          </p>
        )}
      </div>
    </section>
  );
}
