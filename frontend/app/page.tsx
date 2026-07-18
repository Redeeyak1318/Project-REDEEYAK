import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

const Experience = dynamic(() => import("@/components/experience").then((mod) => mod.Experience));
const Skills = dynamic(() => import("@/components/skills").then((mod) => mod.Skills));
const Contact = dynamic(() => import("@/components/contact").then((mod) => mod.Contact));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}