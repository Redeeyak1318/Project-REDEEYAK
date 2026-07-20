import * as React from "react";
import { Container } from "@/components/layout";
import { AreasHeader } from "./AreasHeader";
import { AreasGrid } from "./AreasGrid";
import { cn } from "@/lib/utils";

export interface ResearchAreasProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchAreas = ({ className, ...props }: ResearchAreasProps) => {
  return (
    <section 
      aria-label="Research Areas"
      className={cn("py-16 lg:py-24 bg-background", className)} 
      {...props}
    >
      <Container>
        <AreasHeader />
        <AreasGrid />
      </Container>
    </section>
  );
};
