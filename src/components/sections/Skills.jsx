import React from "react";

export default function Skills() {
    const skillList = ["React", "JavaScript", "Node.js", "Electronics", "Python"];

    return (
        <section id="skills" className="py-20 px-6 text-center bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-blue-600">Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skillList.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg shadow"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
