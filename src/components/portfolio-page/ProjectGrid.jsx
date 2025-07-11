import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectGrid = ({ projects }) => (
  <div className="container py-4">
    <div className="row g-4">
      {projects.map((project) => (
        <div key={project.id} className="col-12 col-sm-6 col-md-4">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  </div>
);

export default ProjectGrid;
