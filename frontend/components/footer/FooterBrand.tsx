import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FOOTER_DATA } from "./constants";

export interface FooterBrandProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const FooterBrand = ({
    className,
    ...props
}: FooterBrandProps) => {
    const { brand } = FOOTER_DATA;

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-3 text-center md:items-start md:text-left",
                className
            )}
            {...props}
        >
            <Link
                href="#hero"
                className="text-2xl font-bold tracking-tight transition-colors hover:text-primary"
            >
                {brand.name}
            </Link>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                {brand.tagline}
            </p>
        </div>
    );
};