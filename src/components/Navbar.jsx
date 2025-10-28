import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <h1 className="text-xl font-bold text-blue-600">Reyden</h1>
                <ul className="flex space-x-6 text-gray-600 dark:text-gray-200">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
