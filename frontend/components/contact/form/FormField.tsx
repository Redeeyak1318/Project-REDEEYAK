import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { FormFieldConfig } from "../types";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  field: FormFieldConfig;
  error?: string;
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, field, error, ...props }, ref) => {
    const {
      id,
      label,
      placeholder,
      type = "text",
      required = false,
      autoComplete,
      component = "input",
      rows = 5,
    } = field;

    return (
      <div ref={ref} className={cn("flex flex-col gap-2", className)} {...props}>
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
          {required && (
            <span className="text-destructive ml-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
        {component === "textarea" ? (
          <Textarea
            id={id}
            name={id}
            rows={rows}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        ) : (
          <Input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
            autoComplete={autoComplete}
            aria-required={required}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          />
        )}
        {error && (
          <p
            className="text-xs font-medium text-destructive"
            id={`${id}-error`}
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";
