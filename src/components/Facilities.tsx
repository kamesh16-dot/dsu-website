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
      "https://itgopeshwar.ac.in/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-04-at-18.33.33_88ae2ed8-1-1024x768.jpg",
    description:
      "Equipped with 200+ high-performance computers, the Advanced Computing Lab supports programming, data analysis, and simulation projects.",
    features: ["High-speed Internet", "Latest Software", "24/7 Access", "Technical Support"],
  },
  {
    name: "Electronics Design Center",
    image:
      "https://dz.ethz.ch/services/_jcr_content/par/image/image.imageformat.1286.905385229.jpg",
    description:
      "A modern lab with PCB design tools, oscilloscopes, and prototyping kits, enabling students to design and test electronic circuits.",
    features: ["PCB Design Tools", "Testing Equipment", "Fabrication Units", "Component Library"],
  },
  {
    name: "Research & Development Center",
    image:
      "https://silarra.com/wp-content/uploads/2023/05/ordc.webp",
    description:
      "Dedicated space for innovation and interdisciplinary projects, equipped with collaborative workstations and advanced research tools.",
    features: ["Research Equipment", "Grant Assistance", "Collaborative Spaces"],
  },
  {
    name: "Central Library",
    image:
      "https://www.dsuniversity.ac.in/gallery/g16.jpg",
    description:
      "A vast collection of books, journals, and e-resources with quiet study zones and digital access for research and learning.",
    features: ["Digital Resources", "Study Spaces", "Online Journals", "Research Support"],
  },
  {
    name: "Chemistry Lab",
    image:
      "https://www.assumptioncollege.edu.in/images/college-resource/labs/3/1.jpg",
    description:
      "Well-equipped for experiments in organic, inorganic, and physical chemistry, with a focus on safety and hands-on practice.",
    features: ["Fume Hoods", "Safety Stations", "Glassware", "Instrumentation"],
  },
  {
    name: "Physics Lab",
    image:
      "data:image/jpeg;base64,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",
    description:
      "A space for exploring mechanics, optics, and electromagnetism through hands-on experiments and precision instruments.",
    features: ["Optics", "Mechanics", "Electronics", "Sensors & Data Acquisition"],
  },
  {
    name: "Mechanical Lab",
    image:
      "https://sece.ac.in/wp-content/uploads/2024/07/Mech-lab-1-1-1-scaled.jpg",
    description:
      "Hands-on workshop for manufacturing and design, featuring CNC machines, welding tools, and material testing equipment.",
    features: ["CNC/Lathe", "Welding", "Material Testing", "CAD/CAM Stations"],
  },
  {
    name: "EEE Lab",
    image:
      "https://eee.uiu.ac.bd/wp-content/uploads/sites/6/2023/11/IMG_0997-scaled-1.jpg",
    description:
      "Designed for power systems, circuits, and control engineering experiments with modern electronic equipment.",
    features: ["Power Systems", "Control Labs", "Oscilloscopes", "PCB Workstations"],
  },
  {
    name: "Workshop Lab",
    image:
      "https://manavrachna.edu.in/assets/campus/mru/school-of-engineering/images/me-lab-b.webp",
    description:
      "A general workshop that provides students with basic training in tools, fabrication, and prototyping techniques.",
    features: ["Hand Tools", "Machine Shop", "Safety Gear"],
  },
  {
    name: "AI Lab",
    image:
      "https://www.otomatiks.com/assets/lab1-BOLxMgSN.png",
    description:
      "Focused on machine learning and deep learning research, equipped with GPU servers, datasets, and collaboration pods.",
    features: ["GPU Servers", "ML Frameworks", "Datasets", "Collaboration Pods"],
  },
  {
    name: "Silicon Lab",
    image:
      "https://techsafety.com/sites/default/files/styles/blog_/public/2021-10/shutterstock_1682324479_0.jpg?itok=R-fNnKw6",
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