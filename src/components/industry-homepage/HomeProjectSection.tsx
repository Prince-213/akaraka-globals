import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProjectSection:React.FC = () => {
    return (
        <div className="home2-project-section mb-120">
            <div className="container-fluid">
                <div className="row g-4 align-items-end justify-content-between mb-70">
                    <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title two white">
                            <span>Our Industry Project</span>
                            <h2>Our Impactful Projects.</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                        <Link className="primary-btn2 two white" href="/project">
                            <span>View All Project</span>
                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="project-wrapper">
                    <div className="project-card-area">
                        <div className="project-card2 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <Link href="/project/details" className="project-img">
                                <Image width={382} height={382} src="/assets/img/home2/project-img1.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <span>Client: AGRL</span>
                                <h4><Link href="/project/details">Precision Sourcing</Link></h4>
                            </div>
                        </div>
                        <div className="project-card2 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <Link href="/project/details" className="project-img">
                                <Image width={382} height={382} src="/assets/img/home2/project-img2.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <span>Client: Axleo</span>
                                <h4><Link href="/project/details">Product Design &amp; Fabrication</Link></h4>
                            </div>
                        </div>
                        <div className="project-card2 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <Link href="/project/details" className="project-img">
                                <Image width={582} height={382} src="/assets/img/home2/project-img3.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <span>Client: Zenfy</span>
                                <h4><Link href="/project/details">Energy &amp; Power Generation</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-area two">
                        <div className="project-card2 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                            <Link href="/project/details" className="project-img">
                                <Image width={982} height={382} src="/assets/img/home2/project-img4.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <span>Client: AGRL</span>
                                <h4><Link href="/project/details">Energy &amp; Power Generation</Link></h4>
                            </div>
                        </div>
                        <div className="project-card2 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <Link href="/project/details" className="project-img">
                                <Image width={382} height={382} src="/assets/img/home2/project-img5.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <span>Client: Grand Chemicals Ltd</span>
                                <h4><Link href="/project/details">Industrial Automation</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjectSection
