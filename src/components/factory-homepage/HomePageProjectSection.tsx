"use client";
import Link from "next/link";
import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const HomePageProjectSection: React.FC = () => {
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 0,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".project-slider-next",
        prevEl: ".project-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
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
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <>
      <div className="home1-project-section mb-120">
        <div className="container">
          <div className="row justify-content-center mb-50">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div
                className="section-title white text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>Our Supply Categories</span>
                <h2>Featured Product Ranges</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="project-slider-area mb-50">
          <div className="row">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home1-project-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img1.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Raw Materials</span>
                            <h3
                              style={{
                                color: "red",
                              }}
                            >
                              Calcium Carbonate &amp; Stone Dust
                            </h3>
                            <ul>
                              <li>
                                <Link href="/product">Paints</Link>
                              </li>
                              <li>
                                <Link href="/product">Coatings</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img2.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Industrial Chemicals</span>
                            <h3
                              style={{
                                color: "red",
                              }}
                            >Acrylic PVA &amp; Titanium Dioxide</h3>
                            <ul>
                              <li>
                                <Link href="/product">Adhesives</Link>
                              </li>
                              <li>
                                <Link href="/product">Resins</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img3.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Inks &amp; Pigments</span>
                            <h3
                              style={{
                                color: "red",
                              }} >Confineous Ink Range</h3>
                            <ul>
                              <li>
                                <Link href="/product">Printing</Link>
                              </li>
                              <li>
                                <Link href="/product">Textile</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img4.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Coatings &amp; Paints</span>
                            <h3
                              style={{
                                color: "red",
                              }} >Emulsion &amp; Tex Coat Paints</h3>
                            <ul>
                              <li>
                                <Link href="/product">Construction</Link>
                              </li>
                              <li>
                                <Link href="/product">Interior</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img5.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Plastics &amp; Polymers</span>
                            <h3
                              style={{
                                color: "red",
                              }} >Storage Buckets &amp; Containers</h3>
                            <ul>
                              <li>
                                <Link href="/product">Storage</Link>
                              </li>
                              <li>
                                <Link href="/product">Industrial</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="project-card-wrap">
                      <div className="project-card">
                        <div className="project-img">
                          <Image
                            width={430}
                            height={450}
                            src="/assets/img/home1/project-img6.webp"
                            alt=""
                          />
                        </div>
                        <div className="project-content-wrap">
                          <div className="project-content">
                            <span>Category: Chemical Products</span>
                            <h3
                              style={{
                                color: "red",
                              }} >HPMC &amp; Cellulose Ethers</h3>
                            <ul>
                              <li>
                                <Link href="/product">Pharma</Link>
                              </li>
                              <li>
                                <Link href="/product">Food</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center bounce_up">
            <Link className="primary-btn1 white-bg" href="/service">
              <span>View All Products</span>
              <span>View All Products</span>
              <svg
                className="arrow"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                  <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageProjectSection;
