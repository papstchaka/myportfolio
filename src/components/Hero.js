import React from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll, Link } from 'react-scroll'
import TypeAnimation from 'react-type-animation'

function Hero({hero}) {
    return (
        <div id="hero" className="jumbotron">
            <nav className="navnavbar">
                <div className="divnavbar">
                    <p className="hero-cta pnavbar">
                        <Link className="cta-btn cta-btn--resume anavbar" to="about" spy={true} smooth={true}>About Me</Link>
                    </p>
                    <p className="hero-cta pnavbar">
                        <Link className="cta-btn cta-btn--resume anavbar" to="projects" spy={true} smooth={true}>My Projects</Link>
                    </p>
                    <p className="hero-cta pnavbar">
                        <Link className="cta-btn cta-btn--resume anavbar" to="contact" spy={true} smooth={true}>Contact Me</Link>
                    </p>
                    <p className="hero-cta pnavbar">
                        <Link className="cta-btn cta-btn--resume anavbar" to="footer" spy={true} smooth={true}>Social Media</Link>
                    </p>
                </div>
            </nav>
            <div className="container">
                <Fade left>
                    <h1 className="hero-title">
                        Hi, my name is <span className="text-color-main">Alex</span>
                        <br />
                        <span>
                            <span>Your man for </span>
                            <TypeAnimation curser={false} repeat={Infinity} wrapper={"span"} sequence={hero.roles} />
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