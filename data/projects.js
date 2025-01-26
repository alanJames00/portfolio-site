// contains the list of projects
const projects = [
	{
		title: "Runx",
		description:
			"RunX is a Remote Code Execution Engine Written in JavaScript. Every code submission is run in isolated environments. Uses containers for security and isolation.",
		tags: ["NodeJs", "Docker", "Linux", "Shell"],
		demoUrl: "https://runx.alanj.live/api/runtimes",
		githubUrl: "https://github.com/alanJames00/runx",
		url: "/posts/runx",
	},
	{
		title: "blueberrydb",
		description:
			"blueberrydb is lightweight, redis compatible, in memory database written in golang. Written to be extremely lean and robust. Uses Append Only File(AOF) persistance.",
		tags: ["Golang", "database", "redis", "key-value store"],
		demoUrl: "https://github.com/alanJames00/blueberry-db",
		githubUrl: "https://github.com/alanJames00/blueberry-db",
		url: "/posts/blueberrydb",
	},
	{
		title: "PairCode",
		description:
			"PairCode is a Realtime Collaborative Code Editor built right into a WebApp. It enables you to code collaboratively in real-time with your team members or interviewer with zero setup or config.",
		tags: ["ReactJs", "NextJs", "Websockets", "ExpressJs", "Realtime Systems"],
		demoUrl: "https://mypaircode.vercel.app",
		githubUrl: "https://github.com/alanJames00/pair-code",
		url: "/posts/paircode",
	},
	{
		title: "EdgeAuth",
		description:
			"A Time-based OTP authenticator app as an alternative to services like Google Authenticator. In EdgeAuth, the user is sole owner of his token and auth secret. Can run anywhere since it's a WebApp.",
		tags: ["Cloudflare Workers", "Encryption", "TOTP", "Javascript", "SQLite"],
		demoUrl: "#",
		githubUrl: "https://github.com/alanJames00/EdgeAuth",
		url: "/posts/edgeauth",
	},
	{
		title: "MoonQuakes",
		description:
			"Moonquakes has won me the global nomination to NASA Space App Hackathon 2023. Its in-browser 3D simulation of moonquakes (Earthquake but on moon:)) occured over the years. The data points are from Apollo Missions",
		tags: ["ReactJs", "Simulation", "NASA", "Global Nominee", "ThreeJs"],
		demoUrl: "https://moonquakes.netlify.app/",
		githubUrl: "https://github.com/alanJames00/MoonQuaker",
		url: "/posts/moonquakes",
	},
	{
		title: "getignore",
		description:
			"Getignore is a simple cli tool to generate gitignore files for several programming languages and platforms. Constantly updated list and content with industry standards. Supports appending and overwrite modes on gitignore files",
		tags: ["Golang", "gitignore", "cli"],
		demoUrl: "https://github.com/alanJames00/getignore",
		githubUrl: "https://github.com/alanJames00/getignore",
		url: "/posts/getignore",
	},
	{
		title: "kvdriver",
		description:
			"kvdriver is an unofficial driver for Cloudflare KV store over its http api. Published as an npm package.",
		tags: ["NodeJs", "Cloudflare", "KV Store", "npm"],
		githubUrl: "https://github.com/alanJames00/kvdriver",
		demoUrl: "https://github.com/alanJames00/kvdriver",
		url: "/posts/kvdriver",
	},
	{
		title: "CF Reverse Proxy",
		description:
			"Fast and globally-distributed reverse proxy built using Cloudflare Workers. It allows you to proxy requests from your domain or cf issued domains to another backend server.",
		tags: ["Javascript", "Cloudflare", "Reverse-Proxy", "Distributed"],
		githubUrl: "https://github.com/alanJames00/CF-Workers-Reverse-Proxy",
		demoUrl: "https://github.com/alanJames00/CF-Workers-Reverse-Proxy",
		url: "/posts/cf-reverse-proxy",
	},
	{
		title: "AutoPassWireless",
		description:
			"AutoPassWireless is a simple chrome extension to automate wifi logins in LPU University captive portals. This was initially developed as a personal project I had written for automating wifi logins at my University. Turned out to be pretty useful for fellow students",
		tags: ["wifi", "captive-portal", "automate"],
		demoUrl: "https://github.com/alanJames00/AutoPassWireless",
		githubUrl: "https://github.com/alanJames00/AutoPassWireless",
		url: "/posts/auto_wireless_pass",
	},
];

export default projects;
