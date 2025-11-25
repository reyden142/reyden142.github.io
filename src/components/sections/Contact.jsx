// src/components/sections/Contact.jsx
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">Contact Me</h2>
            <p className="text-gray-600 mb-6">
                You can reach me via email or through my social media profiles.
            </p>
            <a
                href="mailto:reyden425@gmail.com"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Email Me
            </a>
            <div className="mt-6 flex justify-center gap-6">
                <a href="https://github.com/reyden142" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/reyden142" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                    LinkedIn
                </a>
            </div>
        </section>
    );
}
