import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProjectSection = () => {
    return (
        <div className="home3-project-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-5 col-lg-6">
                        <div className="section-title two">
                            <h2>Our Product Distribution In Action</h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-md-5 gy-4 mb-70">
                    <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="project-card2 two magnetic-item">
                            <Link href="/project/details" className="project-img">
                                <Image width={636} height={382} src="/assets/img/home3/project-img1.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <h4><Link href="/project/details">Global Pigment Supply Initiative</Link></h4>
                                <ul>
                                    <li><Link href="/oil-gas">Inks &amp; Pigments</Link></li>
                                    <li><Link href="/oil-gas">Colour Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <div className="project-card2 two magnetic-item">
                            <Link href="/project/details" className="project-img">
                                <Image width={636} height={382}  src="/assets/img/home3/project-img2.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <h4><Link href="/project/details">Printing Ink Distribution Network</Link></h4>
                                <ul>
                                    <li><Link href="/oil-gas">Inks &amp; Pigments</Link></li>
                                    <li><Link href="/oil-gas">Colour Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                        .<div className="project-card2 two magnetic-item">
                            <Link href="/project/details" className="project-img">
                                <Image width={636} height={382}  src="/assets/img/home3/project-img3.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <h4><Link href="/project/details">Colour Matching Excellence Programme</Link></h4>
                                <ul>
                                    <li><Link href="/oil-gas">Inks &amp; Pigments</Link></li>
                                    <li><Link href="/oil-gas">Colour Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                        .<div className="project-card2 two magnetic-item">
                            <Link href="/project/details" className="project-img">
                                <Image width={636} height={382}  src="/assets/img/home3/project-img4.jpg" alt="" />
                            </Link>
                            <div className="project-content">
                                <h4><Link href="/project/details">Sustainable Coatings Project</Link></h4>
                                <ul>
                                    <li><Link href="/oil-gas">Inks &amp; Pigments</Link></li>
                                    <li><Link href="/oil-gas">Colour Solutions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link className="primary-btn3 black-bg" href="/oil-gas">
                            <span>View All Portfolio
                            </span>
                            <span>View All Portfolio
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
            </div>
        </div>

    )
}

export default HomeProjectSection
