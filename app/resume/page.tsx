import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react'

export default function Page(){
  return (
    <div className="max-w-4xl mx-auto p-8  shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">ALAN JAMES</h1>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /> +91-9074697376</div>
          <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /> alanjames6282@gmail.com</div>
          <div className="flex items-center"><Linkedin className="w-4 h-4 mr-2" /> alan-james-in</div>
          <div className="flex items-center"><Github className="w-4 h-4 mr-2" /> alanjames00</div>
          <div className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Jalandhar City, Punjab, India</div>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">OBJECTIVE</h2>
        <p className="text-sm">
          Passionate software engineer seeking opportunities to apply engineering principles to solve complex challenges with
          creative and efficient solutions. Adaptable and quick to integrate new methodologies, committed to continuous
          improvement. A strong collaborator with a track record of delivering software projects on time in team-oriented
          environments, always open to feedback and dedicated to following best practices for technical excellence.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Backend Engineer</h3>
          <div className="text-sm">
            <p className="font-medium">SampurnKart</p>
            <p>Jalandhar, India | Oct 2023 - Mar 2024</p>
          </div>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Engineered the complete backend systems for the ecommerce service startup.</li>
            <li>Developed Various Internal Tools that power day-to-day company operations.</li>
            <li>Implemented robust and scalable cloud infrastructure for the organization.</li>
            <li>Reduced cloud expenses by 50% through migration and optimization of the cloud infrastructure.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">EDUCATION</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">B.Tech In Computer Science And Engineering</h3>
          <div className="text-sm">
            <p className="font-medium">Lovely Professional University</p>
            <p>Jalandhar, India | Aug 2022 - Present</p>
            <p>GPA: 8.85/10.00</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Secondary Education</h3>
          <div className="text-sm">
            <p className="font-medium">St Thomas HSS Thomapuram</p>
            <p>Kasargod, Kerala, India | Aug 2021</p>
            <p>GPA: 9.95/10</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">PROJECTS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Runx: A high-speed online code compiler service engine</h3>
          <p className="text-sm font-medium">Oct 2023 - Nov 2023</p>
          <p className="text-sm">Tools: Docker, Nodejs, Express, Linux, Shellscript</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Implemented isolated environments for secure and interference-free code execution using containerization</li>
            <li>Added support for multiple languages including C, C++, Python, and JavaScript</li>
            <li>Optimized for near-local compilation and runtime speeds</li>
            <li>Engineered truly parallel code execution for multiple requests simultaneously</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">PairCode: Real-time collaborative code editor</h3>
          <p className="text-sm font-medium">Dec 2023</p>
          <p className="text-sm">Tools: Nodejs, ExpressJs, NextJs, Websockets, Docker</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Developed a real-time collaborative code editor for pair programming and interviews</li>
            <li>Implemented a modern online code editor with syntax highlighting and code suggestions</li>
            <li>Made use of Websockets for real-time collaboration</li>
            <li>Implemented a built-in compiler supporting more than 10 programming languages</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">SKILLS</h2>
        <ul className="list-disc list-inside text-sm">
          <li><span className="font-medium">Programming Languages:</span> Javascript/Typescript, NodeJs, C/C++, Python, Golang, HTML/CSS, SQL, Shell</li>
          <li><span className="font-medium">Web Technologies:</span> ReactJs, NextJS, ExpressJs, REST APIs, API Development</li>
          <li><span className="font-medium">Database Systems:</span> PostgreSQL, MySQL, MongoDB, SQLite, Redis</li>
          <li><span className="font-medium">Cloud Technologies:</span> Google Cloud, Azure, AWS, Cloudflare Stack, DigitalOcean</li>
          <li><span className="font-medium">DevOps & Version Control:</span> Git/Github, CI/CD, Github Actions, Docker, Docker Compose</li>
          <li><span className="font-medium">Specialized Area:</span> API Development, Database Design And Development, Realtime Systems, Microservice Architecture, Linux</li>
          <li><span className="font-medium">Other Skills:</span> API Security, Backend Security, Cybersecurity</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">HONORS AND AWARDS</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">NASA Space App Hackathon Global Finalist Nominee</h3>
          <p className="text-sm font-medium">Space App Challenge, NASA | Oct 2023</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Secured first position in IIT KGP Local Round and became one of the top 50 teams from India.</li>
            <li>Built a moonquakes computer simulation for visualizing moonquakes happened over years.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">RCS CTF 2023 Third Position</h3>
          <p className="text-sm font-medium">Capture The Flag University Level, LPU | Jan 2024</p>
          <ul className="list-disc list-inside text-sm mt-2">
            <li>Secured third position in the university level Capture The Flag Competition</li>
            <li>Honed Cybersecurity Skills for continous 24-Hour Challenge.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
