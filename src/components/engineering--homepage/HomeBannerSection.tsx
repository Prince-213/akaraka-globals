"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react'

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import CircularText from '../common/CircularText';
import Image from 'next/image';
const HomeBannerSection: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    return (

        <div>
            <div className="home6-banner-section">
                <div className="container">
                    <div className="banner-wrapper">
                        <div className="row gy-5">
                            <div className="col-lg-8">
                                <div className="banner-content">
                                    <h1>Reliable <span>General Contracting</span> &amp; Supply Solutions</h1>
                                    <div className="video-and-content">
                                        <a data-fancybox="video-player" style={{ cursor: "pointer" }}
                                            onClick={() => setOpen(true)} className="video-area">
                                            <div className="icon">
                                                <svg className="video-circle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="77px" viewBox="0 0 206 206" {...{ enableBackground: "new 0 0 100 100" }} xmlSpace="preserve">
                                                    <circle className="circle" strokeMiterlimit={10} cx={103} cy={103} r={100} />
                                                    <path className="circle-half top-half" strokeWidth={4} strokeMiterlimit={10} d="M16.4,53C44,5.2,105.2-11.2,153,16.4s64.2,88.8,36.6,136.6" />
                                                    <path className="circle-half bottom-half" strokeWidth={4} strokeMiterlimit={10} d="M189.6,153C162,200.8,100.8,217.2,53,189.6S-11.2,100.8,16.4,53" />
                                                </svg>
                                                <svg className="play-icon" width={23} height={28} viewBox="0 0 23 28" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.8424 14.2559C22.8424 13.4843 22.4449 12.7737 21.7784 12.3539L3.78608 1.03446C3.05833 0.577358 2.17083 0.543963 1.40902 0.947257C0.649591 1.35033 0.195312 2.09429 0.195312 2.93663V25.5738C0.195312 26.4162 0.649555 27.1599 1.41018 27.5632C1.76475 27.7501 2.14507 27.8431 2.52543 27.8431C2.96275 27.8431 3.39718 27.7197 3.78584 27.476L21.7782 16.1583C22.4449 15.7383 22.8424 15.0277 22.8424 14.2561V14.2559ZM21.1289 15.177L3.13659 26.4947C2.78345 26.7165 2.35329 26.7315 1.98441 26.5376C1.61553 26.3424 1.39473 25.9822 1.39473 25.5736V2.93642C1.39473 2.52778 1.61553 2.16621 1.98441 1.97237C2.15681 1.88239 2.34185 1.83669 2.52569 1.83669C2.73791 1.83669 2.9487 1.8963 3.13685 2.0155L21.1292 13.335C21.4568 13.5414 21.6447 13.8781 21.6447 14.2575C21.6444 14.6356 21.4565 14.9707 21.1289 15.177Z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <div className="content">
                                            <p>Delivering end-to-end general contracting, procurement, and industrial supply solutions across Nigeria — from concept to completion with safety, quality, and reliability at the core.</p>
                                        </div>
                                    </div>
                                    <div className="btn-grp">
                                        <Link className="primary-btn6" href="/service">
                                            Our Services
                                            <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path d="M14.1952 0.936056L27.5226 14.2634L25.0277 16.7583L3.25495 16.7829L3.23022 11.7684L18.0098 11.8413L10.5842 4.54707L14.1952 0.936056Z" />
                                                    <path d="M14.1298 27.657L22.5336 19.2532L15.4078 19.218L10.5493 24.0765L14.1298 27.657Z" />
                                                </g>
                                            </svg>
                                        </Link>
                                        <Link className="primary-btn6 transparent" href="/contact">
                                            Contact Us
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
                            <div className="col-lg-3 d-flex justify-content-lg-end">
                                <ul className="counter-list">
                                    <li className="single-counter">
                                        <div className="number">
                                            <h2 className="counter">130</h2>
                                        </div>
                                        <div className="content">
                                            <p>Project Completed</p>
                                        </div>
                                    </li>
                                    <li className="single-counter">
                                        <div className="number">
                                            <h2 className="counter">5</h2>
                                        </div>
                                        <div className="content">
                                            <p>Winning Award</p>
                                        </div>
                                    </li>
                                    <li className="single-counter">
                                        <div className="number">
                                            <h2 className="counter">1</h2>
                                            <span>K</span>
                                        </div>
                                        <div className="content">
                                            <p>Awesome Client</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home6-banner-bottom-area mb-120">
                <div className="banner-bottom-img-wrapper">
                    <Image width={1605} height={780} src="/assets/img/home6/home6-banner-bottom-bg.jpg" alt="" />
                </div>
                <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    <li><a href="https://www.pinterest.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
                </ul>
                <CircularText />
            </div>
            <React.Fragment>
                <ModalVideo
                    channel="youtube"
                    // onClick={() => setOpen(true)}
                    isOpen={isOpen}
                    animationSpeed={350}
                    videoId="V-Rz3wOP0OI"
                    ratio="16:9"
                    onClose={() => setOpen(false)}
                />
            </React.Fragment>
        </div>


    )
}

export default HomeBannerSection
