import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeProductSection = () => {
    return (
        <div className="home4-product-section mb-120">
            <div className="container">
                <div className="row gy-5 mb-90">
                    <div className="col-xl-5 order-xl-1 order-2">
                        <div className="faq-wrap">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            01. Do you provide custom coating and paint solutions?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, we offer customized coating and paint formulations tailored to meet your specific project requirements.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            02. Is AGRL suitable for my project?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            AGRL supplies coatings and paints for industrial, commercial, marine, and residential projects of all sizes.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            03. What is your typical order timeline?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Standard orders are processed within 3-5 business days. Bulk and custom orders may require additional lead time for formulation and testing.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            04. Do you provide technical support and guidance?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Yes, our technical team provides application guidance, surface preparation advice, and ongoing support throughout your project.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            05. Are your products environmentally compliant?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our coatings and paints comply with environmental standards. We offer low-VOC and eco-friendly formulations for sustainable projects.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            06. What quality standards do your products meet?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our coatings are manufactured to international quality standards, with rigorous testing for durability, adhesion, and colour consistency.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 oder-xl-2 order-1">
                        <div className="section-title three text-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2>[Our Products]</h2>
                        </div>
                        <div className="product-wrapper">
                            <div className="row g-4">
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="product-card magnetic-item">
                                        <div className="product-img">
                                            <Image width={361} height={292} src="/assets/img/home4/product-img1.jpg" alt="" />
                                            <Link href="/product/details" className="arrow">
                                                <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
                                                    <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link href="/product/details">Epoxy Floor Coatings</Link></h4>
                                            <p>Premium-quality coating formulated for maximum durability and long-lasting protection across diverse applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="product-card mt-15 magnetic-item">
                                        <div className="product-img">
                                            <Image width={361} height={292} src="/assets/img/home4/product-img2.jpg" alt="" />
                                            <Link href="/product/details" className="arrow">
                                                <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
                                                    <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link href="/product/details">Anti-Corrosion Primers</Link></h4>
                                            <p>Premium-quality coating formulated for maximum durability and long-lasting protection across diverse applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="product-card magnetic-item">
                                        <div className="product-img">
                                            <Image width={361} height={292} src="/assets/img/home4/product-img3.jpg" alt="" />
                                            <Link href="/product/details" className="arrow">
                                                <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
                                                    <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link href="/product/details">Marine Protective Paints</Link></h4>
                                            <p>Premium-quality coating formulated for maximum durability and long-lasting protection across diverse applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                    <div className="product-card mt-15 magnetic-item">
                                        <div className="product-img">
                                            <Image width={361} height={292} src="/assets/img/home4/product-img4.jpg" alt="" />
                                            <Link href="/product/details" className="arrow">
                                                <svg width={18} height={19} viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.0891088 0.0541992H18V3.40711L3.38614 18.054L0 14.7011L9.98019 4.81886L0.0891088 4.90709V0.0541992Z" />
                                                    <path d="M18.0004 18.0543V6.76025L13.1885 11.5249V18.0543H18.0004Z" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h4><Link href="/product/details">Decorative Wall Finishes</Link></h4>
                                            <p>Premium-quality coating formulated for maximum durability and long-lasting protection across diverse applications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="document-area">
                    <div className="section-title three mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h2>[Advance R&amp;D]</h2>
                    </div>
                    <ul className="document-list">
                        <li>
                            <h6>AGRL Company Profile</h6>
                            <a href="assets/pdf/metal-industry.pdf" download="AGRL Company Profile.pdf" className="download-btn">
                                <svg width={16} height={17} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7.58515 12.917C7.63953 12.9717 7.70419 13.0151 7.77541 13.0447C7.84662 13.0743 7.92299 13.0896 8.00011 13.0896C8.07724 13.0896 8.1536 13.0743 8.22482 13.0447C8.29603 13.0151 8.36069 12.9717 8.41508 12.917L12.8442 8.48825C12.9003 8.43408 12.945 8.36929 12.9758 8.29764C13.0066 8.226 13.0228 8.14895 13.0235 8.07098C13.0242 7.99301 13.0093 7.91568 12.9798 7.84352C12.9502 7.77135 12.9066 7.70579 12.8515 7.65065C12.7964 7.59552 12.7308 7.55192 12.6586 7.52239C12.5865 7.49286 12.5092 7.47801 12.4312 7.47868C12.3532 7.47936 12.2762 7.49556 12.2045 7.52633C12.1329 7.55711 12.0681 7.60185 12.0139 7.65793L8.58732 11.0845V0.639948C8.58732 0.484209 8.52546 0.334849 8.41533 0.224725C8.30521 0.114602 8.15585 0.0527344 8.00011 0.0527344C7.84437 0.0527344 7.69501 0.114602 7.58489 0.224725C7.47476 0.334849 7.4129 0.484209 7.4129 0.639948V11.0845L3.98631 7.65793C3.93239 7.6009 3.86758 7.55525 3.79572 7.52369C3.72385 7.49213 3.64639 7.4753 3.56791 7.47419C3.48943 7.47308 3.41152 7.48772 3.3388 7.51723C3.26607 7.54674 3.2 7.59054 3.14448 7.64603C3.08897 7.70151 3.04515 7.76756 3.0156 7.84028C2.98605 7.91299 2.97138 7.99089 2.97245 8.06937C2.97352 8.14785 2.99032 8.22532 3.02184 8.2972C3.05337 8.36908 3.09898 8.43391 3.15599 8.48786L7.58515 12.917ZM14.6552 14.8783H1.34503C1.18929 14.8783 1.03993 14.9402 0.929803 15.0503C0.819679 15.1604 0.757813 15.3098 0.757812 15.4655C0.757813 15.6213 0.819679 15.7706 0.929803 15.8807C1.03993 15.9909 1.18929 16.0527 1.34503 16.0527H14.6552C14.8109 16.0527 14.9603 15.9909 15.0704 15.8807C15.1805 15.7706 15.2424 15.6213 15.2424 15.4655C15.2424 15.3098 15.1805 15.1604 15.0704 15.0503C14.9603 14.9402 14.8109 14.8783 14.6552 14.8783Z" />
                                    </g>
                                </svg>
                                <span>Download</span>
                            </a>
                        </li>
                        <li>
                            <h6>Integrated Report</h6>
                            <a href="assets/pdf/metal-industry.pdf" download="AGRL Company Profile.pdf" className="download-btn">
                                <svg width={16} height={17} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7.58515 12.917C7.63953 12.9717 7.70419 13.0151 7.77541 13.0447C7.84662 13.0743 7.92299 13.0896 8.00011 13.0896C8.07724 13.0896 8.1536 13.0743 8.22482 13.0447C8.29603 13.0151 8.36069 12.9717 8.41508 12.917L12.8442 8.48825C12.9003 8.43408 12.945 8.36929 12.9758 8.29764C13.0066 8.226 13.0228 8.14895 13.0235 8.07098C13.0242 7.99301 13.0093 7.91568 12.9798 7.84352C12.9502 7.77135 12.9066 7.70579 12.8515 7.65065C12.7964 7.59552 12.7308 7.55192 12.6586 7.52239C12.5865 7.49286 12.5092 7.47801 12.4312 7.47868C12.3532 7.47936 12.2762 7.49556 12.2045 7.52633C12.1329 7.55711 12.0681 7.60185 12.0139 7.65793L8.58732 11.0845V0.639948C8.58732 0.484209 8.52546 0.334849 8.41533 0.224725C8.30521 0.114602 8.15585 0.0527344 8.00011 0.0527344C7.84437 0.0527344 7.69501 0.114602 7.58489 0.224725C7.47476 0.334849 7.4129 0.484209 7.4129 0.639948V11.0845L3.98631 7.65793C3.93239 7.6009 3.86758 7.55525 3.79572 7.52369C3.72385 7.49213 3.64639 7.4753 3.56791 7.47419C3.48943 7.47308 3.41152 7.48772 3.3388 7.51723C3.26607 7.54674 3.2 7.59054 3.14448 7.64603C3.08897 7.70151 3.04515 7.76756 3.0156 7.84028C2.98605 7.91299 2.97138 7.99089 2.97245 8.06937C2.97352 8.14785 2.99032 8.22532 3.02184 8.2972C3.05337 8.36908 3.09898 8.43391 3.15599 8.48786L7.58515 12.917ZM14.6552 14.8783H1.34503C1.18929 14.8783 1.03993 14.9402 0.929803 15.0503C0.819679 15.1604 0.757813 15.3098 0.757812 15.4655C0.757813 15.6213 0.819679 15.7706 0.929803 15.8807C1.03993 15.9909 1.18929 16.0527 1.34503 16.0527H14.6552C14.8109 16.0527 14.9603 15.9909 15.0704 15.8807C15.1805 15.7706 15.2424 15.6213 15.2424 15.4655C15.2424 15.3098 15.1805 15.1604 15.0704 15.0503C14.9603 14.9402 14.8109 14.8783 14.6552 14.8783Z" />
                                    </g>
                                </svg>
                                <span>Download</span>
                            </a>
                        </li>
                        <li>
                            <h6>Sustainbility Report</h6>
                            <a href="assets/pdf/metal-industry.pdf" download="AGRL Company Profile.pdf" className="download-btn">
                                <svg width={16} height={17} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M7.58515 12.917C7.63953 12.9717 7.70419 13.0151 7.77541 13.0447C7.84662 13.0743 7.92299 13.0896 8.00011 13.0896C8.07724 13.0896 8.1536 13.0743 8.22482 13.0447C8.29603 13.0151 8.36069 12.9717 8.41508 12.917L12.8442 8.48825C12.9003 8.43408 12.945 8.36929 12.9758 8.29764C13.0066 8.226 13.0228 8.14895 13.0235 8.07098C13.0242 7.99301 13.0093 7.91568 12.9798 7.84352C12.9502 7.77135 12.9066 7.70579 12.8515 7.65065C12.7964 7.59552 12.7308 7.55192 12.6586 7.52239C12.5865 7.49286 12.5092 7.47801 12.4312 7.47868C12.3532 7.47936 12.2762 7.49556 12.2045 7.52633C12.1329 7.55711 12.0681 7.60185 12.0139 7.65793L8.58732 11.0845V0.639948C8.58732 0.484209 8.52546 0.334849 8.41533 0.224725C8.30521 0.114602 8.15585 0.0527344 8.00011 0.0527344C7.84437 0.0527344 7.69501 0.114602 7.58489 0.224725C7.47476 0.334849 7.4129 0.484209 7.4129 0.639948V11.0845L3.98631 7.65793C3.93239 7.6009 3.86758 7.55525 3.79572 7.52369C3.72385 7.49213 3.64639 7.4753 3.56791 7.47419C3.48943 7.47308 3.41152 7.48772 3.3388 7.51723C3.26607 7.54674 3.2 7.59054 3.14448 7.64603C3.08897 7.70151 3.04515 7.76756 3.0156 7.84028C2.98605 7.91299 2.97138 7.99089 2.97245 8.06937C2.97352 8.14785 2.99032 8.22532 3.02184 8.2972C3.05337 8.36908 3.09898 8.43391 3.15599 8.48786L7.58515 12.917ZM14.6552 14.8783H1.34503C1.18929 14.8783 1.03993 14.9402 0.929803 15.0503C0.819679 15.1604 0.757813 15.3098 0.757812 15.4655C0.757813 15.6213 0.819679 15.7706 0.929803 15.8807C1.03993 15.9909 1.18929 16.0527 1.34503 16.0527H14.6552C14.8109 16.0527 14.9603 15.9909 15.0704 15.8807C15.1805 15.7706 15.2424 15.6213 15.2424 15.4655C15.2424 15.3098 15.1805 15.1604 15.0704 15.0503C14.9603 14.9402 14.8109 14.8783 14.6552 14.8783Z" />
                                    </g>
                                </svg>
                                <span>Download</span>
                            </a>
                        </li>
                    </ul>
                    <div className="contact-area pt-50 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <h6>Find Your Nearest Location &amp; <Link href="/contact">Contact</Link> Us Today!</h6>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeProductSection
