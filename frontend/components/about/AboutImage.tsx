import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ABOUT_DATA } from "./constants";

export interface AboutImageProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AboutImage = ({ className, ...props }: AboutImageProps) => {
  const { image } = ABOUT_DATA;

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
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};
