import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import projects from "../../data/projects.json";
import TechIcons from "../Service/TechIcons";

export default function ProjectDetailPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState("");

    if (!project) {
        return (
            <section className="pt-5 pb-5 text-center">
                <div className="container">
                    <h2 className="display-5 fw-semibold text-gray-800">Project not found</h2>
                    <p className="text-muted">Please check the project ID or go back to the portfolio.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="pt-5 pb-5 project-detail">
            <div className="container">

                {/* Cover Image with "browser-frame" style */}
                <div className="row justify-content-center mb-5 ">
                    <div className="col-lg-10">
                        <div className="browser-frame rounded-4 shadow-sm overflow-hidden mb-4">
                            <div className="browser-bar bg-light d-flex align-items-center px-3 py-2 border-bottom">
                                <span className="dot bg-danger me-2"></span>
                                <span className="dot bg-warning me-2"></span>
                                <span className="dot bg-success"></span>
                            </div>
                            <div
                                style={{
                                    aspectRatio: '4 / 3',
                                    backgroundColor: '#f8f9fa'
                                }}
                            >
                                <img
                                    src={`/projects/${project.coverImage || project.image}`}
                                    alt={project.name}
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Title and Short Description */}
                <div className="row justify-content-center text-center mb-4">
                    <div className="col-lg-8">
                        <h1 className="display-4 fw-bold">{project.name}</h1>
                        <p className="lead text-muted">{project.shortDescription}</p>
                    </div>
                </div>

                {/* Long Description */}
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <p className="fs-6 text-secondary lh-lg">{project.longDescription}</p>
                    </div>
                </div>

                {/* Tech Stack */}
                {project.stack && project.stack.length > 0 && (
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-8">
                            <div className="row g-4 justify-content-center">
                                {project.stack.map((item, i) => (
                                    <TechIcons key={item} img={item} delay={`${i * 100}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Client Info */}
                {project.client && (
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-8 text-center">
                            <p className="text-muted mt-2">
                                <strong>Client:</strong> {project.client}
                            </p>
                        </div>
                    </div>
                )}

                {/* Live Link */}
                {project.link && project.link !== "#" && (
                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-8 text-center">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-cta px-4 py-2"
                            >
                                View Live Project
                            </a>
                        </div>
                    </div>
                )}

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <h3 className="fw-bold mb-3">Gallery</h3>
                            <div className="row g-3">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="col-6 col-md-4"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setLightboxImage(img);
                                            setLightboxOpen(true);
                                        }}
                                    >
                                        <div
                                            className="rounded-3 overflow-hidden shadow-sm"
                                            style={{
                                                aspectRatio: '4 / 3',
                                                backgroundColor: '#f0f0f0',
                                                transition: 'transform 0.3s ease'
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt={`Gallery image ${index + 1}`}
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* Lightbox Modal */}
            <Modal
                show={lightboxOpen}
                onHide={() => setLightboxOpen(false)}
                centered
                size="lg"
            >
                <Modal.Body className="p-0">
                    <img
                        src={lightboxImage}
                        alt="Gallery preview"
                        className="w-100 h-100"
                        style={{
                            objectFit: 'contain',
                            maxHeight: '80vh'
                        }}
                    />
                </Modal.Body>
            </Modal>
        </section>
    );
}
