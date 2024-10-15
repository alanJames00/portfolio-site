import Link from "next/link";

export default function ProjectCard({ title, description, tags, githubUrl, url }: { title: string, description: string, tags: string[], demoUrl: string, githubUrl: string, url: string }) {

    const tagColors = [
            'bg-blue-100 text-blue-800',
            'bg-green-100 text-green-800',
            'bg-yellow-100 text-yellow-800'
    ];

    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-xl w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-100 mb-2">{title}</h2>
                <p className="mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className={`${tagColors[index%tagColors.length]} text-sm font-large px-2.5 py-0.5 rounded`}>{tag}</span>
                    ))}
                    {/* <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">{tags[0]}</span>
                    {/* <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">{tags[2]}</span> */}
                </div>

                <div className="flex justify-between">
                    <Link href={url} className="text-blue-600 hover:text-blue-800 font-medium" target="_blank">Read More</Link>
                    <Link href={githubUrl} className="text-blue-600 hover:text-blue-800 font-medium" target="_blank">GitHub</Link>
                </div>
            </div>
        </div>
    );
}
