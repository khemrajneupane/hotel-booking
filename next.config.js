/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000/",
    NEXT_PUBLIC_API_URL_CHAT: "",
    CLOUDINARY_API_KEY: "",
    CLOUDINARY_API_SECRET: "",
    CLOUDINARY_CLOUD_NAME: "",
    DB_URI: "",
    GOOGLE_CLIENT_ID: "",
    GOOGLE_CLIENT_SECRET: "",
    NEXTAUTH_SECRET: "",
    NEXTAUTH_URL: "http://localhost:3000/",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
