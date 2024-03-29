/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'michalzajac-dev.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
