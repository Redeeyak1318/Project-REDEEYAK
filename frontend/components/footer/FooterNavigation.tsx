import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FOOTER_NAVIGATION } from "./constants";

export interface FooterNavigationProps extends React.HTMLAttributes<HTMLElement> {}

export const FooterNavigation = ({ className, ...props }: FooterNavigationProps) => {
    return (
        <nav
            aria-label="Footer navigation"
            className={cn(
                "flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:gap-6",
                className
            )}
            {...props}
        >
            {FOOTER_NAVIGATION.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-sm px-1 py-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    );
};