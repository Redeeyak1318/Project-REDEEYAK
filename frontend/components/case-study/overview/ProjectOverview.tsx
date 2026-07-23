import { ProjectOverviewData } from "../types";

export function ProjectOverview({
  title,
  overview,
  highlight,
  keyPoints,
}: ProjectOverviewData) {
  // Normalize overview to an array of paragraphs
  const paragraphs = Array.isArray(overview) ? overview : [overview];

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      {highlight && (
        <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
          <p className="text-xl md:text-2xl font-medium text-foreground leading-snug">
            {highlight}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-6">
        {paragraphs.map((paragraph, index) => (
          <p
            key={`overview-p-${index}`}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {keyPoints && keyPoints.length > 0 && (
        <ul className="list-disc pl-6 flex flex-col gap-4 text-lg md:text-xl text-muted-foreground leading-relaxed marker:text-foreground/50">
          {keyPoints.map((point, index) => (
            <li key={`keypoint-${index}`} className="pl-2">
              {point}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
