import * as React from "react";
import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "./types";

export interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: ExperienceEntry;
}

export const ExperienceCard = ({ experience, className, ...props }: ExperienceCardProps) => {
  const { organization, role, duration, location, description, technologies, link } = experience;

  if (!organization || !role) {
    return null;
  }

  return (
    <div
      className={cn("flex flex-col gap-6 rounded-xl border bg-card p-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold text-foreground">{organization}</h3>
        <p className="text-base font-medium text-primary">{role}</p>
        {(duration || location) && (
          <p className="mt-1 text-sm text-muted-foreground">
            {duration}
            {duration && location && " • "}
            {location}
          </p>
        )}
      </div>

      {description && description.length > 0 && (
        <ul className="list-disc space-y-2 pl-5">
          {description.map((item, index) => (
            <li
              key={`${organization}-${index}`}
              className="text-sm text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {link && (
        <div className="pt-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Visit Organization
          </a>
        </div>
      )}
    </div>
  );
};
