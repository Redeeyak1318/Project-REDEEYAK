import * as React from "react";
import { cn } from "@/lib/utils";

import { AvailabilityBadge } from "./AvailabilityBadge";
import { ContactCards } from "./ContactCards";
import { SocialLinks } from "./SocialLinks";

export interface ContactInfoProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const ContactInfo = ({
    className,
    ...props
}: ContactInfoProps) => {
    return (
        <div
            className={cn("flex flex-col gap-6", className)}
            {...props}
        >
            <AvailabilityBadge />
            <ContactCards />
            <SocialLinks />
        </div>
    );
};