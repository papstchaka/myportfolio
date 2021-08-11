import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Project from './Project';
import Accordion from 'react-bootstrap/Accordion';

// import './ProjectManager.css'

function ProjectManager({name,data,description,wrapped}) {
    if (wrapped) {
        return (
            <div className="wrapper">
                <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as="H3" variant="link" eventKey="0" >
                        <h3 className="project-wrapper__text-title accordion-button">{name}</h3>
                        <div className="project-wrapper__text">
                            <p className="mb-4" style={{"marginLeft":"2px"}}>{ReactHtmlParser(description)}</p>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="accordion-content">
                        {
                            data.map((project,i) => {
                                return (
                                    <Project 
                                        key={project.title} 
                                        title={project.title}
                                        description={project.description}
                                        link_live={project.link_live}
                                        link_source={project.link_source}
                                        link_picture={project.link_picture}
                                    />
                                )
                            })
                        }
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
        )
    } else {
        return(
            <div className="wrapper">
                <Project 
                    key={data[0].title} 
                    title={data[0].title}
                    description={data[0].description}
                    link_live={data[0].link_live}
                    link_source={data[0].link_source}
                    link_picture={data[0].link_picture}
                />
            </div>
        )
    }
};

export default ProjectManager;