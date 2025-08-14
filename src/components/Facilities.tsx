import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const Facilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);

  const facilities = [
    {
      name: 'Advanced Computing Lab',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'State-of-the-art computer lab with 200+ high-performance workstations, equipped with latest software for programming, simulation, and design.',
      features: ['High-speed Internet', 'Latest Software', '24/7 Access', 'Technical Support']
    },
    {
      name: 'Robotics & Automation Lab',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Cutting-edge robotics laboratory featuring industrial robots, automation systems, and AI-driven machines for hands-on learning.',
      features: ['Industrial Robots', 'IoT Integration', 'AI Systems', 'Research Projects']
    },
    {
      name: 'Electronics Design Center',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Modern electronics lab with PCB design tools, testing equipment, and fabrication facilities for circuit development and prototyping.',
      features: ['PCB Design Tools', 'Testing Equipment', 'Fabrication Units', 'Component Library']
    },
    {
      name: 'Innovation Hub',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Collaborative workspace for student startups and innovation projects, equipped with 3D printers, prototyping tools, and mentorship programs.',
      features: ['3D Printing', 'Prototyping Tools', 'Startup Support', 'Mentorship Programs']
    },
    {
      name: 'Research & Development Center',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Dedicated R&D facility supporting faculty and student research with advanced equipment and collaborative spaces.',
      features: ['Research Equipment', 'Publication Support', 'Industry Collaboration', 'Grant Assistance']
    },
    {
      name: 'Central Library',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      description: 'Comprehensive digital and physical library with over 50,000 books, journals, and online resources for academic excellence.',
      features: ['Digital Resources', 'Study Spaces', 'Online Journals', 'Research Support']
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section id="facilities" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            World-Class Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art facilities provide students with the tools and environment 
            needed to excel in their engineering education and research endeavors.
          </p>
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
              <h3 className="text-3xl font-bold mb-4">{facilities[activeIndex].name}</h3>
              <p className="text-lg mb-4 opacity-90">{facilities[activeIndex].description}</p>
              
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

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Experience Our Campus Virtually</h3>
            <p className="mb-6 text-blue-100">
              Take a 360° virtual tour of our facilities from the comfort of your home
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              Start Virtual Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;