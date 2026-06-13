import Image from 'next/image'
import React from 'react'

const HomeSubscribeSection: React.FC = () => {
    return (
        <div className="home6-subscribe-section">
            <div className="container">
                <div className="subscribe-wrapper">
                    <div className="subscribe-img">
                        <Image width={590} height={210} src="/assets/img/home6/subscribe-img.webp" alt="" />
                    </div>
                    <div className="subscribe-content">
                        <h4>Stay Connected — Subscribe for General Contracting &amp; Supply Updates.</h4>
                        <form>
                            <div className="form-inner">
                                <input type="email" placeholder="Enter Email" />
                                <div className="btn-grp">
                                    <button type="submit">Subscribe</button>
                                    <button type="submit" className="send-btn">
                                        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9566 0.857204C20.0021 0.743631 20.0132 0.619214 19.9886 0.499376C19.9641 0.379538 19.9049 0.26955 19.8184 0.183047C19.7318 0.0965444 19.6219 0.0373312 19.502 0.0127484C19.3822 -0.0118344 19.2578 -0.000705698 19.1442 0.0447548L0.96158 7.31805H0.96033L0.395366 7.54304C0.28836 7.58572 0.195235 7.65715 0.126277 7.74944C0.0573191 7.84172 0.015212 7.95128 0.00460698 8.06599C-0.00599803 8.18071 0.0153118 8.29612 0.0661825 8.39948C0.117053 8.50285 0.195505 8.59014 0.292872 8.65172L0.80534 8.9767L0.80659 8.9792L7.04995 12.9515L11.0222 19.1948L11.0247 19.1973L11.3497 19.7098C11.4115 19.8068 11.4988 19.8848 11.6021 19.9354C11.7054 19.9859 11.8206 20.007 11.9351 19.9963C12.0496 19.9856 12.1589 19.9434 12.251 19.8746C12.3431 19.8057 12.4144 19.7128 12.4571 19.606L19.9566 0.857204ZM17.6655 3.21956L8.29862 12.5865L8.02989 12.164C7.98065 12.0865 7.91493 12.0208 7.8374 11.9715L7.41493 11.7028L16.7818 2.33586L18.2542 1.74715L17.6668 3.21956H17.6655Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Image width={420} height={118} src="/assets/img/home6/subscribe-section-vector.webp" alt="" className="vector" />
                </div>
            </div>
        </div>

    )
}

export default HomeSubscribeSection
