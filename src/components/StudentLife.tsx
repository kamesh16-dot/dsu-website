import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Briefcase, Star, Award, Users, Calendar } from 'lucide-react';
import CountUp from 'react-countup';

const StudentLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
    {
      year: '2025',
      title: 'AI Research Excellence',
      description: 'Students and faculty collaborated on AI projects, publishing 10 papers in top-tier journals.',
      icon: Users,
      color: 'bg-red-500'
    },
    {
      year: '2024',
      title: 'National Hackathon Championship',
      description: '1st place in the National Level Hackathon with innovative IoT solutions for smart farming.',
      icon: Trophy,
      color: 'bg-yellow-500'
    },
    {
      year: '2024',
      title: 'Industry Internship Program',
      description: '250+ students completed internships at top companies including Google, Microsoft, and TCS.',
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
    },
    {
      year: '2022',
      title: 'Cultural Fest Recognition',
      description: 'Won Best Cultural Festival Award at the State Level University Events.',
      icon: Calendar,
      color: 'bg-pink-500'
    }
  ];

  const activities = [
    {
      name: "Sports & Activities",
      description: "Inter-college tournaments, athletics, indoor & outdoor games, and fitness programs.",
      image: "https://www.dsuniversity.ac.in/images/Sports_Act-04.jpg",
    },
    {
      name: "Campus",
      description: "Modern academic blocks, spacious classrooms, and eco-friendly infrastructure.",
      image: "https://www.dsuniversity.ac.in/infra/campus-img-03.jpg",
    },
    {
      name: 'Innovation Labs',
      description: 'Student-led research projects and startup incubation programs.',
      image: 'https://www.dsuniversity.ac.in/infra/lab4.jpg',
    },
    {
      name: "Learning Center",
      description: "Digital libraries, e-resources, research support, and collaborative study areas.",
      image: "https://www.dsuniversity.ac.in/images/learn5.jpg",
    }
  ];

  const placementStats = [
    { label: 'Placement Rate', value: 94, suffix: '%', icon: Star },
    { label: 'Highest Package', value: 25, suffix: ' LPA', icon: Trophy },
    { label: 'Average Package', value: 8.5, suffix: ' LPA', icon: Award },
    { label: 'Top Recruiters', value: 150, suffix: '+', icon: Briefcase }
  ];

  return (
    <section id="student-life" className="bg-gray-50" ref={ref}>

      {/* ✅ Hero Image */}
      <div className="relative w-full h-[70vh]">
        <img 
          src="https://st.depositphotos.com/59134350/57550/v/450/depositphotos_575505546-stock-illustration-graduating-students-pupil-hands-gown.jpg" 
          alt="Student Life Hero" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-extrabold mb-4">Achievements</h1>
            <p className="text-lg max-w-2xl mx-auto">
              A vibrant campus that blends academics, research, and cultural excellence.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 ">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          
        </motion.div>

        {/* Achievement Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24 relative"
        >
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Recent Achievements</h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>

            <div className="space-y-16">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                    className={`flex flex-col md:flex-row items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="w-full md:w-5/12 px-4">
                      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                        <div className="flex items-center mb-4">
                          <div className={`${achievement.color} p-3 rounded-lg mr-3`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-500">{achievement.year}</span>
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>

                    <div className={`${achievement.color} w-10 h-10 rounded-full border-4 border-white shadow-lg relative z-10 flex items-center justify-center my-6 md:my-0`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>

                    <div className="w-full md:w-5/12"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentLife;
