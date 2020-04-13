import React from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll } from 'react-scroll'

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
                        I am your man!
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