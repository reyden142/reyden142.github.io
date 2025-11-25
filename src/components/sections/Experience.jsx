// src/components/sections/Experience.jsx
import React from "react";

export default function Experience() {
    const experiences = [
        {
            role: "Electronics Engineer",
            company: "ABC Tech",
            duration: "2024 - Present",
            description: "Designing and testing electronic circuits and systems."
        },
        {
            role: "Software Developer",
            company: "XYZ Solutions",
            duration: "2023 - 2024",
            description: "Developed full-stack web applications using React and Node.js."
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 text-center bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-gray-500 mb-2">{exp.company} | {exp.duration}</p>
                        <p className="text-gray-600">{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
