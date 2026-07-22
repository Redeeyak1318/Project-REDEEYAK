import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_SOCIAL } from "./constants";
import { Button } from "@/components/ui/button";

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
                <Button
                    key={item.id}
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-foreground"
                    render={
                        <a 
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noopener noreferrer" : undefined}
                            aria-label={`${item.platform} Profile`}
                        />
                    }
                >
                    <item.icon aria-hidden="true" />
                </Button>
            ))}
        </nav>
    );
};
