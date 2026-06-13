import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProductSection = () => {
    return (
        <div className="home5-product-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-5">
                        <div className="section-title four text-center">
                            <span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z" />
                                    <path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z" />
                                </svg>
                                Our Products
                            </span>
                            <h2>Quality Polymer Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-md-5 gy-4 mb-60">
                    <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img1.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Plastic Packaging</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img2.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Geopolymers</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img3.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Flooring Solutions</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img4.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Household Plastics</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img5.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Automotive Plastics</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <div className="product-card2">
                            <div className="product-img">
                                <Image width={300} height={155} src="/assets/img/home5/product-img6.jpg" alt="" />
                            </div>
                            <div className="product-content">
                                <h4><Link href="/product/details">Medical Polymers</Link></h4>
                                <p>AGRL manufactures durable plastic products designed for industrial, commercial, and household applications with consistent quality.</p>
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
                        <Link className="primary-btn5 two btn-hover" href="/product/details">
                            View All Product
                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                </g>
                            </svg>
                            <span />
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeProductSection
