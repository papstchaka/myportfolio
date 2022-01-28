import React from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll } from 'react-scroll'
import TypeAnimation from 'react-type-animation'

function Hero() {
    return (
        <div id="hero" className="jumbotron">
            <div className="container">
                <p>
                    <a className="back-to-top">
                        <i className="fa fa-angle-down fa-2x load-hidden" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
            <div className="container">
                <Fade left>
                    <h1 className="hero-title">
                        Hi, my name is <span className="text-color-main">Alex</span>
                        <br />
                        <span>
                            <span>Your man for </span>
                            <TypeAnimation curser={false} repeat={Infinity} wrapper={"span"} sequence={[
                                "Data Science", 1000, 
                                "Machine Learning", 1000,
                                "Artificial Intelligence", 1000,
                                "Web-Development", 1000,
                                "Full-Stack", 1000,
                                ""
                            ]} />
                        </span>
                    </h1>
                    <p className="hero-cta">
                        <a className="cta-btn cta-btn--hero" href="#about">Know more</a>
                    </p>
                </Fade>
            </div>
            <div className="container">
                <Fade bottom>
                    <p>
                        <a onClick={animateScroll.scrollToBottom} className="to-bottom">
                            <i className="fa fa-angle-down fa-2x" aria-hidden="true"></i>
                        </a>
                    </p>
                </Fade>
            </div>
        </div>
    )
};

export default Hero;