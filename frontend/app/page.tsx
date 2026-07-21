import dynamic from "next/dynamic";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

const Experience = dynamic(() => import("@/components/experience").then((mod) => mod.Experience));
const Skills = dynamic(() => import("@/components/skills").then((mod) => mod.Skills));
const ContactSection = dynamic(() => import("@/components/contact").then((mod) => mod.ContactSection));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <ContactSection />
      <Footer />
    </main>
  );
}