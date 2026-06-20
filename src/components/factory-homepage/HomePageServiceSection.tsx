"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const HomePageServiceSection: React.FC = () => {
  const listRef = useRef<HTMLUListElement | null>(null);
  const imgRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const listItems = listRef.current?.querySelectorAll<HTMLLIElement>("li");
    const imageItems = imgRef.current?.querySelectorAll<HTMLLIElement>("li");

    if (!listItems || !imageItems) return;

    const listeners: Array<() => void> = [];

    listItems.forEach((li, index) => {
      const handleMouseEnter = () => {
        imageItems.forEach((img) => img.classList.remove("active"));
        imageItems[index]?.classList.add("active");
      };

      li.addEventListener("mouseenter", handleMouseEnter);
      listeners.push(() => li.removeEventListener("mouseenter", handleMouseEnter));
    });

    // Cleanup on unmount
    return () => {
      listeners.forEach((remove) => remove());
    };
  }, []);
    return (
        <>
            <div className="home1-service-section mb-120">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-between mb-70">
                        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title">
                                <span>Our Product Categories</span>
                                <h2>Comprehensive Industrial Solutions</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                            <Link className="primary-btn1 transparent" href="/service">
                                <span>View All Products
                                </span>
                                <span>View All Products
                                </span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="service-wrap">
                        <ul className="service-img-list" ref={imgRef}>
                            {[
                                "/assets/img/sections/raw-materials.webp",
                                "/assets/img/sections/industrial-chemicals-distribution.webp",
                                "/assets/img/sections/ink-pigment.webp",
                                "/assets/img/sections/emulsion-text-coat-paint.webp",
                                "/assets/img/sections/plastics-polymers.webp",
                            ].map((src, index) => (
                                <li key={index} className={index === 0 ? "active" : ""}>
                                    <div className="service-img">
                                        <Image width={1300} height={570} src={src} alt={`Service ${index + 1}`} />
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <ul className="service-list" ref={listRef}>
                            {[
                                "Raw Materials",
                                "Industrial Chemicals",
                                "Inks & Pigments",
                                "Coatings & Paints",
                                "Plastics & Polymers",
                            ].map((title, index) => (
                                <li key={index}>
                                    <Link href="/service/details">
                                        {title}
                                        <svg
                                            width={15}
                                            height={15}
                                            viewBox="0 0 15 15"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g>
                                                <path d="M0.0742581 0H15.0001V2.79412L2.82181 15L0 12.2059L8.3169 3.97059L0.0742581 4.04412V0Z" />
                                                <path d="M15.0002 14.9999V5.58813L10.9902 9.55872V14.9999H15.0002Z" />
                                            </g>
                                        </svg>
                                    </Link>
                                </li>
                            ))}
                        </ul>


                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePageServiceSection
