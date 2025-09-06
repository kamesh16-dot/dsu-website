import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import video from '../assets/DSU_30 SEC_V1.mp4'

const Hero = () => {
  const location = useLocation();
  const [showApply, setShowApply] = useState(true);

  useEffect(() => {
    // Show Apply Now only on the Hero page ("/")
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

        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
      </div>

      {/* ✨ Main Content */}
      
      {/* 🎯 Sticky Left Side Buttons */}
     {/* 🎯 Sticky Left Side Buttons (SRM Style) */}



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
            B.Tech  Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            m.Tech  Admissions Open 2025 • Apply Now!
          </span>
          <span className="mx-6 text-white font-semibold text-sm uppercase">
            P.h.d  Admissions Open 2025 • Apply Now!
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
