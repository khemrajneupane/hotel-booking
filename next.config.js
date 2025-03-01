/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "https://hotel-booking-drab-phi.vercel.app/",
        NEXTAUTH_URL:"https://hotel-booking-drab-phi.vercel.app/",

    },
    images: {
        domains: ["res.cloudinary.com"]
    }
}

module.exports = nextConfig
