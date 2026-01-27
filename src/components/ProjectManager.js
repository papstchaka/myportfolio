import React from 'react';
import parse from 'html-react-parser';
import Project from './Project';
import Accordion from 'react-bootstrap/Accordion';

function ProjectManager({name,data,description,wrapped}) {
    if (wrapped) {
        return (
            <div className="wrapper hovered">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div>
                                <h3 className="project-wrapper__text-title accordion-button-text">{name}</h3>
                                <div className="project-wrapper__text">
                                    <p className="mb-4" style={{"marginLeft":"2px", "textAlign":"justify"}}>{parse(description)}</p>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
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
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        )
    } else {
        return(
            <div className="wrapper hovered">
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
