import React from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';

function ProjectList({projects}) {
    return (
      <section id="projects">
        <div className="container">
          <div className="project-wrapper">
            <Fade>
              <h2 className="section-title dark-blue-text">
                Projects
              </h2>
            </Fade>
            { 
              projects.map((project,i) => {
                return (
                  <Project 
                  key={projects[i].title} 
                  title={projects[i].title} 
                  description={projects[i].description} 
                  link_live={projects[i].link_live}
                  link_source={projects[i].link_source}
                  link_picture={projects[i].link_picture}
                  />
                  );
              })
            }
          </div>
        </div>
      </section>
    )
};

export default ProjectList;