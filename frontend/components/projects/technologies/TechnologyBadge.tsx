import * as React from "react";
import { Badge } from "@/components/ui/badge";

export interface TechnologyBadgeProps {
  technology: string;
}

export const TechnologyBadge = ({ technology }: TechnologyBadgeProps) => {
  return (
    <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
      {technology}
    </Badge>
  );
};
