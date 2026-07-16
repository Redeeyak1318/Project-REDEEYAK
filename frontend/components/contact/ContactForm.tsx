import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export interface ContactFormProps
    extends React.HTMLAttributes<HTMLDivElement> { }

export const ContactForm = ({
    className,
    ...props
}: ContactFormProps) => {
    return (
        <div
            className={cn(
                "rounded-3xl border bg-card p-6 shadow-sm md:p-8",
                className
            )}
            {...props}
        >
            {<form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>

                        <Input
                            id="name"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>

                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                    </label>

                    <Input
                        id="subject"
                        placeholder="How can I help?"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message
                    </label>

                    <Textarea
                        id="message"
                        rows={6}
                        placeholder="Write your message..."
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                >
                    Send Message
                </Button>
            </form>}
        </div>
    );
};