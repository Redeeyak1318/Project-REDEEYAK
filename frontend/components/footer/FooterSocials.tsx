import * as React from "react";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/lib/social-links";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";

export interface FooterSocialsProps extends React.HTMLAttributes<HTMLElement> { }

export const FooterSocials = ({ className, ...props }: FooterSocialsProps) => {
    return (
        <nav
            aria-label="Social links"
            className={cn(
                "flex flex-wrap items-center justify-center gap-4 md:justify-end",
                className
            )}
            {...props}
        >
            {socialLinks.github && (
                <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <FaGithub className="h-5 w-5" aria-hidden="true" />
                </a>
            )}
            {socialLinks.linkedin && (
                <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <FaLinkedin className="h-5 w-5" aria-hidden="true" />
                </a>
            )}
            {socialLinks.x && (
                <a
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter) Profile"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <FaXTwitter className="h-5 w-5" aria-hidden="true" />
                </a>
            )}
            {socialLinks.email && (
                <a
                    href={`mailto:${socialLinks.email}`}
                    aria-label="Email Contact"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                    <FaEnvelope className="h-5 w-5" aria-hidden="true" />
                </a>
            )}
        </nav>
    );
};