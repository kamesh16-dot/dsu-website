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
          description: 'Cutting-edge curriculum covering AI, ML, Data Science,IT, and Software Development',
          duration: '4 Years',
          highlights: ['Industry Projects', 'Internship Guaranteed', '100% Placement Support']
        },
{
          name: 'Artificial Intelligence & Data Science (AI & DS)',
          description: 'Next-Gen Program in AI, Big Data, and Advanced Analytics',
          duration: '4 Years',
          highlights: ['Industry-Driven AI/DS Projects', 'internship with Top Tech & Analytics Firms', 'Specializations: NLP, Computer Vision, Deep Learning']
        },
        {
          name: 'Artificial Intelligence & Machine Learning (AI & ML)',
          description: 'Next-Gen Program in AI, Big Data, and Advanced Analytics',
          duration: '4 Years',
          highlights: ['Industry-Driven AI/ML Projects', 'internship with Top Tech & Analytics Firms', 'Specializations: ML Computer Vision, Deep Learning, Cloud deploy']
        },


  {"name": "Internet of Things (IoT Engineering)",
  "description": "End-to-end program covering IoT systems, edge computing, and smart automation",
  "duration": "4 Years",
  "highlights": [
   
    "Industry projects in Smart Cities/Agriculture/Healthcare",
    "Guaranteed internship with IoT product companies",
    "Specializations: Industrial IoT (IIoT), Embedded Systems, AI for Edge Devices",
    
  ],},
     {
  "name": "Information Technology (IT)",
  "description": "Industry-aligned program in Cloud Computing, Cybersecurity, DevOps, and Enterprise Solutions",
  "duration": "4 Years",
  "highlights": [
    
    "Guaranteed internship with IT leaders",
    
    "Specializations: Cybersecurity, Full-Stack Development, IoT",
    "Hackathons and CTF (Capture The Flag) competitions"
  ],},    
  {
  "name": "Cyber Security Engineering",
  "description": "Comprehensive program in ethical hacking, digital forensics, and enterprise security",
  "duration": "4 Years",
  "highlights": [
    
   
    "Guaranteed internship with security firms or CERTs",
    "Specializations: Cloud Security, OT/IoT Security, Threat Intelligence",
    "CTF competitions & Hack the Box challenges"
  ],},
  
  
  
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
        },
        {
          name: 'BIO MEDICAL ENGINEERING',
         description: 'Transforming healthcare through technology—one breakthrough at a time.Specializing in medical devices, biomaterials, and AI-powered diagnostics.',
          duration: '4 Years',
          highlights: ['Industry Projects', 'Internship Guaranteed', '100% Placement Support']
        },
        {
          name: 'B.TECH AGRICULTURE',
         description: 'Pioneering tech-driven solutions to feed the future sustainably.Focused on precision farming, agri-robotics, and climate-resilient crops',
          duration: '4 Years',
          highlights: ['Precision-Farming', 'Agri-Robotics', '100% Placement Support']
        },
      ]
    },
    {
      level: 'M.Tech',
      icon: Microscope,
      color: 'bg-green-500',
      programs: [
        {
  "name": "M.Tech in Computer Science & Engineering",
  "description": "Advanced specialization program combining rigorous theoretical foundations with cutting-edge applied research in computing",
  "duration": "2 Years",
  "highlights": [
    "Thesis-based Research with Industry Collaboration",
    "NVIDIA GPU Research Cluster Access",
    "Specialized Tracks in Emerging Technologies",
    "Patent Filing Support for Novel Algorithms",
    "International Conference Funding"
  ],},

  {
  "name": "M.Tech in Computer Science & Engineering (Big Data Analytics)",
  "description": "Advanced program focusing on large-scale data processing, predictive modeling, and business intelligence systems",
  "duration": "2 Years",
  "highlights": [
    "Petabyte-scale Hadoop/Spark Cluster",
    "Industry Case Studies from Fortune 500 Companies",
    "AWS/Azure Big Data Certification",
    "Real-time Analytics Projects",
    "Placement Assistance with Analytics Firms"
  ],},
  {
  "name": "M.Tech in Computer Science & Engineering (Internet of Things)",
  "description": "Specialized program focusing on IoT-enabled systems, smart devices, and intelligent connectivity across industries",
  "duration": "2 Years",
  "highlights": [
    "IoT Labs with Smart Sensors & Embedded Systems",
    "Industry Case Studies on Smart Cities & Healthcare",
    "Cloud IoT Platforms (AWS IoT, Azure IoT, Google Cloud IoT)",
    "Hands-on Projects in Smart Home & Industrial IoT",
    "Placement Assistance with IoT & Embedded System Firms"
  ]
}



      ]
    },
    {
      level: 'Ph.D.',
      icon: Brain,
      color: 'bg-purple-500',
      programs: [
       {
  "name": "Biomedical Engineering Research",
  "description": "Cutting-edge research at the intersection of engineering and healthcare technologies",
  "duration": "3-5 Years",
  "highlights": [
    "Medical Device Development",
    "Tissue Engineering Projects",
    "NIH/NSF Funding Opportunities",
    "Clinical Trial Collaborations",
    "Biomedical Patent Support"
  ]
  
},
        {
  "name": "Biotechnology Research Program",
  "description": "Advanced research in genetic engineering, bioprocessing, and pharmaceutical development",
  "duration": "3-5 Years", 
  "highlights": [
    "CRISPR Gene Editing Labs",
    "Industrial Bioprocessing Facilities",
    "FDA Approval Pathway Training",
    "Biotech Startup Incubation",
    "Global Pharma Collaborations"
  ],},
  {
  "name": "Computer Science & Engineering Research",
  "description": "Pioneering research in next-generation computing systems and intelligent technologies",
  "duration": "3-5 Years",
  "highlights": [
    "AI/ML Research Clusters (NVIDIA DGX)",
    "Quantum Computing Lab Access",
    "Industry Cloud Credits (AWS/GCP/Azure)",
    "Tech Transfer Patent Support",
    "Top-Tier Conference Funding (NeurIPS/OSDI)"
  ],},
  {
  "name": "Electronics and Communication Engineering",
  "description": "Advanced program in electronic systems, communication technologies, and embedded solutions",
  "duration": "4 Years",
  "highlights": [
    "VLSI and Chip Design Labs",
    "5G/WiFi 6 Research Facilities",
    "Industry-Standard DSP/FPGA Kits",
    "Embedded Systems Projects",
    "Telecom Industry Internships"
  ],},

  {
  "name": "Electrical and Electronics Engineering",
  "description": "Comprehensive program combining power systems, electronics, and cutting-edge automation technologies",
  "duration": "4 Years",
  "highlights": [
    "Smart Grid and Renewable Energy Labs",
    "Industrial Automation Projects",
    "Power Electronics Prototyping",
    "Siemens/ABB Certified Training",
    "Energy Sector Internships"
  ],},

  {
  "name": "Mechanical Engineering",
  "description": "Integrated program combining classical mechanical systems with Industry 4.0 technologies",
  "duration": "4 Years",
  "highlights": [
    "Industry 4.0 Automation Labs",
    "SAE Collegiate Design Projects",
    "Additive Manufacturing Center (3D Printing)",
    "ANSYS/SolidWorks Certification",
    "Automotive/Aerospace Industry Immersion"
  ],},

  {
  "name": "Materials Science & Engineering",
  "description": "Interdisciplinary program focusing on the design, discovery, and application of new materials",
  "duration": "4 Years",
  "highlights": [
    "Nanomaterials Characterization Lab (TEM/SEM)",
    "Computational Materials Design Center",
    "Industry Collaborations in Advanced Materials",
    "Materials Genome Initiative Projects",
    "Semiconductor Materials Processing"
  ],},
  {
  "name": "Nanoscience & Technology",
  "description": "Cutting-edge interdisciplinary program exploring the quantum world of materials and devices at the nanoscale",
  "duration": "4 Years",
  "highlights": [
    "Cleanroom Nanofabrication Facility (Class 100)",
    "Atomic Force/Scanning Tunneling Microscopy",
    "Quantum Materials Synthesis Lab",
    "Industry Partnerships in Semiconductor Nanotech",
    "Nano-Bio Interface Research"
  ],}
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
    <section id="programs" className="py-48 bg-blue-300" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Engineering  Academic Programs
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
                <h3 className="text-3xl font-bold text--500">{program.level} Programs</h3>
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
               <a href="https://forms.gle/QekMLvWTsepzdASG9" target='blank'> join our university </a>
              </motion.button>
             
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;