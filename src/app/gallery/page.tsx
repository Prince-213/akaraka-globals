import type { Metadata } from "next";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterTop from "@/components/factory-homepage/FooterTop";
import Footer1 from "@/components/footers/Footer1";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore our industrial facilities, products, and operations at Akaraka Global Resources Limited — from raw materials to finished goods.",
  openGraph: {
    title: "Gallery - Akaraka Global Resources Limited",
    description: "Visual tour of AGRL's industrial facilities, raw materials, chemicals, and operations in Abuja, Nigeria.",
  },
};

const galleryImages = [
  { src: "/assets/img/gallery/raw-materials.webp", alt: "Raw Materials Supply", wide: true, tall: false },
  { src: "/assets/img/gallery/calcium-carbonate.webp", alt: "Calcium Carbonate", wide: false, tall: true },
  { src: "/assets/img/gallery/industrial-chemicals-distribution.webp", alt: "Industrial Chemicals", wide: false, tall: false },
  { src: "/assets/img/gallery/acrylic-pva.webp", alt: "Acrylic PVA Emulsion", wide: true, tall: false },
  { src: "/assets/img/gallery/titanium-dioxide.webp", alt: "Titanium Dioxide", wide: false, tall: false },
  { src: "/assets/img/gallery/hpmc-celluse-ether.webp", alt: "HPMC & Cellulose Ethers", wide: false, tall: true },
  { src: "/assets/img/gallery/sulphur-powder.webp", alt: "Sulphur Powder", wide: false, tall: false },
  { src: "/assets/img/gallery/ink-pigment.webp", alt: "Inks & Pigments", wide: true, tall: false },
  { src: "/assets/img/gallery/emulsion-text-coat-paint.webp", alt: "Emulsion & Tex Coat Paints", wide: false, tall: false },
  { src: "/assets/img/gallery/plastics-polymers.webp", alt: "Plastics & Polymers", wide: false, tall: true },
  { src: "/assets/img/gallery/bulk-procurement-services.webp", alt: "Bulk Procurement Services", wide: true, tall: false },
  { src: "/assets/img/gallery/product-formulation.webp", alt: "Product Formulation", wide: false, tall: false },
  { src: "/assets/img/gallery/technical-consultation.webp", alt: "Technical Consultation", wide: true, tall: true },
  { src: "/assets/img/gallery/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp", alt: "Redefining Industrial Supply Standards", wide: false, tall: false },
  { src: "/assets/img/gallery/RAW-MATERIALS-SUPPLY-INDUSTRIAL-CHEMICALS-DISTRIBUTION.webp", alt: "Raw Materials & Chemicals Distribution", wide: true, tall: false },
  { src: "/assets/img/gallery/RAW-MATERIALS-SUPPLY-&-INDUSTRIAL-CHEMICALS-DISTRIBUTION.webp", alt: "Industrial Supply Chain", wide: false, tall: false },
  { src: "/assets/img/gallery/Below-WHAT-WE-DELIVER.webp", alt: "What We Deliver", wide: true, tall: false },
];

export default function GalleryPage() {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb title="Gallery" subtitle="Our Work, Facilities & Products in Pictures" />

      <div className="gallery-page pt-120 mb-120">
        <div className="container">
          <div className="section-title text-center mb-70">
            <span>Our Gallery</span>
            <h2>Explore Our World of Industrial Excellence</h2>
            <p>
              From our modern facilities and quality control laboratories to product
              showcases and project deliveries — take a visual tour of Akaraka Global
              Resources at work.
            </p>
          </div>

          <div className="bento-gallery">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`bento-item ${img.wide ? "bento-wide" : ""} ${img.tall ? "bento-tall" : ""}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="bento-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer1 />
    </>
  );
}
