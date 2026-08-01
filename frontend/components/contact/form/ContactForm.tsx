"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FORM_MESSAGES } from "../constants";
import { FormHeader } from "./FormHeader";
import { FormFields } from "./FormFields";
import { SubmitButton } from "./SubmitButton";

export interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormStatus = "idle" | "loading" | "success" | "error";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const ContactForm = ({ className, ...props }: ContactFormProps) => {
  const [formValues, setFormValues] = React.useState(INITIAL_VALUES);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<FormStatus>("idle");
  const successTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (successTimerRef.current) {
        clearTimeout(successTimerRef.current);
      }

      successTimerRef.current = setTimeout(() => {
        setStatus("idle");
        successTimerRef.current = null;
      }, 3000);
    };
  }, []);

  const handleFieldChange = React.useCallback((id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setStatus((prev) => (prev === "success" || prev === "error" ? "idle" : prev));
  }, []);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formValues.name.trim()) {
      newErrors.name = FORM_MESSAGES.validation.required;
    }
    if (!formValues.email.trim()) {
      newErrors.email = FORM_MESSAGES.validation.required;
    } else if (!EMAIL_REGEX.test(formValues.email.trim())) {
      newErrors.email = FORM_MESSAGES.validation.email;
    }
    if (!formValues.subject.trim()) {
      newErrors.subject = FORM_MESSAGES.validation.required;
    }
    if (!formValues.message.trim()) {
      newErrors.message = FORM_MESSAGES.validation.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          subject: formValues.subject.trim(),
          message: formValues.message.trim(),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setFormValues(INITIAL_VALUES);
      setErrors({});
      setStatus("success");
      successTimerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 3000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={cn(
        "rounded-3xl border border-border/50 bg-card p-6 sm:p-8 lg:p-10 shadow-sm transition-all motion-reduce:transition-none hover:shadow-md",
        className
      )}
      {...props}
    >
      <FormHeader />
      <form
        className="space-y-6 sm:space-y-8"
        aria-labelledby="contact-form-title"
        onSubmit={handleSubmit}
      >
        <FormFields
          formValues={formValues}
          errors={errors}
          onFieldChange={handleFieldChange}
        />
        <div className="pt-2">
          <SubmitButton status={status} />
        </div>
      </form>
    </div>
  );
};
