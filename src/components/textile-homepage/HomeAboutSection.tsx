import Image from 'next/image'
import React from 'react'

const HomeAboutSection = () => {
    return (
        <div className="home5-about-section mb-120">
            <div className="container">
                <div className="row gy-sm-5 gy-4 mb-70">
                    <div className="col-lg-10 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-content-wrap">
                            <div className="section-title four white">
                                <h2>About Our Company Mission &amp; Vision</h2>
                            </div>
                            <p>We understand your needs and deliver digital marketing through unique selling proposition. Our team of experts is passionate about helping you SEO company. Choose us and experience the difference! Looking for something different? We challenge the status quo with innovative solutions and a [company culture adjective] approach. Let us show you how we can help you achieve desired outcome in a way you won't expect.</p>
                            <Image width={1026} height={745} src="/assets/img/home5/home5-about-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <ul className="counter-list">
                            <li className="single-counter">
                                <div className="number">
                                    <h2 className="counter">130</h2>
                                </div>
                                <div className="content">
                                    <p>Project Completed</p>
                                </div>
                            </li>
                            <li className="single-counter">
                                <div className="number">
                                    <h2 className="counter">5</h2>
                                </div>
                                <div className="content">
                                    <p>Winning Award</p>
                                </div>
                            </li>
                            <li className="single-counter">
                                <div className="number">
                                    <h2 className="counter">1</h2>
                                    <span>K</span>
                                </div>
                                <div className="content">
                                    <p>Awesome Client</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logo-section four">
                    <div className="logo-wrap">
                        <div className="logo-title">
                            <h6>A partner, Not A Vendor:</h6>
                        </div>
                        <div className="marquee">
                            <div className="marquee__group">
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-01.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-02.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-03.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-04.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-05.png" alt="" /></a>
                            </div>
                            <div aria-hidden="true" className="marquee__group">
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-01.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-02.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-03.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-04.png" alt="" /></a>
                                <a href="#"><Image width={105} height={50} src="/assets/img/home5/partner-05.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeAboutSection
