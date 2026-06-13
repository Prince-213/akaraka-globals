import Image from 'next/image'
import React from 'react'

const HomeAboutSection:React.FC = () => {
    return (
        <div className="home4-about-section mb-120">
            <div className="container">
                <div className="about-title-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <span>[Our Success]</span>
                    <h2>Our Coatings &amp; Paints capture the true nature of <span>buildings. Quality protection that lasts for generations.</span></h2>
                </div>
                <div className="row gy-lg-5 gy-4">
                    <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-img magnetic-item">
                            <Image width={610} height={670} src="/assets/img/home4/about-img.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="about-content">
                            <p>We provide premium coatings and paints for industrial, commercial, and residential applications. Our team of experts is passionate about delivering superior surface protection and aesthetic finishes. From anti-corrosion treatments to decorative paints, we offer comprehensive solutions tailored to your needs. Our commitment to quality and innovation sets us apart in the coatings industry.</p>
                            <ul>
                                <li>
                                    <h6>WHO WE ARE</h6>
                                    <p>Akaraka Global Resources Limited is a trusted supplier of high-performance coatings and paints for diverse industries.</p>
                                </li>
                                <li>
                                    <h6>OUR MISSION</h6>
                                    <p>Akaraka Global Resources Limited is a trusted supplier of high-performance coatings and paints for diverse industries.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeAboutSection
