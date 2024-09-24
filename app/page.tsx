"use client"
import { useState } from "react";
import Sidebar from "./components/sidebar";


export default function Home() {

	const [ showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="flex min-h-screen bg-gray-100">
			{/* Sidebar: Hidden on smaller screens, visible on medium and larger */}
			<div className="hidden md:flex">
				<Sidebar />
			</div>

			{/* Main content area */}
			<main className="flex-1 p-4 md:p-8">
				<h1>MAIN GOES HERE</h1>
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

			{/* Mobile Sidebar */}
			{showSidebar && (
				<div className="fixed inset-0 z-40 flex md:hidden">
					<div className="bg-white w-64 shadow-lg h-full">
						<Sidebar />
					</div>
					<div
						onClick={() => setShowSidebar(false)}
						className="fixed inset-0 bg-black opacity-50 z-30"
					/>
				</div>
			)}
		</div>

	);
}
