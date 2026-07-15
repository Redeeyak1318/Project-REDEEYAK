import { Container } from "@/components/layout";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";
import { cn } from "@/lib/utils";

interface HeroProps {
  className?: string;
}

export const Hero = ({ className }: HeroProps) => {
  return (
    <section 
      id="home"
      className={cn(
        "relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden", 
        className
      )}
      aria-label="Introduction"
    >
      <Container className="relative z-10 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
            <HeroContent />
          </div>
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <ScrollIndicator />
      </div>
    </section>
  );
};
