import React from 'react'

function Hero() {
    return (
        <>
            <div className="hero-layout">
                <div className="hero-title">
                    <h1>The Web Companion We All Needed.</h1>
                </div>
                <div className="hero-desc">
                    <p>
                         <span className="hero-desc-arrow">--></span> A tool that helps you navigate the web.
                    </p>
                    <p>
                    <span className="hero-desc-arrow">--></span> Spits out a summary of the contents using Artificial Intelligence.
                    </p>
                    <p>
                    <span className="hero-desc-arrow">--></span> Chat-Bot Interface for a great experience.
                    </p>
                </div>
                <div className="hero-btn-container">
                    <button className="hero-btn">Install Now</button>
                </div>
            </div>
        </>
    )
}

export default Hero
