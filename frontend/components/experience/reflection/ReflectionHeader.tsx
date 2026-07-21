import * as React from "react";
import { cn } from "@/lib/utils";
import { REFLECTION_DATA } from "./constants";

export interface ReflectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ReflectionHeader = ({ className, ...props }: ReflectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col gap-4 max-w-3xl", className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {REFLECTION_DATA.title}
      </h2>
      <p className="text-lg text-muted-foreground">
        {REFLECTION_DATA.description}
      </p>
    </div>
  );
};
