/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://hotel-booking-khem.vercel.app",
    NEXTAUTH_URL: "https://hotel-booking-khem.vercel.app",
    NEXTAUTH_SECRET: "justrandomsecret12345",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
