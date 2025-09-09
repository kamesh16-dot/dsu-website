import React from "react";
import { motion } from "framer-motion";

const PatentsPage = () => {
  const patents = [
    {
      number: "202241012072",
      inventor: "Dr. R. Ramkumar",
      title:
        "Resolve of Locust Epidemics in farming Exploitation using Machine Learning Approach.",
      country: "India",
    },
    {
      number: "202241012972",
      inventor: "Dr. R. Ramkumar",
      title:
        "Employing of SOC tracker for rescuing a supervising a child in case of emergencies.",
      country: "India",
    },
    {
      number: "202241021789",
      inventor: "Dr. R. Ramkumar",
      title:
        "Trial boost performance evaluation by integration of IOT with blockchain.",
      country: "India",
    },
    {
      number: "202241029443",
      inventor: "Dr. R. Ramkumar",
      title:
        "Classifying DDOS Occurrences evaluation using machine learning approach with predictive analysis.",
      country: "India",
    },
    {
      number: "202241035681",
      inventor: "Dr. R. Ramkumar",
      title:
        "Patent data lake with Block chain and IOT enabled access control.",
      country: "India",
    },
    {
      number: "202241031368",
      inventor: "Dr. R. Ramkumar",
      title:
        "Stress Prediction using an Internet of stress prediction using an IoT based novel wearable smart electronic device using machine learning supervised technique.",
      country: "India",
    },
    {
      number: "202241046403",
      inventor: "Dr. R. Ramkumar",
      title:
        "A Machine learning Algorithm to assess autism and its Symptoms in computer vision technique tools.",
      country: "India",
    },
    {
      number: "202241057753",
      inventor: "Dr. R. Ramkumar",
      title:
        "Decentralizing and Securing network communications by evolving advanced block chain technology through secure-WSN.",
      country: "India",
    },
    {
      number: "202241057754",
      inventor: "Dr. R. Ramkumar",
      title:
        "Avoidance of Monetary damage by analyzing fraudulent transactions using ML techniques.",
      country: "India",
    },
    {
      number: "202241059959",
      inventor: "Dr. R. Ramkumar",
      title:
        "Intrusion detection recognition using deep learning for user devices with cyber-secure mechanism.",
      country: "India",
    },
    {
      number: "202241059955",
      inventor: "Dr. R. Ramkumar",
      title:
        "Implementation of an enhanced ADV-IDPS approach to leverage OIT networks in household deployment.",
      country: "India",
    },
    {
      number: "202241063001",
      inventor: "Dr. R. Ramkumar",
      title:
        "ML Strategies approach for analysis of IOT traffic Mechanisms in an IOT cloud Environment.",
      country: "India",
    },
    {
      number: "202241062995",
      inventor: "Dr. R. Ramkumar",
      title:
        "AI based computer vision using ML approaches to predict and diagnose Autism disorders.",
      country: "India",
    },
    {
      number: "202241067535",
      inventor: "Dr. R. Ramkumar",
      title:
        "Real time Disruption in IOT devices using Vulnerability Identification via ML Algorithm Hierarchy.",
      country: "India",
    },
    {
      number: "202241067540",
      inventor: "Dr. R. Ramkumar",
      title:
        "Integrating machine learning to inspect modern agriculture investigations for tea leaf disease.",
      country: "India",
    },
    {
      number: "202241070014",
      inventor: "Dr. R. Ramkumar",
      title:
        "Real-Time IoT applications for controlling waste disposal in smart city applications with integrated garbage bins.",
      country: "India",
    },
    {
      number: "202241074164",
      inventor: "Dr. R. Ramkumar",
      title:
        "Identification and Assistance for human Eye Through Voice-based system to help autism children.",
      country: "India",
    },
    {
      number: "202341005368",
      inventor: "Dr. R. Ramkumar",
      title:
        "Predicting Air Quality and Monitoring Model Using Machine Learning.",
      country: "India",
    },
    {
      number: "202341014807",
      inventor: "Dr. R. Ramkumar",
      title:
        "Reduced Carbon Emissions from Vehicle Expulsion through Supervised Machine Learning Methodology.",
      country: "India",
    },
    {
      number: "202341011359",
      inventor: "Dr. R. Ramkumar",
      title:
        "Maintenance of Hygienic Environment in Various human personal hygiene through wrist band using AI Techniques.",
      country: "India",
    },
    {
      number: "202331023322",
      inventor: "Dr. R. Ramkumar",
      title: "AI Powered Technology for Chat Bot(CHAT GPT) the revolution and Evolution.",
      country: "India",
    },
    {
      number: "202341027572",
      inventor: "Dr. R. Ramkumar",
      title: "Battery Management system for Green Energy Storage.",
      country: "India",
    },
    {
      number: "Design Grant Patent - 373511-001",
      inventor: "Dr. R. Ramkumar",
      title: "Solar Powered Object Sensing Based Public Lighting Fixture.",
      country: "India",
    },
    {
      number: "Design Grant Patent - 369790-001",
      inventor: "Dr. R. Ramkumar",
      title: "Solar Powered Biomass Integrated Crop Dryer.",
      country: "India",
    },
    {
      number: "Design Grant Patent - 383823-001",
      inventor: "Dr. R. Ramkumar",
      title: "Medical Waste Treatment Device.",
      country: "India",
    },
    {
      number: "Design Grant Patent - 390395-001",
      inventor: "Dr. R. Ramkumar",
      title: "Solar Powered Agricultural Electric Vehicle.",
      country: "India",
    },
  ];

  return (
    <section id="patents" className="bg-gray-50">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="https://shooliniuniversity.com/blog/wp-content/uploads/2023/12/55-patent-grants-shoolini.jpg"
          alt="Patents Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-extrabold mb-4">Patents</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Innovative research and groundbreaking ideas that shape the
              future.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ✅ Patents Table */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          List of Patents
        </h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full border border-gray-200 bg-white">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Patent Number</th>
                <th className="px-6 py-3 text-left">Inventors</th>
                <th className="px-6 py-3 text-left">Patent Title</th>
                <th className="px-6 py-3 text-left">Country</th>
              </tr>
            </thead>
            <tbody>
              {patents.map((patent, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition`}
                >
                  <td className="px-6 py-4">{patent.number}</td>
                  <td className="px-6 py-4">{patent.inventor}</td>
                  <td className="px-6 py-4">{patent.title}</td>
                  <td className="px-6 py-4">{patent.country}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PatentsPage;
