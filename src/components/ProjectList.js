import React from 'react';
import ProjectManager from './ProjectManager';
import { Fade } from 'react-awesome-reveal';
import Accordion from 'react-bootstrap/Accordion';
import parse from 'html-react-parser';
import { Link } from 'react-scroll';
import { vh } from '../utils/viewport';

function ProjectList({projects}) {
    return (
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <Fade triggerOnce>
              <h2 className="section-title">
                Projects
                <div className="button-bar">
                  {
                    projects.slice().reverse().map((project, i) => {
                      return(
                        <Link key={project.year} to={project.year} spy={true} smooth={true} offset={-vh(10)} className="cta-btn cta-btn--hero" style={{"margin":"0px 10px 0px 10px"}}>{project.year}</Link>
                      )
                    })
                  }
                </div>
              </h2>
            </Fade>
            { 
              projects.slice().reverse().map((project,i) => {
                return (    
                  <div key={project.year} id={project.year} style={{"paddingTop":"10px"}}>         
                    <div className="wrapper years">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            <div>
                              <h3 className="project-wrapper__text-title accordion-button-text">{project.year}</h3>
                              <div className="project-wrapper__text">
                                <p className="mb-4" style={{"marginLeft":"2px", "textAlign":"justify"}}>{parse(project.description)}</p>
                              </div>
                            </div>
                          </Accordion.Header>
                          <Accordion.Body>
                            {
                              project.data.map((data,i) => {
                                return (
                                        <ProjectManager 
                                            key={data.name} 
                                            name={data.name} 
                                            data={data.data}
                                            description={data.description}
                                            wrapped={data.wrapped}
                                        />
                                      )
                              })
                            }
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
    )
};

export default ProjectList;
