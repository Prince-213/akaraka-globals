import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCareerOpportunitySection = () => {
    return (
        <div className="home3-career-opportunity-section mb-120">
            <div className="container-fluid">
                <div className="row gy-5">
                    <div className="col-xl-4 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="career-opportunity-title-area">
                            <div className="section-title two">
                                <h2>Be a Part Of Our New Story</h2>
                                <p>Join AGRL's growing inks and pigments division. We are always looking for talented professionals in supply chain, quality control, technical sales, and colour matching to help us serve clients across the globe.</p>
                            </div>
                            <Link className="primary-btn3 transparent" href="/career">
                                <span>View Opportunity
                                </span>
                                <span>View Opportunity
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
                    <div className="col-xl-8">
                        <div className="career-card-area">
                            <div className="row gy-5">
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="career-card">
                                        <div className="career-banner-img">
                                             <Image
                                              width={425} height={470} src="/assets/img/home3/career-banner-img1.webp" alt="" />
                                        </div>
                                        <div className="career-content-wrap">
                                            <div className="career-content">
                                                <h5><Link href="/career-details">Project Manager</Link></h5>
                                                <p>Conduct thorough needs assessments to understand client requirements and deliver tailored ink and pigment solutions across global markets.</p>
                                                <Link href="/career-details">
                                                    <span>Apply Now</span>
                                                    <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z" />
                                                        <path d="M8.99971 9.00058V3.35352L6.59375 5.73587V9.00058H8.99971Z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="40ms" data-wow-duration="1500ms">
                                    <div className="career-card">
                                        <div className="career-banner-img">
                                             <Image
                                              width={425} height={470} src="/assets/img/home3/career-banner-img2.webp" alt="" />
                                        </div>
                                        <div className="career-content-wrap">
                                            <div className="career-content">
                                                <h5><Link href="/career-details">Financial Advisor</Link></h5>
                                                <p>Conduct thorough needs assessments to understand client requirements and deliver tailored ink and pigment solutions across global markets.</p>
                                                <Link href="/career-details">
                                                    <span>Apply Now</span>
                                                    <svg width={9} height={9} viewBox="0 0 9 9" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.0445549 0H9.00008V1.67647L1.69308 9L0 7.32353L4.99014 2.38235L0.0445549 2.42647V0Z" />
                                                        <path d="M8.99971 9.00058V3.35352L6.59375 5.73587V9.00058H8.99971Z" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeCareerOpportunitySection
