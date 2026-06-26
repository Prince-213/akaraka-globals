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
  {
    src: "/assets/img/gallery/raw-materials.webp",
    alt: "Raw Materials Supply",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/calcium-carbonate.webp",
    alt: "Calcium Carbonate",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/industrial-chemicals-distribution.webp",
    alt: "Industrial Chemicals",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/acrylic-pva.webp",
    alt: "Acrylic PVA Emulsion",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/titanium-dioxide.webp",
    alt: "Titanium Dioxide",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/hecellose-natrosol.webp",
    alt: "Hecellose & Natrosol",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/sulphur-powder.webp",
    alt: "Sulphur Powder",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/ink-pigment.webp",
    alt: "Inks & Pigments",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/emulsion-text-coat-paint.webp",
    alt: "Emulsion & Tex Coat Paints",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/plastics-polymers.webp",
    alt: "Plastics & Polymers",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/bulk-procurement-services.webp",
    alt: "Bulk Procurement Services",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/product-formulation.webp",
    alt: "Product Formulation",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/technical-consultation.webp",
    alt: "Technical Consultation",
    wide: true,
    tall: true,
  },
  {
    src: "/assets/img/gallery/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp",
    alt: "Redefining Industrial Supply Standards",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/RAW-MATERIALS-SUPPLY-INDUSTRIAL-CHEMICALS-DISTRIBUTION.webp",
    alt: "Raw Materials & Chemicals Distribution",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/RAW-MATERIALS-SUPPLY-&-INDUSTRIAL-CHEMICALS-DISTRIBUTION.webp",
    alt: "Industrial Supply Chain",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/Below-WHAT-WE-DELIVER.webp",
    alt: "What We Deliver",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/acryric(sinapol NGR 655.webp",
    alt: "Acrylic Sinapol NGR 655",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/ad2aee01-b660-414d-b28e-8aff69b0a0c7 (1).webp",
    alt: "Industrial Product Showcase",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/anthony-roberts-_YLzw4aqvIY-unsplash.webp",
    alt: "Industrial Operations",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/mika-baumeister-dowajknGKnE-unsplash.webp",
    alt: "Supply Chain & Logistics",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/0f68ce23-d0c5-477e-92fd-cf67174765ac.webp",
    alt: "Warehouse Operations",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/07b5b848-39bb-49b6-8424-9c9232b4feb2.webp",
    alt: "Quality Control Inspection",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/1a967f83-0148-4740-bf74-c9ef5ad69422.webp",
    alt: "Product Packaging",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/1b521b7b-8b92-4f2b-b062-86abb1c6f3ec.webp",
    alt: "Inventory Management",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/2a3ead83-820f-47ee-b6c7-619faaef8780.webp",
    alt: "Chemical Products Display",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/2f3e3f87-328b-4900-bebe-9c6f5c18a9c1.webp",
    alt: "Industrial Materials Storage",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/32f9febf-99d4-4245-96ee-c960f649e9a4.webp",
    alt: "Production Facility",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/35e36395-200e-4802-a0f8-441abcb10578.webp",
    alt: "Loading Bay Operations",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/3857015a-9194-4a31-877b-3394ba3af31d.webp",
    alt: "Paint & Coating Products",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/41de9689-ce53-4f8e-9105-36215c667d98.webp",
    alt: "Raw Material Stockpile",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/42983612-1529-437a-b519-c0c7d54dea92.webp",
    alt: "Distribution Center",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/70bf2d42-f3f9-4982-add4-dfb624fb7cc5.webp",
    alt: "Plastic Container Range",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/75d195d8-2eba-417a-b8e6-4bb9cd850d30.webp",
    alt: "AGRL Office Premises",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/7971b6be-3f0c-4cd6-adc5-29b153408a57.webp",
    alt: "Bulk Supply Delivery",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/852cdd5f-41cd-4ecb-bf36-303fea6af9f6.webp",
    alt: "Industrial Chemical Drums",
    wide: true,
    tall: true,
  },
  {
    src: "/assets/img/gallery/91554fa0-663c-4088-8731-fc9acb6c3f63.webp",
    alt: "Sulphur Product Line",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/9d87955e-b70f-4939-adec-03b2121c01e9.webp",
    alt: "AGRL Team at Work",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/b023e537-6a93-45a9-be63-fb3a8b342e2c.webp",
    alt: "Product Sampling",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/d11ea95b-c869-41bf-8644-89df1421a691.webp",
    alt: "Logistics & Fleet",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/eb438db4-d18e-441c-96ef-fb6189c00785.webp",
    alt: "Quality Testing Lab",
    wide: false,
    tall: false,
  },
  {
    src: "/assets/img/gallery/f786493b-398b-4cb2-8377-f17aa0cdcacc.webp",
    alt: "Manufacturing Supplies",
    wide: false,
    tall: true,
  },
  {
    src: "/assets/img/gallery/f85b15f2-77fc-4617-b0e3-f7d755871b4a.webp",
    alt: "Warehouse Stock",
    wide: true,
    tall: false,
  },
  {
    src: "/assets/img/gallery/f9e15b8e-d628-409b-b440-70996091f9dd.webp",
    alt: "Industrial Pigments",
    wide: false,
    tall: false,
  },
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={idx < 4}
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
