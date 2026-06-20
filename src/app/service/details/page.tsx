import type { Metadata } from "next";
import ServiceDetailContent from "./ServiceDetailContent";

export const metadata: Metadata = {
  title: "Service Details",
  description: "Comprehensive industrial raw materials supply and chemical distribution. Calcium carbonate, stone dust, kaolinite, acrylic PVA, titanium dioxide, HPMC, and more.",
  openGraph: {
    title: "Service Details - AGRL | Akaraka Global Resources",
    description: "Explore AGRL's full range of industrial raw materials, chemicals, paints, inks, coatings, and services in Nigeria.",
  },
};

export default function ServiceDetailsPage() {
  return <ServiceDetailContent />;
}
