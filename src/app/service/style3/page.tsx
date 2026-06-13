import FooterTop from '@/components/factory-homepage/FooterTop'
import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import Footer1 from '@/components/footers/Footer1'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Service" subtitle="Comprehensive Service Breakdown Over." />
         
            <div className="home4-service-section" id="scroll-section">
                <div className="container-fluid">
                    <div className="section-title three text-center white mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h2>[Our Services]</h2>
                    </div>
                    <ul className="service-wrapper">
                        <li className="single-service wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-img-and-title-area">
                                <div className="service-img">
                                    <Image width={450} height={260} src="/assets/img/home4/service-img1.webp" alt="" />
                                </div>
                                <div className="title-area">
                                    <ul>
                                        <li><Link href="/service">Metal</Link></li>
                                        <li><Link href="/service">Chemical</Link></li>
                                        <li><Link href="/service">Automotive</Link></li>
                                    </ul>
                                    <h2><Link href="/service/details">Workforce Training &amp; Control</Link></h2>
                                </div>
                            </div>
                            <div className="service-content">
                                <p>AGRL provides end-to-end industrial supply solutions, from raw material procurement and chemical distribution to quality assurance and logistics support.</p>
                                <Link href="/service/details" className="details-btn">
                                    <span>View Details</span>
                                    <div className="icon">
                                        <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                                <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="single-service wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-img-and-title-area">
                                <div className="service-img">
                                    <Image width={450} height={260} src="/assets/img/home4/service-img2.webp" alt="" />
                                </div>
                                <div className="title-area">
                                    <ul>
                                        <li><Link href="/service">Mining</Link></li>
                                        <li><Link href="/service">Chemical</Link></li>
                                        <li><Link href="/service">Energy</Link></li>
                                    </ul>
                                    <h2><Link href="/service/details">Metal Casting and Foundry</Link></h2>
                                </div>
                            </div>
                            <div className="service-content">
                                <p>AGRL provides end-to-end industrial supply solutions, from raw material procurement and chemical distribution to quality assurance and logistics support.</p>
                                <Link href="/service/details" className="details-btn">
                                    <span>View Details</span>
                                    <div className="icon">
                                        <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                                <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li className="single-service wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-img-and-title-area">
                                <div className="service-img">
                                    <Image width={450} height={260} src="/assets/img/home4/service-img3.webp" alt="" />
                                </div>
                                <div className="title-area">
                                    <ul>
                                        <li><Link href="/service">Mining</Link></li>
                                        <li><Link href="/service">Metal</Link></li>
                                        <li><Link href="/service">Energy</Link></li>
                                    </ul>
                                    <h2><Link href="/service/details">Metal Fabrication and Welding Assen</Link></h2>
                                </div>
                            </div>
                            <div className="service-content">
                                <p>AGRL provides end-to-end industrial supply solutions, from raw material procurement and chemical distribution to quality assurance and logistics support.</p>
                                <Link href="/service/details" className="details-btn">
                                    <span>View Details</span>
                                    <div className="icon">
                                        <svg width={24} height={23} viewBox="0 0 24 23" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M12.056 0.0560084L23.3137 11.3137L21.2063 13.4211L2.81473 13.4419L2.79385 9.20615L15.2782 9.26771L9.00578 3.10624L12.056 0.0560084Z" />
                                                <path d="M11.9999 22.6272L19.0987 15.5285L13.0794 15.4988L8.9755 19.6027L11.9999 22.6272Z" />
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                    <div className="row pt-50 bounce_up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <a className="primary-btn2 two white" href="#">
                                <span>Load More</span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-page-product-section">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="section-title text-center">
                                <span>Product Quality</span>
                                <h2>Quality Product At Every Step</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-md-5 gy-4 mb-60">
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img1.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Steel Sheets &amp; Plates</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img2.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Copper Pipes &amp; Tubes</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img3.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Stainless Steel Coils</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img4.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Brass Rods &amp; Sheets</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img5.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Pre-Stress Steel Beam</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="product-card2 two">
                                <div className="product-img">
                                    <Image width={450} height={260} src="/assets/img/innerpages/service-page-product-img6.webp" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Factory Aluminum</Link></h4>
                                    <p>AGRL sources and distributes premium chemicals, pigments, and raw materials with consistent quality and reliable delivery.</p>
                                </div>
                                <Link href="/product/details" className="arrow">
                                    <svg width={38} height={38} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.188118 0H37.9999V7.07834L7.14849 37.9995L0 30.9212L21.0692 10.0587L0.188118 10.245V0Z" />
                                            <path d="M38.0002 37.9991V14.1562L27.8418 24.2149V37.9991H38.0002Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row bounce_up">
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
                    </div>
                </div>
            </div>
            <FooterTop />
            <Footer1 />
        </>
    )
}

export default page
