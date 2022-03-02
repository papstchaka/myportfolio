import React from 'react';
import Fade from 'react-reveal/Fade';

function Contact({contact}) {
    return (
        <section id="contact" className='mysection'>
            <div className="container">
                <Fade>
                    <h2 className="section-title">
                        Contact
                    </h2>
                </Fade>
                <div className="contact-wrapper">
                    <Fade bottom>
                        <p className="contact-wrapper__text">
                            {contact.call_to_action}
                        </p>
                        <a
                        target="_blank" rel="noopener noreferrer"
                        className="cta-btn cta-btn--resume"
                        href={contact.email}>
                            Write Mail
                        </a>
                    </Fade>
                </div>
            </div>
        </section>
    )
};

export default Contact;