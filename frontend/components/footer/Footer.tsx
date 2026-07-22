import * as React from "react";
import type { FooterProps } from "./types";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

import { FooterBrand } from "./FooterBrand";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocial } from "./FooterSocial";
import { FooterBottom } from "./FooterBottom";

export const Footer = ({ className, ...props }: FooterProps) => {
    return (
        <footer
            className={cn("bg-background py-12 md:py-16", className)}
            {...props}
        >
            <Container>
                <ScrollReveal>
                    <div className="flex flex-col gap-12">

                        <div className="grid ...">
                            <FooterBrand />
                            <FooterNavigation />
                            <FooterSocial />
                        </div>

                        <FooterBottom />

                    </div>
                </ScrollReveal>
            </Container>
        </footer>
    );
};