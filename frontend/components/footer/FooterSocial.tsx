import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_SOCIAL } from "./constants";

export interface FooterSocialProps extends React.HTMLAttributes<HTMLElement> {}

export const FooterSocial = ({ className, ...props }: FooterSocialProps) => {
    return (
        <nav
            aria-label="Social links"
            className={cn(
                "flex flex-wrap items-center justify-center gap-4 md:justify-end",
                className
            )}
            {...props}
        >
            {FOOTER_SOCIAL.map((item) => (
                <a
                    key={item.platform}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={`${item.platform} Profile`}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                </a>
            ))}
        </nav>
    );
};
