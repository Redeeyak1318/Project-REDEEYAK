import { ProjectOverviewData } from "../types";

export function ProjectOverview({
  role,
  timeline,
  teamSize,
  overview,
}: ProjectOverviewData) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 py-8 border-y">
      <div className="md:col-span-1 flex flex-col gap-6">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Role
          </h3>
          <p className="font-medium">{role}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Timeline
          </h3>
          <p className="font-medium">{timeline}</p>
        </div>
        {teamSize && (
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              Team Size
            </h3>
            <p className="font-medium">{teamSize}</p>
          </div>
        )}
      </div>

      <div className="md:col-span-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Overview
        </h3>
        <p className="text-lg text-foreground leading-relaxed">
          {overview}
        </p>
      </div>
    </section>
  );
}
