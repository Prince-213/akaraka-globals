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

const HomeProjectSection = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 35,
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
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 2,
                },
            },
        };
    }, []);
    return (
        <div className="home4-project-section mb-120">
            <div className="container">
                <div className="row gy-5 align-items-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-5">
                        <div className="section-title three">
                            <h2>AGRL Projects</h2>
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex justify-content-lg-end">
                        <div className="project-nav-area">
                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Protective Coatings</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Industrial Paints</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Decorative Finishes</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <Swiper {...settings} className="swiper home4-project-slider mb-50">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img1.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Smart Industrial Coating System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Oil &amp; Gas Industry</Link></li>
                                                        <li><Link href="/project">Pipeline Protection</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img2.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Advanced Coating Application Methods</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img3.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Digital Colour Matching System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img4.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Eco-Friendly Paint Solutions</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img5.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Supply Chain Optimisation</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                                <div className="project-bottom-area">
                                    <div className="slider-btn-grp two">
                                        <div className="slider-btn project-slider-prev">
                                            <i className="bi bi-arrow-left" />
                                        </div>
                                        <div className="slider-btn project-slider-next">
                                            <i className="bi bi-arrow-right" />
                                        </div>
                                    </div>
                                    <Link className="primary-btn4 btn-hover transparent" href="/project">
                                        View All Work
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
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <div className="swiper home4-project-slider mb-50">
                                    <Swiper {...settings} className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img1.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Smart Industrial Coating System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Oil &amp; Gas Industry</Link></li>
                                                        <li><Link href="/project">Pipeline Protection</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img2.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Advanced Coating Application Methods</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img3.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Digital Colour Matching System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img4.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Eco-Friendly Paint Solutions</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img5.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Supply Chain Optimisation</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="project-bottom-area">
                                    <div className="slider-btn-grp two">
                                        <div className="slider-btn project-slider-prev">
                                            <i className="bi bi-arrow-left" />
                                        </div>
                                        <div className="slider-btn project-slider-next">
                                            <i className="bi bi-arrow-right" />
                                        </div>
                                    </div>
                                    <Link className="primary-btn4 btn-hover transparent" href="/project">
                                        View All Work
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
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <Swiper {...settings} className="swiper home4-project-slider mb-50">
                                    <div className="swiper-wrapper">
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img1.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Smart Industrial Coating System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Oil &amp; Gas Industry</Link></li>
                                                        <li><Link href="/project">Pipeline Protection</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img2.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Advanced Coating Application Methods</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img3.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Digital Colour Matching System</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img4.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Eco-Friendly Paint Solutions</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="project-card2 two">
                                                <Link href="/project/details" className="project-img">
                                                    <Image width={631} height={382} src="/assets/img/home4/project-img5.webp" alt="" />
                                                </Link>
                                                <div className="project-content">
                                                    <h4><Link href="/project/details">Supply Chain Optimisation</Link></h4>
                                                    <ul>
                                                        <li><Link href="/project">Gas &amp; Oil Industry</Link></li>
                                                        <li><Link href="/project">Pipe Line Design</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                </Swiper>
                                <div className="project-bottom-area">
                                    <div className="slider-btn-grp two">
                                        <div className="slider-btn project-slider-prev">
                                            <i className="bi bi-arrow-left" />
                                        </div>
                                        <div className="slider-btn project-slider-next">
                                            <i className="bi bi-arrow-right" />
                                        </div>
                                    </div>
                                    <Link className="primary-btn4 btn-hover transparent" href="/project">
                                        View All Work
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeProjectSection
