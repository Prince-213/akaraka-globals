import type { Metadata } from "next";
import serviceDetails from "@/data/serviceDetails";
import ServiceDetailClient from "./ServiceDetailClient";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return { title: "Service Details" };
  return {
    title: service.title,
    description: service.intro[0]?.slice(0, 160),
    openGraph: {
      title: `${service.title} | AGRL`,
      description: service.intro[0]?.slice(0, 160),
      images: [service.images.main],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceDetails[slug] || serviceDetails["raw-materials-supply"];
  return <ServiceDetailClient service={service} />;
}
