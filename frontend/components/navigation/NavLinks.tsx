import Link from "next/link";
import { navigationItems } from "./config";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
}

export const NavLinks = ({ className }: NavLinksProps) => {
  return (
    <nav className={cn("hidden md:flex items-center gap-6", className)} aria-label="Main Navigation">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
