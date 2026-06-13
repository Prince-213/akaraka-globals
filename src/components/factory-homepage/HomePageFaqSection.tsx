"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Accordion } from "react-bootstrap";

const FaqSection: React.FC= () => {
  return (
    <div className="home1-faq-section mb-120">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-70">
          <div
            className="col-lg-6 wow animate fadeInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="section-title">
              <span>Answer Your Questions</span>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-lg-end btn_wrapper">
            <Link className="primary-btn1 transparent" href="/contact">
              <span>Ask A Question</span>
              <span>Ask A Question</span>
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

        <div className="row align-items-center">
          <div className="col-lg-5 d-lg-flex d-none justify-content-lg-center">
            <div className="faq-img magnetic-item">
              <Image
                width={334}
                height={450}
                src="/assets/img/home1/faq-img.jpg"
                alt="FAQ Illustration"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="faq-wrap">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    01. What industries do you supply?
                  </Accordion.Header>
                  <Accordion.Body>
                    We supply raw materials and chemicals to the paint,
                    construction, textile, printing, plastics, and
                    pharmaceutical industries across Nigeria.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    02. Do you sell in small quantities?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we accommodate both bulk and smaller orders to serve
                    manufacturers, contractors, and individual resellers alike.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    03. How fast can I get my order delivered?
                  </Accordion.Header>
                  <Accordion.Body>
                    Delivery timelines vary by location and order size. Most
                    orders within Abuja are delivered within 24-48 hours, and
                    nationwide within 3-7 working days.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    04. Do you offer product samples and trials?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we can provide samples of most products upon request
                    so you can verify quality before committing to a full order.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    05. What quality standards do your products meet?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our products meet Nigerian industrial standards and many
                    conform to international specifications. Each batch
                    undergoes quality testing before dispatch.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    06. How can I place an order or get a quote?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can reach us by phone at 0816-617-5684, email at
                    akarakaglobalresources@yahoo.com, or visit our office in
                    Dei-Dei, Abuja for a quote or to place your order.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
