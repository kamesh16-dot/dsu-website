import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Users, Calendar, CheckCircle, ArrowRight, Download, Phone } from 'lucide-react';

const Admissions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const admissionSteps = [
    {
      step: 1,
      title: 'Application Form',
      description: 'Fill out the online application form with your personal and academic details',
      icon: FileText,
      color: 'bg-blue-500',
      documents: ['10th & 12th Marksheets', 'Transfer Certificate', 'Passport Size Photos']
    },
    {
      step: 2,
      title: 'Entrance Exam',
      description: 'Appear for the university entrance exam or submit valid JEE/State CET scores',
      icon: Users,
      color: 'bg-green-500',
      documents: ['Hall Ticket', 'Valid ID Proof', 'Exam Fee Receipt']
    },
    {
      step: 3,
      title: 'Document Verification',
      description: 'Submit all required documents for verification and counseling process',
      icon: CheckCircle,
      color: 'bg-yellow-500',
      documents: ['Original Certificates', 'Community Certificate', 'Income Certificate']
    },
    {
      step: 4,
      title: 'Admission Confirmation',
      description: 'Complete fee payment and confirm your admission to secure your seat',
      icon: Calendar,
      color: 'bg-purple-500',
      documents: ['Fee Payment Receipt', 'Admission Letter', 'Medical Certificate']
    }
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'March 1, 2026', status: 'upcoming' },
    { event: 'Last Date to Apply', date: 'May 15, 2026', status: 'upcoming' },
    { event: 'Entrance Exam', date: 'May 20-25, 2026', status: 'upcoming' },
    { event: 'Results Declaration', date: 'June 5, 2026', status: 'upcoming' },
    { event: 'Classes Begin', date: 'July 1, 2026', status: 'upcoming' }
  ];

  const eligibilityCriteria = {
    'B.Tech': {
      title: 'Bachelor of Technology',
      criteria: [
        'Minimum 50% in 12th with PCM',
        'Valid JEE Main/State CET score',
        'Age limit: 17-21 years',
        'English proficiency required'
      ],
      fees: '₹1,25,000 per year',
      seats: '480 seats available'
    },
    'M.Tech': {
      title: 'Master of Technology',
      criteria: [
        'B.Tech/B.E. with minimum 55%',
        'Valid GATE score preferred',
        'Work experience (optional)',
        'Research aptitude test'
      ],
      fees: '₹85,000 per year',
      seats: '120 seats available'
    },
    'Ph.D.': {
      title: 'Doctor of Philosophy',
      criteria: [
        'M.Tech/M.E. with minimum 60%',
        'Research proposal required',
        'Interview and written test',
        'Publication record preferred'
      ],
      fees: '₹45,000 per year',
      seats: '40 seats available'
    }
  };

  return (
    <section id="admissions" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Admissions 2024
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the next generation of engineers at DSU School of Engineering. 
            Follow our streamlined admission process to secure your future in technology.
          </p>
        </motion.div>

        {/* Admission Process Steps */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="relative bg-gray-50 p-6 rounded-xl hover:bg-white transition-all duration-300 group"
              >
                {/* Step connector */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 z-10">
                    <ArrowRight className="h-6 w-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                )}

                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="bg-gray-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mb-4 absolute top-4 right-4">
                  {step.step}
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h4>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                <div className="space-y-1">
                  <p className="font-semibold text-sm text-gray-700">Required Documents:</p>
                  {step.documents.map((doc, docIndex) => (
                    <p key={docIndex} className="text-xs text-gray-600 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                      {doc}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Eligibility Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Eligibility & Fees</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(eligibilityCriteria).map(([key, program], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100"
              >
                <h4 className="text-2xl font-bold text-blue-800 mb-2">{key}</h4>
                <p className="text-gray-600 mb-4">{program.title}</p>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-2">Eligibility Criteria:</h5>
                  <ul className="space-y-1">
                    {program.criteria.map((criterion, criterionIndex) => (
                      <li key={criterionIndex} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-blue-200 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-gray-700">Annual Fees:</span>
                    <span className="font-bold text-blue-600">{program.fees}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Seats:</span>
                    <span className="font-bold text-green-600">{program.seats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Dates */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Important Dates</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {importantDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-4 ${
                      date.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <span className="font-semibold text-gray-800">{date.event}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 font-semibold mr-2">{date.date}</span>
                    <Calendar className="h-4 w-4 text-blue-600" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Engineering Journey?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss the opportunity to join one of India's premier engineering institutions. 
              Apply now and take the first step towards your successful engineering career.
            </p>
            
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;