/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    domains: ["6749445.fs1.hubspotusercontent-na1.net"],
  },
};

module.exports = nextConfig;
