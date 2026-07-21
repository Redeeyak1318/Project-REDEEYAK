import * as React from "react";
import { CONTACT_AVAILABILITY } from "../constants";
import { cn } from "@/lib/utils";

export interface AvailabilityBadgeProps extends React.HTMLAttributes<HTMLDivElement> { }

export const AvailabilityBadge = ({ className, ...props }: AvailabilityBadgeProps) => {
    return (
        <div className={cn("rounded-2xl border p-5 bg-card", className)} {...props}>
            <h3 className="font-semibold text-lg mb-2">{CONTACT_AVAILABILITY.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{CONTACT_AVAILABILITY.description}</p>
            <ul className="flex flex-col gap-2">
                {CONTACT_AVAILABILITY.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
