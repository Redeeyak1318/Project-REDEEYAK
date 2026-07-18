import * as React from "react";
import { ProjectsCTAData } from "../types";

export const CTAContent = ({ ctaData }: { ctaData: ProjectsCTAData }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {ctaData.title}
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
        {ctaData.description}
      </p>
    </div>
  );
};
