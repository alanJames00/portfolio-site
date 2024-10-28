import React from "react"
export default function Page() {
    return (
        <div className="container mx-auto p-6">

            <h1 className="text-3xl font-semibold text-white mb-8">A Bit About Me</h1>
            <div className="grid text-xl">
                <p>
                I&apos;m a software engineer, and I&apos;m in it because I love what I do. I love exploring computers at all levels of computation. In my belief, what we do as software engineers is nothing less than magic. With a bunch of 1s and 0s at our command, we can make the computer do whatever we want. Although Computer Science has been around for a relatively short time compared to other sciences, its growth has been exponential, and it has changed the way we live our lives forever.
                </p>
                <br />

                <p>
                    My primary line of work is writing robust and performant backend systems that power web applications. I&apos;ve also worked with frontend technologies, including ReactJS, NextJS, and template-based frameworks, and I have a good understanding of how the web works. 
                </p>
                <br />

                <p>
                    At the moment, I&apos;m working with a startup called SampurnaKart, where I&apos;m responsible for building the backend systems that power the e-commerce platform. The company primarily focus on offering digital device repair services with efficiancy, transparency and quality in mind. 
                    The core principle of the company is to provide a seamless experience to the customers, throughout the repair process.
                    We are currently working on building an ecosystem that will connect vendors or service providers with customers. And such a challenge gives me the opportunity to grow as an engineer and learn new things every day.
                </p>
                <br />

                <p>
                    I spend my free time learning and implementing various core engineering stuff, like building custom protocol parsers, writing network services, or building a simple database.
                    &quot;Don&apos;t reinvent the wheel&quot; is a common phrase in the software industry, but reinventing the wheel is the best way to learn how the wheel works. Re-inventing the wheel might be a bad idea for a company&apos;s production codebase, but trust me it&apos;s the best way to learn as an individual.
                    Its worth mentioning that there were times times re-inventing the wheel did lead to the creation of a better wheel that we thought was impossible and never thought we needed. Example: Rust programming language.
                </p>

            </div>
        </div>
    );
}