import * as React from "react";
import { TechnologyCategoryData } from "../types";
import { TechnologyBadge } from "./TechnologyBadge";

export interface TechnologyCategoryProps {
  category: TechnologyCategoryData;
}

export const TechnologyCategory = ({ category }: TechnologyCategoryProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold text-foreground tracking-tight">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <TechnologyBadge key={tech} technology={tech} />
        ))}
      </div>
    </div>
  );
};
