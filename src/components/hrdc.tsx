import React from "react";
import { motion } from "framer-motion";
import { 
  Target, Users, MessageCircle, Handshake, Briefcase, 
  BookOpen, ArrowRight, Calendar, BarChart3, 
  GraduationCap, Mic, Building 
} from "lucide-react";

const HRDCPage = () => {
  const activities = [
    {
      icon: MessageCircle,
      title: "Training Programs",
      description: "Comprehensive training in Soft Skills, Interview Skills & Aptitude.",
      features: ["Soft Skills Development", "Interview Preparation", "Aptitude Training", "Personality Development"]
    },
    {
      icon: Calendar,
      title: "Planning & Placements",
      description: "Strategic planning and execution of placement activities.",
      features: ["Campus Recruitment", "Industry Partnerships", "Placement Drives", "Career Counseling"]
    },
    {
      icon: Handshake,
      title: "MOUs with Industry",
      description: "Formal agreements with industries for mutual benefits.",
      features: ["Collaborations", "Knowledge Exchange", "Research Partnerships", "Internship Programs"]
    },
    {
      icon: Mic,
      title: "Industry Speaks",
      description: "Inviting industry experts for insights and networking.",
      features: ["Guest Lectures", "Workshops", "Panel Discussions", "Networking Events"]
    }
  ];

  const stats = [
    { value: "100+", label: "MOUs Signed", icon: Handshake },
    { value: "5000+", label: "Students Trained", icon: Users },
    { value: "200+", label: "Companies Partnered", icon: Building },
    { value: "95%", label: "Placement Rate", icon: BarChart3 }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white pt-28 pb-32">
         <div className="absolute inset-0 bg-[url('https://buzzflick.com/wp-content/uploads/2022/01/How-Human-Resources-are-Using-2D-3D-Animation-1-1-1.webp')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-6xl font-serif font-bold  mt-24 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Human Resource Development Centre (HRDC)
          </motion.h1>
          
         
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <motion.div 
          className="bg-white shadow-lg p-10 rounded-2xl border-t-4 border-blue-800"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To provide competent training and maintain strong ties with industries,
            enabling students to secure respectable positions.
          </p>
          <div className="flex items-center space-x-3">
            <Target className="h-6 w-6 text-blue-700" />
            <span className="text-blue-800 font-medium">Bridging Academia & Industry</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-10 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <GraduationCap className="h-12 w-12 mb-4" />
          <h2 className="text-3xl font-serif font-bold mb-4">Our Vision</h2>
          <p className="text-blue-100">
            To be a premier HRDC that transforms students into 
            industry-ready professionals through comprehensive 
            training & collaborations.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl text-center shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <stat.icon className="h-8 w-8 text-blue-700 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-blue-900">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Activities */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-serif font-bold text-center text-blue-900 mb-4">HRDC Activities</h2>
        <p className="text-lg text-center text-gray-600 mb-12">Our key initiatives for student development</p>
        <div className="grid md:grid-cols-2 gap-10">
          {activities.map((act, i) => (
            <motion.div 
              key={i}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border-l-4 border-blue-700 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <act.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold ml-4">{act.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{act.description}</p>
              <ul className="space-y-2">
                {act.features.map((f, j) => (
                  <li key={j} className="flex items-center">
                    <div className="h-2 w-2 bg-blue-700 rounded-full mr-2"></div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}


    </div>
  );
};

export default HRDCPage;
