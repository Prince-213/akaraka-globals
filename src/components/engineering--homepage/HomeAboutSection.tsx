"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import Counter from '../common/Counter'
import Image from 'next/image'

const HomeAboutSection:React.FC = () => {
    const counterRef = useRef(null);
    return (
        <div className="home6-about-section mb-120" id="scroll-section">
            <div className="container">
                <div className="row gy-md-5 gy-4 mb-90">
                    <div className="col-lg-7 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-content">
                            <div className="section-title five">
                                <span>Our Success</span>
                                <h2>Delivering General Contracting <span>Excellence</span> Across <span>Industries</span>.</h2>
                                <p>We understand your needs and deliver digital marketing through unique selling One proposi. Our team of experts is passionate about helping you SEO company. Foi Choose experience the difference! Looking for something different?  We are challenge the status with innovative solutions and a [company culture problem adjective] approach. </p>
                            </div>
                            <div className="experience-area">
                                <Counter
                                    start={0}
                                    end={5}
                                    speed={15}
                                    ref={counterRef}
                                    as="h2"
                                    className="counter"
                                />
                                <span>Years Of Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-img-wrap magnetic-item">
                            <div className="about-img">
                                <Image width={526} height={490} src="/assets/img/home6/about-img.webp" alt="" />
                                <Link href="/about" className="about-btn">About AGRL</Link>
                            </div>
                            <p>We understand your needs and deliver digital marketing through unique selling One proposi. Our team of experts is passionate about helping yot SEO company. Foi Choose experience the difference!</p>
                        </div>
                    </div>
                </div>
                <div className="row wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-10">
                        <div className="counter-wrap">
                            <div className="row gy-sm-5 gy-4">
                                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center divider">
                                    <div className="single-countdown">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={5}
                                                speed={45}
                                                ref={counterRef}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>+</span>
                                        </div>
                                        <span>Green Spaces</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center divider">
                                    <div className="single-countdown">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={15}
                                                speed={15}
                                                ref={counterRef}
                                                as="h2"
                                                className="counter"
                                            />
                                        </div>
                                        <span>Skilled Professionals</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-end justify-content-center divider">
                                    <div className="single-countdown">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={2}
                                                speed={15}
                                                ref={counterRef}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>K</span>
                                        </div>
                                        <span>Happy clients</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                                    <div className="single-countdown">
                                        <div className="number">
                                            <Counter
                                                start={0}
                                                end={1}
                                                speed={15}
                                                ref={counterRef}
                                                as="h2"
                                                className="counter"
                                            />
                                            <span>K</span>
                                        </div>
                                        <span>Successful projects</span>
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

export default HomeAboutSection
