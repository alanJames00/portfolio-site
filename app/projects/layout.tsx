"use client"
import { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

	const [showSidebar, setShowSidebar] = useState(true);
	console.log("showsidebar", showSidebar)

	// Handle screen resize to reset sidebar state
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				console.log("more than 768")
				setShowSidebar(true); // Close sidebar on larger screens to prevent overlap
			} else {
				setShowSidebar(false);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [showSidebar]);


  return (
<div className="flex min-h-screen bg-gray-100">
			{/* Sidebar: Hidden on smaller screens, visible on medium and larger */}
			<div className={`fixed inset-y-0 left-0 transform ${showSidebar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 shadow-lg z-40 md:flex`}>
				<Sidebar />
			</div>

			{/* Main content area */}
			<main className={`flex-1 p-4 md:p-8 bg-gray-900 transition-all duration-300 ${showSidebar ? "ml-64" : ""}`}>
                {children}
            </main>

			{/* Mobile Menu Button: Visible only on small screens */}
			<div className="fixed top-4 left-4 md:hidden">
				<button
					onClick={() => setShowSidebar(!showSidebar)}
					className="text-gray-600 focus:outline-none"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>

			{/* Mobile Sidebar Overlay */}
			{showSidebar && (
				<div
					onClick={() => setShowSidebar(false)}
					className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
				/>
			)}
		</div>


  );
}