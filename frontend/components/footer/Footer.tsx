import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { FooterBrand } from "./FooterBrand";
import { FooterBottom } from "./FooterBottom";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> { }

export const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <footer
            className={cn("bg-background py-12 md:py-16", className)}
            {...props}
        >
            <Container>
                <div className="flex flex-col gap-12">
                    <ScrollReveal>
                        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
                            <FooterBrand />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={150}>
                        <FooterBottom />
                    </ScrollReveal>
                </div>
            </Container>
        </footer>
    );
};