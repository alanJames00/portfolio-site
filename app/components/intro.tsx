import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { useState, useEffect } from 'react';
import LocationInfo from './locationInfo';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 700); // Change the interval time (in milliseconds) to control blinking speed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-blue-500">Alan James<span className={isVisible ? 'inline-block w-[1px] bg-blue-500' : 'hidden'}>&#9612;</span></span>

            </h1>
            <p className="text-xl text-gray-300 sm:text-2xl">
              A passionate software engineer who loves to build stuff for the real world
            </p>
            <LocationInfo city="Jalandhar" country="India" available />
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-700 px-5 py-3 text-base font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                View My Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 overflow-hidden rounded-full sm:h-72 sm:w-72 lg:h-96 lg:w-96">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}