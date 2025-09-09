import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Hero = () => {
  const location = useLocation();
  const [showApply, setShowApply] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowApply(true);
    } else {
      setShowApply(false);
    }
  }, [location.pathname]);

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
      {/* 🎥 Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/ds5x8xtyg/video/upload/v1757187409/DSU_30_SEC_V1_m0nklu.mp4"
            type="video/mp4"
          />
        </video>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
      </div>

      {/* ✨ Main Content on Left Side */}
      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
        >
          <span className="block text-blue-400">Engineering</span>
          <span className="block text-yellow-400">& Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 font-light"
        >
          🔬 Innovate • 🚀 Create • 🎓 Lead the Future
        </motion.p>
      </div>

      {/* 🎓 Admission Ticker */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-blue-900 bg-opacity-10 py-1 z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            🚀 Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            🌟 Secure Your Future at DSU
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            B.Tech Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            M.Tech Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            Ph.D Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            🎓 Join Fast
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
