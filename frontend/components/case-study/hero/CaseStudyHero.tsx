import Image from "next/image";
import Link from "next/link";
import { CaseStudyHeroData } from "../types";
import { Button } from "@/components/ui/button";

export function CaseStudyHero({
  title,
  subtitle,
  heroImageSrc,
  tags,
  liveUrl,
  githubUrl,
}: CaseStudyHeroData) {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <div className="flex flex-col gap-4 text-center items-center">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-[800px]">
            {subtitle}
          </p>
        )}
        {(liveUrl || githubUrl) && (
          <div className="flex items-center gap-4 mt-4">
            {liveUrl && (
              <Button render={<Link href={liveUrl} target="_blank" rel="noopener noreferrer" />}>
                Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button variant="outline" render={<Link href={githubUrl} target="_blank" rel="noopener noreferrer" />}>
                GitHub
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border bg-muted shadow-lg">
        <Image
          src={heroImageSrc}
          alt={`Hero image for ${title}`}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
