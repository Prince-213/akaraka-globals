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
const HomeServiceSection:React.FC = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 0,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".service-slider-next",
                prevEl: ".service-slider-prev",
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
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <div className="home6-service-section mb-120">
            <div className="container">
                <div className="row g-4 align-items-lg-end justify-content-between mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-7">
                        <div className="section-title five white">
                            <span>Best Solutions</span>
                            <h2>General Contracting Solutions</h2>
                            <p>AGRL delivers dependable industrial supply services, connecting manufacturers with quality raw materials, chemicals, and coatings across Nigeria.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end">
                        <div className="slider-btn-grp four white">
                            <div style={{ cursor: "pointer" }} className="slider-btn service-slider-prev">
                                <i className="bi bi-arrow-left" />
                            </div>
                            <div style={{ cursor: "pointer" }} className="slider-btn service-slider-next">
                                <i className="bi bi-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-60">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home6-service-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                            <Image width={263} height={226} src="/assets/img/home6/service-img1.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Workforce Training &amp; Safety</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img2.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Civil &amp; Structural Works</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img3.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Procurement &amp; Supply Chain</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img4.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Project Management</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img5.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Mechanical &amp; Electrical Services</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img6.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Facility Maintenance</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="service-card3">
                                        <div className="service-img">
                                             <Image width={263} height={226} src="/assets/img/home6/service-img7.jpg" alt="" />
                                        </div>
                                        <div className="service-content">
                                            <h4><Link href="/service/details">Logistics &amp; Haulage</Link></h4>
                                            <Link href="/service/details" className="details-btn">View Details
                                                <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M0.0841592 0H17.0002V3.16667L3.19805 17L0 13.8333L9.42583 4.5L0.0841592 4.58333V0Z" />
                                                        <path d="M16.9997 16.9999V6.33325L12.4551 10.8333V16.9999H16.9997Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className="btn-area d-flex justify-content-center bounce_up">
                    <Link className="primary-btn6 white-bg" href="/service">
                        View All Services
                        <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M14.1952 0.936056L27.5226 14.2634L25.0277 16.7583L3.25495 16.7829L3.23022 11.7684L18.0098 11.8413L10.5842 4.54707L14.1952 0.936056Z" />
                                <path d="M14.1298 27.657L22.5336 19.2532L15.4078 19.218L10.5493 24.0765L14.1298 27.657Z" />
                            </g>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default HomeServiceSection
