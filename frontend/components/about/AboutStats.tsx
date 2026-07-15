import * as React from "react";
import { ABOUT_DATA } from "./constants";
import { cn } from "@/lib/utils";

export interface AboutStatsProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AboutStats = ({ className, ...props }: AboutStatsProps) => {
    const { stats } = ABOUT_DATA;

    if (!stats || stats.length === 0) {
        return null;
    }

    return (
        <div className={cn("grid grid-cols-3 gap-6", className)} {...props}>
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="flex flex-col items-start gap-1"
                >
                    <span className="text-3xl font-bold tracking-tight text-foreground">
                        {stat.value}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
};
