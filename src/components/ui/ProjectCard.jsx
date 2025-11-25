// src/components/ui/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project }) {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <p className="text-gray-500 text-sm mb-2">
                Tech: {project.tech.join(", ")}
            </p>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
            >
                View Project
            </a>
        </div>
    );
}
