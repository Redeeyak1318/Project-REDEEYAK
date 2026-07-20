import * as React from "react";
import { cn } from "@/lib/utils";
import { FooterCopyright } from "./FooterCopyright";

export interface FooterBottomProps extends React.HTMLAttributes<HTMLElement> { }

export const FooterBottom = ({ className, ...props }: FooterBottomProps) => {
    return (
        <section
            className={cn("border-t border-border pt-6 md:pt-8", className)}
            {...props}
        >
            <FooterCopyright />
        </section>
    );
};
