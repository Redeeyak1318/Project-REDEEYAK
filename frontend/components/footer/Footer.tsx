import * as React from "react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/layout";

import { FooterBrand } from "./FooterBrand";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSocials } from "./FooterSocials";
import { FooterCopyright } from "./FooterCopyright";

export interface FooterProps
    extends React.HTMLAttributes<HTMLElement> { }

export const Footer = ({
    className,
    ...props
}: FooterProps) => {
    return (
        <footer
            className={cn(
                "border-t bg-background py-12",
                className
            )}
            {...props}
        >
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="grid gap-8 md:grid-cols-3 md:items-start">
                        <FooterBrand />

                        <FooterNavigation className="md:justify-self-center" />

                        <FooterSocials className="md:justify-self-end" />
                    </div>

                    <div className="border-t pt-6">
                        <FooterCopyright />
                    </div>
                </div>
            </Container>
        </footer>
    );
};