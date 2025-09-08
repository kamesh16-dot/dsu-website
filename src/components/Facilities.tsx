import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Facilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });
  const [activeIndex, setActiveIndex] = useState(0);

  const facilities = [
  {
    name: "Advanced Computing Lab",
    image:
      "https://images.pexels.com/photos/11813103/pexels-photo-11813103.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Equipped with 200+ high-performance computers, the Advanced Computing Lab supports programming, data analysis, and simulation projects.",
    features: ["High-speed Internet", "Latest Software", "24/7 Access", "Technical Support"],
  },
  {
    name: "Electronics Design Center",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "A modern lab with PCB design tools, oscilloscopes, and prototyping kits, enabling students to design and test electronic circuits.",
    features: ["PCB Design Tools", "Testing Equipment", "Fabrication Units", "Component Library"],
  },
  {
    name: "Research & Development Center",
    image:
      "https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Dedicated space for innovation and interdisciplinary projects, equipped with collaborative workstations and advanced research tools.",
    features: ["Research Equipment", "Grant Assistance", "Collaborative Spaces"],
  },
  {
    name: "Central Library",
    image:
      "https://images.pexels.com/photos/159711/library-la-trobe-study-students-159711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "A vast collection of books, journals, and e-resources with quiet study zones and digital access for research and learning.",
    features: ["Digital Resources", "Study Spaces", "Online Journals", "Research Support"],
  },
  {
    name: "Chemistry Lab",
    image:
      "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Well-equipped for experiments in organic, inorganic, and physical chemistry, with a focus on safety and hands-on practice.",
    features: ["Fume Hoods", "Safety Stations", "Glassware", "Instrumentation"],
  },
  {
    name: "Physics Lab",
    image:
      "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "A space for exploring mechanics, optics, and electromagnetism through hands-on experiments and precision instruments.",
    features: ["Optics", "Mechanics", "Electronics", "Sensors & Data Acquisition"],
  },
  {
    name: "Mechanical Lab",
    image:
      "https://images.pexels.com/photos/4491493/pexels-photo-4491493.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Hands-on workshop for manufacturing and design, featuring CNC machines, welding tools, and material testing equipment.",
    features: ["CNC/Lathe", "Welding", "Material Testing", "CAD/CAM Stations"],
  },
  {
    name: "EEE Lab",
    image:
      "https://images.pexels.com/photos/3825580/pexels-photo-3825580.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Designed for power systems, circuits, and control engineering experiments with modern electronic equipment.",
    features: ["Power Systems", "Control Labs", "Oscilloscopes", "PCB Workstations"],
  },
  {
    name: "Workshop Lab",
    image:
      "https://images.pexels.com/photos/8961052/pexels-photo-8961052.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "A general workshop that provides students with basic training in tools, fabrication, and prototyping techniques.",
    features: ["Hand Tools", "Machine Shop", "Safety Gear"],
  },
  {
    name: "AI Lab",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Focused on machine learning and deep learning research, equipped with GPU servers, datasets, and collaboration pods.",
    features: ["GPU Servers", "ML Frameworks", "Datasets", "Collaboration Pods"],
  },
  {
    name: "Silicon Lab",
    image:
      "https://images.pexels.com/photos/159220/motherboard-electronics-computer-board-159220.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "Supports semiconductor fabrication and testing, enabling students to work on microelectronics and chip-level experiments.",
    features: ["Cleanbench", "Process Tools", "Test Equipment"],
  },
  {
    name: "Cyber-security Lab",
    image:
      "https://images.pexels.com/photos/5380649/pexels-photo-5380649.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    description:
      "An isolated environment for ethical hacking, digital forensics, and network security training.",
    features: ["Isolated Networks", "Forensics Tools", "CTF Rigs"],
  },
];


  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section id="facilities" className="py-20 bg-slate-400 "  ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 mt-40">
          School of engineering   Lab  Facilities
          </h2>
         
        </motion.div>

        {/* Featured Facility Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-12"
        >
          <div className="relative h-96 md:h-[500px]">
            <img
              src={facilities[activeIndex].image}
              alt={facilities[activeIndex].name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className=" sm:text-3xl  mb-39 text-3xl sm:text-white  font-extrabold text-blue-200 text-2xl  sm:mb-4 lg:mb-4 backdrop-blur-sm rounded-full px-9">{facilities[activeIndex].name}</h3>
             
              
              <div className="flex flex-wrap gap-2">
                {facilities[activeIndex].features.map((feature, index) => (
                  <span
                    key={index}
                    className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-30 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-30 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-yellow-400' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative h-48">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <MapPin className="h-5 w-5 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{facility.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {facility.description.substring(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {facility.features.slice(0, 2).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {facility.features.length > 2 && (
                    <span className="text-blue-600 text-xs px-2 py-1">
                      +{facility.features.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      
       
      </div>
    </section>
  );
};

export default Facilities;