import Image from "next/image";
import { TechnicalArchitectureData } from "../types";

export function TechnicalArchitecture({
  title,
  description,
  architectureImageSrc,
}: TechnicalArchitectureData) {
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

        {architectureImageSrc && (
          <Image
            src={architectureImageSrc}
            alt={title ? `Architecture diagram for ${title}` : "Technical architecture diagram"}
            fill={false}
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto rounded-2xl border object-contain"
          />
        )}
      </div>
    </section>
  );
}
