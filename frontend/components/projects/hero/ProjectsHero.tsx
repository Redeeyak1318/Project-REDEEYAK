import { ProjectsHeroData } from "../types";

export function ProjectsHero({ heading, subtitle, introCopy }: ProjectsHeroData) {
  return (
    <div className="flex flex-col gap-4 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {heading}
      </h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
          {subtitle}
        </h2>
      )}
      {introCopy && (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
          {introCopy}
        </p>
      )}
    </div>
  );
}
