/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "media.dodostatic.net",
      "cdn.dodostatic.net",
      "lh3.googleusercontent.com",
      "avatars.yandex.net",
    ],
  },
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/profile/settings",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
};

export default nextConfig;
