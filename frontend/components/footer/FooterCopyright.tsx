import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_BOTTOM } from "./constants";

export interface FooterCopyrightProps extends React.HTMLAttributes<HTMLDivElement> { }

export const FooterCopyright = ({ className, ...props }: FooterCopyrightProps) => {
    const { copyright, attribution } = FOOTER_BOTTOM;

    return (
        <div
            className={cn(
                "flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row",
                className
            )}
            {...props}
        >
            <small>{copyright}</small>
            <p className="hidden sm:inline">{attribution}</p>
        </div>
    );
};