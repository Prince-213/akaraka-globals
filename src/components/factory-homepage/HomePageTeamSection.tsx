import Image from "next/image";
import React from "react";

const HomePageTeamSection: React.FC = () => {
  return (
    <>
      <div className="home1-team-section mb-120">
        <div className="container">
          <div
            className="row justify-content-center mb-70 wow animate fadeInDown"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-xl-4 col-lg-5 col-md-8">
              <div className="section-title text-center">
                <span>Our Leadership Team</span>
                <h2>Meet Our AGRL Team</h2>
              </div>
            </div>
          </div>
          <ul className="team-list">
            <li
              className="single-item wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="team-name-and-desig">
                <span>Managing Director / CEO</span>
                <h4>Chinebu L. Chigozie</h4>
              </div>
              <div className="team-img">
                <Image
                  width={100}
                  height={100}
                  src="/assets/img/home1/ceo-pic.jpeg"
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
              <a href="https://www.facebook.com/" className="social-area">
                <div className="icon">
                  <span>
                    <i className="bx bxl-facebook" />
                  </span>
                </div>
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePageTeamSection;
