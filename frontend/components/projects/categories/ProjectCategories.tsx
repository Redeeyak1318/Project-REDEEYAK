import { ProjectCategory } from "../types";

function CategoryCard({ category }: { category: ProjectCategory }) {
  const Icon = category.icon;

  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border bg-card p-5 transition-colors duration-300">
      <div className="flex items-center gap-3">
        {Icon && (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-5" aria-hidden="true" />
          </div>
        )}
        <h4 className="font-semibold text-foreground">{category.name}</h4>
      </div>

      {category.description && (
        <p className="text-sm text-muted-foreground line-clamp-2">
          {category.description}
        </p>
      )}

      {category.count !== undefined && (
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center rounded-md border border-border bg-background px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
            {category.count === 1 ? "1 Project" : `${category.count} Projects`}
          </span>
        </div>
      )}
    </div>
  );
}

interface ProjectCategoriesProps {
  title: string;
  description: string;
  categories: ProjectCategory[];
}

export function ProjectCategories({
  title,
  description,
  categories,
}: ProjectCategoriesProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-muted-foreground max-w-[600px]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
