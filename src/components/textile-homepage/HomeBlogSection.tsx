import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBlogSection = () => {
    return (
        <div className="home5-blog-section mb-120">
            <div className="container">
                <div className="row gy-md-5 gy-4 align-items-center justify-content-between mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-5">
                        <div className="section-title four">
                            <span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z" />
                                    <path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z" />
                                </svg>
                                Our Blog Corner
                            </span>
                            <h2>The Knowledge Polymer</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end">
                        <Link className="primary-btn5 btn-hover" href="/blog">
                            View All Article
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
                <div className="row gy-5">
                    <div className="col-xl-6 col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-card2 two magnetic-item">
                            <div className="blog-img">
                                <Image width={636} height={534} src="/assets/img/home5/blog-img1.webp" alt="" />
                            </div>
                            <div className="blog-content-wrap">
                                <Link href="/blog" className="blog-date">10 August, 2025</Link>
                                <div className="blog-content">
                                    <h4><Link href="/blog/details">Revolutionizing Production Then Future Of Industries And Factories.</Link></h4>
                                    <Link href="/blog/details" className="details-btn">
                                        <span>Read More</span>
                                        <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.23289 0.232893L14.3941 7.39408L13.0535 8.73466L1.35437 8.74787L1.34109 6.05345L9.28256 6.0926L5.29259 2.17319L7.23289 0.232893Z" />
                                            <path d="M7.19833 14.5909L11.7139 10.0753L7.88502 10.0564L5.27443 12.667L7.19833 14.5909Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="blog-card four mb-30 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog-img-wrap">
                                <Link className="blog-img" href="/blog/details">
                                    <Image width={311} height={250} src="/assets/img/home5/blog-img2.webp" alt="" />
                                </Link>
                            </div>
                            <div className="blog-content-wrap">
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li><Link className="blog-date" href="/blog">10 August, 2025</Link></li>
                                            <li><Link href="/blog">Industry</Link></li>
                                        </ul>
                                    </div>
                                    <h5><Link href="/blog/details">Pulse offer Manufacturin Factories News &amp; Work.</Link></h5>
                                </div>
                                <Link href="/blog/details" className="read-btn">
                                    <span>Read More</span>
                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                            <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="blog-card four wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog-img-wrap">
                                <Link className="blog-img" href="/blog/details">
                                    <Image width={311} height={250} src="/assets/img/home5/blog-img3.webp" alt="" />
                                </Link>
                            </div>
                            <div className="blog-content-wrap">
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li><Link className="blog-date" href="/blog">10 August, 2025</Link></li>
                                            <li><Link href="/blog">Industry</Link></li>
                                        </ul>
                                    </div>
                                    <h5><Link href="/blog/details">Polymer Industry Insights &amp; Innovations.</Link></h5>
                                </div>
                                <Link href="/blog/details" className="read-btn">
                                    <span>Read More</span>
                                    <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                            <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                        </g>
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

export default HomeBlogSection
