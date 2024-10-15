import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl w-full bg-gray-900  rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">

                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">
                            Are You Lost, Stranger?
                        </h1>
                        <p className="text-lg mb-8">
                            <p>How &apos;bout a cup of coffee...</p>
                            <p>Sit back, take a sip,</p>
                            <p>And let the warmth take its grip.</p>
                            <br />
                            <p>A fresh brew, and your path, you&apos;ll find.</p>
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            Back to Homepage
                        </Link>
                        <p className="mt-6 text-sm text-gray-500">
                            404 - Page Not Found
                        </p>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center p-8 bg-gray-900">

                        <div className="relative w-64 h-64">
                            <Image
                                src="/gifs/404-coffee.gif"
                                alt="404 Coffee Machine"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>

                    </div>


                </div>


            </div>
        </div>
    );
}