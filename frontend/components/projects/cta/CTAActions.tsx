import * as React from "react";
import Link from "next/link";
import { ProjectsCTAData } from "../types";
import { Button } from "@/components/ui/button";

export const CTAActions = ({ ctaData }: { ctaData: ProjectsCTAData }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
      <Button 
        size="lg" 
        className="w-full sm:w-auto"
        render={<Link href={ctaData.primaryAction.href} />}
      >
        {ctaData.primaryAction.label}
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full sm:w-auto"
        render={<Link href={ctaData.secondaryAction.href} />}
      >
        {ctaData.secondaryAction.label}
      </Button>
    </div>
  );
};
