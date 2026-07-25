import dynamic from "next/dynamic";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const Experience = dynamic(() => import("@/components/experience/Experience").then((mod) => mod.Experience));
const Timeline = dynamic(() => import("@/components/timeline/Timeline").then((mod) => mod.Timeline));
const Skills = dynamic(() => import("@/components/skills/Skills").then((mod) => mod.Skills));
const ContactSection = dynamic(() => import("@/components/contact/ContactSection").then((mod) => mod.ContactSection));
const Footer = dynamic(() => import("@/components/footer/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsSection />
      <Timeline />
      <Experience />
      <Skills />
      <ContactSection />
      <Footer />
    </main>
  );
}