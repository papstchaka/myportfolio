import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
import { animateScroll, Link } from 'react-scroll'
import TypeAnimation from 'react-type-animation'
import { vh } from 'react-native-expo-viewport-units'

function Hero({hero, themeToggler}) {
    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle );
        themeToggler();
    }

    return (
        <div id="hero" className="jumbotron">
            <nav className="navnavbar" id="background"></nav>
            <div className="container">
                <Fade left>
                    <h1 className="hero-title">
                        Hi, my name is <span className="text-color-main">Alex</span>
                        <br />
                        <span>
                            <span>Your man for </span>
                            <br />
                            <TypeAnimation className="text-color-main" curser={false} repeat={Infinity} wrapper={"span"} sequence={hero.roles} />
                        </span>
                    </h1>
                    <p className="hero-cta">
                        <Link to="about" offset={-vh(5)} spy={true} smooth={true} className="cta-btn cta-btn--hero" href="#about">Know more</Link>
                    </p>
                </Fade>
            </div>
            <div className="container">
                <Fade bottom>                
                    <div onClick={triggerToggle} className={`wrg-toggle ${toggle ? 'wrg-toggle--checked' : ''}`}>
                        <div className="wrg-toggle-container">
                            <div className="wrg-toggle-check">
                                <span>🌜</span>
                            </div>
                            <div className="wrg-toggle-uncheck">
                                <span>🌞</span>
                            </div>
                        </div>
                        <div className="wrg-toggle-circle"></div>
                        <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
                    </div>
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