import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_BOTTOM } from "./constants";

export interface FooterBottomProps extends React.HTMLAttributes<HTMLElement> {}

export const FooterBottom = ({ className, ...props }: FooterBottomProps) => {
    const { copyright, attribution } = FOOTER_BOTTOM;

    return (
        <section
            className={cn(
                "flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row md:pt-8",
                className
            )}
            {...props}
        >
            <small>{copyright}</small>
            <small className="hidden sm:inline">{attribution}</small>
        </section>
    );
};
