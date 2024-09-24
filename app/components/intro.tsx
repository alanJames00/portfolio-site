import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-blue-500">Your Name</span>
            </h1>
            <p className="text-xl text-gray-300 sm:text-2xl">
              A passionate web developer specializing in creating beautiful and functional websites.
              I love turning ideas into reality through code.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-5 py-3 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72 lg:h-96 lg:w-96">
              <img
                src="/placeholder.svg?height=384&width=384"
                alt="Your Name"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}