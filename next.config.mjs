/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Stitch-hosted images are downloaded into /public before launch (see README).
    // Remote patterns kept only for local dev preview of not-yet-downloaded assets.
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  async redirects() {
    return [
      {
        // /courses/french and /french are the SAME page; /french-canada is canonical.
        source: "/courses/french",
        destination: "/french-canada",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
