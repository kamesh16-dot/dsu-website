import React from 'react';
import { motion } from 'framer-motion';

// HRDC Faculty page with faculty name + photo + position
export default function HRDCFaculty() {
  const faculty = [
    {
      name: 'Dr. B. Vidya',
      position: 'Director, HRDC',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-B-Vidya.jpg'
    },
    {
      name: 'Dr. R. Karthick Babu',
      position: 'Deputy Director',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_R_Karthick-Babu.jpg'
    },
    {
      name: 'Mr. A. James Anto.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/James-Anto.jpg'
    },
    {
      name: 'Ms. Girijalakshmi B.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/grija-hrdc.jpg'
    },
    {
      name: 'Mr. M. Santhosh Kumar.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr-M-Santhosh-Kumar1.jpg'
    },
    {
      name: 'Ms. R. Pooja',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms-R-Pooja2.jpg'
    },
    {
      name: 'Mr. C. Raguraman',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_C_Raguraman.jpeg'
    },
    {
      name: 'Mr. R. Aslam.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_R_Aslam.jpeg'
    },
    {
      name: 'Mrs. M. Lavanya.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Leenashri.jpeg'
    },
    {
      name: 'Ms. K. Rajashree.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__K__Rajashree1.jpeg'
    },
    {
      name: 'Mr. V. Venkadesh.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__V__Venkadesh.jpeg'
    }
  ];

  return (
    <section id="hrdc" className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">HRDC Faculty</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the dedicated faculty of the Human Resource Development Centre.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{member.position}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Collaborate with HRDC</h2>
          <p className="mb-6 text-indigo-100 max-w-2xl mx-auto">
            Partner with HRDC for tailored faculty development programs, advanced workshops, and impactful educational innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hrdc@dsu.edu.in" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition">Contact Us</a>
            <a href="#" className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">View Calendar</a>
          </div>
        </div>
      </div>
    </section>
  );
}
