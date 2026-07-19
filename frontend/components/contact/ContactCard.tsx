import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ContactCardProps } from "./types";

export const ContactCard = ({
    icon: Icon,
    label,
    value,
    href,
    className,
    ...props
}: ContactCardProps) => {
    return (
        <Link
            href={href}
            className={cn("group flex items-center gap-4 rounded-2xl border p-5 transition-colors hover:bg-muted", className)}
            {...props}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
            </div>

            <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">
                    {label}
                </span>

                <span className="font-medium group-hover:underline">
                    {value}
                </span>
            </div>
        </Link>
    );
};
