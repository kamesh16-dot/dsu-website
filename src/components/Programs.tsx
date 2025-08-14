import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Microscope, Brain, Cpu, Wrench, Zap } from 'lucide-react';

const Programs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const programs = [
    {
      level: 'B.Tech',
      icon: BookOpen,
      color: 'bg-blue-500',
      programs: [
        {
          name: 'Computer Science Engineering',
          description: 'Cutting-edge curriculum covering AI, ML, Data Science, and Software Development',
          duration: '4 Years',
          highlights: ['Industry Projects', 'Internship Guaranteed', '100% Placement Support']
        },
        {
          name: 'Electronics & Communication',
          description: 'Advanced electronics, telecommunications, and embedded systems design',
          duration: '4 Years',
          highlights: ['IoT Lab', 'Industry Mentorship', 'Research Opportunities']
        },
        {
          name: 'Mechanical Engineering',
          description: 'Traditional engineering with modern applications in robotics and automation',
          duration: '4 Years',
          highlights: ['CAD/CAM Lab', 'Industry Visits', 'Project-Based Learning']
        },
        {
          name: 'Civil Engineering',
          description: 'Sustainable construction, smart cities, and infrastructure development',
          duration: '4 Years',
          highlights: ['Green Building Design', 'Site Training', 'Government Projects']
        }
      ]
    },
    {
      level: 'M.Tech',
      icon: Microscope,
      color: 'bg-green-500',
      programs: [
        {
          name: 'Machine Learning & AI',
          description: 'Advanced research in artificial intelligence and machine learning applications',
          duration: '2 Years',
          highlights: ['Research Thesis', 'Industry Collaboration', 'Publication Support']
        },
        {
          name: 'VLSI Design',
          description: 'Chip design, semiconductor technology, and embedded systems',
          duration: '2 Years',
          highlights: ['Industry Tools', 'Fab Lab Access', 'Placement Assistance']
        },
        {
          name: 'Structural Engineering',
          description: 'Advanced structural analysis, earthquake engineering, and smart materials',
          duration: '2 Years',
          highlights: ['Simulation Labs', 'Industry Projects', 'Research Papers']
        }
      ]
    },
    {
      level: 'Ph.D.',
      icon: Brain,
      color: 'bg-purple-500',
      programs: [
        {
          name: 'Engineering Research',
          description: 'Independent research leading to breakthrough innovations and discoveries',
          duration: '3-5 Years',
          highlights: ['Research Funding', 'International Conferences', 'Patent Filing']
        },
        {
          name: 'Interdisciplinary Studies',
          description: 'Cross-domain research combining multiple engineering disciplines',
          duration: '3-5 Years',
          highlights: ['Collaborative Research', 'Industry Partnerships', 'Global Exposure']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="programs" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering education from undergraduate to doctoral levels, 
            designed to meet industry demands and foster innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {programs.map((program, programIndex) => (
            <motion.div key={programIndex} variants={itemVariants}>
              <div className="flex items-center mb-8">
                <div className={`${program.color} p-3 rounded-lg mr-4`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{program.level} Programs</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {program.programs.map((course, courseIndex) => (
                  <motion.div
                    key={courseIndex}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    className="bg-gray-50 p-6 rounded-xl hover:bg-white transition-all duration-300 border border-gray-200"
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">{course.name}</h4>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className={`${program.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {course.duration}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800 text-sm">Key Highlights:</h5>
                      <ul className="space-y-1">
                        {course.highlights.map((highlight, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Engineering Journey?</h3>
            <p className="mb-6 text-blue-100">
              Join thousands of successful engineers who started their careers at DSU School of Engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
              >
                Apply Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Download Brochure
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;