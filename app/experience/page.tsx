import React from "react"
import ExperienceCard from "../components/experienceCard";
import workExperience from '@/data/workExperience'
export default function Page() {
    return (

        <div className="container mx-auto p-6">

            <h1 className="text-3xl font-semibold text-white mb-8">My Professional Experience</h1>
                {workExperience.map((experience) => (
                    <ExperienceCard 
                        key={experience.company}
                        company={experience.company}
                        position={experience.position}
                        startDate={experience.startDate}
                        endDate={experience.endDate}
                        responsibilities={experience.responsibilities}
                        achievements={experience.achievements}
                    />
                ))}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            </div>
        </div>
    );
}