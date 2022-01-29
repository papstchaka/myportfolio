import React from 'react';
import Fade from 'react-reveal/Fade';
import TextLoop from 'react-text-loop'
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
                <div className="row about-wrapper">
                    <div className="col-md-6 col-sm-12">
                        <Fade bottom>
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
                                        <TextLoop className='' interval={200} children={
                                            about.languages
                                        } />
                                    </a>
                                </span>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-wrapper__info">
                            <Fade right>
                                <h2 className='section-title myname'>
                                    Alexander Christoph
                                </h2>
                                {
                                    about.sections.map((data,i) => {
                                    return (
                                        <p className="about-wrapper__info-text">{data.data}</p>
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