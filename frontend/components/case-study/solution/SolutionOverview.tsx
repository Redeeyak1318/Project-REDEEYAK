import { SolutionOverviewData } from "../types";

export function SolutionOverview({
  title,
  description,
  keyFeatures,
}: SolutionOverviewData) {
  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-6">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>

        {keyFeatures && keyFeatures.length > 0 && (
          <ul className="list-disc pl-6 flex flex-col gap-4 text-lg md:text-xl text-muted-foreground leading-relaxed marker:text-foreground/50">
            {keyFeatures.map((feature, index) => (
              <li key={`feature-${index}`} className="pl-2">
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
