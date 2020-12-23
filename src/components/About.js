import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Modal_ from './Modal_';

function About({about}) {
    const content = {
        title: "Resume",
        content: {
            show: about.link_show, 
            download: about.link_download}
    }

    return (
        <section id="about">
            <div className="container">
                <Fade>
                    <h2 className="section-title">
                        About me
                    </h2>
                </Fade>
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <Fade bottom>
                            <div className="about-wrapper__image">
                                <Tilt options={{max: 10}}>
                                    <img
                                        className="img-fluid rounded shadow-lg"
                                        height="auto"
                                        width="500px"
                                        src={require("../assets/profile.webp")}
                                        alt="Profile Pic"
                                    />
                                </Tilt>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info">
                            <Fade right>
                                <p className="about-wrapper__info-text">
                                    {about.section1}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {about.section2}
                                </p>
                                <p className="about-wrapper__info-text">
                                    {about.section3}
                                </p>
                                <span className="d-flex mt-3">
                                    <Modal_ content={content}/>
                                </span>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;