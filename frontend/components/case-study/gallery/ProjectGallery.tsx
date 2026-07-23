import Image from "next/image";
import { ProjectGalleryData } from "../types";

export function ProjectGallery({
  title,
  images,
}: ProjectGalleryData) {
  if (!images || images.length === 0) return null;

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <figure key={`gallery-image-${index}`} className="flex flex-col gap-3">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={450}
              loading="lazy"
              className="w-full h-auto object-cover rounded-2xl border"
            />
            {image.caption && (
              <figcaption className="text-sm text-muted-foreground px-2">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
