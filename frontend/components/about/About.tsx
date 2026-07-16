import * as React from "react";

import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";
import { AboutStats } from "./AboutStats";

export interface AboutProps extends React.HTMLAttributes<HTMLElement> { }

export const About = ({ className, ...props }: AboutProps) => {
  return (
    <section
      id="about"
      className={cn(
        "py-20 lg:py-28",
        className
      )}
      {...props}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AboutContent />

          <AboutImage />
        </div>

        <AboutStats className="mt-12 lg:mt-16" />
      </Container>
    </section>
  );
};
