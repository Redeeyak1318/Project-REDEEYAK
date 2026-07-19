import * as React from "react";
import { CONTACT_INFO } from "./constants";
import { ContactCard } from "./ContactCard";
import { cn } from "@/lib/utils";

export interface ContactCardsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContactCards = ({ className, ...props }: ContactCardsProps) => {
    return (
        <div className={cn("flex flex-col gap-4", className)} {...props}>
            {CONTACT_INFO.map((item) => (
                <ContactCard
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                />
            ))}
        </div>
    );
};
