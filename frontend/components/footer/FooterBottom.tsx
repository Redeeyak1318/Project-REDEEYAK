import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_BOTTOM } from "./constants";

export interface FooterBottomProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FooterBottom = ({ className, ...props }: FooterBottomProps) => {
    const { copyrightOwner, copyrightText, attribution } = FOOTER_BOTTOM;
    const currentYear = new Date().getFullYear();

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-4 border-t border-border pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:justify-between sm:text-left md:pt-8",
                className
            )}
            {...props}
        >
            <small className="flex flex-col items-center gap-1 text-sm sm:flex-row sm:gap-2">
                <span>
                    &copy; {currentYear} {copyrightOwner}.
                </span>
                <span className="hidden sm:inline">&middot;</span>
                <span>{copyrightText}</span>
            </small>
            
            <small className="text-sm">
                {attribution}
            </small>
        </div>
    );
};
