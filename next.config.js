/** @type {import('next').NextConfig} */
const repoName = 'agentic-AI'; // The name of your GitHub repository
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '/';
let basePath = '';

if (isGithubActions) {
  // trim off trailing slash if exists
  assetPrefix = `/${repoName}/`;
  basePath = `/${repoName}`;
}

const nextConfig = {
  output: 'export', // Enables static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
