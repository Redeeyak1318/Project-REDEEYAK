"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FormField } from "./FormField";
import { SubmitButton } from "./SubmitButton";
import { FORM_MESSAGES } from "../constants";
import type { ContactFormState } from "../types";

export interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export const ContactForm = ({
    className,
    ...props
}: ContactFormProps) => {
    const [values, setValues] = React.useState<ContactFormState>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = React.useState<Partial<ContactFormState>>({});
    // The form is currently disabled as per requirements,
    // but state is set up for future integration.
    const [status] = React.useState<"idle" | "loading" | "success" | "disabled">("disabled");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setValues((prev) => ({ ...prev, [id]: value }));

        if (errors[id as keyof ContactFormState]) {
            setErrors((prev) => ({ ...prev, [id]: undefined }));
        }
    };

    const validate = () => {
        const newErrors: Partial<ContactFormState> = {};
        if (!values.name.trim()) newErrors.name = FORM_MESSAGES.validation.required;
        if (!values.email.trim()) {
            newErrors.email = FORM_MESSAGES.validation.required;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            newErrors.email = FORM_MESSAGES.validation.email;
        }
        if (!values.subject.trim()) newErrors.subject = FORM_MESSAGES.validation.required;
        if (!values.message.trim()) newErrors.message = FORM_MESSAGES.validation.required;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (status === "disabled") return;

        if (validate()) {
            // Reserved for future Server Action / API integration.
            //
            // Example:
            //
            // await submitMessage(values);
            //
            // Update the form status and UI based on the result.
        }
    };

    return (
        <div
            className={cn(
                "rounded-3xl border bg-card p-6 shadow-sm md:p-8",
                className
            )}
            {...props}
        >
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                    <FormField
                        id="name"
                        label="Name"
                        error={errors.name}
                    >
                        <Input
                            id="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={values.name}
                            onChange={handleChange}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                    </FormField>

                    <FormField
                        id="email"
                        label="Email"
                        error={errors.email}
                    >
                        <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={values.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                    </FormField>
                </div>

                <FormField
                    id="subject"
                    label="Subject"
                    error={errors.subject}
                >
                    <Input
                        id="subject"
                        placeholder="How can I help?"
                        value={values.subject}
                        onChange={handleChange}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                </FormField>

                <FormField
                    id="message"
                    label="Message"
                    error={errors.message}
                >
                    <Textarea
                        id="message"
                        rows={6}
                        autoComplete="off"
                        placeholder="Write your message..."
                        value={values.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                    />
                </FormField>

                <SubmitButton status={status} />
            </form>
        </div>
    );
};