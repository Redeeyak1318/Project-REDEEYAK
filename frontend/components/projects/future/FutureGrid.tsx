import * as React from "react";
import { FUTURE_FOCUS_DATA } from "../constants";
import { FutureCard } from "./FutureCard";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const FutureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {FUTURE_FOCUS_DATA.map((focus, index) => (
        <ScrollReveal key={focus.title} delay={index * 100} className="h-full">
          <FutureCard focus={focus} />
        </ScrollReveal>
      ))}
    </div>
  );
};
