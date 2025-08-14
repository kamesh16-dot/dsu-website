import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Dean & Professor',
      department: 'Computer Science Engineering',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Computer Science, IIT Delhi',
      experience: '25+ years',
      specialization: 'Artificial Intelligence, Machine Learning',
      publications: '85+ Research Papers',
      email: 'rajesh.kumar@dsu.edu.in'
    },
    {
      name: 'Dr. Priya Sharma',
      position: 'Professor & HOD',
      department: 'Electronics & Communication',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Electronics, IISc Bangalore',
      experience: '20+ years',
      specialization: 'VLSI Design, IoT Systems',
      publications: '60+ Research Papers',
      email: 'priya.sharma@dsu.edu.in'
    },
    {
      name: 'Dr. Arun Patel',
      position: 'Professor',
      department: 'Mechanical Engineering',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Mechanical Engineering, IIT Mumbai',
      experience: '22+ years',
      specialization: 'Robotics, Automation Systems',
      publications: '70+ Research Papers',
      email: 'arun.patel@dsu.edu.in'
    },
    {
      name: 'Dr. Sneha Reddy',
      position: 'Associate Professor',
      department: 'Civil Engineering',
      image: 'https://images.pexels.com/photos/1181390/pexels-photo-1181390.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Structural Engineering, NIT Trichy',
      experience: '15+ years',
      specialization: 'Sustainable Construction, Smart Cities',
      publications: '45+ Research Papers',
      email: 'sneha.reddy@dsu.edu.in'
    },
    {
      name: 'Dr. Vikram Singh',
      position: 'Associate Professor',
      department: 'Computer Science Engineering',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Data Science, IIT Kharagpur',
      experience: '12+ years',
      specialization: 'Big Data Analytics, Cloud Computing',
      publications: '40+ Research Papers',
      email: 'vikram.singh@dsu.edu.in'
    },
    {
      name: 'Dr. Kavita Nair',
      position: 'Assistant Professor',
      department: 'Electronics & Communication',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      education: 'Ph.D. in Signal Processing, Anna University',
      experience: '10+ years',
      specialization: 'Digital Signal Processing, Embedded Systems',
      publications: '30+ Research Papers',
      email: 'kavita.nair@dsu.edu.in'
    }
  ];

  const stats = [
    { icon: Users, label: 'Faculty Members', value: '80+' },
    { icon: Award, label: 'Ph.D. Holders', value: '65+' },
    { icon: BookOpen, label: 'Research Publications', value: '500+' },
    { icon: Mail, label: 'Industry Experience', value: '15+ Years' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="faculty" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Distinguished Faculty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts and renowned academicians who bring decades of 
            experience and cutting-edge knowledge to guide your engineering journey.
          </p>
        </motion.div>

        {/* Faculty Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm mb-2">{faculty.specialization}</p>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    <span className="text-xs">{faculty.email}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{faculty.position}</p>
                <p className="text-gray-600 text-sm mb-4">{faculty.department}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Education:</strong> {faculty.education}</p>
                  <p><strong>Experience:</strong> {faculty.experience}</p>
                  <p><strong>Publications:</strong> {faculty.publications}</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Research Excellence</h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Our faculty members are actively engaged in cutting-edge research, contributing to 
              technological advancement and publishing in top-tier international journals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <p className="text-blue-100">Research Publications</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <p className="text-blue-100">Ongoing Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <p className="text-blue-100">Patents Filed</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              View Research Publications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faculty;