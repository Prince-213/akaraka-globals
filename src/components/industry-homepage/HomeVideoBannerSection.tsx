"use client"
import { useCircularTextByClass } from '@/customHooks/useCircularTextByClass';
import React, { useRef, useState } from 'react'

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Image from 'next/image';


const HomeVideoBannerSection:React.FC = () => {
    const [isOpen, setOpen] = useState(false);
     useCircularTextByClass("circular-text2");
    return (
        <div className="home2-video-banner-section mb-120">
            <div className="banner-wrapper">
                <Image width={1835} height={893} src="/assets/img/home2/home2-video-banner-bg.jpg" alt="" />
                <div className="circular-text2" >
                    <a style={{ cursor: "pointer" }}
                        onClick={() => setOpen(true)} className="center-icon video-player">
                        <svg width={24} height={27} viewBox="0 0 24 27" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.3787 9.99987L4.82154 0.433939C4.34825 0.153923 3.80926 0.00420458 3.25936 0C2.39492 0 1.56589 0.343396 0.954645 0.954644C0.343396 1.56589 0 2.39492 0 3.25936V23.7895C0.000109938 24.3631 0.153886 24.9263 0.445339 25.4203C0.736791 25.9144 1.15528 26.3214 1.65729 26.599C2.1593 26.8766 2.72651 27.0146 3.29994 26.9988C3.87336 26.9829 4.43207 26.8137 4.91797 26.5088L21.4944 16.0364C22.0098 15.7139 22.4329 15.2633 22.7224 14.7286C23.0119 14.1939 23.1579 13.5933 23.1463 12.9854C23.1346 12.3775 22.9657 11.7829 22.6559 11.2597C22.3461 10.7365 21.9061 10.3024 21.3787 9.99987Z" />
                        </svg>
                    </a>
                    <div className="text">
                        <span>
                            INDUSTRY . SECTOR . SERVE .
                        </span>
                    </div>
                </div>
                <div className="logo-section">
                    <div className="container-fluid">
                        <div className="logo-wrap">
                            <div className="logo-title">
                                <h6>A partner, Not A Vendor:</h6>
                            </div>
                            <div className="marquee">
                                <div className="marquee__group">
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-01.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-02.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-03.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-04.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-05.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-06.png" alt="" /></a>
                                </div>
                                <div aria-hidden="true" className="marquee__group">
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-01.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-02.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-03.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-04.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-05.png" alt="" /></a>
                                    <a href="#"><Image width={105} height={50} src="/assets/img/home2/partner-06.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default HomeVideoBannerSection
