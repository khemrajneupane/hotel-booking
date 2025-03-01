/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://hotel-booking-khem.vercel.app",
        NEXTAUTH_URL:"https://hotel-booking-khem.vercel.app",

    },
    images: {
        domains: ["res.cloudinary.com"]
    }
}

module.exports = nextConfig
