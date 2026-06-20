import type { Metadata } from "next";
import FaqContent from "./FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about AGRL's industrial chemicals, raw materials, coatings, delivery timelines, and services in Nigeria.",
  openGraph: {
    title: "FAQ - Akaraka Global Resources Limited",
    description: "Get answers about our industrial chemical products, raw materials, delivery, and technical support services.",
  },
};

export default function FaqPage() {
  return <FaqContent />;
}
