import { TimelineItemData } from "./types";

export function TimelineItem({
  title,
  organization,
  duration,
  location,
  description,
  technologies,
  achievements,
  current,
}: TimelineItemData) {
  return (
    <li className="rounded-2xl border bg-card p-6 md:p-8 shadow-sm flex flex-col gap-4">
      <div className="flex flex-col gap-1 md:gap-2">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
            {title}
          </h3>
          {current && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              Current
            </span>
          )}
        </div>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-base md:text-lg text-muted-foreground font-medium">
          <span>{organization}</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted-foreground/50"></span>
          <span>{duration}</span>
          {location && (
            <>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-muted-foreground/50"></span>
              <span>{location}</span>
            </>
          )}
        </div>
      </div>

      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-2">
        {description}
      </p>

      {achievements && achievements.length > 0 && (
        <div className="flex flex-col gap-3 mt-2">
          <h4 className="font-semibold text-foreground text-base md:text-lg tracking-tight">
            Achievements
          </h4>
          <ul className="list-disc pl-5 flex flex-col gap-2 text-base md:text-lg text-muted-foreground leading-relaxed marker:text-foreground/50">
            {achievements.map((achievement, index) => (
              <li key={`achievement-${index}`} className="pl-1">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={`tech-${index}`}
              className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-sm font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </li>
  );
}
