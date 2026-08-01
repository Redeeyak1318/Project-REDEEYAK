import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FORM_MESSAGES } from "../constants";

export interface SubmitButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  status?: "idle" | "loading" | "success" | "error" | "disabled";
}

export const SubmitButton = React.forwardRef<
  HTMLButtonElement,
  SubmitButtonProps
>(({ className, status = "idle", children, disabled, ...props }, ref) => {
  const isLoading = status === "loading";
  const isSuccess = status === "success";
  const isError = status === "error";
  const isDisabled = status === "disabled" || disabled;

  let buttonContent = children;

  if (!buttonContent) {
    if (isLoading) {
      buttonContent = FORM_MESSAGES.loading;
    } else if (isSuccess) {
      buttonContent = FORM_MESSAGES.success;
    } else if (isError) {
      buttonContent = FORM_MESSAGES.error;
    } else {
      buttonContent = FORM_MESSAGES.idle;
    }
  }

  return (
    <Button
      ref={ref}
      type="submit"
      size="lg"
      className={cn("w-full sm:w-auto px-8 font-semibold", className)}
      disabled={isDisabled || isLoading}
      aria-disabled={isDisabled || isLoading}
      {...props}
    >
      {buttonContent}
    </Button>
  );
});
SubmitButton.displayName = "SubmitButton";
