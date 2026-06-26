"use client";
import Counter from "@/components/common/Counter";
import React, { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const HomePageCounterSection: React.FC = () => {
  const { t } = useLanguage();
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
    return (
        <>
            <div className="home1-counter-section mb-120">
                <div className="container">
                    <div className="counter-wrap">
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-4 col-sm-6 divider">
                                <div className="single-countdown">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={200}
                                            speed={10}
                                            ref={ref4}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>{t("productsAndMaterials")}</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center divider">
                                <div className="single-countdown">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={500}
                                            speed={15}
                                            ref={ref}
                                            as="h2"
                                            className="counter"
                                        />
                                        <span>+</span>
                                    </div>
                                    <span>{t("happyClients")}</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-end divider">
                                <div className="single-countdown">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={26}
                                            speed={10}
                                            ref={ref3}
                                            as="h2"
                                            className="counter"
                                        />
                                    </div>
                                    <span>{t("yearsOfExperience")}</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
                                <div className="single-countdown">
                                    <div className="number">
                                        <Counter
                                            start={0}
                                            end={2}
                                            speed={10}
                                            ref={ref2}
                                            as="h2"
                                            className="counter"
                                        />
                                    </div>
                                    <span>{t("branchLocations")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePageCounterSection
