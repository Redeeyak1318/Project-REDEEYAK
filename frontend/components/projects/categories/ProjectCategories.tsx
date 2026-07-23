import { ProjectCategory } from "../types";
import { Button } from "@/components/ui/button";

function CategoryCard({
  category,
  isActive,
  onClick
}: {
  category: ProjectCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = category.icon;

  return (
    <Button
      variant="ghost"
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`flex h-full w-full flex-col items-start justify-start gap-3 whitespace-normal rounded-xl border p-5 text-left transition-colors duration-300 ${isActive
          ? "border-primary/20 bg-primary/5 hover:bg-primary/10 shadow-sm"
          : "border-border bg-card hover:bg-accent/20"
        }`}
    >
      <div className="flex w-full items-center gap-3">
        {Icon && (
          <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${isActive ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"}`}>
            <Icon className="size-5" aria-hidden="true" />
          </div>
        )}
        <h4 className="font-semibold text-foreground">{category.name}</h4>
      </div>

      {category.description && (
        <p className="line-clamp-2 w-full text-sm text-muted-foreground">
          {category.description}
        </p>
      )}

      {category.count !== undefined && (
        <div className="mt-auto pt-2 w-full text-left">
          <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium ${isActive ? "border-primary/20 bg-primary/10 text-primary" : "border-border bg-background text-muted-foreground"}`}>
            {category.count === 1 ? "1 Project" : `${category.count} Projects`}
          </span>
        </div>
      )}
    </Button>
  );
}

interface ProjectCategoriesProps {
  title: string;
  description: string;
  categories: ProjectCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function ProjectCategories({
  title,
  description,
  categories,
  activeCategory,
  onCategoryChange,
}: ProjectCategoriesProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground max-w-[600px]">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={activeCategory === category.id}
            onClick={() => onCategoryChange(category.id)}
          />
        ))}
      </div>
    </section>
  );
}
