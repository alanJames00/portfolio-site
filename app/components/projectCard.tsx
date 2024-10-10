'use client'
export default function ProjectCard({ title, description, tags, demoUrl, githubUrl, url }: { title: string, description: string, tags: string[], demoUrl: string, githubUrl: string, url: string }) {

    const handleClick = () => {
        window.location.href = url;
    }

    const tagColors = [
        {
            bg: 'bg-blue-100',
            text: 'text-blue-800'
        },
        {
            bg: 'bg-green-100',
            text: 'text-green-800'
        },
        {
            bg: 'bg-yellow-100',
            text: 'text-yellow-800'
        }
    ];

    return (
        <div onClick={handleClick} className="bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-xl w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-100 mb-2">{title}</h2>
                <p className="mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className={`bg-blue-100 text-blue-800 text-sm font-large px-2.5 py-0.5 rounded`}>{tag}</span>
                    ))}
                    {/* <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{tags[0]}</span>
                    {/* <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">{tags[2]}</span> */}
                </div>

                <div className="flex justify-between">
                    <a href={demoUrl} className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                    <a href={githubUrl} className="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
                </div>
            </div>
        </div>
    );
}
