
// contains the list of projects
const projects = [
    {
        title: "Runx",
        description: "RunX is a Remote Code Execution Engine Written in JavaScript. Every code submission is run in isolated environments. Uses containers for security and isolation.",
        tags: ["NodeJs", "Docker", "Linux", "Shell"],
        demoUrl: "https://runx.alanj.live/api/runtimes",
        githubUrl: "https://github.com/alanJames00/runx",
        url: "/posts/runx"
    },
    {
        title: "PairCode",
        description: "PairCode is a Realtime Collaborative Code Editor built right into a WebApp. It enables you to code collaboratively in real-time with your team members or interviewer with zero setup or config.",
        tags: ["ReactJs", "NextJs", "Websockets", "ExpressJs", "Realtime Systems"],
        demoUrl: "https://mypaircode.vercel.app",
        githubUrl: "https://github.com/alanJames00/pair-code",
        url: "/posts/paircode"
    },
    {
        title: "EdgeAuth",
        description: "A Time-based OTP authenticator app as an alternative to services like Google Authenticator. In EdgeAuth, the user is sole owner of his token and auth secret. Can run anywhere since it's a WebApp.",
        tags: ["Cloudflare Workers", "Encryption", "TOTP", "Javascript", "SQLite"],
        demoUrl: "#",
        githubUrl: "https://github.com/alanJames00/EdgeAuth",
        url: "/posts/edgeauth"
    },
    {
        title: "MoonQuakes",
        description: "Moonquakes has won me the global nomination to NASA Space App Hackathon 2023. Its in-browser 3D simulation of moonquakes (Earthquake but on moon:)) occured over the years. The data points are from Apollo Missions",
        tags: ["ReactJs", "Simulation", "NASA", "Global Nominee", "ThreeJs"],
        demoUrl: "https://moonquakes.netlify.app/",
        githubUrl: "https://github.com/alanJames00/MoonQuaker",
        url: "/posts/moonquakes"
    }

]

export default projects;