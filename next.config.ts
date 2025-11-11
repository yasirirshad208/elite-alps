import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ['admin.cimalpes.com', 'elite-experience-backend.onrender.com', "lh3.googleusercontent.com/", "localhost", "res.cloudinary.com"], 
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
     allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev']

};

export default nextConfig;
