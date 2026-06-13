import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterTopSection: React.FC = () => {
    return (
        <div className="footer-top-banner-section three">
            <div className="container">
                <div className="footer-top-banner-wrap">
                    <div className="title-and-btn-area wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title white">
                            <h2>
                                <Image width={50} height={50} src="/assets/img/home4/expert-img1.png" alt="" />
                                <Image width={50} height={50} src="/assets/img/home4/expert-img2.png" alt="" />
                                <Image width={50} height={50} src="/assets/img/home4/expert-img3.png" alt="" />
                                Talk to our experts about your coatings &amp; paints needs.
                            </h2>
                        </div>
                        <div className="btn-grp">
                            <Link className="primary-btn1 white-bg" href="/service">
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
                    <div className="footer-banner-right-content">
                        <ul>
                            <li className="single-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <h5>Software Platform</h5>
                                    <p>Our digital platform streamlines ordering, tracking, and technical support for all your coatings and paints needs.</p>
                                </div>
                                <Link href="/about" className="details-btn">
                                    <svg width={15} height={16} viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0742581 0.0507812H15.0001V2.8449L2.82181 15.0508L0 12.2567L8.31691 4.02137L0.0742581 4.0949V0.0507812Z" />
                                            <path d="M14.9992 15.0504V5.63867L10.9893 9.60926V15.0504H14.9992Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                            <li className="single-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <h5>Expert Team</h5>
                                    <p>Our digital platform streamlines ordering, tracking, and technical support for all your coatings and paints needs.</p>
                                </div>
                                <Link href="/our-team" className="details-btn">
                                    <svg width={15} height={16} viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.0742581 0.0507812H15.0001V2.8449L2.82181 15.0508L0 12.2567L8.31691 4.02137L0.0742581 4.0949V0.0507812Z" />
                                            <path d="M14.9992 15.0504V5.63867L10.9893 9.60926V15.0504H14.9992Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <svg className="arrow-vector" width={147} height={147} viewBox="0 0 147 147" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M0.727728 0H147.001V27.3823L27.6537 147L0 119.617L81.5055 38.9117L0.727728 39.6323V0Z" />
                    <path d="M147.002 146.999V54.7637L107.705 93.6754V146.999H147.002Z" />
                </g>
            </svg>
        </div>

    )
}

export default FooterTopSection
