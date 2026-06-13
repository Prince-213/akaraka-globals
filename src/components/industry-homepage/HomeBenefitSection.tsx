import Image from 'next/image'
import React from 'react'

const HomeBenefitSection:React.FC = () => {
    return (
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
                                    <p>AGRL ensures every chemical shipment meets rigorous industry standards through comprehensive quality testing.</p>
                                </div>
                            </li>
                            <li className="single-benefit wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
                                <div className="number">
                                    <span>02</span>
                                </div>
                                <div className="content">
                                    <h4>Cost Reduction</h4>
                                    <p>AGRL ensures every chemical shipment meets rigorous industry standards through comprehensive quality testing.</p>
                                </div>
                            </li>
                            <li className="single-benefit wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="number">
                                    <span>03</span>
                                </div>
                                <div className="content">
                                    <h4>Improved Safety</h4>
                                    <p>AGRL ensures every chemical shipment meets rigorous industry standards through comprehensive quality testing.</p>
                                </div>
                            </li>
                            <li className="single-benefit wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                <div className="number">
                                    <span>04</span>
                                </div>
                                <div className="content">
                                    <h4>Supply Chain</h4>
                                    <p>AGRL ensures every chemical shipment meets rigorous industry standards through comprehensive quality testing.</p>
                                </div>
                            </li>
                            <li className="single-benefit wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
                                <div className="number">
                                    <span>05</span>
                                </div>
                                <div className="content">
                                    <h4>Market Reach </h4>
                                    <p>AGRL ensures every chemical shipment meets rigorous industry standards through comprehensive quality testing.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-5 col-lg-6 d-lg-block d-none wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                        <div className="benefit-img-wrap magnetic-item">
                            <div className="benefit-img">
                                <Image width={495} height={596} src="/assets/img/home2/benefit-img.webp" alt="" />
                            </div>
                            <Image width={500} height={600} src="/assets/img/home2/benefit-img-bg.webp" alt="" className="img-bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBenefitSection
