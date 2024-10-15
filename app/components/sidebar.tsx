"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Code, Mail, Github, Linkedin, Twitter, BookOpenText, Binary } from 'lucide-react'
import socials from '@/data/socials';

export default function Sidebar() {

    const pathname = usePathname()


    const navItems = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: User },
        { name: "Work Experience", href: "/experience", icon: Briefcase },
        { name: 'Projects', href: '/projects', icon: Binary },
        { name: 'Skills', href: '/skills', icon: Code },
        { name: 'CV/Resume', href: '/resume', icon: BookOpenText},
        { name: 'Contact', href: '/contact', icon: Mail },
    ]

    return (
        <>
            <aside
                className={`fixed top-0 left-0 z-30 h-screen  w-72 transform bg-gray-800 text-white transition-transform duration-300 ease-in-out`}>
                <div className="flex h-full flex-col justify-between p-4">
                    <div>
                        <div className="mb-8 flex items-center justify-center">
                            
                        </div>
                        <nav>
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${pathname === item.href
                                                    ? 'bg-gray-700 text-white'
                                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                                }`}
                                        >
                                            <item.icon className="mr-3 h-6 w-6" />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="h-6 w-6 text-gray-300 hover:text-white" />
                        </a>
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-6 w-6 text-gray-300 hover:text-white" />
                        </a>
                        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="h-6 w-6 text-gray-300 hover:text-white" />
                        </a>
                    </div>
                </div>

            </aside>
        </>
    )
}