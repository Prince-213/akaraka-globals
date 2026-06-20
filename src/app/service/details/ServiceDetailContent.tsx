"use client";
import FooterTop from '@/components/factory-homepage/FooterTop'
import HomePageFeatureSection from '@/components/factory-homepage/HomePageFeatureSection'

import InnerPageHeader from '@/components/header/InnerPageHeader'
import Link from 'next/link'
import React from 'react'
import Footer1 from '@/components/footers/Footer1'
import Breadcrumb from '@/components/common/Breadcrumb'
import Image from 'next/image'
import { Accordion } from 'react-bootstrap'

const ServiceDetailContent = () => {
    return (
        <>
            <InnerPageHeader />
            <Breadcrumb title="Service Details" subtitle="Comprehensive Industrial Product Range" />

            <div className="service-details-page-wrap pt-120 mb-120" id="scroll-section">
                <div className="container">
                    <div className="row gy-md-5 gy-4">
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <h2>Raw Materials Supply &amp; Industrial Chemicals Distribution</h2>
                                <p>At AGRL, we specialise in the supply and distribution of premium industrial raw materials and chemicals. From calcium carbonate and kaolinite for paint manufacturing to acrylic PVA emulsions and titanium dioxide for coatings, our extensive product portfolio serves diverse industries including construction, paints, plastics, and general manufacturing.</p>
                                <p>With over 25 years of experience in the Nigerian industrial supply sector, we have built robust sourcing networks and quality assurance processes that guarantee consistent product quality, competitive pricing, and reliable delivery across Abuja and beyond.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="service-details-img">
                                <Image width={960} height={470} src="/assets/img/sections/RAW-MATERIALS-SUPPLY-INDUSTRIAL-CHEMICALS-DISTRIBUTION.webp" alt="" />
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
                            <p>With headquarters in Abuja's International Building Materials Market and a branch at Mararaba, AGRL is strategically positioned to serve clients across Nigeria. Our commitment to quality and reliability has made us a trusted partner for manufacturers and contractors.</p>
                        </div>
                        <ul>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Calcium Carbonate (CaCO3)
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Acrylic PVA Emulsion
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Titanium Dioxide (TiO2)
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                HPMC (Cellulose Ether)
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Sulphur Powder
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Stone Dust &amp; Kaolinite
                            </li>
                            <li>
                                <svg width={15} height={15} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                                </svg>
                                Emulsion &amp; Tex Coat Paints
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service-details-thumb-area mb-120">
                <div className="container">
                    <div className="service-details-thumb-img">
                       <Image width={1560} height={470} src="/assets/img/sections/Below-WHAT-WE-DELIVER.webp" alt="" />
                    </div>
                    <div className="service-details-faq-area">
                        <div className="faq-wrap">
                            <Accordion defaultActiveKey="0" id="accordionExample">
       <Accordion.Item eventKey="0" className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <Accordion.Header>
          01. What raw materials and chemicals do you supply?
        </Accordion.Header>
        <Accordion.Body>
          We supply calcium carbonate, stone dust, kaolinite, acrylic PVA, titanium dioxide, HPMC, sulphur powder, emulsion paints, tex coat paints, and plastic products for diverse industrial applications.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1" className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <Accordion.Header>
          02. Is AGRL suitable for my business?
        </Accordion.Header>
        <Accordion.Body>
          Discover if AGRL is the right fit for your business by exploring our tailored solutions for various industries and unique needs.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <Accordion.Header>
          03. What are your delivery timelines for bulk chemical orders?
        </Accordion.Header>
        <Accordion.Body>
          Most stocked items can be delivered within 48-72 hours from our Abuja warehouse. Specialised or imported chemicals typically require 7-14 working days depending on order volume and sourcing logistics.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
        <Accordion.Header>
          04. Do you provide quality certification for your products?
        </Accordion.Header>
        <Accordion.Body>
          Yes, all our products come with quality assurance documentation. We implement rigorous testing protocols to ensure every batch meets specified purity, particle size, and performance standards before dispatch.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4" className="accordion-item wow animate fadeInDown" data-wow-delay="1000ms" data-wow-duration="1500ms">
        <Accordion.Header>
          05. Do you offer technical support for product selection?
        </Accordion.Header>
        <Accordion.Body>
          Absolutely. Our technical team provides expert guidance on material selection, formulation advice, and application recommendations to ensure you get the right product for your specific manufacturing process.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home1-process-section mb-120">
                <div className="container">
                    <div className="row justify-content-center mb-70 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="section-title text-center">
                                <span>Process our Work</span>
                                <h2>The Experts Behind The Process</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="process-wrapper">
                        <div className="single-process mt-30">
                            <div className="process-card wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 01</span>
                                </div>
                                <h3>Requirement<br />Analysis</h3>
                                <p>We assess your industrial needs, chemical specifications, and volume requirements to develop a customised supply plan.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                            <svg className="animated-vector" width={181} height={124} viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" id="theMotionPath11" d="M0 123H67.5C84.0685 123 97.5 109.569 97.5 93V31C97.5 14.4315 110.931 1 127.5 1H181" stroke="black" />
                                <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7441)" strokeLinecap="round" strokeWidth={2}>
                                    <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto">
                                        <mpath href="#theMotionPath11" />
                                    </animateMotion>
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_354_7441" x1={10} y1={0} x2={0} y2={0} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CB0000" offset={0} />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="single-process">
                            <div className="process-card wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 02</span>
                                </div>
                                <h3>Material Sourcing &amp; Quality Check</h3>
                                <p>We procure from trusted suppliers and conduct rigorous quality testing to ensure every batch meets specifications.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                        </div>
                        <div className="single-process mt-30">
                            <svg className="animated-vector" width={181} height={124} viewBox="0 0 181 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.2" id="theMotionPath12" d="M181 123H113.5C96.9315 123 83.5 109.569 83.5 93V31C83.5 14.4315 70.0685 1 53.5 1H0" stroke="black" />
                                <path d="M0 0 L13 0" stroke="url(#paint0_linear_354_7442)" strokeLinecap="round" strokeWidth={2}>
                                    <animateMotion dur="4s" begin="0s" repeatCount="indefinite" rotate="auto" keyPoints="1;0" keyTimes="0;1">
                                        <mpath href="#theMotionPath12" />
                                    </animateMotion>
                                </path>
                                <defs>
                                    <linearGradient id="paint0_linear_354_7442" x1={10} y1={0} x2={0} y2={0} gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#CB0000" offset={0} />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="process-card wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="step-no">
                                    <span>STEP : 03</span>
                                </div>
                                <h3>Delivery &amp; After-Sales Support</h3>
                                <p>Timely delivery to your location with ongoing technical support to ensure complete satisfaction.</p>
                                <svg className="vector" width={75} height={75} viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={25} height={25} />
                                    <rect x={25} y={25} width={25} height={25} />
                                    <rect y={50} width={25} height={25} />
                                    <rect x={50} y={50} width={25} height={25} />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home2-benefit-section mb-120">
                <div className="container">
                    <div className="row mb-80 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="col-xl-5 col-lg-6">
                            <div className="section-title two">
                                <span>Benefits Our Product</span>
                                <h2>Benefits of AGRL.</h2>
                                <svg className="vector" width={254} height={57} viewBox="0 0 254 57" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.634619 3.96702C0.416606 6.16537 2.02199 8.12423 4.22035 8.34224C6.4187 8.56025 8.37755 6.95487 8.59557 4.75651C8.81358 2.55816 7.2082 0.599304 5.00984 0.381291C2.81148 0.163279 0.852631 1.76866 0.634619 3.96702ZM251.63 56.2387C252.037 56.3185 252.431 56.0537 252.511 55.6472L253.811 49.0236C253.89 48.6171 253.626 48.2229 253.219 48.1432C252.813 48.0634 252.418 48.3282 252.339 48.7347L251.183 54.6224L245.295 53.4668C244.889 53.3871 244.495 53.6519 244.415 54.0584C244.335 54.4648 244.6 54.859 245.007 54.9388L251.63 56.2387ZM4.65432 5.11074C38.8809 3.31822 92.3013 3.7224 141.306 10.7568C165.809 14.2742 189.18 19.4454 208.487 26.8144C227.811 34.1905 242.962 43.7307 251.152 55.921L252.397 55.0845C243.95 42.512 228.452 32.8297 209.021 25.4131C189.572 17.9894 166.081 12.7978 141.519 9.27206C92.3932 2.22022 38.8713 1.81667 4.57587 3.61279L4.65432 5.11074Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6">
                            <ul className="benefit-list">
                                <li className="single-benefit wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="number">
                                        <span>01</span>
                                    </div>
                                    <div className="content">
                                        <h4>AGRL quality</h4>
                                        <p>AGRL delivers consistent quality across every product category, backed by over 25 years of industrial supply experience in the Nigerian market.</p>
                                    </div>
                                </li>
                                <li className="single-benefit wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="number">
                                        <span>02</span>
                                    </div>
                                    <div className="content">
                                        <h4>Cost Reduction</h4>
                                        <p>AGRL delivers consistent quality across every product category, backed by over 25 years of industrial supply experience in the Nigerian market.</p>
                                    </div>
                                </li>
                                <li className="single-benefit wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="number">
                                        <span>03</span>
                                    </div>
                                    <div className="content">
                                        <h4>Improved Safety</h4>
                                        <p>AGRL delivers consistent quality across every product category, backed by over 25 years of industrial supply experience in the Nigerian market.</p>
                                    </div>
                                </li>
                                <li className="single-benefit wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="number">
                                        <span>04</span>
                                    </div>
                                    <div className="content">
                                        <h4>Supply Chain</h4>
                                        <p>AGRL delivers consistent quality across every product category, backed by over 25 years of industrial supply experience in the Nigerian market.</p>
                                    </div>
                                </li>
                                <li className="single-benefit wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="number">
                                        <span>05</span>
                                    </div>
                                    <div className="content">
                                        <h4>Market Reach </h4>
                                        <p>AGRL delivers consistent quality across every product category, backed by over 25 years of industrial supply experience in the Nigerian market.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-5 col-lg-6 d-lg-block d-none wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="benefit-img-wrap magnetic-item">
                                <div className="benefit-img" style={{
                                    "overflow": "hidden",
                                
                                }}>
                                   <Image width={960} height={470} src="/assets/img/home2/benefit-img.webp" alt="" />
                                </div>
                               <Image width={960} height={470} src="/assets/img/home2/benefit-img-bg.webp" alt="" className="img-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomePageFeatureSection name='Services' />
            <div className="home3-company-info-section mb-120">
                <div className="container">
                    <div className="row gy-md-5 gy-4 align-items-center">
                        <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="company-info-img-and-countdown-area">
                                <div className="info-img magnetic-item">
                                   <Image width={960} height={470} src="/assets/img/sections/REDIFINING-INDUSTRIAL-SUPPLY-STANDARDS.webp" alt="" />
                                </div>
                                <div className="countdown-area">
                                    <div className="number">
                                        <h3 className="counter">26</h3>
                                        <span>+</span>
                                    </div>
                                    <span>Year’s Of <br /> Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="company-info-content">
                                <h2>Redefining Industrial Supply Standards.</h2>
                                <p>We understand your production needs and deliver premium industrial chemicals and raw materials with reliable service. Our team of experts is passionate about helping Nigerian manufacturers access world-class materials at competitive prices. Choose AGRL and experience the difference of working with a supplier that prioritises quality, consistency, and customer satisfaction.</p>
                                <Link className="primary-btn2 two" href="/contact">
                                    <span>Let’s Talk With Us</span>
                                    <svg className="arrow" width={23} height={23} viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
                                            <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
                                        </g>
                                    </svg>
                                </Link>
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

export default ServiceDetailContent
