import React from 'react';
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaPython, 
    FaReact, 
    FaNodeJs, 
    FaAws, 
    FaDocker, 
    FaCloudflare, 
    FaDigitalOcean } from 'react-icons/fa'; // Import icons from react-icons
import {
    SiTailwindcss, 
    SiNextdotjs, 
    SiMongodb, 
    SiPostgresql, 
    SiFirebase, 
    SiGraphql, 
    SiGit, 
    SiJira, 
    SiTypescript, 
    SiGnubash, 
    SiMysql, 
    SiSqlite, 
    SiAmazondynamodb, 
    SiGooglecloud,
    SiExpress,
    SiHono,
    SiTrpc
} from 'react-icons/si';

import { TbBrandCpp, TbBrandGolang } from 'react-icons/tb'

const skillsData = {
    frontend: [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'JavaScript', icon: <FaHtml5 /> }
    ],
    languages: [
        { name: 'C/C++', icon: <TbBrandCpp /> },
        { name: 'Golang', icon: <TbBrandGolang /> },
        { name: 'Typescript', icon: <SiTypescript /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'ShellScript', icon: <SiGnubash /> },
    ],
    backend: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'GraphQL', icon: <SiGraphql /> },
        { name: 'REST APIs', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Hono', icon: <SiHono />},
        { name: 'tRPC', icon: <SiTrpc />}
    ],
    databases: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'SQLite', icon: <SiSqlite /> },
        { name: 'Firebase', icon: <SiFirebase /> },
        { name: "AWS DynamoDB", icon: <SiAmazondynamodb /> }
    ],
    devops: [
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Cloudflare', icon: <FaCloudflare /> },
        { name: 'GCP', icon: <SiGooglecloud /> },
        { name: 'DigitalOcean', icon: <FaDigitalOcean /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Git', icon: <SiGit /> }
    ],
    otherTools: [
        { name: 'VSCode', icon: <FaHtml5 /> },
        { name: 'Jira', icon: <SiJira /> },
        { name: 'Figma', icon: <FaReact /> }
    ]
};

const SkillsSection = ({ title, skills }) => (
    <div className="mb-12">
        <h2 className=" text-xl text-yellow-100 my-4">{title}</h2>
        <ul className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
                <li key={index} className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-white text-gray-700 w-28">
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    </div>
);

const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-6">
            <h1 className="text-3xl font-semibold text-white mb-8"> Tools I Work With </h1>
            <p className='py-4 text-xl'>
                As you&apos;ve probably noticed by now, I work with a wide range of technologies. I don&apos;t restrict myself to any single tech stack. For me, being an engineer isn&apos;t just about the languages or frameworks—it&apos;s about using the right tools to get the job done. Here&apos;s a non-exhaustive list of the tools, languages, frameworks, and technologies I use regularly:
            </p>

            <SkillsSection title="Programming Languages" skills={skillsData.languages} />
            <SkillsSection title="Frontend Development" skills={skillsData.frontend} />
            <SkillsSection title="Backend Development" skills={skillsData.backend} />
            <SkillsSection title="Databases" skills={skillsData.databases} />
            <SkillsSection title="DevOps And Cloud" skills={skillsData.devops} />
            {/* <SkillsSection title="Other Tools" skills={skillsData.otherTools} /> */}

        </div>
    );
};

export default Skills;
