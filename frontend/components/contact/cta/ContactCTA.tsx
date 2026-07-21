import * as React from "react";
import Link from "next/link";
import { CONTACT_CTA, CONTACT_SOCIALS } from "../constants";

export const ContactCTA = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight">{CONTACT_CTA.title}</h3>
                <p className="text-muted-foreground">{CONTACT_CTA.description}</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
                <Link
                    href={CONTACT_CTA.buttonLink}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                    {CONTACT_CTA.buttonText}
                </Link>

                <div className="flex items-center gap-2 border-l pl-4">
                    {CONTACT_SOCIALS.map((item) => (
                        <Link
                            key={item.id}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.platform}
                            className="rounded-full border p-2.5 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                            <span className="sr-only">{item.platform}</span>
                            <span className="[&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};