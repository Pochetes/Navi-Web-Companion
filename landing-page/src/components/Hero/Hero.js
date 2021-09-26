import React from 'react'
import circle_right from '../../icons/circle_right.svg'
import striped_circle from '../../icons/striped_circle.svg'
import striped_star from '../../icons/striped_star.svg'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
            <motion.div 
            className="striped-shapes"
            >
                <img className="striped-circle" src={striped_circle} alt="cool-circle"/>
            </motion.div>


            <motion.div
            className="striped-shapes"
            >
                <img className="striped-star" src={striped_star} alt="cool-star"/>
            </motion.div>

            <div className="hero-layout">
                <div className="hero-title">
                    <motion.h1 
                    animate={{ x: [-500, 100, 0] }}
                    transition={{ duration: 1 }}
                    >
                        The Web Companion We All Needed.
                    </motion.h1>
                </div>
                <div className="hero-desc">
                    <motion.p
                    animate={{ x: [1000, -100, 0] }}
                    transition={{ duration: 1 }}
                    >
                        <img src={circle_right} alt="circle-arrow"/> A tool that helps you navigate the web.
                    </motion.p><br></br>
                    <motion.p
                    animate={{ x: [1000, -100, 0] }}
                    transition={{ duration: 2 }}
                    >
                        <img src={circle_right} alt="circle-arrow"/> Spits out a summary of the contents using Artificial Intelligence.
                    </motion.p><br></br>
                    <motion.p 
                    animate={{ x: [1000, -100, 0] }}
                    transition={{ duration: 3 }}
                    >
                        <img src={circle_right} alt="circle-arrow"/> Chat-Bot Interface for a great experience.
                    </motion.p><br></br>
                </div>
                <div className="hero-btn-container">
                    <motion.button 
                    className="hero-btn"
                    animate={{ y: [600, 0] }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                        Install Now
                    </motion.button>
                </div>
            </div>
        </>
    )
}

export default Hero
