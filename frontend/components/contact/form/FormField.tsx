import * as React from "react";
import { cn } from "@/lib/utils";
import type { FormFieldProps } from "../types";

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
    ({ className, label, id, error, children, ...props }, ref) => {
        return (
            <div ref={ref} className={cn("space-y-2", className)} {...props}>
                <label htmlFor={id} className="text-sm font-medium">
                    {label}
                </label>
                {children}
                {error && (
                    <p className="text-sm font-medium text-destructive" id={`${id}-error`} role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);
FormField.displayName = "FormField";
