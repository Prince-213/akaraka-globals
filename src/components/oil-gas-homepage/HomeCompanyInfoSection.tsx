import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCompanyInfoSection = () => {
    return (
        <div className="home3-company-info-section mb-120">
            <div className="container">
                <div className="row gy-md-5 gy-4 align-items-center">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="company-info-img-and-countdown-area">
                            <div className="info-img magnetic-item">
                                <Image width={636} height={382}  src="/assets/img/home3/company-info-img.jpg" alt="" />
                            </div>
                            <div className="countdown-area">
                                <div className="number">
                                    <h3 className="counter">5</h3>
                                    <span>+</span>
                                </div>
                                <span>Year’s Of <br /> Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="company-info-content">
                            <h2>Redefining Industry Standards.</h2>
                            <p>From flexographic and gravure inks to organic and inorganic pigments, AGRL supplies a comprehensive portfolio of colour solutions to printers, packaging converters, and coatings manufacturers worldwide. Our technical team ensures precise colour matching and consistent batch-to-batch quality across every shipment.</p>
                            <Link className="primary-btn2 two" href="/contact">
                                <span>Become a Member</span>
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
        </div>

    )
}

export default HomeCompanyInfoSection
