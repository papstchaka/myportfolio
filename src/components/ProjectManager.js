import React from 'react';
import Project from './Project';
import Accordion from 'react-bootstrap/Accordion';

// import './ProjectManager.css'

function ProjectManager({name,data,wrapped}) {
    if (wrapped) {
        return (
            <div className="wrapper">
                <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as="H3" variant="link" eventKey="0" >
                        <h3 className="project-wrapper__text-title accordion-button">{name}</h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="accordion-content">
                        {
                            data.map((project,i) => {
                                return (
                                    <Project 
                                        key={data[i].title} 
                                        title={data[i].title}
                                        description={data[i].description}
                                        link_live={data[i].link_live}
                                        link_source={data[i].link_source}
                                        link_picture={data[i].link_picture}
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