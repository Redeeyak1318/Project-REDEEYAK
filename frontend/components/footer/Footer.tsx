import * as React from "react";
import type { FooterProps } from "./types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { FooterBrand } from "./FooterBrand";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocials } from "./FooterSocials";
import { FooterBottom } from "./FooterBottom";


export const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <footer
            className={cn("bg-background py-12 md:py-16", className)}
            {...props}
        >
            <Container>
                <div className="flex flex-col gap-12">
                    <ScrollReveal>
                        <div className="grid gap-8 md:grid-cols-3 md:items-start">
                            <FooterBrand />

                            <FooterNavigation className="md:justify-self-center md:pt-1" />

                            <FooterSocials className="md:justify-self-end md:pt-1" />
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