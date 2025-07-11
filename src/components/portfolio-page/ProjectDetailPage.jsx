import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../data/projects.json";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <img src={project.image} alt={project.name} className="w-full rounded-lg mb-8 shadow" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.name}</h1>
      <p className="text-purple-600 font-medium mb-2">{project.type}</p>
      <p className="text-gray-700 text-lg">{project.longDescription}</p>
    </div>
  );
}
