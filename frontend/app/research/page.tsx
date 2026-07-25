import { Research } from "@/components/research/Research";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description: "Research work and publications by Raktim Sonowal.",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchPage() {
    return <Research />;
}