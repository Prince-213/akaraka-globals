"use client";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
const processData = [
    {
        step: "01",
        title: "Consultation &amp; Quote",
        img: "/assets/img/home4/process-img1.jpg",
        desc: "We assess your project requirements, surface conditions, and recommend the best coatings and paints for optimal protection and finish.",
    },
    {
        step: "02",
        title: "Order Processing",
        img: "/assets/img/home4/process-img2.jpg",
        desc: "Once approved, we process your order with precision, ensuring accurate product selection and timely procurement.",
    },
    {
        step: "03",
        title: "Formulation &amp; Blending",
        img: "/assets/img/home4/process-img3.jpg",
        desc: "Our expert technicians formulate and blend high-quality coatings to meet your exact specifications and performance standards.",
    },
    {
        step: "04",
        title: "Quality Testing",
        img: "/assets/img/home4/process-img4.jpg",
        desc: "Rigorous quality control tests ensure every batch meets industry standards for durability, adhesion, and finish quality.",
    },
    {
        step: "05",
        title: "Dispatch",
        img: "/assets/img/home4/process-img5.jpg",
        desc: "Products are carefully packaged and dispatched through our reliable logistics network to reach you on schedule.",
    },
    {
        step: "06",
        title: "Delivery to You",
        img: "/assets/img/home4/process-img6.jpg",
        desc: "Your coatings and paints arrive ready for application, with full technical support available whenever you need it.",
    },
];

const HomeProcessSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const imgListRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        let scScrollTl: gsap.core.Timeline | null = null;

        function initScrollAnimation() {
            const scrollSecTitle = document.querySelector(".scroll-sec-vector");
            const scrollSecTitleEnd = document.querySelector(".scroll-sec-vector-end");

            if (scrollSecTitle && scrollSecTitleEnd) {
                const start = scrollSecTitle.getBoundingClientRect().top;
                const end = scrollSecTitleEnd.getBoundingClientRect().top;
                const distance = end - start;

                scScrollTl = gsap.timeline({
                    id: "scScrollTl",
                    scrollTrigger: {
                        trigger: ".scroll-sec-vector",
                        start: "top 30%",
                        endTrigger: ".scroll-sec-vector-end",
                        end: "top -90%",
                        scrub: 1,
                    },
                });

                scScrollTl.to(".scroll-sec-vector", {
                    y: distance,
                    duration: 10,
                });
            }
        }

        function handleResize() {
            if (window.innerWidth >= 991) {
                if (!scScrollTl) initScrollAnimation();
            } else {
                const trigger = ScrollTrigger.getById("scScrollTl");
                if (trigger) {
                    trigger.kill(true);
                    scScrollTl?.kill();
                    scScrollTl = null;
                }
            }
        }

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            scScrollTl?.kill();
            ScrollTrigger.getById("scScrollTl")?.kill();
        };
    }, []);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 991);
        checkMobile();

        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleInteraction = (index: number) => {
        setActiveIndex(index);
        if (isMobile && imgListRef.current) {
            const top = imgListRef.current.offsetTop;
            window.scrollTo({ top: top - 100, behavior: "smooth" });
        }
    };



    return (
        <div>
            <div className="home4-process-section">
                <div className="container">
                    <div className="section-title three text-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h2>[How We Work]</h2>
                    </div>
                    <div className="process-wrapper">
                        <div className="row gy-5 justify-content-between">
                            <div className="col-lg-5">
                                <ul className="process-list">
                                    {processData.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`wow animate fadeInLeft ${activeIndex === index ? "active" : ""}`}
                                            data-wow-delay={`${200 + index * 200}ms`}
                                            data-wow-duration="1500ms"
                                            onClick={() => isMobile && handleInteraction(index)}
                                            onMouseEnter={() => !isMobile && handleInteraction(index)}
                                        >
                                            <div className="single-process">
                                                <span>{item.step}</span>
                                                <h5>{item.title}</h5>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div
                                className="col-lg-6 wow animate fadeInRight"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="process-img-wrap">
                                    <ul className="process-img-list" ref={imgListRef}>
                                        {processData.map((item, index) => (
                                            <li key={index} className={activeIndex === index ? "active" : ""}>
                                                <div className="process-card3">
                                                    <div className="process-img">
                                                        <Image width={563} height={340} src={item.img} alt={item.title} />
                                                    </div>
                                                    <div className="process-content">
                                                        <h5>{item.title}</h5>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="vector-area">
                            <div className="top-vector scroll-sec-vector">
                                <Image width={42} height={200} src="/assets/img/home4/icon/process-vector1.svg" alt="vector" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home4-process-bottom-vector scroll-sec-vector-end">
                <Image width={89} height={79} src="/assets/img/home4/icon/process-vector2.svg" alt="" />
            </div>
        </div>

    )
}

export default HomeProcessSection
