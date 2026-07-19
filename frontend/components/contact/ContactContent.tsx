import * as React from "react";
import { cn } from "@/lib/utils";

import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export interface ContactContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactContent = ({ className, ...props }: ContactContentProps) => {
    return (
        <div
            className={cn("grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start", className)}
            {...props}
        >
            <ContactInfo />
            <ContactForm />
        </div>
    );
};
