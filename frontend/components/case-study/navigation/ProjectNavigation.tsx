import Link from "next/link";
import { ProjectNavigationData } from "../types";
import { Button } from "@/components/ui/button";

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationData) {
  if (!previousProject && !nextProject) return null;

  return (
    <section className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t mt-8">
      <div className="w-full sm:w-auto flex justify-start">
        {previousProject && (
          <Button variant="ghost" className="gap-2" render={<Link href={previousProject.href} />}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <div className="flex flex-col items-start text-left ml-2">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Previous</span>
              <span className="font-semibold text-foreground">{previousProject.title}</span>
            </div>
          </Button>
        )}
      </div>

      <div className="w-full sm:w-auto flex justify-end">
        {nextProject && (
          <Button variant="ghost" className="gap-2 text-right" render={<Link href={nextProject.href} />}>
            <div className="flex flex-col items-end text-right mr-2">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Next</span>
              <span className="font-semibold text-foreground">{nextProject.title}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Button>
        )}
      </div>
    </section>
  );
}
