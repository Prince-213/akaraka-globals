import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeCareerSection: React.FC = () => {
    return (
        <div className="home4-career-section">
            <div className="row g-0">
                <div className="col-xl-5 d-xl-block d-none">
                    <div className="career-img">
                        <Image width={760} height={840} src="/assets/img/home4/home4-career-img.webp" alt="" />
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="career-content-wrap">
                        <div className="section-title three white text-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2>[Career Opportunity]</h2>
                        </div>
                        <ul className="career-list">
                            <li className="single-career wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="post-name">
                                    <h5>Quality Control Specialist</h5>
                                </div>
                                <div className="job-discription-wrap">
                                    <ul className="job-discription">
                                        <li>
                                            <span>Experience</span>
                                            2 Years
                                        </li>
                                        <li>
                                            <span>Deadline</span>
                                            2025-12-23
                                        </li>
                                    </ul>
                                    <Link href="/career-details" className="apply-btn">
                                        <span>Apply Now</span>
                                        <div className="icon">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M0.0792086 0H16.0001V2.98039L3.00993 16L0 13.0196L8.87137 4.23529L0.0792086 4.31373V0Z" />
                                                    <path d="M15.9999 15.9997V5.96045L11.7227 10.1957V15.9997H15.9999Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li className="single-career wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="post-name">
                                    <h5>Sales Representative</h5>
                                </div>
                                <div className="job-discription-wrap">
                                    <ul className="job-discription">
                                        <li>
                                            <span>Experience</span>
                                            1 Years
                                        </li>
                                        <li>
                                            <span>Deadline</span>
                                            2025-12-23
                                        </li>
                                    </ul>
                                    <Link href="/career-details" className="apply-btn">
                                        <span>Apply Now</span>
                                        <div className="icon">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M0.0792086 0H16.0001V2.98039L3.00993 16L0 13.0196L8.87137 4.23529L0.0792086 4.31373V0Z" />
                                                    <path d="M15.9999 15.9997V5.96045L11.7227 10.1957V15.9997H15.9999Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                            <li className="single-career wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="post-name">
                                    <h5>Application Technician</h5>
                                </div>
                                <div className="job-discription-wrap">
                                    <ul className="job-discription">
                                        <li>
                                            <span>Experience</span>
                                            1 Years
                                        </li>
                                        <li>
                                            <span>Deadline</span>
                                            2025-12-28
                                        </li>
                                    </ul>
                                    <Link href="/career-details" className="apply-btn">
                                        <span>Apply Now</span>
                                        <div className="icon">
                                            <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M0.0792086 0H16.0001V2.98039L3.00993 16L0 13.0196L8.87137 4.23529L0.0792086 4.31373V0Z" />
                                                    <path d="M15.9999 15.9997V5.96045L11.7227 10.1957V15.9997H15.9999Z" />
                                                </g>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="row bounce_up">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <Link className="primary-btn2 two white" href="/career">
                                    <span>View All Career</span>
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
        </div>

    )
}

export default HomeCareerSection
