import React from "react"
import ProjectCard from "../components/projectCard";
import projects from '@/data/projects'
export default function Page() {
    return (
        <div className="container mx-auto p-6">

            <h1 className="text-3xl font-semibold text-white mb-8">My Projects</h1>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                        demoUrl={project.demoUrl}
                        githubUrl={project.githubUrl}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    );
}