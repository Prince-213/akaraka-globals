import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBlogSection:React.FC = () => {
    return (
        <div className="home4-blog-section mb-120">
            <div className="container">
                <div className="row gy-md-5 gy-4 justify-content-between mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-5">
                        <div className="section-title three">
                            <h2>[News &amp; Article]</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-lg-end">
                        <Link className="primary-btn4 btn-hover transparent" href="/blog">
                            View All Blogs
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
                <div className="row g-4">
                    <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-card3 magnetic-item">
                            <div className="blog-meta">
                                <ul>
                                    <li><span>Comment (20)</span></li>
                                    <li><Link href="/blog">Industry,</Link> <Link href="/blog">Coatings,</Link> <Link href="/blog">Supply</Link></li>
                                </ul>
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image width={374} height={261} src="/assets/img/home4/blog-author-img1.webp" alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Posted By, <span>Alen Jodge</span></h6>
                                    <span>05 January, 2025</span>
                                </div>
                            </div>
                            <h4><Link href="/blog/details">Revolutionizing Surface Protection &amp; the Future of Coatings.</Link></h4>
                            <Link className="blog-img" href="/blog/details">
                                <Image width={374} height={261} src="/assets/img/home4/blog-img1.webp" alt="" />
                            </Link>
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
                    <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="blog-card3 magnetic-item">
                            <div className="blog-meta">
                                <ul>
                                    <li><span>Comment (12)</span></li>
                                    <li><Link href="/blog">Industry,</Link> <Link href="/blog">Coatings,</Link> <Link href="/blog">Supply</Link></li>
                                </ul>
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image width={374} height={261} src="/assets/img/home4/blog-author-img2.webp" alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Posted By, <span>Johan Bored</span></h6>
                                    <span>10 January, 2025</span>
                                </div>
                            </div>
                            <h4><Link href="/blog/details">Emerging Trends Shaping the Coatings &amp; Paints Industry.</Link></h4>
                            <Link className="blog-img" href="/blog/details">
                                <Image width={374} height={261} src="/assets/img/home4/blog-img2.webp" alt="" />
                            </Link>
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
                    <div className="col-xl-4 col-md-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="blog-card3 magnetic-item">
                            <div className="blog-meta">
                                <ul>
                                    <li><span>Comment (22)</span></li>
                                    <li><Link href="/blog">Industry,</Link> <Link href="/blog">Coatings,</Link> <Link href="/blog">Supply</Link></li>
                                </ul>
                            </div>
                            <div className="author-area">
                                <div className="author-img">
                                    <Image width={374} height={261} src="/assets/img/home4/blog-author-img3.webp" alt="" />
                                </div>
                                <div className="author-content">
                                    <h6>Posted By, <span>Domigonal</span></h6>
                                    <span>10 January, 2025</span>
                                </div>
                            </div>
                            <h4><Link href="/blog/details">Sustainable Coatings Reducing Environmental Impact.</Link></h4>
                            <Link className="blog-img" href="/blog/details">
                                <Image width={374} height={261} src="/assets/img/home4/blog-img3.webp" alt="" />
                            </Link>
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

    )
}

export default HomeBlogSection
