import * as React from "react";
import { Container } from "@/components/layout";
import { PublicationsHeader } from "./PublicationsHeader";
import { PublicationsGrid } from "./PublicationsGrid";
import { cn } from "@/lib/utils";

export interface ResearchPublicationsPreviewProps extends React.HTMLAttributes<HTMLElement> {}

export const ResearchPublicationsPreview = ({ className, ...props }: ResearchPublicationsPreviewProps) => {
  return (
    <section 
      aria-label="Publications Preview"
      className={cn("py-16 lg:py-24 bg-muted/30", className)} 
      {...props}
    >
      <Container>
        <PublicationsHeader />
        <PublicationsGrid />
      </Container>
    </section>
  );
};
