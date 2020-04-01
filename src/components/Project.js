import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';

function Project({title,description,link_live,link_source,link_picture}) {
    return (
      <div className="row" style={{marginBottom: "20px"}}>
        <div className="col-lg-4 col-sm-12">
          <div className="project-wrapper__text">
              <Fade left>
              <h3 className="project-wrapper__text-title">{title}</h3>
              <div>
                <p className="mb-4">
                  {ReactHtmlParser(description)}
                </p>
              </div>
              <a target="_blank" rel="noopener noreferrer" className="cta-btn cta-btn--hero" href={link_live}>
                See Live
              </a>
              <a target="_blank" rel="noopener noreferrer" className="cta-btn text-color-main" href={link_source}>
                Source Code
              </a>
            </Fade>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="project-wrapper__image">
            <a>
              <Fade right>
                <div className="thumbnail rounded">
                  <Tilt options={{max: 10}}>
                    <img className="img-fluid" src={link_picture} alt={`../assets/${link_picture}`}/>
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