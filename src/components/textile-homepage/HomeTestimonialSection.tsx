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
const HomeTestimonialSection: React.FC = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            effect: "fade", // Use the fade effect
            fadeEffect: {
                crossFade: true, // Enable cross-fade transition
            },
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
            },
        };
    }, []);
    return (
        <div className="home5-testimonial-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-6">
                        <div className="section-title four">
                            <span>
                                <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.0594065 0H12.0001V2.2353L2.25745 12L0 9.76471L6.65353 3.17647L0.0594065 3.2353V0Z" />
                                    <path d="M11.9999 11.9999V4.47046L8.79199 7.64693V11.9999H11.9999Z" />
                                </svg>
                                Client Feedback
                            </span>
                            <h2>Happy Customer Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-60">
                    <div className="col-lg-5 d-lg-block d-none wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="testimonial-img">
                            <Image width={511} height={230} src="/assets/img/home5/home5-testimonial-img.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="testimonial-slider-area">
                            <Swiper {...settings} className="swiper home3-testimonial-slider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card3">
                                            <div className="author-img">
                                                <Image width={699} height={60} src="/assets/img/home5/testimonial-author-img1.png" alt="" />
                                            </div>
                                            <span>Best Quality Polymer Industry!</span>
                                            <p>“Feel free to customize the key features based onen the services and strategies you offer in each plan. This breakdown helps various potenti clients understand the specific value they'll receive at each pricing tier These tools are fundamental for your home”.</p>
                                            <div className="author-area">
                                                <h5>Mr. Daniel Scoot</h5>
                                                <span>MD, Grand Chemicals Ltd</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card3">
                                            <div className="author-img">
                                                <Image width={699} height={60} src="/assets/img/home5/testimonial-author-img2.png" alt="" />
                                            </div>
                                            <span>Top-Rated Polymer Sector!</span>
                                            <p>“Customize focus onent features according to the services and approach you provide for each plan. This analysis aids  a number of possible Meet the leading brands' social media team. Customers are essential at Overtoomai Gong”.</p>
                                            <div className="author-area">
                                                <h5>Alen Jodge</h5>
                                                <span>Founder, Zenfy</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <div className="testimonial-card3">
                                            <div className="author-img">
                                                <Image width={699} height={60} src="/assets/img/home5/testimonial-author-img3.png" alt="" />
                                            </div>
                                            <span>The finest polymer manufacturer!</span>
                                            <p>“Customize focus onent features according to the services and approach you provide for each plan. This
                                                analysis aids a number of possible Meet the leading brands' social media team. Customers are essential at
                                                Overtoomai Gong”.</p>
                                            <div className="author-area">
                                                <h5>Johan Bored</h5>
                                                <span>Founder, Mortar</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="contact-btn-area">
                                <ul className="img-grp">
                                    <li><Image width={699} height={60} src="/assets/img/home5/banner-people-img1.png" alt="" /></li>
                                    <li><Image width={699} height={60} src="/assets/img/home5/banner-people-img2.png" alt="" /></li>
                                    <li><Image width={699} height={60} src="/assets/img/home5/banner-people-img4.png" alt="" /></li>
                                </ul>
                                <a className="contact-btn" href="/contact">
                                    Connect With Us
                                    <svg viewBox="0 0 13 20">
                                        <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rating-and-btn-area">
                    <ul className="rating-list">
                        <li>
                            <a href="https://clutch.co/" className="single-rating">
                                <div className="review">
                                    <span>Review On</span>
                                    <Image width={699} height={60} src="/assets/img/home1/icon/clutch-logo.svg" alt="" />
                                </div>
                                <div className="rating">
                                    <ul className="star">
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-half" /></li>
                                    </ul>
                                    <span>(50 reviews)</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/" className="single-rating google">
                                <div className="review">
                                    <span>Review On</span>
                                    <Image width={699} height={60} src="/assets/img/home1/icon/google-logo.svg" alt="" />
                                </div>
                                <div className="rating">
                                    <ul className="star">
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-half" /></li>
                                    </ul>
                                    <span>(50 reviews)</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="slider-btn-grp three">
                        <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                            <i className="bi bi-arrow-left" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                            <i className="bi bi-arrow-right" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeTestimonialSection
