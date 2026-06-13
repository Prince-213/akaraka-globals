"use client";
import React, { useMemo, useRef, useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import Link from "next/link";
import Image from "next/image";

const SLIDE_DURATION = 5000; // 5 seconds

const HomeProcessSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const settings: Settings = useMemo(() => ({
    infinite: true,
    centerMode: false,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 800,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    beforeChange: (_current: number, next: number) => {
      setActiveIndex(next);
      setProgress(0); // reset progress
    },
  }), []);

  // ticking progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (SLIDE_DURATION / 100));
        if (next >= 100) {
          sliderRef.current?.slickNext();
          return 0;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="home3-process-section mb-120" id="trigger-route-1">
      <div className="container">
        <div className="row gy-md-5 gy-4 align-items-center justify-content-between mb-70">
          <div className="col-lg-6">
            <div className="section-title two">
              <h2>Our Supply &amp; Distribution Process</h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
            <Link className="primary-btn3 transparent" href="/contact">
              <span>Contact Us Now</span>
              <span>Contact Us Now</span>
              <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                  <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>

        <div className="process-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="process-list">
                <div className="progressBarContainer">
                  {["Product Sourcing & Selection", "Quality Testing & Colour Matching", "Global Logistics & Delivery"].map((title, index) => (
                    <div className="process-and-progress" key={index}>
                      <div className="single-process">
                        <div className="step-no"><span>STEP : 0{index + 1}</span></div>
                        <h6>{title}</h6>
                      </div>
                      <span className="progressBar">
                        <div
                          className={`inProgress inProgress${index}`}
                          style={{
                            width: index === activeIndex ? `${progress}%` : "0%",
                            
                          }}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="process-img-wrap">
                <Slider ref={sliderRef} {...settings} className="slider single-item">
                  {["process-img1.jpg", "process-img2.jpg", "process-img3.jpg"].map((img, i) => (
                    <div className="slider-item" key={i}>
                      <div className="process-img">
                        <Image width={440} height={399} src={`/assets/img/home3/${img}`} alt={`process-${i + 1}`} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <svg className="scroll-svg" height={836} viewBox="0 0 1592 836" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="route-1" d="M737 3C724 66.5 786.9 210.9 1142.5 280.5C1587 367.5 1694.51 455.986 1446 658.5C1084 953.5 514 845.5 0 327" strokeWidth={30} />
      </svg>
    </div>
  );
};

export default HomeProcessSection;
