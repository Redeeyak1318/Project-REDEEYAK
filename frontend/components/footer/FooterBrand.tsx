import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_BRAND } from "./constants";
import { Logo } from "@/components/navigation/Logo";

export interface FooterBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FooterBrand = ({ className, ...props }: FooterBrandProps) => {
    const { name, title, tagline, description } = FOOTER_BRAND;

    return (
        <div
            className={cn(
                "flex flex-col items-center gap-4 text-center md:items-start md:text-left",
                className
            )}
            {...props}
        >
            <Logo />

            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold tracking-tight text-foreground">
                    {name}
                </h3>
                <span className="text-sm font-medium text-foreground">
                    {title}
                </span>
                
                {description && (
                    <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                        {description}
                    </p>
                )}
                
                <p className="mt-2 max-w-sm text-sm font-medium leading-6 text-foreground">
                    {tagline}
                </p>
            </div>
        </div>
    );
};