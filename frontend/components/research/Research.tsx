import { ResearchHero } from "./hero";
import { ResearchPhilosophy } from "./philosophy";
import { ResearchCurrent } from "./current";

export function Research() {
    return (
        <main>
            <ResearchHero />
            <ResearchPhilosophy />
            <ResearchCurrent />
        </main>
    );
}