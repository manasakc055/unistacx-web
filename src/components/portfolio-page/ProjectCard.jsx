import React from 'react';
import { Link } from 'react-router-dom';

const fallbackImage = '/projects/landscape-placeholder.svg'; // put your fallback image in /public/projects/

const ProjectCard = ({ project }) => {
    const imageSrc = project.coverImage
        ? `/projects/${project.coverImage}`
        : fallbackImage;

    return (
        <Link to={`/portfolio/${project.id}`} className="text-decoration-none">
            <div
                className="card border-0 shadow-sm rounded-4 overflow-hidden position-relative h-100"
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
            >
                <div
                    className="overflow-hidden"
                    style={{
                        height: '220px',
                        backgroundColor: '#f8f9fa',
                        margin: '10px',
                        borderRadius: '12px',
                        border: '1px solid #f1f1f1',
                    }}
                >
                    <img
                        src={imageSrc}
                        alt={project.name || project.shortDescription || 'Project image'}
                        className="w-100 h-100"
                        style={{
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </div>

                <div className="card-body d-flex flex-column p-3">
                    <p className="card-text text-muted small mb-3">
                        {project.shortDescription || 'No description available'}
                    </p>
                    <div className="mt-auto d-flex align-items-center justify-content-between">
            <span className="fw-semibold text-dark">
              {project.name || 'Unknown Agency'}
            </span>
                        <div
                            className="btn btn-light rounded-circle shadow-sm p-2 text-black border-0"
                            style={{
                                height: '40px',
                                width: '40px',
                                transition: 'background-color 0.3s, box-shadow 0.3s',
                            }}
                        >
                            →
                        </div>
                    </div>
                </div>

                <style jsx="true">{`
          .card:hover img {
            transform: scale(1.05);
          }
          .btn:hover {
            background-color: #e7f3ff;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 123, 255, 0.2);
          }
          .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
          }
        `}</style>
            </div>
        </Link>
    );
};

export default ProjectCard;
