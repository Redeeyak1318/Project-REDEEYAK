import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { ContactMethod, MethodCardProps } from "../types";

export const MethodCard = ({ method, className, ...props }: MethodCardProps) => {
  const { title, description, value, href, icon: IconOrNode, external, status } = method;
  const targetHref = href;
  const isExternal = external ?? (targetHref ? targetHref.startsWith("http") : false);

  const renderIcon = () => {
    if (!IconOrNode) return null;
    if (typeof IconOrNode === "function") {
      const IconComponent = IconOrNode as React.ElementType;
      return <IconComponent className="h-5 w-5" />;
    }
    if (React.isValidElement(IconOrNode)) {
      return IconOrNode;
    }
    return null;
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-border/80 hover:shadow-md motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        {/* Top Header: Icon & Optional Status/Availability */}
        <div className="flex items-center justify-between gap-4">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            aria-hidden="true"
          >
            {renderIcon()}
          </div>
          {status && (
            <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground border border-border/40">
              {status}
            </span>
          )}
        </div>

        {/* Title & Short Description */}
        <div className="flex flex-col gap-1.5">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Contact Value & Action Button */}
      <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-border/30">
        <span className="text-sm font-medium text-foreground/90 truncate" title={value}>
          {value}
        </span>

        {targetHref ? (
          <div>
            <Button
              variant="outline"
              size="sm"
              className="w-full sm:w-auto font-medium group/btn"
              render={
                isExternal ? (
                  <a
                    href={targetHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect via ${title} (${value}) (opens in a new tab)`}
                  />
                ) : (
                  <Link
                    href={targetHref}
                    aria-label={`Connect via ${title} (${value})`}
                  />
                )
              }
            >
              <span>Connect</span>
              {isExternal && (
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              )}
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
