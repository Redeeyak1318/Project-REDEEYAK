import Link from "next/link";
import { SOCIAL_LINKS } from "./constants";

export const SocialLinks = () => {
    return (
        <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;

                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="rounded-full border p-3 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                );
            })}
        </div>
    );
};