import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroImageProps {
  className?: string;
}

export const HeroImage = ({ className }: HeroImageProps) => {
  return (
    <div className={cn("relative w-full aspect-square max-w-md mx-auto lg:max-w-none", className)}>
      <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3 transition-transform hover:rotate-6 duration-500" />
      <div className="absolute inset-0 bg-primary/10 rounded-3xl transform -rotate-3 transition-transform hover:-rotate-6 duration-500" />
      
      <div className="absolute inset-0 rounded-3xl bg-muted border border-border shadow-2xl overflow-hidden z-10 group">
        <Image 
          src="/hero_profile_image.png" 
          alt="Developer Profile"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
};
