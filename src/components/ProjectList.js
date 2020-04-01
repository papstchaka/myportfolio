import React from 'react';
import ProjectManager from './ProjectManager';
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
                  <ProjectManager 
                  key={projects[i].data} 
                  data={projects[i].data}
                  wrapped={projects[i].wrapped}
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