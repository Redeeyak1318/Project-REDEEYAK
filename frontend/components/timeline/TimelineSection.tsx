import { TimelineSectionData } from "./types";
import { TimelineItem } from "./TimelineItem";

export function TimelineSection({ title, items }: TimelineSectionData) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col gap-8 max-w-4xl">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      <ol className="flex flex-col gap-8">
        {items.map((item) => (
          <TimelineItem key={item.id} {...item} />
        ))}
      </ol>
    </section>
  );
}
