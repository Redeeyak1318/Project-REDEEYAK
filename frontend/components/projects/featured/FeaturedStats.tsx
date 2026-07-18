import * as React from "react";
import { Project } from "../types";

export const FeaturedStats = ({ project }: { project: Project }) => {
  const stats = [
    { label: "Category", value: project.category || "Project" },
    { label: "Status", value: project.status || "Completed" },
    { label: "Timeline", value: project.timeline || "N/A" },
    { label: "Technologies", value: `${project.technologies.length}+` },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-border/50">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">{stat.label}</span>
          <span className="font-semibold text-foreground">{stat.value}</span>
        </div>
      ))}
    </div>
  );
};
