import * as React from "react";
import { cn } from "@/lib/utils";
import { FORM_FIELDS_CONFIG } from "../constants";
import type { FormFieldConfig } from "../types";
import { FormField } from "./FormField";

export interface FormFieldsProps extends React.HTMLAttributes<HTMLDivElement> {
  fields?: FormFieldConfig[];
  formValues?: Record<string, string>;
  errors?: Record<string, string>;
  onFieldChange?: (id: string, value: string) => void;
}

export const FormFields = ({
  className,
  fields = FORM_FIELDS_CONFIG,
  formValues,
  errors,
  onFieldChange,
  ...props
}: FormFieldsProps) => {
  const topRowFields = fields.filter(
    (field) => field.id === "name" || field.id === "email"
  );
  const fullWidthFields = fields.filter(
    (field) => field.id !== "name" && field.id !== "email"
  );

  return (
    <div className={cn("space-y-6", className)} {...props}>
      {topRowFields.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {topRowFields.map((field) => (
            <FormField
              key={field.id}
              field={field}
              value={formValues?.[field.id] ?? ""}
              error={errors?.[field.id]}
              onFieldChange={onFieldChange}
            />
          ))}
        </div>
      )}
      {fullWidthFields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={formValues?.[field.id] ?? ""}
          error={errors?.[field.id]}
          onFieldChange={onFieldChange}
        />
      ))}
    </div>
  );
};

