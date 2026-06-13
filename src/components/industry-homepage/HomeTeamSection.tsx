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
const HomeTeamSection: React.FC = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination1",
                clickable: true,
            },
            navigation: {
                nextEl: ".team-slider-next",
                prevEl: ".team-slider-prev",
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
                },
                1400: {
                    slidesPerView: 4,
                },
            },
        };
    }, []);
    return (
        <div className="home2-team-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-6">
                        <div className="section-title two text-center">
                            <span>Our Skilled Team People</span>
                            <h2>Meet Our Industry Experts</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home2-team-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img1.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Director at AGRL</span>
                                                <h5>Olivern James</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://www.facebook.com/" className="social-area">
                                                    <span>Facebook</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-facebook" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img2.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Project Manager</span>
                                                <h5>Owen Samuel</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://www.linkedin.com/" className="social-area">
                                                    <span>LinkedIn</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-linkedin" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img3.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Civil Engineer</span>
                                                <h5>Joseph Mason</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://linkedin.com/" className="social-area">
                                                    <span>LinnkedIn</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-linkedin" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img4.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Safety Officer</span>
                                                <h5>Mathew Julian</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://www.instagram.com/" className="social-area">
                                                    <span>Instagram</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-instagram" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img5.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Machine Operator</span>
                                                <h5>Michael Daniel</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://www.linkedin.com/" className="social-area">
                                                    <span>LinkedIn</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-linkedin" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="team-card">
                                        <Image width={306} height={345} src="/assets/img/home2/team-img6.webp" alt="" />
                                        <div className="team-content-wrap">
                                            <div className="team-content">
                                                <span>Process Engineer</span>
                                                <h5>Anthony Wyatt</h5>
                                            </div>
                                            <div className="social-btn">
                                                <div className="icon">
                                                    <i className="bi bi-plus" />
                                                </div>
                                                <a href="https://Linkedin.com/" className="social-area">
                                                    <span>LinkedIn</span>
                                                    <div className="icon">
                                                        <span><i className="bx bxl-linkedin" /></span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className="row pt-50">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="pagination-area">
                            <div className="pagination swiper-pagination1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTeamSection
