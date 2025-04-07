/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static exports for GitHub Pages
  // Note: When exporting, there's a conflict with the /en directory
  // This might need to be addressed with a custom export configuration
  // Use trailing slashes for cleaner URLs
  trailingSlash: true,
  // Configure image domains if needed
  images: {
    unoptimized: true, // Required for static export
  }
};

module.exports = nextConfig;
