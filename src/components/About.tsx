import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { icon: Users, label: 'Students', value: '2,500+' },
    { icon: Award, label: 'Programs', value: '15+' },
    { icon: Target, label: 'Placement Rate', value: '94%' },
    { icon: Eye, label: 'Research Projects', value: '150+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Excellence in Engineering Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The School of Engineering at Dhanalakshmi Srinivasan University stands as a beacon 
            of innovation and academic excellence, shaping the next generation of engineers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To provide world-class engineering education that combines theoretical knowledge 
              with practical application, fostering innovation, critical thinking, and ethical 
              responsibility. We are committed to developing engineers who can address global 
              challenges and contribute to sustainable development.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be recognized as a leading institution in engineering education and research, 
              known for producing innovative engineers who excel in their careers and make 
              meaningful contributions to society. We aspire to be at the forefront of 
              technological advancement and educational excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-900 text-white p-8 rounded-xl mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Core Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'Striving for the highest standards in education and research' },
              { title: 'Innovation', desc: 'Encouraging creative thinking and breakthrough solutions' },
              { title: 'Integrity', desc: 'Maintaining ethical standards and professional conduct' },
              { title: 'Collaboration', desc: 'Fostering teamwork and industry partnerships' },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-2 text-yellow-400">{value.title}</h4>
                <p className="text-blue-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;