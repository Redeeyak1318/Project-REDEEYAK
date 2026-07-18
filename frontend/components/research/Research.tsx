import { ResearchHero } from "./hero";
import { ResearchPhilosophy } from "./philosophy";
import { ResearchCurrent } from "./current";
import { ResearchTimelinePreview } from "./timeline-preview";
import { ResearchPublicationsPreview } from "./publications-preview";
import { ResearchCTA } from "./cta";

export function Research() {
    return (
        <main>
            <ResearchHero />
            <ResearchPhilosophy />
            <ResearchCurrent />
            <ResearchTimelinePreview />
            <ResearchPublicationsPreview />
            <ResearchCTA />
        </main>
    );
}