import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HERO_DATA } from "./constants";

export interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> { }

export const HeroImage = ({ className, ...props }: HeroImageProps) => {
  const { image } = HERO_DATA;

  if (!image || !image.src || !image.alt) {
    return null;
  }

  return (
    <div
      className={cn("relative aspect-square w-full overflow-hidden", className)}
      {...props}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        className="object-cover"
        priority
      />
    </div>
  );
};
