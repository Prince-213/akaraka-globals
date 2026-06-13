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

const HomeTeamSection:React.FC = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 0,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
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
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 5,
                },
                1400: {
                    slidesPerView: 5,
                },
            },
        };
    }, []);
    return (
        <div className="home3-team-section mb-120">
            <div className="container">
                <div className="row gy-md-5 gy-4 align-items-center justify-content-between mb-70">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="section-title two">
                            <h2>Dedicated Team of Experts</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                        <Link className="primary-btn2 two" href="/our-team">
                            <span>View All Team</span>
                            <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                    <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home3-team-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170}  src="/assets/img/home3/team-img1.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Director at AGRL</span>
                                            <h5>Maverick Gabriel</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img2.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Quality Assurance Lead</span>
                                            <h5>Lincoln Andrew</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img3.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Chemical Engineer</span>
                                            <h5>Jayden Ezekiel</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img4.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Project Manager</span>
                                            <h5>Olivern James</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img5.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Chemical Engineer</span>
                                            <h5>Isaiah Nolan</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img8.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Supply Chain Manager</span>
                                            <h5>Cooper Josiah</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img6.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Project Manager</span>
                                            <h5>Michael Daniel</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card2">
                                        <div className="team-img">
                                            <Image width={212} height={170} src="/assets/img/home3/team-img7.webp" alt="" />
                                            <div className="social-wrap">
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                    <span>Facebook</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="team-content">
                                            <span>Colour Matching Specialist</span>
                                            <h5>Matthew Julian</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className="team-bottom-area">
                    <h6>Join Our Inks &amp; Pigments Team <Link href="/career">Apply</Link> Today!</h6>
                </div>
            </div>
        </div>

    )
}

export default HomeTeamSection
