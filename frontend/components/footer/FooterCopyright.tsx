import * as React from "react";
import { siteConfig } from "@/lib/site-config";

import { cn } from "@/lib/utils";

export interface FooterCopyrightProps
    extends React.HTMLAttributes<HTMLParagraphElement> { }

export const FooterCopyright = ({
    className,
    ...props
}: FooterCopyrightProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <p
            className={cn(
                "text-center text-sm text-muted-foreground",
                className
            )}
            {...props}
        >
            © {currentYear} {siteConfig.name}. All rights reserved.
            <span className="hidden sm:inline">
                {" "}
                Built with {siteConfig.name}.
            </span>
        </p>
    );
};