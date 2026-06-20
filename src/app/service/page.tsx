import Breadcrumb from "@/components/common/Breadcrumb";
import FooterTop from "@/components/factory-homepage/FooterTop";
import Footer1 from "@/components/footers/Footer1";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive industrial services including raw materials supply, chemical distribution, and product formulation.",
  openGraph: {
    title: "Our Services - AGRL | Akaraka Global Resources",
    description:
      "12 comprehensive industrial services: raw materials, chemicals, inks, coatings, plastics, imports, exports, and more.",
  },
};
const page = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb
        title="Service"
        subtitle="Comprehensive Industrial Product Range"
      />
      <div className="service-page pt-120 mb-120" id="scroll-section">
        <div className="container">
          <div className="row gy-md-5 gy-4 mb-70">
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/raw-materials-supply">
                    Raw Materials Supply
                  </Link>
                </h4>
                <Link
                  href="/service/details/raw-materials-supply"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/raw-materials.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Premium CaCO3, stone dust, kaolinite and other industrial raw
                  materials sourced globally.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/industrial-chemicals">
                    Industrial Chemicals <br /> Distribution
                  </Link>
                </h4>
                <Link
                  href="/service/details/industrial-chemicals"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/industrial-chemicals-distribution.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Acrylic PVA, titanium dioxide, HPMC, sulphur powder and
                  specialty chemicals for industry.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/inks-and-pigments">
                    Inks &amp; Pigments <br /> Sales
                  </Link>
                </h4>
                <Link
                  href="/service/details/inks-and-pigments"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/ink-pigment.webp"
                    alt=""
                  />
                </Link>
                <p>
                  High-quality confineous series inks and pigments for printing
                  and industrial applications.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/coatings-and-paints">
                    Coatings &amp; <br /> Paints Supply
                  </Link>
                </h4>
                <Link
                  href="/service/details/coatings-and-paints"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/emulsion-text-coat-paint.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Emulsion paints, tex coat paints and protective coatings for
                  residential and industrial use.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/plastics-and-polymers">
                    Plastics &amp; Polymers
                  </Link>
                </h4>
                <Link
                  href="/service/details/plastics-and-polymers"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/plastics-polymers.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Durable plastic buckets, polymer resins and custom moulded
                  products for all sectors.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/import-export">
                    Import &amp; <br /> Export Services
                  </Link>
                </h4>
                <Link
                  href="/service/details/import-export"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/importation-export-services.jpeg"
                    alt=""
                  />
                </Link>
                <p>
                  Reliable international sourcing and export logistics for
                  industrial chemicals and materials.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/general-contracting">
                    General Contracting
                  </Link>
                </h4>
                <Link
                  href="/service/details/general-contracting"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/home2/service-img7.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Comprehensive supply and project contracting for construction
                  and industrial clients.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/technical-consultation">
                    Technical Consultation
                  </Link>
                </h4>
                <Link
                  href="/service/details/technical-consultation"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/information-technology.jpeg"
                    alt=""
                  />
                </Link>
                <p>
                  Expert guidance on chemical formulations, material selection
                  and industrial process optimization.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/supply-chain-management">
                    Supply Chain <br /> Management
                  </Link>
                </h4>
                <Link
                  href="/service/details/supply-chain-management"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/innerpages/service-img2.webp"
                    alt=""
                  />
                </Link>
                <p>
                  End-to-end supply chain solutions ensuring timely delivery of
                  raw materials and chemicals.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/quality-assurance">
                    Quality Assurance <br /> &amp; Testing
                  </Link>
                </h4>
                <Link
                  href="/service/details/quality-assurance"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/quality-assurance-testing.jpeg"
                    alt=""
                  />
                </Link>
                <p>
                  Rigorous quality control and lab testing for all industrial
                  chemicals and raw materials.
                </p>
                {/*  <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/bulk-procurement">
                    Bulk Procurement <br /> Services
                  </Link>
                </h4>
                <Link
                  href="/service/details/bulk-procurement"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/bulk-procurement-services.webp"
                    alt=""
                  />
                </Link>
                <p>
                  Large-volume sourcing of industrial raw materials at
                  competitive wholesale pricing.
                </p>
                {/*  <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="service-card magnetic-item">
                <h4>
                  <Link href="/service/details/product-formulation">
                    Product Formulation <br /> &amp; Blending
                  </Link>
                </h4>
                <Link
                  href="/service/details/product-formulation"
                  className="service-img"
                >
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/production-blending.jpeg"
                    alt=""
                  />
                </Link>
                <p>
                  Custom chemical blending and formulation services tailored to
                  your production needs.
                </p>
                {/* <Link className="primary-btn3 transparent" href="/service/details">
                                    <span>View Details
                                    </span>
                                    <span>View Details
                                    </span>
                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                        </g>
                                    </svg>
                                </Link> */}
                <svg
                  className="arrow-vector"
                  width={50}
                  height={50}
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                  <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-page-product-section">
        <div className="container">
          <div
            className="row justify-content-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center">
                <span>Product Quality</span>
                <h2>Quality Product At Every Step</h2>
              </div>
            </div>
          </div>
          <div className="row gy-md-5 gy-4 mb-60">
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/calcium-carbonate.webp"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">
                      Calcium Carbonate (CaCO3)
                    </Link>
                  </h4>
                  <p>
                    Premium-grade limestone powder for paint, plastic, and
                    construction industries. Produced to exact specifications
                    with consistent particle size and purity.
                  </p>
                </div>
                {/* <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/acrylic-pva.webp"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">Acrylic PVA Emulsion</Link>
                  </h4>
                  <p>
                    High-performance acrylic polyvinyl acetate emulsion for
                    adhesives, paints, and coating formulations with excellent
                    binding properties.
                  </p>
                </div>
                <Link href="/product/details" className="arrow">
                  <svg
                    width={38}
                    height={38}
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                      <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/titanium-dioxide.webp"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">Titanium Dioxide (TiO2)</Link>
                  </h4>
                  <p>
                    High-purity white pigment for paints, coatings, plastics,
                    and inks. Superior opacity, brightness, and UV resistance
                    for demanding applications.
                  </p>
                </div>
                {/* <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="800ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/hecellose-natrosol.jpeg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">Hecellose & Natrosol</Link>
                  </h4>
                  <p>
                    High-quality Hecellose and Natrosol products are vital
                    additives in numerous industries, including paints,
                    coatings, and construction materials. They are widely used
                    as thickeners, binders, and water-retention agents, ensuring
                    product stability and performance.
                  </p>
                </div>
                <Link href="/product/details" className="arrow">
                  <svg
                    width={38}
                    height={38}
                    viewBox="0 0 38 38"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                      <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/sulphur-powder.webp"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">Sulphur Powder</Link>
                  </h4>
                  <p>
                    Industrial-grade sulphur powder for chemical manufacturing,
                    fertilizers, and rubber vulcanization. Consistent purity and
                    fine particle size.
                  </p>
                </div>
                {/* <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link> */}
              </div>
            </div>
            <div
              className="col-lg-6 wow animate fadeInDown"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="product-card2 two">
                <div className="product-img">
                  <Image
                    width={260}
                    height={240}
                    src="/assets/img/sections/emulsion-text-coat-paint.webp"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <h4>
                    <Link href="/product/details">
                      Emulsion &amp; Tex Coat Paints
                    </Link>
                  </h4>
                  <p>
                    Premium interior and exterior paints formulated for the
                    Nigerian climate. Excellent coverage, durability, and colour
                    retention for lasting finishes.
                  </p>
                </div>
                {/*  <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link> */}
              </div>
            </div>
          </div>
          {/*  <div className="row bounce_up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <Link className="primary-btn1 black-bg" href="/product">
                                <span>View All Product
                                </span>
                                <span>View All Product
                                </span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div> */}
        </div>
      </div>
      <FooterTop />
      <Footer1 />
    </>
  );
};

export default page;
