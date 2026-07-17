import * as React from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

import { ContactHeader } from "./ContactHeader";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

export interface ContactProps
    extends React.HTMLAttributes<HTMLElement> { }

export const Contact = ({
    className,
    ...props
}: ContactProps) => {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className={cn("py-16 lg:py-28", className)}
            {...props}
        >
            <Container>
                <div className="space-y-16">
                    <ContactHeader />

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                        <div className="space-y-8">
                            <ContactInfo />
                            <SocialLinks />
                        </div>

                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
};