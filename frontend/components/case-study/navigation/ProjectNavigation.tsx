import Link from "next/link";
import { ProjectNavigationData } from "../types";
import { Button } from "@/components/ui/button";

export function ProjectNavigation({
  previousProject,
  nextProject,
}: ProjectNavigationData) {
  if (!previousProject && !nextProject) return null;

  return (
    <section className="w-full">
      <nav
        aria-label="Project navigation"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {previousProject && (
          <Button
            variant="outline"
            className="flex flex-col items-start justify-center gap-2 p-6 md:p-8 rounded-2xl border bg-card shadow-sm hover:bg-accent hover:text-accent-foreground w-full h-auto text-left whitespace-normal"
            render={<Link href={previousProject.href} />}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Previous Project
            </span>
            <span className="text-2xl font-bold text-foreground">
              {previousProject.title}
            </span>
          </Button>
        )}

        {nextProject && (
          <Button
            variant="outline"
            className="flex flex-col items-end justify-center gap-2 p-6 md:p-8 rounded-2xl border bg-card shadow-sm hover:bg-accent hover:text-accent-foreground w-full h-auto text-right whitespace-normal md:col-start-2"
            render={<Link href={nextProject.href} />}
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Next Project
            </span>
            <span className="text-2xl font-bold text-foreground">
              {nextProject.title}
            </span>
          </Button>
        )}
      </nav>
    </section>
  );
}

