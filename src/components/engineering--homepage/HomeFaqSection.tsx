import React from 'react'

const HomeFaqSection: React.FC = () => {
    return (
        <div className="home6-faq-section mb-120">
            <div className="container">
                <div className="row justify-content-center mb-45 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title five text-center">
                            <span>Your Questions Answered</span>
                            <h2>Frequently Asked Questions</h2>
                            <p>AGRL provides comprehensive industrial supply solutions, from raw material sourcing and chemical distribution to logistics and after-sales support.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <ul className="nav nav-pills wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-general-tab" data-bs-toggle="pill" data-bs-target="#pills-general" type="button" role="tab" aria-controls="pills-general" aria-selected="true">General</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-payment-tab" data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false">Payment</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-support-tab" data-bs-toggle="pill" data-bs-target="#pills-support" type="button" role="tab" aria-controls="pills-support" aria-selected="false">Support</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-general" role="tabpanel" aria-labelledby="pills-general-tab">
                                <div className="faq-wrap">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    01. Do you provide design and Engineering services?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Yes, we offer a full range of design and engineering services tailored to meet the specific needs of each project. Our experienced team works closely with clients from concept to completion, delivering innovative and practical solutions across various industries.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    02. Is AGRL suitable for my business?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Discover if AGRL is the right fit for your business by exploring our tailored solutions for various industries and unique needs.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    03. What is your typical project timeline?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Discover the typical project timeline for our construction services, outlining each phase from planning to completion, ensuring timely and efficient project delivery.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    04. How do you handle permits and inspections?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    We handle all necessary permits and inspections for your project, ensuring full compliance with local regulations and smooth progress throughout the construction process.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    05. How do you handle waste disposal and recycling?
                                                </button>
                                            </h2>
                                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, and implementing sustainable practices.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                            <h2 className="accordion-header" id="headingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    06. How do ensure buildings are structurally safe?
                                                </button>
                                            </h2>
                                            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Learn how we prioritize safety in construction by following strict structural guidelines and using high-quality materials to ensure buildings are secure and reliable.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab">
                                <div className="faq-wrap">
                                    <div className="accordion" id="accordionPayment">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseOne" aria-expanded="true" aria-controls="paymentcollapseOne">
                                                    01. Do you provide design and Engineering services?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseOne" className="accordion-collapse collapse show" aria-labelledby="paymentheadingOne" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    Yes, we offer a full range of design and engineering services tailored to meet the specific needs of each project. Our experienced team works closely with clients from concept to completion, delivering innovative and practical solutions across various industries.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseTwo" aria-expanded="false" aria-controls="paymentcollapseTwo">
                                                    02. Is AGRL suitable for my business?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseTwo" className="accordion-collapse collapse" aria-labelledby="paymentheadingTwo" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    Discover if AGRL is the right fit for your business by exploring our tailored solutions for various industries and unique needs.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseThree" aria-expanded="false" aria-controls="paymentcollapseThree">
                                                    03. What is your typical project timeline?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseThree" className="accordion-collapse collapse" aria-labelledby="paymentheadingThree" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    Discover the typical project timeline for our construction services, outlining each phase from planning to completion, ensuring timely and efficient project delivery.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseFour" aria-expanded="false" aria-controls="paymentcollapseFour">
                                                    04. How do you handle permits and inspections?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseFour" className="accordion-collapse collapse" aria-labelledby="paymentheadingFour" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    We handle all necessary permits and inspections for your project, ensuring full compliance with local regulations and smooth progress throughout the construction process.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseFive" aria-expanded="false" aria-controls="paymentcollapseFive">
                                                    05. How do you handle waste disposal and recycling?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseFive" className="accordion-collapse collapse" aria-labelledby="paymentheadingFive" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, and implementing sustainable practices.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="paymentheadingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#paymentcollapseSix" aria-expanded="false" aria-controls="paymentcollapseSix">
                                                    06. How do ensure buildings are structurally safe?
                                                </button>
                                            </h2>
                                            <div id="paymentcollapseSix" className="accordion-collapse collapse" aria-labelledby="paymentheadingSix" data-bs-parent="#accordionPayment">
                                                <div className="accordion-body">
                                                    Learn how we prioritize safety in construction by following strict structural guidelines and using high-quality materials to ensure buildings are secure and reliable.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-support" role="tabpanel" aria-labelledby="pills-support-tab">
                                <div className="faq-wrap">
                                    <div className="accordion" id="accordionSupport">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseOne" aria-expanded="true" aria-controls="supportcollapseOne">
                                                    01. Do you provide design and Engineering services?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseOne" className="accordion-collapse collapse show" aria-labelledby="supportheadingOne" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    Yes, we offer a full range of design and engineering services tailored to meet the specific needs of each project. Our experienced team works closely with clients from concept to completion, delivering innovative and practical solutions across various industries.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseTwo" aria-expanded="false" aria-controls="supportcollapseTwo">
                                                    02. Is AGRL suitable for my business?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseTwo" className="accordion-collapse collapse" aria-labelledby="supportheadingTwo" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    Discover if AGRL is the right fit for your business by exploring our tailored solutions for various industries and unique needs.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseThree" aria-expanded="false" aria-controls="supportcollapseThree">
                                                    03. What is your typical project timeline?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseThree" className="accordion-collapse collapse" aria-labelledby="supportheadingThree" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    Discover the typical project timeline for our construction services, outlining each phase from planning to completion, ensuring timely and efficient project delivery.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseFour" aria-expanded="false" aria-controls="supportcollapseFour">
                                                    04. How do you handle permits and inspections?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseFour" className="accordion-collapse collapse" aria-labelledby="supportheadingFour" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    We handle all necessary permits and inspections for your project, ensuring full compliance with local regulations and smooth progress throughout the construction process.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingFive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseFive" aria-expanded="false" aria-controls="supportcollapseFive">
                                                    05. How do you handle waste disposal and recycling?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseFive" className="accordion-collapse collapse" aria-labelledby="supportheadingFive" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    At our construction sites, we prioritize responsible waste disposal and recycling by adhering to local regulations, and implementing sustainable practices.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="supportheadingSix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#supportcollapseSix" aria-expanded="false" aria-controls="supportcollapseSix">
                                                    06. How do ensure buildings are structurally safe?
                                                </button>
                                            </h2>
                                            <div id="supportcollapseSix" className="accordion-collapse collapse" aria-labelledby="supportheadingSix" data-bs-parent="#accordionSupport">
                                                <div className="accordion-body">
                                                    Learn how we prioritize safety in construction by following strict structural guidelines and using high-quality materials to ensure buildings are secure and reliable.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeFaqSection
