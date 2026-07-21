import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { SubmitButtonProps } from "../types";
import { FORM_MESSAGES } from "../constants";

export const SubmitButton = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
    ({ className, status = "idle", children, ...props }, ref) => {
        const isLoading = status === "loading";
        const isSuccess = status === "success";
        const isDisabled = status === "disabled" || isLoading || isSuccess || props.disabled;

        let content = children;

        if (!content) {
            if (isLoading) {
                content = FORM_MESSAGES.loading;
            } else if (isSuccess) {
                content = FORM_MESSAGES.success;
            } else if (status === "disabled") {
                content = (
                    <div className="flex flex-col items-center gap-1">
                        <span>
                            {FORM_MESSAGES.disabled}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            {FORM_MESSAGES.disabledSubtext}
                        </span>
                    </div>
                );
            } else {
                content = FORM_MESSAGES.idle;
            }
        }

        return (
            <Button
                ref={ref}
                type="submit"
                className={cn("w-full", className)}
                disabled={isDisabled}
                aria-disabled={isDisabled}
                {...props}
            >
                {content}
            </Button>
        );
    }
);
SubmitButton.displayName = "SubmitButton";
