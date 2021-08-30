import React from 'react';
import ProjectManager from './ProjectManager';
import Fade from 'react-reveal/Fade';
import Accordion from 'react-bootstrap/Accordion';
import ReactHtmlParser from 'react-html-parser';

function ProjectList({projects}) {
    return (
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <Fade>
              <h2 className="section-title dark-blue-text">
                Projects
                <div class="button-bar">
                  {
                    projects.reverse().map((project, i) => {
                      return(
                        <a className="cta-btn cta-btn--hero" href={"#"+project.year} style={{"margin":"0px 10px 0px 10px"}}>{project.year}</a>
                      )
                    })
                  }
                </div>
              </h2>
            </Fade>
            { 
              projects.reverse().map((project,i) => {
                return (    
                  <div id={project.year} style={{"paddingTop":"10px"}}>         
                    <div className="wrapper years">
                      <Accordion defaultActiveKey="1">
                        <Accordion.Toggle as="H3" variant="link" eventKey="0" >
                            <h3 className="project-wrapper__text-title accordion-button">{project.year}</h3>
                            <div className="project-wrapper__text">
                                <p className="mb-4" style={{"marginLeft":"2px"}}>{ReactHtmlParser(project.description)}</p>
                            </div>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <div className="accordion-content">
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
                            </div>
                        </Accordion.Collapse>
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