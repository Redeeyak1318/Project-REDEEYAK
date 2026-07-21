import * as React from "react";
import { cn } from "@/lib/utils";
import { FORM_HEADER_DATA } from "../constants";

export interface FormHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export const FormHeader = ({
  className,
  title = FORM_HEADER_DATA.title,
  description = FORM_HEADER_DATA.description,
  ...props
}: FormHeaderProps) => {
  if (!title && !description) return null;

  return (
    <div className={cn("flex flex-col gap-2 mb-6 sm:mb-8", className)} {...props}>
      {title && (
        <h3 id="contact-form-title" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
