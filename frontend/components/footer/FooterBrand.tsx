import * as React from "react";
import { cn } from "@/lib/utils";
import { FOOTER_BRAND } from "./constants";
import { Logo } from "@/components/navigation/Logo";

export interface FooterBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FooterBrand = ({ className, ...props }: FooterBrandProps) => {
    const { name, tagline } = FOOTER_BRAND;

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
                <span className="text-lg font-bold tracking-tight text-foreground">
                    {name}
                </span>
                <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                    {tagline}
                </p>
            </div>
        </div>
    );
};