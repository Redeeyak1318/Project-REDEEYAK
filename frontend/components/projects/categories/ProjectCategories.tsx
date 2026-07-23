import { ProjectCategory } from "../types";

interface ProjectCategoriesProps {
  categories: ProjectCategory[];
}

export function ProjectCategories({ categories }: ProjectCategoriesProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <div
          key={category.id}
          className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
