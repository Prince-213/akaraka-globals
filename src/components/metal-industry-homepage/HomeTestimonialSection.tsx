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

const HomeTestimonialSection = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 35,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
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
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        };
    }, []);
    return (
        <div className="home4-testimonial-section mb-120">
            <div className="container-fluid">
                <div className="section-title three text-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h2>[Success Stories]</h2>
                </div>
                <div className="row mb-50">
                    <div className="col-lg-12">
                        <Swiper {...settings} className="swiper home4-testimonial-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card three">
                                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.1231 48.6592C36.8825 48.4766 40.3102 46.6611 41.7657 45.6729C43.6536 44.3945 44.7188 43.5244 46.3114 41.9023C51.4688 36.6816 53.42 31.1924 53.8946 20.5791C53.9684 19.0537 54 14.7891 53.9789 10.1055C53.9473 2.76855 53.9367 2.17773 53.7575 1.82324C53.5043 1.31836 53.0086 0.802734 52.4813 0.512695L52.0489 0.276367L42.9258 0.276368C35.4692 0.276369 33.7289 0.308596 33.3914 0.42676C32.8746 0.609377 32.2207 1.21094 31.9254 1.76953L31.6934 2.20996L31.6618 11.3838C31.6301 21.4707 31.6196 21.2451 32.2735 22.0508C32.4422 22.2656 32.8325 22.5664 33.1383 22.7168L33.6868 22.9961L38.0426 22.9961L42.3985 22.9961L42.3985 23.7803C42.3985 25.499 41.9871 27.916 41.3965 29.7207C40.0571 33.8027 37.7262 36.3809 33.3282 38.626C32.4739 39.0664 31.6407 39.5605 31.4508 39.7647C30.9657 40.2695 30.7653 40.8926 30.818 41.709C30.8602 42.3105 31.0079 42.6973 32.1153 45.0498C33.4125 47.8105 33.6551 48.1865 34.425 48.5088C34.8996 48.7129 35.6379 48.7773 36.1231 48.6592Z" />
                                            <path d="M6.11719 48.3154C13.2152 45.1572 18.6258 39.7861 21.0199 33.5234C21.7055 31.7402 22.3172 29.0225 22.6652 26.2188C23.1082 22.7061 23.1504 21.3848 23.1504 11.6094C23.1504 2.59668 23.1398 2.18848 22.95 1.80176C22.6969 1.27539 22.2434 0.813477 21.6844 0.512695L21.252 0.276367L12.0762 0.276368C2.97422 0.276369 2.90039 0.276369 2.42578 0.501955C1.85625 0.77051 1.43438 1.18946 1.11797 1.78028C0.896486 2.20996 0.896486 2.23145 0.864846 11.3838C0.833206 21.4707 0.82266 21.2451 1.47657 22.0508C1.64532 22.2656 2.03555 22.5664 2.34141 22.7168L2.88985 22.9961L7.29844 22.9961C11.591 22.9961 11.707 22.9961 11.707 23.2002C11.707 24.0059 11.4328 26.3799 11.2219 27.4541C10.8949 29.1084 10.5469 30.1719 9.86133 31.6436C8.40586 34.7588 6.19102 36.8535 2.42579 38.7012C0.48516 39.6465 0.0632855 40.1514 0.0527399 41.5264C0.05274 42.2676 0.0738333 42.3106 1.26563 44.835C1.93008 46.2315 2.61563 47.5635 2.78438 47.7783C3.53321 48.7022 4.78829 48.9063 6.11719 48.3154Z" />
                                        </svg>
                                        <span>Exceptional Coatings &amp; Paints!</span>
                                        <p>"Akaraka Global Resources consistently delivers top-quality coatings that protect and beautify our projects. Their product range is unmatched."</p>
                                        <div className="author-and-social-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <Image width={50} height={50} src="/assets/img/home1/testimonial-author-img1.webp" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Mr. Daniel Scoot</h5>
                                                    <span>Project Manager, AGRL</span>
                                                </div>
                                            </div>
                                            <div className="social-area">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="bx bxl-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card three">
                                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.1231 48.6592C36.8825 48.4766 40.3102 46.6611 41.7657 45.6729C43.6536 44.3945 44.7188 43.5244 46.3114 41.9023C51.4688 36.6816 53.42 31.1924 53.8946 20.5791C53.9684 19.0537 54 14.7891 53.9789 10.1055C53.9473 2.76855 53.9367 2.17773 53.7575 1.82324C53.5043 1.31836 53.0086 0.802734 52.4813 0.512695L52.0489 0.276367L42.9258 0.276368C35.4692 0.276369 33.7289 0.308596 33.3914 0.42676C32.8746 0.609377 32.2207 1.21094 31.9254 1.76953L31.6934 2.20996L31.6618 11.3838C31.6301 21.4707 31.6196 21.2451 32.2735 22.0508C32.4422 22.2656 32.8325 22.5664 33.1383 22.7168L33.6868 22.9961L38.0426 22.9961L42.3985 22.9961L42.3985 23.7803C42.3985 25.499 41.9871 27.916 41.3965 29.7207C40.0571 33.8027 37.7262 36.3809 33.3282 38.626C32.4739 39.0664 31.6407 39.5605 31.4508 39.7647C30.9657 40.2695 30.7653 40.8926 30.818 41.709C30.8602 42.3105 31.0079 42.6973 32.1153 45.0498C33.4125 47.8105 33.6551 48.1865 34.425 48.5088C34.8996 48.7129 35.6379 48.7773 36.1231 48.6592Z" />
                                            <path d="M6.11719 48.3154C13.2152 45.1572 18.6258 39.7861 21.0199 33.5234C21.7055 31.7402 22.3172 29.0225 22.6652 26.2188C23.1082 22.7061 23.1504 21.3848 23.1504 11.6094C23.1504 2.59668 23.1398 2.18848 22.95 1.80176C22.6969 1.27539 22.2434 0.813477 21.6844 0.512695L21.252 0.276367L12.0762 0.276368C2.97422 0.276369 2.90039 0.276369 2.42578 0.501955C1.85625 0.77051 1.43438 1.18946 1.11797 1.78028C0.896486 2.20996 0.896486 2.23145 0.864846 11.3838C0.833206 21.4707 0.82266 21.2451 1.47657 22.0508C1.64532 22.2656 2.03555 22.5664 2.34141 22.7168L2.88985 22.9961L7.29844 22.9961C11.591 22.9961 11.707 22.9961 11.707 23.2002C11.707 24.0059 11.4328 26.3799 11.2219 27.4541C10.8949 29.1084 10.5469 30.1719 9.86133 31.6436C8.40586 34.7588 6.19102 36.8535 2.42579 38.7012C0.48516 39.6465 0.0632855 40.1514 0.0527399 41.5264C0.05274 42.2676 0.0738333 42.3106 1.26563 44.835C1.93008 46.2315 2.61563 47.5635 2.78438 47.7783C3.53321 48.7022 4.78829 48.9063 6.11719 48.3154Z" />
                                        </svg>
                                        <span>Outstanding Product Quality!</span>
                                        <p>"Their protective coatings have significantly extended the lifespan of our industrial equipment. Highly recommended for any surface protection needs."</p>
                                        <div className="author-and-social-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <Image width={50} height={50} src="/assets/img/home1/testimonial-author-img4.webp" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Ryan Leonardo</h5>
                                                    <span>Procurement Director, BuildRight Ltd</span>
                                                </div>
                                            </div>
                                            <div className="social-area">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="bx bxl-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card three">
                                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.1231 48.6592C36.8825 48.4766 40.3102 46.6611 41.7657 45.6729C43.6536 44.3945 44.7188 43.5244 46.3114 41.9023C51.4688 36.6816 53.42 31.1924 53.8946 20.5791C53.9684 19.0537 54 14.7891 53.9789 10.1055C53.9473 2.76855 53.9367 2.17773 53.7575 1.82324C53.5043 1.31836 53.0086 0.802734 52.4813 0.512695L52.0489 0.276367L42.9258 0.276368C35.4692 0.276369 33.7289 0.308596 33.3914 0.42676C32.8746 0.609377 32.2207 1.21094 31.9254 1.76953L31.6934 2.20996L31.6618 11.3838C31.6301 21.4707 31.6196 21.2451 32.2735 22.0508C32.4422 22.2656 32.8325 22.5664 33.1383 22.7168L33.6868 22.9961L38.0426 22.9961L42.3985 22.9961L42.3985 23.7803C42.3985 25.499 41.9871 27.916 41.3965 29.7207C40.0571 33.8027 37.7262 36.3809 33.3282 38.626C32.4739 39.0664 31.6407 39.5605 31.4508 39.7647C30.9657 40.2695 30.7653 40.8926 30.818 41.709C30.8602 42.3105 31.0079 42.6973 32.1153 45.0498C33.4125 47.8105 33.6551 48.1865 34.425 48.5088C34.8996 48.7129 35.6379 48.7773 36.1231 48.6592Z" />
                                            <path d="M6.11719 48.3154C13.2152 45.1572 18.6258 39.7861 21.0199 33.5234C21.7055 31.7402 22.3172 29.0225 22.6652 26.2188C23.1082 22.7061 23.1504 21.3848 23.1504 11.6094C23.1504 2.59668 23.1398 2.18848 22.95 1.80176C22.6969 1.27539 22.2434 0.813477 21.6844 0.512695L21.252 0.276367L12.0762 0.276368C2.97422 0.276369 2.90039 0.276369 2.42578 0.501955C1.85625 0.77051 1.43438 1.18946 1.11797 1.78028C0.896486 2.20996 0.896486 2.23145 0.864846 11.3838C0.833206 21.4707 0.82266 21.2451 1.47657 22.0508C1.64532 22.2656 2.03555 22.5664 2.34141 22.7168L2.88985 22.9961L7.29844 22.9961C11.591 22.9961 11.707 22.9961 11.707 23.2002C11.707 24.0059 11.4328 26.3799 11.2219 27.4541C10.8949 29.1084 10.5469 30.1719 9.86133 31.6436C8.40586 34.7588 6.19102 36.8535 2.42579 38.7012C0.48516 39.6465 0.0632855 40.1514 0.0527399 41.5264C0.05274 42.2676 0.0738333 42.3106 1.26563 44.835C1.93008 46.2315 2.61563 47.5635 2.78438 47.7783C3.53321 48.7022 4.78829 48.9063 6.11719 48.3154Z" />
                                        </svg>
                                        <span>Best Quality Forever!</span>
                                        <p>“You are welcome to alter the key features to better inform prospective customers of the particular benefits offered at each price point.”</p>
                                        <div className="author-and-social-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <Image width={50} height={50} src="/assets/img/home1/testimonial-author-img2.webp" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Jeremiah Jose</h5>
                                                    <span>Site Manager, CoatPro Nigeria</span>
                                                </div>
                                            </div>
                                            <div className="social-area">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="bx bxl-instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card three">
                                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.1231 48.6592C36.8825 48.4766 40.3102 46.6611 41.7657 45.6729C43.6536 44.3945 44.7188 43.5244 46.3114 41.9023C51.4688 36.6816 53.42 31.1924 53.8946 20.5791C53.9684 19.0537 54 14.7891 53.9789 10.1055C53.9473 2.76855 53.9367 2.17773 53.7575 1.82324C53.5043 1.31836 53.0086 0.802734 52.4813 0.512695L52.0489 0.276367L42.9258 0.276368C35.4692 0.276369 33.7289 0.308596 33.3914 0.42676C32.8746 0.609377 32.2207 1.21094 31.9254 1.76953L31.6934 2.20996L31.6618 11.3838C31.6301 21.4707 31.6196 21.2451 32.2735 22.0508C32.4422 22.2656 32.8325 22.5664 33.1383 22.7168L33.6868 22.9961L38.0426 22.9961L42.3985 22.9961L42.3985 23.7803C42.3985 25.499 41.9871 27.916 41.3965 29.7207C40.0571 33.8027 37.7262 36.3809 33.3282 38.626C32.4739 39.0664 31.6407 39.5605 31.4508 39.7647C30.9657 40.2695 30.7653 40.8926 30.818 41.709C30.8602 42.3105 31.0079 42.6973 32.1153 45.0498C33.4125 47.8105 33.6551 48.1865 34.425 48.5088C34.8996 48.7129 35.6379 48.7773 36.1231 48.6592Z" />
                                            <path d="M6.11719 48.3154C13.2152 45.1572 18.6258 39.7861 21.0199 33.5234C21.7055 31.7402 22.3172 29.0225 22.6652 26.2188C23.1082 22.7061 23.1504 21.3848 23.1504 11.6094C23.1504 2.59668 23.1398 2.18848 22.95 1.80176C22.6969 1.27539 22.2434 0.813477 21.6844 0.512695L21.252 0.276367L12.0762 0.276368C2.97422 0.276369 2.90039 0.276369 2.42578 0.501955C1.85625 0.77051 1.43438 1.18946 1.11797 1.78028C0.896486 2.20996 0.896486 2.23145 0.864846 11.3838C0.833206 21.4707 0.82266 21.2451 1.47657 22.0508C1.64532 22.2656 2.03555 22.5664 2.34141 22.7168L2.88985 22.9961L7.29844 22.9961C11.591 22.9961 11.707 22.9961 11.707 23.2002C11.707 24.0059 11.4328 26.3799 11.2219 27.4541C10.8949 29.1084 10.5469 30.1719 9.86133 31.6436C8.40586 34.7588 6.19102 36.8535 2.42579 38.7012C0.48516 39.6465 0.0632855 40.1514 0.0527399 41.5264C0.05274 42.2676 0.0738333 42.3106 1.26563 44.835C1.93008 46.2315 2.61563 47.5635 2.78438 47.7783C3.53321 48.7022 4.78829 48.9063 6.11719 48.3154Z" />
                                        </svg>
                                        <span>Unmatched Quality &amp; Service!</span>
                                        <p>"From decorative finishes to heavy-duty industrial coatings, AGRL has been our go-to supplier for over three years. Consistent quality every time."</p>
                                        <div className="author-and-social-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <Image width={50} height={50} src="/assets/img/home1/testimonial-author-img3.webp" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Matthew Julian</h5>
                                                    <span>Operations Lead, PrimeCoat Ltd</span>
                                                </div>
                                            </div>
                                            <div className="social-area">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="bx bxl-facebook" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="testimonial-card three">
                                        <svg className="quote" width={54} height={49} viewBox="0 0 54 49" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M36.1231 48.6592C36.8825 48.4766 40.3102 46.6611 41.7657 45.6729C43.6536 44.3945 44.7188 43.5244 46.3114 41.9023C51.4688 36.6816 53.42 31.1924 53.8946 20.5791C53.9684 19.0537 54 14.7891 53.9789 10.1055C53.9473 2.76855 53.9367 2.17773 53.7575 1.82324C53.5043 1.31836 53.0086 0.802734 52.4813 0.512695L52.0489 0.276367L42.9258 0.276368C35.4692 0.276369 33.7289 0.308596 33.3914 0.42676C32.8746 0.609377 32.2207 1.21094 31.9254 1.76953L31.6934 2.20996L31.6618 11.3838C31.6301 21.4707 31.6196 21.2451 32.2735 22.0508C32.4422 22.2656 32.8325 22.5664 33.1383 22.7168L33.6868 22.9961L38.0426 22.9961L42.3985 22.9961L42.3985 23.7803C42.3985 25.499 41.9871 27.916 41.3965 29.7207C40.0571 33.8027 37.7262 36.3809 33.3282 38.626C32.4739 39.0664 31.6407 39.5605 31.4508 39.7647C30.9657 40.2695 30.7653 40.8926 30.818 41.709C30.8602 42.3105 31.0079 42.6973 32.1153 45.0498C33.4125 47.8105 33.6551 48.1865 34.425 48.5088C34.8996 48.7129 35.6379 48.7773 36.1231 48.6592Z" />
                                            <path d="M6.11719 48.3154C13.2152 45.1572 18.6258 39.7861 21.0199 33.5234C21.7055 31.7402 22.3172 29.0225 22.6652 26.2188C23.1082 22.7061 23.1504 21.3848 23.1504 11.6094C23.1504 2.59668 23.1398 2.18848 22.95 1.80176C22.6969 1.27539 22.2434 0.813477 21.6844 0.512695L21.252 0.276367L12.0762 0.276368C2.97422 0.276369 2.90039 0.276369 2.42578 0.501955C1.85625 0.77051 1.43438 1.18946 1.11797 1.78028C0.896486 2.20996 0.896486 2.23145 0.864846 11.3838C0.833206 21.4707 0.82266 21.2451 1.47657 22.0508C1.64532 22.2656 2.03555 22.5664 2.34141 22.7168L2.88985 22.9961L7.29844 22.9961C11.591 22.9961 11.707 22.9961 11.707 23.2002C11.707 24.0059 11.4328 26.3799 11.2219 27.4541C10.8949 29.1084 10.5469 30.1719 9.86133 31.6436C8.40586 34.7588 6.19102 36.8535 2.42579 38.7012C0.48516 39.6465 0.0632855 40.1514 0.0527399 41.5264C0.05274 42.2676 0.0738333 42.3106 1.26563 44.835C1.93008 46.2315 2.61563 47.5635 2.78438 47.7783C3.53321 48.7022 4.78829 48.9063 6.11719 48.3154Z" />
                                        </svg>
                                        <span>Consistently Excellent!</span>
                                        <p>"AGRL's coatings have transformed our maintenance program. Less repainting, better protection, and a fantastic range of colours to choose from."</p>
                                        <div className="author-and-social-area">
                                            <div className="author-area">
                                                <div className="author-img">
                                                    <Image width={50} height={50} src="/assets/img/home1/testimonial-author-img4.webp" alt="" />
                                                </div>
                                                <div className="author-content">
                                                    <h5>Olivern James</h5>
                                                    <span>Facility Manager, NexaCoat Solutions</span>
                                                </div>
                                            </div>
                                            <div className="social-area">
                                                <a href="https://www.linkedin.com/">
                                                    <i className="bx bxl-linkedin" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="slider-btn-grp two wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-prev">
                        <i className="bi bi-arrow-left" />
                    </div>
                    <h6>Join Our Growing Family <Link href="/contact">Become a Client</Link> Today!</h6>
                    <div style={{ cursor: "pointer" }} className="slider-btn testimonial-slider-next">
                        <i className="bi bi-arrow-right" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeTestimonialSection
