import Image from "next/image";
import { TechnicalArchitectureData } from "../types";

export function TechnicalArchitecture({
  title = "Technical Architecture",
  description,
  architectureImageSrc,
}: TechnicalArchitectureData) {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {architectureImageSrc && (
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-2xl border bg-muted shadow-sm">
          <Image
            src={architectureImageSrc}
            alt="Technical Architecture Diagram"
            fill
            sizes="100vw"
            className="object-contain p-4 md:p-8"
          />
        </div>
      )}
    </section>
  );
}
