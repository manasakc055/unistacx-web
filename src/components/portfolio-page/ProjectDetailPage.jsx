import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

export default function ProjectDetailPage() {
    const { id } = useParams();
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Project not found</h2>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen text-gray-900">
            <div className="max-w-6xl mx-auto px-6 py-24">
                {/* Hero Image */}
                <div className="overflow-hidden rounded-3xl shadow-xl mb-16">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover transition duration-300 hover:scale-105"
                    />
                </div>

                {/* Title and type */}
                <div className="mb-8">
                    <h1 className="text-5xl font-semibold tracking-tight mb-2">
                        {project.name}
                    </h1>
                    <p className="text-xl text-purple-600">{project.type}</p>
                </div>

                {/* Description */}
                <div className="text-lg leading-relaxed text-gray-700 space-y-6">
                    {project.longDescription.split("\n").map((para, index) => (
                        <p key={index}>{para.trim()}</p>
                    ))}
                </div>

                {/* Optional Tech Stack or Links Section */}
                {project.stack && (
                    <div className="mt-16 border-t pt-10">
                        <h3 className="text-2xl font-medium mb-4">Tech Stack</h3>
                        <ul className="flex flex-wrap gap-4">
                            {project.stack.map((tech, idx) => (
                                <li
                                    key={idx}
                                    className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.link && (
                    <div className="mt-12">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-full bg-black text-white text-lg font-medium hover:bg-gray-800 transition"
                        >
                            View Live Project →
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
