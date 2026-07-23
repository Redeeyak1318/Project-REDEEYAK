import Image from "next/image";
import Link from "next/link";
import { CaseStudyHeroData } from "../types";
import { Button } from "@/components/ui/button";

interface MetadataItemProps {
  label: string;
  value?: string;
}

function MetadataItem({ label, value }: MetadataItemProps) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground">{value}</span>
    </div>
  );
}

// Extend locally to fulfill the metadata requirement without altering types architecture
type CaseStudyHeroProps = CaseStudyHeroData;

export function CaseStudyHero({
  title,
  subtitle,
  heroImageSrc,
  tags,
  liveUrl,
  githubUrl,
  badge,
  introduction,
  duration,
  role,
  status,
  year,
}: CaseStudyHeroProps) {
  return (
    <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      <div className="flex-1 space-y-6 w-full">
        <div className="space-y-4">
          {badge && (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}

          {introduction && (
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {introduction}
            </p>
          )}
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {(duration || role || status || year) && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            <MetadataItem label="Role" value={role} />
            <MetadataItem label="Duration" value={duration} />
            <MetadataItem label="Status" value={status} />
            <MetadataItem label="Year" value={year} />
          </div>
        )}

        {(liveUrl || githubUrl) && (
          <div className="flex flex-wrap gap-4 pt-4">
            {liveUrl && (
              <Button render={<Link href={liveUrl} target="_blank" rel="noopener noreferrer" />}>
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" render={<Link href={githubUrl} target="_blank" rel="noopener noreferrer" />}>
                Repository
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="w-full lg:w-1/2 relative aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden border bg-muted transition-colors group">
        {heroImageSrc && (
          <Image
            src={heroImageSrc}
            alt={`Cover image for ${title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        )}
      </div>
    </section>
  );
}
