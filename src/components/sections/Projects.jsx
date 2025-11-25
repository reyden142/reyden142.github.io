import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../lib/data";

export default function Projects() {
    return (
        <section id="works" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} project={proj} />
                ))}
            </div>
        </section>
    );
}
