const httpProxy = require("http-proxy");
const proxy = httpProxy.createServer({
	target: "http://localhost:8130/https://csapat03-versenydonto.nisz.hu",
	secure: false
});

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
	public: { url: "/", static: true },
	src: { url: "/dist" }
	},
	plugins: [
	"@snowpack/plugin-react-refresh",
	"@snowpack/plugin-dotenv",
	"@snowpack/plugin-webpack"
	],
	/*
	routes: [
	{
		src: "/nodejs/.*",
		dest: (req, res) => {
		//req.url = req.url.replace(/^\/nodejs/, "");
		proxy.web(req, res);
		}
	}
	]*/
	optimize: {
	/* Example: Bundle your final build: */
	// "bundle": true,
	},
	packageOptions: {
	/* ... */
	},
	devOptions: {
	/* ... */
	},
	buildOptions: {
	/* ... */
	}
};