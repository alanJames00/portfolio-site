
export default function ProjectCard() {
    return (
        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-sm w-full">
            <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-100 mb-2">Project Title</h2>
                <p className="mb-4">A brief description of the project and its key features. This project showcases the use of modern web technologies.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">HTML</span>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                </div>
                <div className="flex justify-between">
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
                </div>
            </div>
        </div>
    );
}