"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const HomeIndustryLocationSection = () => {
    useEffect(() => {
        // Select all list items
        const listItems = document.querySelectorAll(".indicator-area ul li");

        // Function to add active class on hover
        listItems.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                // Remove active class from all list items
                listItems.forEach((li) => li.classList.remove("active"));

                // Add active class to the hovered item
                item.classList.add("active");
            });
        });
    })
    return (
        <div className="home3-industry-location-section mb-120">
            <div className="container">
                <div className="section-title two text-center mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h2>Our Industry Location</h2>
                </div>
                <div className="industry-location-wrapper">
                    <div className="indicator-area">
                        <ul>
                            <li className="active">
                                <div className="dot-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="flag">
                                        <Image width={20} height={20} src="/assets/img/home3/singapore-flag.png" alt="" />
                                    </div>
                                    <span>Singapore</span>
                                </div>
                            </li>
                            <li>
                                <div className="dot-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="flag">
                                        <Image width={20} height={20} src="/assets/img/home3/uk-flag.png" alt="" />
                                    </div>
                                    <span>United Kingdom</span>
                                </div>
                            </li>
                            <li>
                                <div className="dot-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="flag">
                                        <Image width={20} height={20} src="/assets/img/home3/uae-flag.png" alt="" />
                                    </div>
                                    <span>United Arab Emirates</span>
                                </div>
                            </li>
                            <li>
                                <div className="dot-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="flag">
                                        <Image width={20} height={20} src="/assets/img/home3/australia-flag.png" alt="" />
                                    </div>
                                    <span>Australia</span>
                                </div>
                            </li>
                            <li>
                                <div className="dot-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="single-item">
                                    <div className="flag">
                                        <Image width={20} height={20} src="/assets/img/home3/cambodia-flag.png" alt="" />
                                    </div>
                                    <span>Cambodia</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="location-bottom-area">
                    <h6>See Your Near Location &amp; <Link href="/contact">Contact</Link> With Us Any Time! </h6>
                </div>
            </div>
        </div>

    )
}

export default HomeIndustryLocationSection
