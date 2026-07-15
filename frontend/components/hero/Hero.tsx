import { Container } from "@/components/layout";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";
import { ScrollIndicator } from "./ScrollIndicator";
import { cn } from "@/lib/utils";

export interface HeroProps extends React.HTMLAttributes<HTMLElement> { }

export const Hero = ({
  className,
  ...props
}: HeroProps) => {
  return (
    <section
      id="home"
      {...props}
      className={cn(
        "relative min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16 pb-24 lg:pt-24 lg:pb-32",
        className
      )}
      aria-label="Introduction"
    >
      <Container className="flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>
          <div className="order-1 lg:order-2">
            <HeroImage />
          </div>
        </div>
        <div className="mt-16 hidden md:flex justify-center">
          <ScrollIndicator />
        </div>
      </Container>

    </section>
  );
};
