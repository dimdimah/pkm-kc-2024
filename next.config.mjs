/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "https://jsonplaceholder.typicode.com/",
        hostname: "via.placeholder.com",
      },
    ],
  },
};

export default nextConfig;
