import * as React from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

import { ContactHeader } from "./ContactHeader";
import { ContactContent } from "./ContactContent";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export interface ContactProps extends React.HTMLAttributes<HTMLElement> {}

export const Contact = ({ className, ...props }: ContactProps) => {
    return (
        <section
            id="contact"
            className={cn("py-16 lg:py-28", className)}
            {...props}
        >
            <Container>
                <ScrollReveal>
                    <div className="space-y-16">
                        <ContactHeader />
                        <ContactContent />
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
};