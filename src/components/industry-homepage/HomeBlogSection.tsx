import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBlogSection:React.FC = () => {
    return (
        <div className="home2-blog-section mb-120">
            <div className="container">
                <div className="row g-4 align-items-center justify-content-between mb-70">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title two">
                            <span>Industry Blog &amp; Article</span>
                            <h2>Insights &amp; Latest Thoughts</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                        <Link className="primary-btn3 transparent" href="/blog">
                            <span>View All Blogs
                            </span>
                            <span>View All Blogs
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
                <div className="row gy-5">
                    <div className="col-lg-6">
                        <div className="blog-card two">
                            <div className="blog-img-wrap">
                                <Link className="blog-img" href="/blog/details">
                                    <Image width={650} height={350} src="/assets/img/home2/blog-img1.webp" alt="" />
                                </Link>
                                <div className="blog-tag">
                                    <Link href="/blog">Industry</Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><Link className="blog-date" href="/blog">10 August, 2025</Link></li>
                                        <li><span>5 comment</span></li>
                                    </ul>
                                </div>
                                <h5><Link href="/blog/details">Revolutionizing Supply Chains: The Future Of Industrial Chemicals.</Link></h5>
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
                    <div className="col-lg-6">
                        <div className="blog-card two">
                            <div className="blog-img-wrap">
                                <Link className="blog-img" href="/blog/details">
                                    <Image width={650} height={350} src="/assets/img/home2/blog-img2.webp" alt="" />
                                </Link>
                                <div className="blog-tag">
                                    <Link href="/blog">Renovation</Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <ul>
                                        <li><Link className="blog-date" href="/blog">15 August, 2025</Link></li>
                                        <li><span>3 comment</span></li>
                                    </ul>
                                </div>
                                <h5><Link href="/blog/details">Expert Opinions &amp; News Revolutionizing Production The Future Industries.</Link></h5>
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
