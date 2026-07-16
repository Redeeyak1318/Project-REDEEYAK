import * as React from "react";
import Link from "next/link";

import { CONTACT_INFO } from "./constants";
import { cn } from "@/lib/utils";

export interface ContactInfoProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const ContactInfo = ({
    className,
    ...props
}: ContactInfoProps) => {
    return (
        <div
            className={cn("flex flex-col gap-4", className)}
            {...props}
        >
            {CONTACT_INFO.map((item) => {
                const Icon = item.icon;

                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border p-5 transition-colors hover:bg-muted"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-sm text-muted-foreground">
                                {item.label}
                            </span>

                            <span className="font-medium group-hover:underline">
                                {item.value}
                            </span>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};