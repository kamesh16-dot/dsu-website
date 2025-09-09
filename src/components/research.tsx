
import { BookOpen, FlaskConical, Users, Award, Briefcase, FileText, Shield } from 'lucide-react';

const Research = () => {

  // Core data
  const features = [
    {
      icon: <FlaskConical className="text-blue-600" size={28} />,
      title: "Interdisciplinary Research",
      description: "Promoting collaborative projects across engineering, sciences, and humanities"
    },
    {
      icon: <Award className="text-green-600" size={28} />,
      title: "Grant Support",
      description: "Assisting with funding applications from DST, SERB, and other agencies"
    },
    {
      icon: <Briefcase className="text-purple-600" size={28} />,
      title: "Industry Partnerships",
      description: "Active collaborations with 50+ corporate R&D centers"
    },
    {
      icon: <FileText className="text-red-600" size={28} />,
      title: "IPR Assistance",
      description: "Patent filing support with 25+ patents filed in last 3 years"
    }
  ];

  const objectives = [
    "Faculty & student research facilitation",
    "Innovation ecosystem development",
    "Inter-institutional collaborations",
    "Research infrastructure provisioning",
    "Knowledge dissemination through publications",
    "Industry problem-solving initiatives",
    "Startup incubation support"
  ];

  const functions = [
    { title: "Grant Management", icon: <Award size={20} /> },
    { title: "Research Infrastructure", icon: <FlaskConical size={20} /> },
    { title: "Industry-Academia Linkages", icon: <Briefcase size={20} /> },
    { title: "IPR Cell", icon: <FileText size={20} /> },
    { title: "Research Ethics Compliance", icon: <Shield size={20} /> },
    { title: "Entrepreneurship Development", icon: <Users size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-48 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Development Cell</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Catalyzing innovation and multidisciplinary research at Dhanalakshmi Srinivasan University
          </p>
        </div>
      </div>

      {/* Vision/Mission Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2 text-blue-600" /> Our Vision
            </h2>
            <p className="text-gray-700 italic">
              "To be a pioneering hub of transformative research, innovation, and collaboration, 
              driving academic excellence and societal progress."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <FlaskConical className="mr-2 text-green-600" /> Our Mission
            </h2>
            <p className="text-gray-700">
              Create an ecosystem that nurtures research culture across disciplines, 
              facilitates cutting-edge innovation, and promotes industry-academia partnerships 
              to address global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Strengths</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Core Objectives</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3">
                {objectives.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {objectives.slice(4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Functions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((func, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 p-2 rounded-full mr-3">
                    {func.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{func.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {func.description || "Specialized support for research activities and development initiatives"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      
    </div>
  );
};

export default Research;