import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Users, Briefcase, Star, Calendar, Award } from 'lucide-react';

const StudentLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const achievements = [
    {
      year: '2024',
      title: 'National Hackathon Championship',
      description: 'Our students secured 1st place in the National Level Hackathon with their innovative IoT solution for smart farming.',
      icon: Trophy,
      color: 'bg-yellow-500'
    },
    {
      year: '2024',
      title: 'Industry Internship Program',
      description: '250+ students successfully completed internships at top companies including Google, Microsoft, and TCS.',
      icon: Briefcase,
      color: 'bg-green-500'
    },
    {
      year: '2023',
      title: 'Research Publication Record',
      description: 'Faculty and students published 45 research papers in international journals and conferences.',
      icon: Award,
      color: 'bg-blue-500'
    },
    {
      year: '2023',
      title: 'Placement Excellence',
      description: 'Achieved 94% placement rate with highest package of ₹25 LPA and average package of ₹8.5 LPA.',
      icon: Star,
      color: 'bg-purple-500'
    }
  ];

  const activities = [
    {
      name: 'Technical Symposiums',
      description: 'Annual tech fest featuring coding competitions, robotics challenges, and innovation showcases',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      participants: '2000+'
    },
    {
      name: 'Industry Connect',
      description: 'Regular industry visits, guest lectures, and networking sessions with leading professionals',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      participants: '500+'
    },
    {
      name: 'Innovation Labs',
      description: 'Student-led research projects and startup incubation programs with mentorship support',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      participants: '150+'
    },
    {
      name: 'Cultural Events',
      description: 'Vibrant cultural festivals, sports competitions, and community service programs',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      participants: '1500+'
    }
  ];

  const placementStats = [
    { label: 'Placement Rate', value: '94%', icon: Star },
    { label: 'Highest Package', value: '₹25 LPA', icon: Trophy },
    { label: 'Average Package', value: '₹8.5 LPA', icon: Award },
    { label: 'Top Recruiters', value: '150+', icon: Briefcase }
  ];

  return (
    <section id="student-life" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Student Life & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life filled with opportunities for growth, 
            learning, and achievement in both academic and extracurricular activities.
          </p>
        </motion.div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Recent Achievements</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className={`${achievement.color} p-2 rounded-lg mr-3`}>
                          <achievement.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-500">{achievement.year}</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-3">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`${achievement.color} w-8 h-8 rounded-full border-4 border-white shadow-lg relative z-10 flex items-center justify-center my-4 md:my-0`}>
                    <achievement.icon className="h-4 w-4 text-white" />
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Student Activities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Campus Activities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {activity.participants}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">{activity.name}</h4>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Placement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Placement Excellence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-xl mb-4">
                  <stat.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-blue-100 mb-6">
              Our graduates are working at top companies worldwide, making significant contributions to technology and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
            >
              View Placement Report
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentLife;