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

const HomeServiceSection: React.FC = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
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
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <>
            <div className="home2-service-section mb-120">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-between mb-70">
                        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title two">
                                <span>Our Industry Services</span>
                                <h2>Innovative Industry Services.</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                            <Link className="primary-btn3 transparent" href="/service">
                                <span>View All Services
                                </span>
                                <span>View All Services
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
                    <div className="home2-service-slider-area">
                        <div className="row mb-50">
                            <div className="col-lg-12">
                                <Swiper {...settings} className="swiper home2-service-slider">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Workforce Training &amp; Control</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img1.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Logistics <br /> Management</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img2.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Equipment <br /> Rental &amp; Leasing</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img3.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Metal Work &amp; <br /> Compliance Train</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img4.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Solar Panel Wind Installation</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img5.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Exploration and <br /> Drilling</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img6.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="service-card">
                                                <h4><Link href="/service/details">Warehousing and Distribution</Link></h4>
                                                <Link href="/service/details" className="service-img"><Image width={240} height={130} src="/assets/img/home2/service-img7.jpg" alt="" /></Link>
                                                <p>We provide end-to-end product development services, from ideation to launch.</p>
                                                <Link className="primary-btn3 transparent" href="/service/details">
                                                    <span>View Details
                                                    </span>
                                                    <span>View Details
                                                    </span>
                                                    <svg className="arrow" width={17} height={17} viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path d="M0.0836709 0H16.9997V3.16667L3.19756 17L-0.000488281 13.8333L9.42534 4.5L0.0836709 4.58333V0Z" />
                                                            <path d="M16.9997 17V6.33337L12.4551 10.8334V17H16.9997Z" />
                                                        </g>
                                                    </svg>
                                                </Link>
                                                <svg className="arrow-vector" width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.247529 0H50.0008V9.31379L9.40609 50.0004L0 40.6866L27.7232 13.2354L0.247529 13.4805V0Z" />
                                                    <path d="M50.0013 50.0006V18.6278L36.6348 31.8632V50.0006H50.0013Z" />
                                                </svg>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center">
                                <div className="slider-btn-grp two">
                                    <div style={{ cursor: "pointer" }} className="slider-btn service-slider-prev">
                                        <i className="bi bi-arrow-left" />
                                    </div>
                                    <div style={{ cursor: "pointer" }} className="slider-btn service-slider-next">
                                        <i className="bi bi-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeServiceSection
