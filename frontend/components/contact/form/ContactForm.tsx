"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FormHeader } from "./FormHeader";
import { FormFields } from "./FormFields";
import { SubmitButton } from "./SubmitButton";

export interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactForm = ({ className, ...props }: ContactFormProps) => {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border/50 bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all hover:shadow-md",
        className
      )}
      {...props}
    >
      <FormHeader />
      <form
        className="space-y-6 sm:space-y-8"
        aria-labelledby="contact-form-title"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormFields />
        <div className="pt-2">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};