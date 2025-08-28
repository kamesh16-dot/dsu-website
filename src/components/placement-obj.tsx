import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { 
  Target, 
  Users, 
  MessageCircle, 
  Handshake, 
  Briefcase, 
  Code,
  ArrowRight,
  Calendar,
  BarChart3,
  Award,
  BookOpen,
  Lightbulb
} from "lucide-react";

const PlacementObjectives = () => {
  const objectives = [
    {
      icon: Target,
      title: "On & Off Campus Placements",
      description: "Organize both on-campus and off-campus placement opportunities for students to connect with top employers."
    },
    {
      icon: BookOpen,
      title: "Specialized Industry Training",
      description: "Provide training to students in specialized areas as per current Industry Expectations and requirements."
    },
    {
      icon: MessageCircle,
      title: "Personality Development",
      description: "Enhance personality development and communication skills to prepare students for professional environments."
    },
    {
      icon: Handshake,
      title: "Industry-Institute Interaction",
      description: "Create healthy Industry-Institute interaction by signing Memorandums of Understanding (MOUs) with leading companies."
    },
    {
      icon: Briefcase,
      title: "Employability Enhancement",
      description: "Mold students to be readily employable and deployable in various industry sectors."
    },
    {
      icon: Code,
      title: "Technical Proficiency",
      description: "Impart knowledge of the latest computer-oriented programs and design tools to ensure technical competency."
    }
  ];

  const stats = [
    { value: 95, suffix: "%", label: "Placement Rate", icon: BarChart3 },
    { value: 200, suffix: "+", label: "Companies Visited", icon: Handshake },
    { value: 5000, suffix: "+", label: "Students Placed", icon: Users },
    { value: 50, suffix: "+", label: "MOUs Signed", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative text-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Placement Cell Objectives
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Bridging the gap between academia and industry to empower students with the skills, confidence, and opportunities to thrive.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="backdrop-blur-lg bg-white/80 border border-gray-200 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <stat.icon className="h-7 w-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">
                <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2 
          className="text-4xl font-extrabold text-center text-blue-900 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Key Objectives
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {objectives.map((objective, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <objective.icon className="h-7 w-7 text-blue-700" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{objective.title}</h3>
              <p className="text-gray-600 leading-relaxed">{objective.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center text-blue-900 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Placement Process
          </motion.h2>

          <div className="relative border-l-4 border-blue-200 pl-8 space-y-12">
            {[
              { step: "Skill Assessment", desc: "Evaluating student strengths and areas for improvement" },
              { step: "Training Programs", desc: "Providing industry-relevant training and workshops" },
              { step: "Company Outreach", desc: "Establishing connections with potential employers" },
              { step: "Placement Drives", desc: "Organizing on-campus and off-campus recruitment" },
              { step: "Post-Placement Support", desc: "Providing guidance even after placement" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute -left-10 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                <h3 className="text-xl font-semibold text-blue-900">{item.step}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/SRM_Institute_of_Science_and_Technology_Logo.png/220px-SRM_Institute_of_Science_and_Technology_Logo.png')] bg-no-repeat bg-center opacity-5"></div>
        <motion.h2 
          className="text-4xl font-bold mb-6 text-blue-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Hire Our Students?
        </motion.h2>
        <motion.p 
          className="text-lg mb-10 max-w-2xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Connect with our placement cell to schedule a recruitment drive or sign an MOU with our institution.
        </motion.p>
        <motion.button 
          className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all flex items-center mx-auto shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Contact Placement Cell
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </section>
    </div>
  );
};

export default PlacementObjectives;
