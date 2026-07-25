import dynamic from "next/dynamic";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ResearchHero } from "./hero";

const ResearchPhilosophy = dynamic(() => import("./philosophy").then((mod) => mod.ResearchPhilosophy));
const ResearchCurrent = dynamic(() => import("./current").then((mod) => mod.ResearchCurrent));
const ResearchAreas = dynamic(() => import("./areas").then((mod) => mod.ResearchAreas));
const ResearchReading = dynamic(() => import("./reading").then((mod) => mod.ResearchReading));
const ResearchTimelinePreview = dynamic(() => import("./timeline-preview").then((mod) => mod.ResearchTimelinePreview));
const ResearchPublicationsPreview = dynamic(() => import("./publications-preview").then((mod) => mod.ResearchPublicationsPreview));
const ResearchCTA = dynamic(() => import("./cta").then((mod) => mod.ResearchCTA));

export interface ResearchProps extends React.HTMLAttributes<HTMLElement> { }

export const Research = ({ className, ...props }: ResearchProps) => {
    return (
        <main
            className={cn("flex flex-col w-full", className)}
            {...props}
        >
            <ResearchHero />
            <ResearchPhilosophy />
            <ResearchCurrent />
            <ResearchAreas />
            <ResearchReading />
            <ResearchTimelinePreview />
            <ResearchPublicationsPreview />
            <ResearchCTA />
        </main>
    );
};