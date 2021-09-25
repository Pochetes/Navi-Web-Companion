import React from 'react'
import circle_right from '../../icons/circle_right.svg'

function Hero() {
    return (
        <>
            <div className="hero-layout">
                <div className="hero-title">
                    <h1>The Web Companion We All Needed.</h1>
                </div>
                <div className="hero-desc">
                    <p>
                        <img src={circle_right}/> A tool that helps you navigate the web.
                    </p><br></br>
                    <p>
                        <img src={circle_right}/> Spits out a summary of the contents using Artificial Intelligence.
                    </p><br></br>
                    <p>
                        <img src={circle_right}/> Chat-Bot Interface for a great experience.
                    </p><br></br>
                </div>
                <div className="hero-btn-container">
                    <button className="hero-btn">Install Now</button>
                </div>
            </div>
        </>
    )
}

export default Hero
