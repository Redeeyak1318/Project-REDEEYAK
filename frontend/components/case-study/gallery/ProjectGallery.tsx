import Image from "next/image";
import { GalleryImage } from "../types";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {images.map((image, index) => (
          <figure key={index} className="flex flex-col gap-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border bg-muted shadow-sm">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
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
