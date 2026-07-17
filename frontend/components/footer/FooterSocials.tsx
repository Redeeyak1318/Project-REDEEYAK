import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { FOOTER_DATA } from "./constants";

export interface FooterSocialsProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const FooterSocials = ({
    className,
    ...props
}: FooterSocialsProps) => {
    const { socials } = FOOTER_DATA;

    return (
        <div
            className={cn(
                "flex items-center justify-center gap-4 md:justify-end",
                className
            )}
            {...props}
        >
            {socials.map((social) => {
                const Icon = social.icon;

                return (
                    <Link
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Icon className="h-5 w-5" />
                    </Link>
                );
            })}
        </div>
    );
};