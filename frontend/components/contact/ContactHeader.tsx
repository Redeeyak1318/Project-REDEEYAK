import * as React from "react";

import { CONTACT_DATA } from "./constants";
import { cn } from "@/lib/utils";

export interface ContactHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const ContactHeader = ({
    className,
    ...props
}: ContactHeaderProps) => {
    const { badge, title, description } = CONTACT_DATA;

    return (
        <div
            className={cn(
                "flex flex-col items-center text-center gap-4 max-w-2xl mx-auto",
                className
            )}
            {...props}
        >
            <span className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                {badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                {title}
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};