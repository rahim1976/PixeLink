/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Use 'http' if the images are served over HTTP
        hostname: 'via.placeholder.com', // The hostname of the image source
        pathname: '**', // Allow any path under this hostname
      },
    ],
  },
};

export default nextConfig;
