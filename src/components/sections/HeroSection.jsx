import React from "react";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-50 dark:bg-gray-900"
        >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
                Hi, I’m Reyden Cagata 👋
            </h1>
            <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
                Licensed Electronics Engineer & Software Developer
            </p>
            <p className="text-gray-500 max-w-xl mx-auto mb-8">
                Passionate about creating intelligent systems that bridge electronics, software, and AI.
            </p>
            <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                View My Projects
            </a>
        </section>
    );
}
