import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string;
}

export const Logo = ({
  className,
  href = "/",
}: LogoProps) => {
  return (
    <Link
      href={href}
      className={cn("text-xl font-bold tracking-tight hover:opacity-80 transition-opacity rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className)}
      aria-label="Home"
    >
      Project REDEEYAK
    </Link>
  );
};
