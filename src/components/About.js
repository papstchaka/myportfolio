import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import Modal_ from './Modal_';

function About({about}) {
    const content = {
        title: "Resume",
        content: {
            show: about.link_show, 
            download: about.link_download}
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % about.languages.length);
        }, 200);
        return () => clearInterval(interval);
    }, [about.languages.length]);

    return (
        <section id="about" className='mysection'>
            <div className="container">
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <Fade direction="up" triggerOnce>
                            <div className="about-wrapper__image">
                                <img
                                    className="img-fluid rounded shadow-lg"
                                    height="auto"
                                    width="500px"
                                    src={require("../assets/profile.webp")}
                                    alt="Profile Pic"
                                />
                                <span className="d-flex mt-3 adjust">
                                    <Modal_ content={content}/>
                                    <a className="cta-btn cta-btn--resume theslider">
                                        <span className="text-loop">
                                            {about.languages[currentIndex]}
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info">
                            <Fade direction="right" triggerOnce>
                                <h2 className='section-title myname'>
                                    Alexander Christoph
                                </h2>
                                {
                                    about.sections.map((data,i) => {
                                    return (
                                        <p key={i} className="about-wrapper__info-text">{data.data}</p>
                                        )
                                    })
                                }
                            </Fade>
                        </div>
                    </div>
                </div>      
            </div>
        </section>
    )
};

export default About;
