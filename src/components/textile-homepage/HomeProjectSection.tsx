"use client"
import Link from 'next/link'
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Image from 'next/image';
import { SwiperOptions } from 'swiper/types';

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HomeProjectSection:React.FC = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".progress-pagination",
                type: "progressbar",
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                386: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        };
    }, []);
    return (
        <div className="home5-project-section mb-120">
            <div className="container">
                <div className="row justify-content-lg-end mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-11 d-flex align-items-center justify-content-between flex-wrap gap-4">
                        <div className="section-title four">
                            <span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z" />
                                    <path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z" />
                                </svg>
                                Project Highlights
                            </span>
                            <h2>Creative Polymer Initiatives</h2>
                        </div>
                        <Link className="primary-btn5 btn-hover" href="/project">
                            View All Project
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
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home5-project-slider mb-70">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img1.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: AGRL</span>
                                            <h4><Link href="/project/details">Sustainable Polymer Innovation</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img2.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: AGRL</span>
                                            <h4><Link href="/project/details">Reducing Environmental</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img3.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: Qzency</span>
                                            <h4><Link href="/project/details">Exploring Bio-Based Polymers</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img4.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: Grand Chemicals Ltd</span>
                                            <h4><Link href="/project/details">Molded Excellence</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img5.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: Zenfy</span>
                                            <h4><Link href="/project/details">Digital Molding Project</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="project-card3">
                                        <Link href="/project/details" className="project-img">
                                            <Image width={420} height={442} src="/assets/img/home5/project-img6.jpg" alt="" />
                                        </Link>
                                        <div className="project-content">
                                            <span>Client: Mortar</span>
                                            <h4><Link href="/project/details">Polymer Intelligence</Link></h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        <div className="progress-pagination" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeProjectSection
