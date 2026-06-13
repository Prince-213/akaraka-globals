import Link from 'next/link'
import React from 'react'

const FooterTopBanner: React.FC = () => {
    return (
        <div className="footer-top-banner-section two">
            <div className="container">
                <div className="footer-top-banner-wrap">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <span>Building Your Vision</span>
                                <h2>Your Future Awaits Let's Talk Strategy</h2>
                            </div>
                            <div className="btn-grp wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <Link className="primary-btn3 black-bg" href="/service">
                                    <span>Our Products
                                    </span>
                                    <span>Our Products
                                    </span>
                                    <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                            <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link className="discuss-btn" href="/contact">
                                    Contact Us
                                    <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z" />
                                        <path d="M9.0002 8.99999V3.35294L6.59424 5.73529V8.99999H9.0002Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTopBanner
