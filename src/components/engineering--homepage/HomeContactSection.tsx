import Image from 'next/image'
import React from 'react'

const HomeContactSection: React.FC = () => {
    return (
        <div className="home6-contact-section mb-120">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-6 d-md-block d-none">
                            <div className="contact-img">
                                <Image width={600} height={650} src="/assets/img/home6/home6-contact-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-form-wrap">
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Full Name *</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Email *</label>
                                                <input type="email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-inner">
                                                <label>Phone *</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Subject</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-inner">
                                                <label>Message *</label>
                                                <textarea  />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-inner2">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox"  id="contactCheck" />
                                                    <label className="form-check-label" htmlFor="contactCheck">
                                                        I have read &amp; accepted Terms &amp; Conditions.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="primary-btn6">
                                        Send Message
                                        <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M14.1952 0.936056L27.5226 14.2634L25.0277 16.7583L3.25495 16.7829L3.23022 11.7684L18.0098 11.8413L10.5842 4.54707L14.1952 0.936056Z" />
                                                <path d="M14.1298 27.657L22.5336 19.2532L15.4078 19.218L10.5493 24.0765L14.1298 27.657Z" />
                                            </g>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeContactSection
