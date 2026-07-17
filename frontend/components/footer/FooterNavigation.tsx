import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FOOTER_DATA } from "./constants";

export interface FooterNavigationProps
    extends React.HTMLAttributes<HTMLElement> { }

export const FooterNavigation = ({
    className,
    ...props
}: FooterNavigationProps) => {
    const { navigation } = FOOTER_DATA;

    return (
        <nav
            aria-label="Footer Navigation"
            className={cn(className)}
            {...props}
        >
            <ul className="flex flex-col items-center gap-3 md:items-start">
                {navigation.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};