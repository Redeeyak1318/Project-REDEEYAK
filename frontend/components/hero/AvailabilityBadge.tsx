import { cn } from "@/lib/utils";

export interface AvailabilityBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

export const AvailabilityBadge = ({ text, className, ...props }: AvailabilityBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-border/40 bg-secondary/20 px-3 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm",
        className
      )}
      {...props}
    >
      <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
      <span>{text}</span>
    </span>
  );
};
