import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Microscope, Brain, Cpu, Wrench, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Updated Programs component with a hero image and refreshed design
export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.12 });
  const usenavigate = useNavigate()

  const programs = [
    {
      level: 'B.Tech',
      icon: BookOpen,
      color: 'bg-blue-600',
      programs: [
        {
          name: 'Computer Science Engineering',
          description:
            'Cutting-edge curriculum covering AI, ML, Data Science, IT, and Software Development',
          duration: '4 Years',
          highlights: ['Industry Projects', 'Internship Guaranteed', '100% Placement Support']
        },
        {
          name: 'Artificial Intelligence & Data Science (AI & DS)',
          description: 'Next-Gen Program in AI, Big Data, and Advanced Analytics',
          duration: '4 Years',
          highlights: [
            'Industry-Driven AI/DS Projects',
            'internship with Top Tech & Analytics Firms',
            'Specializations: NLP, Computer Vision, Deep Learning'
          ]
        },
        {
          name: 'Artificial Intelligence & Machine Learning (AI & ML)',
          description: 'Next-Gen Program in AI, Big Data, and Advanced Analytics',
          duration: '4 Years',
          highlights: [
            'Industry-Driven AI/ML Projects',
            'internship with Top Tech & Analytics Firms',
            'Specializations: ML, Computer Vision, Deep Learning, Cloud deploy'
          ]
        },
        {
          name: 'Internet of Things (IoT Engineering)',
          description: 'End-to-end program covering IoT systems, edge computing, and smart automation',
          duration: '4 Years',
          highlights: [
            'Industry projects in Smart Cities/Agriculture/Healthcare',
            'Guaranteed internship with IoT product companies',
            'Specializations: Industrial IoT (IIoT), Embedded Systems, AI for Edge Devices'
          ]
        },
        {
          name: 'Information Technology (IT)',
          description: 'Industry-aligned program in Cloud Computing, Cybersecurity, DevOps, and Enterprise Solutions',
          duration: '4 Years',
          highlights: [
            'Guaranteed internship with IT leaders',
            'Specializations: Cybersecurity, Full-Stack Development, IoT',
            'Hackathons and CTF (Capture The Flag) competitions'
          ]
        },
        {
          name: 'Cyber Security Engineering',
          description: 'Comprehensive program in ethical hacking, digital forensics, and enterprise security',
          duration: '4 Years',
          highlights: [
            'Guaranteed internship with security firms or CERTs',
            'Specializations: Cloud Security, OT/IoT Security, Threat Intelligence',
            'CTF competitions & Hack the Box challenges'
          ]
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
        },
        {
          name: 'BIO MEDICAL ENGINEERING',
          description:
            'Transforming healthcare through technology—one breakthrough at a time. Specializing in medical devices, biomaterials, and AI-powered diagnostics.',
          duration: '4 Years',
          highlights: ['Industry Projects', 'Internship Guaranteed', '100% Placement Support']
        },
        {
          name: 'B.TECH AGRICULTURE',
          description:
            'Pioneering tech-driven solutions to feed the future sustainably. Focused on precision farming, agri-robotics, and climate-resilient crops',
          duration: '4 Years',
          highlights: ['Precision-Farming', 'Agri-Robotics', '100% Placement Support']
        }
      ]
    },
    {
      level: 'M.Tech',
      icon: Microscope,
      color: 'bg-emerald-600',
      programs: [
        {
          name: 'M.Tech in Computer Science & Engineering',
          description:
            'Advanced specialization program combining rigorous theoretical foundations with cutting-edge applied research in computing',
          duration: '2 Years',
          highlights: [
            'Thesis-based Research with Industry Collaboration',
            'NVIDIA GPU Research Cluster Access',
            'Specialized Tracks in Emerging Technologies',
            'Patent Filing Support for Novel Algorithms',
            'International Conference Funding'
          ]
        },
        {
          name: 'M.Tech in Computer Science & Engineering (Big Data Analytics)',
          description:
            'Advanced program focusing on large-scale data processing, predictive modeling, and business intelligence systems',
          duration: '2 Years',
          highlights: [
            'Petabyte-scale Hadoop/Spark Cluster',
            'Industry Case Studies from Fortune 500 Companies',
            'AWS/Azure Big Data Certification',
            'Real-time Analytics Projects',
            'Placement Assistance with Analytics Firms'
          ]
        },
        {
          name: 'M.Tech in Computer Science & Engineering (Internet of Things)',
          description:
            'Specialized program focusing on IoT-enabled systems, smart devices, and intelligent connectivity across industries',
          duration: '2 Years',
          highlights: [
            'IoT Labs with Smart Sensors & Embedded Systems',
            'Industry Case Studies on Smart Cities & Healthcare',
            'Cloud IoT Platforms (AWS IoT, Azure IoT, Google Cloud IoT)',
            'Hands-on Projects in Smart Home & Industrial IoT',
            'Placement Assistance with IoT & Embedded System Firms'
          ]
        }
      ]
    },
    {
      level: 'Ph.D.',
      icon: Brain,
      color: 'bg-purple-600',
      programs: [
        {
          name: 'Biomedical Engineering Research',
          description:
            'Cutting-edge research at the intersection of engineering and healthcare technologies',
          duration: '3-5 Years',
          highlights: ['Medical Device Development', 'Tissue Engineering Projects', 'NIH/NSF Funding Opportunities', 'Clinical Trial Collaborations', 'Biomedical Patent Support']
        },
        {
          name: 'Biotechnology Research Program',
          description:
            'Advanced research in genetic engineering, bioprocessing, and pharmaceutical development',
          duration: '3-5 Years',
          highlights: ['CRISPR Gene Editing Labs', 'Industrial Bioprocessing Facilities', 'FDA Approval Pathway Training', 'Biotech Startup Incubation', 'Global Pharma Collaborations']
        },
        {
          name: 'Computer Science & Engineering Research',
          description:
            'Pioneering research in next-generation computing systems and intelligent technologies',
          duration: '3-5 Years',
          highlights: ['AI/ML Research Clusters (NVIDIA DGX)', 'Quantum Computing Lab Access', 'Industry Cloud Credits (AWS/GCP/Azure)', 'Tech Transfer Patent Support', 'Top-Tier Conference Funding (NeurIPS/OSDI)']
        },
        {
          name: 'Electronics and Communication Engineering',
          description:
            'Advanced program in electronic systems, communication technologies, and embedded solutions',
          duration: '4 Years',
          highlights: ['VLSI and Chip Design Labs', '5G/WiFi 6 Research Facilities', 'Industry-Standard DSP/FPGA Kits', 'Embedded Systems Projects', 'Telecom Industry Internships']
        },
        {
          name: 'Electrical and Electronics Engineering',
          description:
            'Comprehensive program combining power systems, electronics, and cutting-edge automation technologies',
          duration: '4 Years',
          highlights: ['Smart Grid and Renewable Energy Labs', 'Industrial Automation Projects', 'Power Electronics Prototyping', 'Siemens/ABB Certified Training', 'Energy Sector Internships']
        },
        {
          name: 'Mechanical Engineering',
          description:
            'Integrated program combining classical mechanical systems with Industry 4.0 technologies',
          duration: '4 Years',
          highlights: ['Industry 4.0 Automation Labs', 'SAE Collegiate Design Projects', 'Additive Manufacturing Center (3D Printing)', 'ANSYS/SolidWorks Certification', 'Automotive/Aerospace Industry Immersion']
        },
        {
          name: 'Materials Science & Engineering',
          description:
            'Interdisciplinary program focusing on the design, discovery, and application of new materials',
          duration: '4 Years',
          highlights: ['Nanomaterials Characterization Lab (TEM/SEM)', 'Computational Materials Design Center', 'Industry Collaborations in Advanced Materials', 'Materials Genome Initiative Projects', 'Semiconductor Materials Processing']
        },
        {
          name: 'Nanoscience & Technology',
          description:
            'Cutting-edge interdisciplinary program exploring the quantum world of materials and devices at the nanoscale',
          duration: '4 Years',
          highlights: ['Cleanroom Nanofabrication Facility (Class 100)', 'Atomic Force/Scanning Tunneling Microscopy', 'Quantum Materials Synthesis Lab', 'Industry Partnerships in Semiconductor Nanotech', 'Nano-Bio Interface Research']
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="programs" className="relative bg-gradient-to-b from-sky-50 to-white" ref={ref}>
      {/* HERO */}
      <div
        className="relative w-full overflow-hidden rounded-b-3xl"
        style={{ boxShadow: 'inset 0 -60px 120px rgba(99,102,241,0.06)' }}
      >
        <div
          className="w-full h-64 md:h-96 bg-cover bg-center flex items-center"
          style={{
            backgroundImage:
              "url('https://www.startupindia.gov.in/content/dam/invest-india/Resources/LandD/onlineCoursesBanner.png/_jcr_content/renditions/cq5dam.web.1280.1280.png')"
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9 }}
              className="max-w-3xl text-white"
            >
              <h1 className="text-3xl md:text-5xl mt-10 font-extrabold leading-tight drop-shadow lg:mt-44">
                Engineering & technology courses
              </h1>
              

              <div className="mt-6 flex gap-3 items-center">
                <a
                  href="https://forms.gle/QekMLvWTsepzdASG9"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transform transition"
                >
                  Apply Now
                </a>
                <p
                onClick={()=>{usenavigate('/sys')}}
                  className="inline-flex items-center gap-2 text-white/80 px-4 py-2 rounded-full border border-white/20 hover:bg-white/5 transition"
                >
                explore the Syllabus
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16" id="programs-list">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {programs.map((program, programIndex) => (
            <motion.div key={programIndex} variants={itemVariants} className="">
              <div className="flex items-center mb-6">
                <div className={`${program.color} p-3 rounded-lg mr-4 shadow-md`}> 
                  <program.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {program.level} Programs
                </h3>
                <div className="ml-auto text-sm text-gray-500">{program.programs.length} courses</div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {program.programs.map((course, courseIndex) => (
                  <motion.article
                    key={courseIndex}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center shadow-inner">
                          <Cpu className="h-6 w-6 text-sky-600" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{course.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                        </div>
                      </div>

                      <div className="text-xs font-medium">
                        <span className={`${program.color} text-white px-3 py-1 rounded-full text-sm`}>{course.duration}</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 text-sm">Key Highlights</h5>
                      <ul className="mt-2 grid gap-2">
                        {course.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <span className="inline-flex items-center justify-center w-2.5 h-2.5 bg-amber-400 rounded-full mr-3" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <a
                     href="https://forms.gle/QekMLvWTsepzdASG9"
                        className="text-sm font-semibold text-sky-600 hover:underline"
                      >
                        Learn more
                      </a>
                      <motion.button 
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Zap className="h-4 w-4" />  <a href="https://forms.gle/QekMLvWTsepzdASG9">Apply.</a>
                      </motion.button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Strip */}

      </div>
    </section>
  );
}
