import * as React from "react";
import { Project } from "../types";
import { Badge } from "@/components/ui/badge";

export const FeaturedContent = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-4">
      {project.category && (
        <span className="text-sm font-medium text-primary tracking-wider uppercase">
          {project.category}
        </span>
      )}
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {project.title}
      </h3>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
};
