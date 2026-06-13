import React from 'react'

const HomeCounterSection: React.FC = () => {
    return (
        <div className="home4-counter-section mb-120">
            <div className="container">
                <div className="counter-wrap">
                    <div className="row gy-sm-5 gy-4">
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center divider">
                            <div className="single-countdown">
                                <div className="number">
                                    <h2 className="counter">45</h2>
                                    <span>+</span>
                                </div>
                                <span>Projects Completed</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center divider">
                            <div className="single-countdown">
                                <div className="number">
                                    <h2 className="counter">15</h2>
                                </div>
                                <span>Technical Specialists</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-md-end justify-content-center divider">
                            <div className="single-countdown">
                                <div className="number">
                                    <h2 className="counter">5</h2>
                                </div>
                                <span>Years of Experience</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
                            <div className="single-countdown">
                                <div className="number">
                                    <h2 className="counter">2</h2>
                                    <span>M</span>
                                </div>
                                <span>Satisfied Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomeCounterSection
