"use client";

import React from 'react'
import { useLanguage } from "@/i18n/LanguageContext";

const HomePageProcessSection: React.FC = () => {
    const { t } = useLanguage();
    return (
        <>
            <div className="home1-process-section mb-120">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="section-title text-center">
                                <span>{t("howWeDeliver")}</span>
                                <h2>{t("ourSupplyChainProcess")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="process-wrapper">
                        <div className="single-process mt-30">
                            <div className="process-card wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 01</span>
                                </div>
                                <h3>{t("sourcingAndProcurement")}</h3>
                                <p>We identify the best raw materials and chemical products for your exact requirements.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                            <svg className="animated-vector" width={181} height={124} viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" id="theMotionPath11" d="M0 123H67.5C84.0685 123 97.5 109.569 97.5 93V31C97.5 14.4315 110.931 1 127.5 1H181" stroke="black" />
                                <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7441)" strokeLinecap="round" strokeWidth={2}>
                                    <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMotionPath11" />
                                    </animateMotion>
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_354_7441" x1={10} y1={0} x2={0} y2={0} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CB0000" offset={0} />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="single-process">
                            <div className="process-card wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 02</span>
                                </div>
                                <h3>{t("qualityAssuranceAndTesting")}</h3>
                                <p>Every shipment undergoes rigorous quality checks to meet industry specifications.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                        </div>
                        <div className="single-process mt-30">
                            <svg className="animated-vector" width={181} height={124} viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" id="theMotionPath12" d="M181 123H113.5C96.9315 123 83.5 109.569 83.5 93V31C83.5 14.4315 70.0685 1 53.5 1H0" stroke="black" />
                                <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7442)" strokeLinecap="round" strokeWidth={2}>
                                    <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                                        <mpath href="#theMotionPath12" />
                                    </animateMotion>
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_354_7442" x1={10} y1={0} x2={0} y2={0} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CB0000" offset={0} />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="process-card wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 03</span>
                                </div>
                                <h3>{t("deliveryAndSupport")}</h3>
                                <p>We ensure timely dispatch and provide ongoing technical support for all products.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePageProcessSection
