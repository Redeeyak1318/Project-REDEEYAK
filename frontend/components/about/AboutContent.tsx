import * as React from "react";
import { ABOUT_DATA } from "./constants";
import { cn } from "@/lib/utils";

export interface AboutContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AboutContent = ({ className, ...props }: AboutContentProps) => {
    const { title, subtitle, description } = ABOUT_DATA;
    if (!title && !subtitle && (!description || description.length === 0)) {
        return null;
    }

    return (
        <div className={cn(
            "flex max-w-2xl flex-col gap-6 lg:gap-8",
            className
        )} {...props}>
            <header className="flex flex-col gap-4">
                {title ? (
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                        {title}
                    </h2>
                ) : null}

                {subtitle ? (
                    <h3 className="text-xl sm:text-2xl font-medium text-muted-foreground tracking-tight">
                        {subtitle}
                    </h3>
                ) : null}
            </header>

            {description && description.length > 0 ? (
                <div className="flex flex-col gap-4 text-lg sm:text-xl text-foreground/80 leading-relaxed">
                    {description.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            ) : null}
        </div>
    );
};
