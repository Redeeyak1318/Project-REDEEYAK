import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FOOTER_NAVIGATION } from "./constants";
import { Button } from "@/components/ui/button";

export interface FooterNavigationProps extends React.HTMLAttributes<HTMLElement> {}

export const FooterNavigation = ({ className, ...props }: FooterNavigationProps) => {
    return (
        <nav
            aria-label="Footer navigation"
            className={cn(
                "flex flex-col items-center gap-2 md:items-start",
                className
            )}
            {...props}
        >
            {FOOTER_NAVIGATION.map((item) => (
                <Button
                    key={item.id}
                    variant="ghost"
                    className="w-full justify-center text-muted-foreground hover:text-foreground md:w-auto md:justify-start"
                    render={<Link href={item.href} />}
                >
                    {item.label}
                </Button>
            ))}
        </nav>
    );
};