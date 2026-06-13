import FooterTop from "@/components/factory-homepage/FooterTop";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import React from "react";
import Footer1 from "@/components/footers/Footer1";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the leadership and expert team behind Akaraka Global Resources Limited.",
};
const page = () => {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb title="Our Team" subtitle="Meet Our Leadership Team" />
      <div className="team-page pt-120 mb-120" id="scroll-section">
        <div className="container">
          <div className="row gy-5 mb-70">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div
                className="team-card three magnetic-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  width={306}
                  height={340}
                  src="/assets/img/home2/team-img1.webp"
                  alt=""
                />
                <div className="team-content-wrap">
                  <div className="team-content">
                    <span>Founder/CEO of AGRL</span>
                    <h5>Chinebu Longinus Chigozie</h5>
                  </div>
                  <div className="social-btn">
                    <div className="icon">
                      <i className="bi bi-plus" />
                    </div>
                    <a href="https://www.facebook.com/" className="social-area">
                      <span>Facebook</span>
                      <div className="icon">
                        <span>
                          <i className="bx bxl-facebook" />
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bounce_up">
            {/*     <div className="col-lg-12 d-flex justify-content-center">
                            <a className="primary-btn1 black-bg" href="#">
                                <span>Load More
                                </span>
                                <span>Load More
                                </span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </a>
                        </div> */}
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer1 />
    </>
  );
};

export default page;
