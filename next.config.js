/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        NEXTAUTH_URL:"http://localhost:3000",
        DB_URI:"",
        GOOGLE_CLIENT_ID:"",
        GOOGLE_CLIENT_SECRET:"",
        NEXTAUTH_SECRET:"",
        CLOUDINARY_CLOUD_NAME: "",
        CLOUDINARY_API_KEY: "",
        CLOUDINARY_API_SECRET: "",
    },
    images: {
        domains: ["res.cloudinary.com"]
    }
}

module.exports = nextConfig
