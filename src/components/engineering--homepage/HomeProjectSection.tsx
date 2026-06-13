"use client";
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
            spaceBetween: 30,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".project-slider-next",
                prevEl: ".project-slider-prev",
            },
            breakpoints: {
                280: {
                    slidesPerView: 1,
                },
                386: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 2,
                },
            },
        };
    }, []);
    return (
        <div className="home6-project-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-8">
                        <div className="section-title five text-center">
                            <span>Our Best Project</span>
                            <h2>Projects Delivered With Precision</h2>
                            <p>AGRL has successfully delivered raw materials, chemicals, and coatings to major industrial projects across Nigeria, ensuring quality and timely supply.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-slider-area mb-50">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...settings} className="swiper home6-project-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card4">
                                            <div className="project-img">
                                                 <Image width={400} height={380}  src="/assets/img/home6/project-img1.jpg" alt="" />
                                            </div>
                                            <div className="project-content-wrap">
                                                <Link href="/project/details" className="arrow-vector">
                                                    <svg width={45} height={45} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.222775 0H45.0006V8.38239L8.46546 45.0002L0 36.6178L24.9508 11.9118L0.222775 12.1324V0Z" />
                                                            <path d="M45.0006 44.9998V16.7644L32.9707 28.6762V44.9998H45.0006Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <div className="project-content">
                                                    <h4>
                                                        <Link href="/project/details">Innovative To Design Bridge Urban</Link>
                                                    </h4>
                                                    <ul className="tag-list">
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card4">
                                            <div className="project-img">
                                                  <Image width={400} height={380} src="/assets/img/home6/project-img2.jpg" alt="" />
                                            </div>
                                            <div className="project-content-wrap">
                                                <Link href="/project/details" className="arrow-vector">
                                                    <svg width={45} height={45} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.222775 0H45.0006V8.38239L8.46546 45.0002L0 36.6178L24.9508 11.9118L0.222775 12.1324V0Z" />
                                                            <path d="M45.0006 44.9998V16.7644L32.9707 28.6762V44.9998H45.0006Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <div className="project-content">
                                                    <h4>
                                                        <Link href="/project/details">Smart Management Water System</Link>
                                                    </h4>
                                                    <ul className="tag-list">
                                                        <li><Link href="/project">Energy Solutions</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card4">
                                            <div className="project-img">
                                                  <Image width={400} height={380} src="/assets/img/home6/project-img3.jpg" alt="" />
                                            </div>
                                            <div className="project-content-wrap">
                                                <Link href="/project/details" className="arrow-vector">
                                                    <svg width={45} height={45} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.222775 0H45.0006V8.38239L8.46546 45.0002L0 36.6178L24.9508 11.9118L0.222775 12.1324V0Z" />
                                                            <path d="M45.0006 44.9998V16.7644L32.9707 28.6762V44.9998H45.0006Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <div className="project-content">
                                                    <h4>
                                                        <Link href="/project/details">Logistics &amp; Supply Chain </Link>
                                                    </h4>
                                                    <ul className="tag-list">
                                                        <li><Link href="/project">Energy Solutions</Link></li>
                                                        <li><Link href="/project">Site Build</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card4">
                                            <div className="project-img">
                                                  <Image width={400} height={380} src="/assets/img/home6/project-img4.jpg" alt="" />
                                            </div>
                                            <div className="project-content-wrap">
                                                <Link href="/project/details" className="arrow-vector">
                                                    <svg width={45} height={45} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.222775 0H45.0006V8.38239L8.46546 45.0002L0 36.6178L24.9508 11.9118L0.222775 12.1324V0Z" />
                                                            <path d="M45.0006 44.9998V16.7644L32.9707 28.6762V44.9998H45.0006Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <div className="project-content">
                                                    <h4>
                                                        <Link href="/project/details">Smart Factory Revolution</Link>
                                                    </h4>
                                                    <ul className="tag-list">
                                                        <li><Link href="/project">Plant Setup</Link></li>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="project-card4">
                                            <div className="project-img">
                                                  <Image width={400} height={380} src="/assets/img/home6/project-img5.jpg" alt="" />
                                            </div>
                                            <div className="project-content-wrap">
                                                <Link href="/project/details" className="arrow-vector">
                                                    <svg width={45} height={45} viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.222775 0H45.0006V8.38239L8.46546 45.0002L0 36.6178L24.9508 11.9118L0.222775 12.1324V0Z" />
                                                            <path d="M45.0006 44.9998V16.7644L32.9707 28.6762V44.9998H45.0006Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <div className="project-content">
                                                    <h4>
                                                        <Link href="/project/details">Eco Tech Manufacturing</Link>
                                                    </h4>
                                                    <ul className="tag-list">
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="btn-area">
                    <Link className="primary-btn6" href="/project">
                        View All Projects
                        <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M14.1952 0.936056L27.5226 14.2634L25.0277 16.7583L3.25495 16.7829L3.23022 11.7684L18.0098 11.8413L10.5842 4.54707L14.1952 0.936056Z" />
                                <path d="M14.1298 27.657L22.5336 19.2532L15.4078 19.218L10.5493 24.0765L14.1298 27.657Z" />
                            </g>
                        </svg>
                    </Link>
                    <div className="slider-btn-grp four">
                        <div className="slider-btn project-slider-prev">
                            <i className="bi bi-arrow-left" />
                        </div>
                        <div className="slider-btn project-slider-next">
                            <i className="bi bi-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeProjectSection
