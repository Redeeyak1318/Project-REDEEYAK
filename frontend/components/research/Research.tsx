import { ResearchHero } from "./hero";
import { ResearchPhilosophy } from "./philosophy";
import { ResearchCurrent } from "./current";
import { ResearchTimelinePreview } from "./timeline-preview";

export function Research() {
    return (
        <main>
            <ResearchHero />
            <ResearchPhilosophy />
            <ResearchCurrent />
            <ResearchTimelinePreview />
        </main>
    );
}