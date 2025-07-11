import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="card h-100 border-0 rounded-4 shadow-sm overflow-hidden position-relative">
    <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
      <img
        src={`/projects/${project.image}`}
        className="w-100 h-100"
        style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
        alt={project.description}
      />
    </div>
    <div className="card-body d-flex flex-column p-3">
      <p className="card-text text-muted small mb-3">
        {project.description}
      </p>
      <div className="mt-auto d-flex align-items-center justify-content-between">
        <span className="fw-semibold text-dark">{project.agency}</span>
        <button
          className="btn btn-light rounded-circle shadow-sm p-2 text-primary border-0"
          style={{
            transition: 'background-color 0.3s, box-shadow 0.3s'
          }}
        >
          →
        </button>
      </div>
    </div>
    <style jsx>{`
      .card:hover img {
        transform: scale(1.05);
      }
      .btn:hover {
        background-color: #e7f3ff;
        box-shadow: 0 0.25rem 0.5rem rgba(0, 123, 255, 0.2);
      }
    `}</style>
  </div>
);

export default ProjectCard;
