import React from 'react'
import circle_right from '../../icons/circle_right.svg'
import { motion } from 'framer-motion';

function Hero() {
    return (
        <>
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
                        <img src={circle_right}/> A tool that helps you navigate the web.
                    </motion.p><br></br>
                    <motion.p
                    animate={{ x: [1000, -100, 0] }}
                    transition={{ duration: 2 }}
                    >
                        <img src={circle_right}/> Spits out a summary of the contents using Artificial Intelligence.
                    </motion.p><br></br>
                    <motion.p 
                    animate={{ x: [1000, -100, 0] }}
                    transition={{ duration: 3 }}
                    >
                        <img src={circle_right}/> Chat-Bot Interface for a great experience.
                    </motion.p><br></br>
                </div>
                <div className="hero-btn-container">
                    <motion.button 
                    className="hero-btn"
                    animate={{ y: [600, 0] }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    >
                        Install Now
                    </motion.button>
                </div>
            </div>
        </>
    )
}

export default Hero
