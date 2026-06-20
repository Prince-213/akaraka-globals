"use client";
import FooterTop from "@/components/factory-homepage/FooterTop";
import Footer1 from "@/components/footers/Footer1";
import InnerPageHeader from "@/components/header/InnerPageHeader";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import { Accordion } from "react-bootstrap";
import type { ServiceDetail } from "@/data/serviceDetails";

const StarIcon = () => (
  <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
  </svg>
);

export default function ServiceDetailClient({ service }: { service: ServiceDetail }) {
  return (
    <>
      <InnerPageHeader />
      <Breadcrumb title="Service Details" subtitle={service.subtitle} />

      <div className="service-details-page-wrap pt-120 mb-120" id="scroll-section">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-8">
              <div className="service-details-content">
                <h2>{service.title}</h2>
                {service.intro.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-details-img">
                <Image width={960} height={470} src={service.images.main} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-details-page-wrap mb-120">
        <div className="container">
          <div className="service-details-content">
            <div className="title-area">
              <h2>What We Deliver</h2>
              <p>{service.whatWeDeliver.description}</p>
            </div>
            <div className="delivery-grid">
              {service.whatWeDeliver.list.map((item, idx) => (
                <div className="delivery-card" key={idx}>
                  <div className="delivery-card-icon"><StarIcon /></div>
                  <div className="delivery-card-content">
                    {item.category && <h4>{item.category}</h4>}
                    <p>{item.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="service-details-page-wrap mb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="service-details-img">
                <Image width={960} height={600} src={service.images.thumb} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-details-faq">
                <h3>Frequently Asked Questions</h3>
                <Accordion defaultActiveKey="0">
                  {service.faqs.map((faq, idx) => (
                    <Accordion.Item eventKey={String(idx)} key={idx}>
                      <Accordion.Header>{String(idx + 1).padStart(2, "0")}. {faq.q}</Accordion.Header>
                      <Accordion.Body>{faq.a}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home1-process-section mb-120">
        <div className="container">
          <div className="row justify-content-center mb-70">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="section-title text-center">
                <span>How We Deliver</span>
                <h2>Our Supply Chain Process</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="process-wrapper">
            {service.process.map((step, idx) => (
              <div className={`single-process ${idx === 1 ? "" : "mt-30"}`} key={idx}>
                {idx === 1 ? null : (
                  <svg className="animated-vector" width={181} height={124} viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" id={`motionPath${idx}`} d={idx === 0 ? "M0 123H67.5C84.0685 123 97.5 109.569 97.5 93V31C97.5 14.4315 110.931 1 127.5 1H181" : "M181 123H113.5C96.9315 123 83.5 109.569 83.5 93V31C83.5 14.4315 70.0685 1 53.5 1H0"} stroke="black" />
                    <path d="M0 0 L13 0" stroke={`url(#gradient${idx})`} strokeLinecap="round" strokeWidth={2}>
                      <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" keyPoints={idx === 2 ? "1;0" : undefined} keyTimes={idx === 2 ? "0;1" : undefined}>
                        <mpath href={`#motionPath${idx}`} />
                      </animateMotion>
                    </path>
                    <defs>
                      <linearGradient id={`gradient${idx}`} x1={10} y1={0} x2={0} y2={0} gradientUnits="userSpaceOnUse">
                        <stop stopColor="#CB0000" offset={0} /><stop offset={1} stopColor="white" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
                <div className="process-card">
                  <div className="step-no"><span>STEP : {step.step}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                    <rect width={25} height={25} /><rect x={25} y={25} width={25} height={25} /><rect y={50} width={25} height={25} /><rect x={50} y={50} width={25} height={25} />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="service-details-page-wrap mb-120">
        <div className="container">
          <div className="service-details-content">
            <div className="title-area">
              <h2>Benefits of Choosing AGRL</h2>
              <p>Partnering with Akaraka Global Resources gives you access to unmatched expertise, quality, and service reliability.</p>
            </div>
            <div className="row g-4">
              {service.benefits.map((benefit, idx) => (
                <div className="col-md-6" key={idx}>
                  <div className="benefit-card"><h5>{benefit.title}</h5><p>{benefit.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <FooterTop />
      <Footer1 />
    </>
  );
}
