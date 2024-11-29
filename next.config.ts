import type { NextConfig } from "next";

// module.exports = {
//	output: 'export'
//}

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "notes.alum.sh/**",
      },
      {
      	protocol: "https",
	hostname: "img.freepik.com/**"
      },
      {
      	protocol: "https",
	hostname: "exams.cpanel.net/**"
      }, {
      	protocol: "https",
	hostname: "images.articulate.com"
      }, {
      	protocol: "https",
	hostname: "miro.medium.com"
      }, {
      	protocol: "https",
	hostname: "trio.dev"
      }, {
      	protocol: "https",
	hostname: "user-images.githubusercontent.com"
      }, {
      	protocol: "https",
	hostname: "www.akadia.com"
      }, {
      	protocol: "https",
	hostname: "cdn.hashnode.com"
      }, {
      	protocol: "https",
	hostname: "t4.ftcdn.net"
      }, {
      	protocol: "https",
	hostname: "www.atatus.com"
      }, {
      	protocol: "https",
	hostname: "www.guidingtech.com"
      }, {
      	protocol: "https",
	hostname: "achindrabhatnagar.wordpress.com"
      }, {
      	protocol: "https",
	hostname: "access.redhat.com"
      }, {
      	protocol: "https",
	hostname: "github-readme-stats.vercel.app/**"
      }, {
      	protocol: "https",
	hostname: "github-stats-alpha.vercel.app"
      }
    ],
  },
};

export default nextConfig;
