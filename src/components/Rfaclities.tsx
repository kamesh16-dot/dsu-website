import React from "react";
import { motion } from "framer-motion";

const CentralFacilities: React.FC = () => {
  const instruments = [
    { no: "01", name: "Powder X-Ray Diffractometer", model: "Rigaku, Ultima-IV" },
    { no: "02", name: "Raman Spectroscopy", model: "CRM-2000, WiTec, Germany" },
    { no: "03", name: "Optical Microscope", model: "Olympus, BX51" },
    { no: "04", name: "Bench top 3D Optical Profiler", model: "Bruker, ContourX-500" },
    { no: "05", name: "Field Emission Scanning Electron Microscope (FE-SEM)", model: "Zeiss, Sigma HD, UK" },
    { no: "06", name: "Atomic Force Microscopy (AFM)", model: "NTEGRA Prima, Germany" },
    { no: "07", name: "Nanoindenter", model: "Bruker, HYSITRON TI990" },
    { no: "08", name: "High Temperature Tribometer", model: "Ducom, TR-20LE-CHM(800)-Tribocorrosion WO-1725" },
    { no: "09", name: "Electrochemical Workstation", model: "Gamry Electochem, US" },
    { no: "10", name: "Surface Roughness Tester", model: "Time, TR200" },
    { no: "11", name: "400 MHz NMR Spectrohotometer", model: "Bruker" },
    { no: "12", name: "FTIR Spectrophotometer (ATR)", model: "Shimadzu" },
    { no: "13", name: "UV-Vis Spectrophotometer", model: "Shimadzu" },
  ];

  const eligibility = [
    "Well-designed and fully equipped lecture halls.",
    "Study centres with circular design structure.",
    "Audio-Video facilities.",
    "IT centre.",
    "State-of-the-art laboratories.",
    "Spacious and well-stocked central Library of 23K Sq. Ft Total Area, 32K+ book volumes, 500+ seating capacity with digital library.",
    "Centre of Excellence (CoE) - DSU collaborates with industrial and academic partners for advanced and applied research.",
    "Entrepreneurship Development Cell (EDC) - Promotes innovation, incubation, and start-up support.",
  ];

  return (
    <section id="central-facilities" className="bg-gray-50">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="https://oufro.ac.in/wp-content/uploads/2025/02/IMG_20210308_121950.jpg"
          alt="Central Facilities Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-5xl font-extrabold mb-4">Central Facilities</h1>
            <p className="text-lg md:text-xl">
              Cutting-edge instrumentation and infrastructure supporting globally competitive research.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ✅ Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-gray-800"
        >
          <p className="text-lg leading-relaxed mb-6">
            DSU's Central Instrumentation Facility (CIF) is poised to acquire an extensive range of state-of-the-art instruments
            tailored to propel research in science and technology to unprecedented heights. These cutting-edge instruments and resources
            will serve as essential aids for faculty members, research scholars, and students, enabling globally competitive research in
            basic, applied, and medical sciences.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            CIF aspires to become a cornerstone resource in the country, fostering innovation and collaboration, and operating under DSU's
            Division of Research and Development with self-sustainability through revenue generation.
          </p>
        </motion.div>

        {/* Instruments Table */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Central Instrumentation Facilities (Under Procurement)
          </h2>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full border border-gray-200 bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">S. No.</th>
                  <th className="px-4 py-3 text-left">Instrument Name</th>
                  <th className="px-4 py-3 text-left">Make & Model</th>
                </tr>
              </thead>
              <tbody>
                {instruments.map((instrument, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="px-4 py-3">{instrument.no}</td>
                    <td className="px-4 py-3">{instrument.name}</td>
                    <td className="px-4 py-3">{instrument.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Eligibility & Infrastructure</h2>
          <ul className="space-y-4 text-lg text-gray-700">
            {eligibility.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-blue-600 font-bold">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CentralFacilities;
