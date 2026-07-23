import { SolutionOverviewData } from "../types";

export function SolutionOverview({
  title = "The Solution",
  description,
  keyFeatures,
}: SolutionOverviewData) {
  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {description}
      </p>
      
      {keyFeatures && keyFeatures.length > 0 && (
        <div className="flex flex-col gap-4 mt-2">
          <h3 className="text-xl font-semibold">Key Features</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 p-4 rounded-xl border bg-card">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="font-medium text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
