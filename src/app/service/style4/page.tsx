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
            <Breadcrumb title="Services" subtitle="Solutions Tailored for Your Industry." />
            <div className="service-page pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-md-5 gy-4 mb-70">
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img1.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Workforce Training &amp; Control</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img2.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Precision Engineering Solutions</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img3.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Bespoke Engineering Solutions</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img4.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Custom Engineering Support</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img5.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Precision Process Services</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img6.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Smart Engineering Support</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/home6/service-img7.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Custom Tech Solutions</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/innerpages/service4-img1.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Logistics Management</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/innerpages/service4-img2.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Equipment Rental &amp; Leasing</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/innerpages/service4-img3.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Metal Work &amp; Compliance Train</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/innerpages/service4-img4.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Exploration and Drilling</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <div className="service-card3 two magnetic-item">
                                <div className="service-img">
                                    <Image width={260} height={230} src="/assets/img/innerpages/service4-img5.jpg" alt="" />
                                </div>
                                <div className="service-content">
                                    <h4><Link href="/service/details">Assembly Line Automation</Link></h4>
                                    <Link href="/service/details" className="details-btn">View Details
                                        <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img1.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Steel Sheets &amp; Plates</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img2.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Copper Pipes &amp; Tubes</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img3.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Stainless Steel Coils</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img4.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Brass Rods &amp; Sheets</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img5.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Pre-Stress Steel Beam</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
                                    <Image width={260} height={230} src="/assets/img/innerpages/service-page-product-img6.jpg" alt="" />
                                </div>
                                <div className="product-content">
                                    <h4><Link href="/product/details">Factory Aluminum</Link></h4>
                                    <p>AGRL delivers consistent, high-grade industrial materials backed by rigorous quality checks at every procurement stage.</p>
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
