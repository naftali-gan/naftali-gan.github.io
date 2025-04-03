/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for GitHub Pages
  // Use trailing slashes for cleaner URLs
  trailingSlash: true,
  // Configure image domains if needed
  images: {
    unoptimized: true, // Required for static export
  }
};

module.exports = nextConfig;
