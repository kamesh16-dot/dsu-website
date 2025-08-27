import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
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
      src="https://www.dsuniversity.ac.in/video/DSU_30%20SEC_V1.mp4"
      type="video/mp4"
    />
  </video>

  {/* Subtle gradient instead of dark block */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>
</div>

{/* ✨ Main Content */}
<div className="relative z-10 flex-1 flex items-center justify-center px-6">
  <div className="w-full text-center max-w-4xl mx-auto">
    {/* 🎓 Heading */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
      DSU <span className="text-yellow-400">School of Engineering</span>
    </h1>

    {/* 🌟 Tagline */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
      className="text-lg md:text-2xl text-gray-100 font-light mb-8 tracking-wide drop-shadow-md"
    >
      Innovate • Create • Lead
    </motion.p>

    {/* 🎯 CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center">
      <Link
        to="/program"
        className="px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition shadow-md"
      >
        Explore Programs
      </Link>
      <a
        href="https://forms.gle/QekMLvWTsepzdASG9"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-black transition shadow-md"
      >
        Apply Now
      </a>
    </div>
  </div>
</div>

     
    {/* 🎓 Admission Ticker (always at bottom) */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden bg-yellow-500 py-1 z-20">
  <div className="flex animate-marquee whitespace-nowrap">
    <span className="mx-6 text-black font-semibold text-sm uppercase">
      🚀 Admissions Open 2025 • Apply Now!
    </span>
    <span className="mx-6 text-black font-semibold text-sm uppercase">
      🎓 Engineering • Technology • Innovation
    </span>
    <span className="mx-6 text-black font-semibold text-sm uppercase">
      🌟 Secure Your Future at DSU
    </span>
    <span className="mx-6 text-black font-semibold text-sm uppercase">
     B.Tech  Admissions Open 2025 • Apply Now!
    </span>
     <span className="mx-6 text-black font-semibold text-sm uppercase">
     m.Tech  Admissions Open 2025 • Apply Now!
    </span>
     <span className="mx-6 text-black font-semibold text-sm uppercase">
     P.h.d  Admissions Open 2025 • Apply Now!
    </span>
   
  </div>
</div>

    </section>
  );
};

export default Hero;
