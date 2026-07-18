import * as React from "react";
import Link from "next/link";
import { Project } from "../types";
import { Button } from "@/components/ui/button";

export const FeaturedActions = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      {project.liveUrl ? (
        <Button size="lg" render={<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" />}>
          View Case Study
        </Button>
      ) : (
        <Button size="lg" disabled>
          View Case Study
        </Button>
      )}
      
      {project.githubUrl ? (
        <Button variant="outline" size="lg" render={<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" />}>
          View Source
        </Button>
      ) : (
        <Button variant="outline" size="lg" disabled>
          View Source
        </Button>
      )}
    </div>
  );
};
