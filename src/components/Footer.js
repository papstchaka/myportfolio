import React from 'react';
import SocialLink from './SocialLink';
import { animateScroll } from 'react-scroll'

function Footer({social_networks}) {
    return (
        <footer className="footer navbar-static-bottom">
            <div className="container">
                <a onClick={animateScroll.scrollToTop} className="back-to-top" id="bottom">
                    <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </a>
            <div className="social-links">
                { 
                social_networks.map((social_network,i) => {
                    return (
                    <SocialLink 
                    key={social_network.network} 
                    network={social_network.network} 
                    link={social_network.link} 
                    />
                    );
                })
                }
            </div>
    
            <hr />
            
            <p className="footer__text">
                © 2020 - Design by <a href="https://github.com/cobiwave" target="_blank" rel="noopener noreferrer">Jacobo Martínez</a>
            </p>
            <p className="footer__text"> 
                Implementation and Individualisation by <a href="https://github.com/papstchaka" target="_blank" rel="noopener noreferrer">Alexander Christoph</a>
            </p>
            </div>
        </footer>
    )
};

export default Footer;