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

const HomeBlogSection:React.FC = () => {
    const settings:SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".blog-slider-next",
                prevEl: ".blog-slider-prev",
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
                    spaceBetween: 15,
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
        <div className="home3-blog-section mb-120">
            <div className="container">
                <div className="row g-4 align-items-end justify-content-between mb-60 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-5">
                        <div className="section-title two">
                            <h2>Expert Views &amp; Updates</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 d-flex justify-content-lg-end">
                        <div className="slider-btn-grp two">
                            <div className="slider-btn blog-slider-prev">
                                <i className="bi bi-arrow-left" />
                            </div>
                            <div className="slider-btn blog-slider-next">
                                <i className="bi bi-arrow-right" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-xl-4 g-lg-3 gy-5 mb-70">
                    <div className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="blog-card2 magnetic-item">
                            <div className="blog-img">
                                <Image width={636} height={512} src="/assets/img/home3/blog-img1.webp" alt="" />
                            </div>
                            <div className="blog-content-wrap">
                                <Link href="/blog" className="blog-date">10 August, 2025</Link>
                                <div className="blog-content">
                                    <h4><Link href="/blog/details">Revolutionising Colour: The Future of Inks &amp; Pigments in Industrial Printing.</Link></h4>
                                    <Link href="/blog/details" className="details-btn">
                                        <span>Read More</span>
                                        <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.23289 0.232893L14.3941 7.39408L13.0535 8.73466L1.35437 8.74787L1.34109 6.05345L9.28256 6.0926L5.29259 2.17319L7.23289 0.232893Z" />
                                            <path d="M7.19833 14.5909L11.7139 10.0753L7.88502 10.0564L5.27443 12.667L7.19833 14.5909Z" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2 order-1">
                        <Swiper {...settings} className="swiper home3-blog-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="blog-card three">
                                        <div className="blog-img-wrap">
                                            <Link className="blog-img" href="/blog/details">
                                                <Image width={300} height={300} src="/assets/img/home3/blog-img2.webp" alt="" />
                                            </Link>
                                            <Link href="/blog" className="blog-date">10 August, 2025</Link>
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog/details">AGRL Expands Ink &amp; Pigment Distribution Across Emerging Markets.</Link></h5>
                                            <Link href="/blog/details" className="read-btn">
                                                <span>Read More</span>
                                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                        <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="blog-card three">
                                        <div className="blog-img-wrap">
                                            <Link className="blog-img" href="/blog/details">
                                                <Image width={300} height={300} src="/assets/img/home3/blog-img3.webp" alt="" />
                                            </Link>
                                            <Link href="/blog" className="blog-date">22 August, 2025</Link>
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog/details">Why Consistent Pigment Quality Matters for Your Printing Operations.</Link></h5>
                                            <Link href="/blog/details" className="read-btn">
                                                <span>Read More</span>
                                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                        <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="blog-card three">
                                        <div className="blog-img-wrap">
                                            <Link className="blog-img" href="/blog/details">
                                                <Image width={300} height={300} src="/assets/img/home3/blog-img4.webp" alt="" />
                                            </Link>
                                            <Link href="/blog" className="blog-date">25 August, 2025</Link>
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog/details">Choosing the Right Ink System for Flexible Packaging Applications.</Link></h5>
                                            <Link href="/blog/details" className="read-btn">
                                                <span>Read More</span>
                                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                        <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
                                                    </g>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="blog-card three">
                                        <div className="blog-img-wrap">
                                            <Link className="blog-img" href="/blog/details">
                                                <Image width={300} height={300} src="/assets/img/home3/blog-img5.webp" alt="" />
                                            </Link>
                                            <Link href="/blog" className="blog-date">14 May, 2025</Link>
                                        </div>
                                        <div className="blog-content">
                                            <h5><Link href="/blog/details">Industrial Ink Trends &amp; Innovations Shaping the Coatings Industry.</Link></h5>
                                            <Link href="/blog/details" className="read-btn">
                                                <span>Read More</span>
                                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M7.23241 0.232893L14.3936 7.39408L13.053 8.73466L1.35388 8.74787L1.3406 6.05345L9.28207 6.0926L5.2921 2.17319L7.23241 0.232893Z" />
                                                        <path d="M7.19784 14.5909L11.7135 10.0753L7.88453 10.0564L5.27394 12.667L7.19784 14.5909Z" />
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
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <Link href="/blog" className="view-all-btn">
                            <span>View All Blogs</span>
                            <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.23289 0.232893L14.3941 7.39408L13.0535 8.73466L1.35437 8.74787L1.34109 6.05345L9.28256 6.0926L5.29259 2.17319L7.23289 0.232893Z" />
                                <path d="M7.19833 14.5909L11.7139 10.0753L7.88502 10.0564L5.27443 12.667L7.19833 14.5909Z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeBlogSection
