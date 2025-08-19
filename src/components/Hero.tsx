import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {

    const programs = [{ name: 'Explore the programs', href: '/program' }]
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/ds5x8xtyg/image/upload/v1755158720/bg-pic_mgrmbd.jpg')`,
          backgroundSize: 'cover',
         backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
            animate={{
              y: [-20, -100, -20],
              x: [-10, 10, -10],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight mt-20"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
           School  <span className="text-yellow-400">of Engineering  </span>
            <br />
           <span className="text-yellow-400">and</span> Technology
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At the School of Engineering, DSU, we believe engineers are not just problem-solvers — they are innovators, creators, and changemakers. Our programs are designed to blend strong theoretical foundations with  hands-on experience.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Academic Programs */}
                     <motion.div
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, delay: 0.2 }}
                     >
                      
                       <ul className="space-y-3">
                         {programs.map((program, index) => (
                           <li key={index}>
                             <a
                               href={program.href}
                               className="text-white transition-colors hover:bg-blue-700 bg-yellow-500 p-5  rounded-full text-4 font-bold hover:translate-x-1 transform duration-200 block"
                             >
                               {program.name}
                             </a>
                           </li>
                         ))}
                       </ul>
                     </motion.div>
            
          </motion.div>
        </motion.div>

       
      </div>
    </section>
  );
};

export default Hero;