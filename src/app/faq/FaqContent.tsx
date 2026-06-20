"use client";
import FooterTop from '@/components/factory-homepage/FooterTop'
import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import { Accordion } from "react-bootstrap";
import Footer1 from '@/components/footers/Footer1'
import Breadcrumb from '@/components/common/Breadcrumb';
import Image from 'next/image';

const FaqContent = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Frequently Asked Questions" subtitle="Frequently Asked Questions About Our Products & Services" />
            <div className="home1-faq-section pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row g-4 align-items-center justify-content-between mb-70">
                        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="section-title">
                                <span>Answer your questions</span>
                                <h2>Frequently Asked Questions</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
                            <Link className="primary-btn1 transparent" href="/contact">
                                <span>Talk Any Question</span>
                                <span>Talk Any Question</span>
                                <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                        <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 d-lg-flex d-none justify-content-lg-center">
                            <div className="faq-img magnetic-item">
                                <Image width={343} height={452} src="/assets/img/home1/faq-img.webp" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-wrap">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>01. What industrial chemicals and raw materials does AGRL supply?</Accordion.Header>
                                        <Accordion.Body>
                                            We supply a comprehensive range of industrial raw materials including Calcium Carbonate (CaCO3), stone dust, kaolinite clay, as well as chemicals like Acrylic PVA, titanium dioxide (TiO2), HPMC, and sulphur powder for diverse industrial applications.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>02. Is AGRL suitable for my business?</Accordion.Header>
                                        <Accordion.Body>
                                            Discover if AGRL is the right fit for your business by exploring our tailored solutions for various industries and unique needs.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>03. What are your delivery timelines for bulk orders?</Accordion.Header>
                                        <Accordion.Body>
                                            Our typical delivery timelines depend on order volume and product availability. We maintain substantial stock at our Dei-Dei, Abuja warehouse and can fulfil most orders within 48-72 hours. Specialised or imported items may require 7-14 working days.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>04. Do you offer technical consultation for product formulation?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we provide expert technical consultation on chemical formulations, material selection, and process optimisation. Our team helps you select the right raw materials and chemicals for your specific production requirements.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>05. What quality standards do your products meet?</Accordion.Header>
                                        <Accordion.Body>
                                            All our products undergo rigorous quality control testing to meet international standards. We ensure consistent purity, particle size, and performance across every batch of chemicals, raw materials, and coatings we supply.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>06. Do you serve customers outside Abuja and Nigeria?</Accordion.Header>
                                        <Accordion.Body>
                                            Yes, we serve clients across Nigeria and offer import/export services for West African markets. Our strategic location in Abuja&apos;s International Building Materials Market and our branch in Mararaba enable us to efficiently serve a wide geographic area.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-contact-section">
                <div className="container">
                    <div className="row gy-5 align-items-center">
                        <div className="col-lg-5 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="contact-content">
                                <div className="section-title two">
                                    <span>
                                        <svg width={9} height={14} viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.98296 6.85403C8.95783 6.74844 8.90581 6.65097 8.83186 6.57091C8.7579 6.49085 8.66448 6.43086 8.56049 6.39665L5.40652 5.35573L7.64645 0.92109C7.78706 0.642066 7.70293 0.302757 7.44742 0.120036C7.19067 -0.0620481 6.83912 -0.0346848 6.61687 0.186515L0.188418 6.55014C0.11097 6.62683 0.0545794 6.72182 0.024588 6.82611C-0.00540343 6.9304 -0.008003 7.04055 0.0170357 7.14612C0.042173 7.25171 0.0941932 7.34917 0.168144 7.42923C0.242096 7.50929 0.335517 7.56928 0.439513 7.60349L3.59348 8.64441L1.35355 13.0791C1.21294 13.3581 1.29707 13.6974 1.55258 13.8801C1.80847 14.0616 2.15934 14.0351 2.38313 13.8136L8.81158 7.45C8.88903 7.37332 8.94542 7.27833 8.97541 7.17403C9.0054 7.06974 9.008 6.95959 8.98296 6.85403Z" />
                                        </svg>
                                        Get In Touch
                                    </span>
                                    <h2>Connected With Us</h2>
                                </div>
                                <ul className="contact-list">
                                    <li className="single-contact">
                                        <div className="icon">
                                            <svg width={28} height={29} viewBox="0 0 28 29" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.2653 21.6503L21.598 17.8709C20.8788 17.3951 19.9147 17.5516 19.383 18.2306L17.7322 20.3531C17.6296 20.4885 17.4816 20.5822 17.3154 20.6172C17.1492 20.6522 16.9759 20.626 16.8275 20.5435L16.5134 20.3704C15.4725 19.803 14.1772 19.0966 11.5675 16.486C8.95784 13.8754 8.25001 12.5792 7.6826 11.5401L7.51042 11.2261C7.42683 11.0776 7.39968 10.904 7.43398 10.7372C7.46827 10.5703 7.56169 10.4215 7.69704 10.318L9.81816 8.66771C10.4968 8.13596 10.6536 7.17218 10.1784 6.45276L6.39895 0.785457C5.91192 0.0528623 4.9348 -0.167058 4.18082 0.286179L1.81096 1.70976C1.06634 2.1475 0.520053 2.85649 0.286612 3.68811C-0.56677 6.79751 0.0752209 12.1639 7.98033 20.0699C14.2687 26.3578 18.9501 28.0487 22.1677 28.0487C22.9083 28.0519 23.6459 27.9555 24.3608 27.7623C25.1925 27.5291 25.9016 26.9828 26.3391 26.2379L27.7641 23.8695C28.218 23.1153 27.9982 22.1376 27.2653 21.6503ZM26.9601 23.3907L25.5384 25.7606C25.2242 26.2982 24.7142 26.6934 24.1152 26.8636C21.2447 27.6517 16.2298 26.9989 8.64053 19.4097C1.0513 11.8205 0.398595 6.80593 1.18669 3.93499C1.35709 3.33524 1.75283 2.82463 2.2911 2.50999L4.66096 1.08827C4.98811 0.891426 5.41221 0.986841 5.62354 1.30475L7.67659 4.38708L9.39976 6.97156C9.60612 7.28361 9.53831 7.70186 9.24392 7.93277L7.1223 9.5831C6.47665 10.0768 6.29227 10.9701 6.68979 11.6791L6.85826 11.9852C7.45459 13.0789 8.19599 14.4395 10.9027 17.1458C13.6095 19.852 14.9696 20.5935 16.0628 21.1897L16.3694 21.3586C17.0783 21.7561 17.9716 21.5718 18.4653 20.9261L20.1157 18.8045C20.3466 18.5103 20.7647 18.4425 21.0769 18.6487L26.7437 22.4281C27.0618 22.6393 27.1572 23.0636 26.9601 23.3907ZM15.8658 4.71888C20.2446 4.72374 23.7931 8.27227 23.798 12.6511C23.798 12.9088 24.0069 13.1176 24.2646 13.1176C24.5223 13.1176 24.7312 12.9088 24.7312 12.6511C24.7257 7.75708 20.7598 3.79107 15.8658 3.78572C15.6081 3.78572 15.3992 3.99459 15.3992 4.2523C15.3992 4.51 15.6081 4.71888 15.8658 4.71888Z" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <span>To More Inquiry</span>
                                            <h6><a href="tel:08166175684">0816-617-5684</a>, <a href="tel:09015989177">0901-598-9177</a></h6>
                                        </div>
                                    </li>
                                    <li className="single-contact">
                                        <div className="icon">
                                            <svg width={26} height={27} viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.6996 26.0522H1.29998C0.955309 26.0519 0.624854 25.9148 0.381135 25.6711C0.137416 25.4274 0.000344239 25.0969 8.47364e-08 24.7523V8.71919C-5.14206e-05 8.63681 0.023378 8.55613 0.0675423 8.48659C0.111707 8.41706 0.174776 8.36155 0.249359 8.32658C0.323942 8.29161 0.406948 8.27862 0.488649 8.28914C0.57035 8.29965 0.647361 8.33324 0.710655 8.38596L11.3428 17.2224C11.8091 17.6077 12.3952 17.8185 13.0002 17.8185C13.6052 17.8185 14.1913 17.6077 14.6577 17.2224L25.2889 8.38553C25.3523 8.33278 25.4293 8.29919 25.511 8.28869C25.5928 8.27819 25.6758 8.29121 25.7504 8.32624C25.825 8.36126 25.8881 8.41684 25.9322 8.48643C25.9763 8.55603 25.9997 8.63678 25.9996 8.71919V24.7523C25.9992 25.0969 25.8622 25.4274 25.6184 25.6711C25.3747 25.9148 25.0443 26.0519 24.6996 26.0522ZM0.866653 9.64261V24.7523C0.866653 24.9915 1.06078 25.1856 1.29998 25.1856H24.6996C24.8145 25.1856 24.9247 25.1399 25.006 25.0587C25.0873 24.9774 25.1329 24.8672 25.1329 24.7523V9.64261L15.2106 17.8888C14.5887 18.4028 13.807 18.6841 13.0002 18.6843C12.1933 18.6844 11.4116 18.4034 10.7894 17.8897L0.866653 9.64261Z" />
                                            </svg>
                                        </div>
                                        <div className="content">
                                            <span>To Send Mail</span>
                                            <h6><a href="mailto:akarakaglobalresources@yahoo.com">akarakaglobalresources@yahoo.com</a></h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="contact-form-wrap two">
                                <form>
                                    <div className="row g-4">
                                        <div className="col-md-12"><div className="form-inner"><label>Full Name *</label><input type="text" /></div></div>
                                        <div className="col-md-6"><div className="form-inner"><label>Email *</label><input type="email" /></div></div>
                                        <div className="col-md-6"><div className="form-inner"><label>Phone *</label><input type="text" /></div></div>
                                        <div className="col-md-12"><div className="form-inner"><label>Subject</label><input type="text" /></div></div>
                                        <div className="col-md-12"><div className="form-inner"><label>Message *</label><textarea /></div></div>
                                        <div className="col-lg-12"><div className="form-inner2"><div className="form-check"><input className="form-check-input" type="checkbox" id="contactCheck" /><label className="form-check-label" htmlFor="contactCheck">I have read &amp; accepted Terms &amp; Conditions.</label></div></div></div>
                                    </div>
                                    <button type="submit" className="primary-btn4 btn-hover black-bg">
                                        Submit Now
                                        <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                                <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                            </g>
                                        </svg>
                                        <span />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterTop />
            <Footer1 />
        </>
    )
}

export default FaqContent
