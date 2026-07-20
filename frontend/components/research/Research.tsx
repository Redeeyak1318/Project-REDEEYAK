import * as React from "react";
import { cn } from "@/lib/utils";

import { ResearchHero } from "./hero";
import { ResearchPhilosophy } from "./philosophy";
import { ResearchCurrent } from "./current";
import { ResearchTimelinePreview } from "./timeline-preview";
import { ResearchPublicationsPreview } from "./publications-preview";
import { ResearchCTA } from "./cta";

export interface ResearchProps extends React.HTMLAttributes<HTMLElement> {}

export const Research = ({ className, ...props }: ResearchProps) => {
    return (
        <main
            className={cn("flex flex-col w-full", className)}
            {...props}
        >
            <ResearchHero />
            <ResearchPhilosophy />
            <ResearchCurrent />
            <ResearchTimelinePreview />
            <ResearchPublicationsPreview />
            <ResearchCTA />
        </main>
    );
};