import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBlogSection:React.FC = () => {
    return (
        <div className="home6-blog-section mb-120">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title five">
                            <span>Blog &amp; article</span>
                            <h2>Latest Insights</h2>
                            <p>Stay informed with AGRL insights on industrial chemical trends, raw material sourcing, and supply chain innovations for Nigerian businesses.</p>
                            <Link className="primary-btn6" href="/blog">
                                View All Articles
                                <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M14.1952 0.936056L27.5226 14.2634L25.0277 16.7583L3.25495 16.7829L3.23022 11.7684L18.0098 11.8413L10.5842 4.54707L14.1952 0.936056Z" />
                                        <path d="M14.1298 27.657L22.5336 19.2532L15.4078 19.218L10.5493 24.0765L14.1298 27.657Z" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="blog-card2 three magnetic-item mb-40">
                            <div className="blog-img">
                                <Image width={640} height={510} src="/assets/img/home6/blog-img1.webp" alt="" />
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
                        <div className="blog-card2 three magnetic-item">
                            <div className="blog-img">
                                <Image width={640} height={510} src="/assets/img/home6/blog-img2.webp" alt="" />
                            </div>
                            <div className="blog-content-wrap">
                                <Link href="/blog" className="blog-date">13 August, 2025</Link>
                                <div className="blog-content">
                                    <h4><Link href="/blog/details">Redefining Production and the Coming Years of Workshops and Industries.</Link></h4>
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
                </div>
            </div>
        </div>

    )
}

export default HomeBlogSection
