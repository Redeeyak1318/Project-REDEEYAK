import * as React from "react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { ContactHeader as ContactHero } from "./hero";
import { ContactCards as ContactMethods } from "./methods";
import { ContactForm } from "./form";
import { AvailabilityBadge as ContactAvailability } from "./availability";
import { ContactCTA } from "./cta";

export interface ContactSectionProps extends React.HTMLAttributes<HTMLElement> { }

export const ContactSection = ({ className, ...props }: ContactSectionProps) => {
    return (
        <section
            id="contact"
            className={cn("py-16 lg:py-28", className)}
            {...props}
        >
            <Container>
                <ScrollReveal>
                    <div className="flex flex-col gap-12 lg:gap-16">
                        <ContactHero />
                        <div className="flex flex-col gap-12">
                            <ContactMethods />

                            <ContactForm />

                            <ContactAvailability />

                            <ContactCTA />
                        </div>
                    </div>
                </ScrollReveal>
            </Container>
        </section>
    );
};
