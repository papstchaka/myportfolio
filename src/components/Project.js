import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

function Project({title,description,link_live,link_source,link_picture}) {
    const live_link_avb = link_live === "" ? "none" : "inline-block";
    
    return (
      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
              <Fade left>
              <h3 className="project-wrapper__text-title">{title}</h3>
              <div>
                <p className="mb-4">
                  {ReactHtmlParser(description)}
                </p>
              </div>
              <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main src-link" href={link_source}>
                Source Code
              </a>
              <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href={link_live} style={{"display":live_link_avb}}>
                See Live
              </a>
            </Fade>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12 myimg">
          <div className="project-wrapper__image">
            <a>
              <Fade right>
                <div className="thumbnail rounded">
                  <Tilt options={{max: 10}}>
                    <img className="img-fluid pic" src={link_picture} alt={`../assets/${link_picture.default}`}/>
                  </Tilt>
                </div>
              </Fade>
            </a>
          </div>
        </div>
      </div>
    )
};

export default Project;