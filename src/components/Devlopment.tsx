import { motion } from "framer-motion";
import { Target, Rocket, Lightbulb, Activity } from "lucide-react";

const EDCPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-blue-900 text-white py-20 px-6 md:px-16 lg:px-32 text-center rounded-b-3xl shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 mt-32">
          Entrepreneur Development Cell (EDC)
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Empowering students to become innovative and ethical entrepreneurs, shaping the future of industry and society.
        </p>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-16 space-y-12">
        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-4 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Target className="text-yellow-500 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-blue-900">Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create eminent entrepreneurs with creativity and ethical business practices, contributing to societal evolution and national development.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col gap-4 hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3">
              <Rocket className="text-yellow-500 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-blue-900">Mission</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
              <li>Build a strong environment to produce innovative entrepreneurs at DSU.</li>
              <li>Upgrade students' perception of entrepreneurship and motivate them to transform into entrepreneurs.</li>
            </ul>
          </motion.div>
        </div>

        {/* Objectives Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="text-yellow-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-900">Objectives</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 leading-relaxed list-decimal list-inside">
            <li>Promote and develop entrepreneurship among students.</li>
            <li>Help students channel their goals toward versatile entrepreneurs.</li>
            <li>Inculcate awareness through training programs and camps.</li>
            <li>Develop innovative thinking for new products.</li>
            <li>Enhance industry-institute relationship via guest lectures and visits.</li>
            <li>Help students acquire managerial skills for enterprise management.</li>
            <li>Generate entrepreneurship skills to cope with market trends.</li>
            <li>Enhance creative thinking to develop new products.</li>
            <li>Develop as an incubation center for all phases of entrepreneurship.</li>
            <li>Accomplish innovative products and projects.</li>
            <li>Offer advisory services to budding Entrepreneurs.</li>
            <li>Support campus/start-up companies and encourage innovation.</li>
          </ul>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-yellow-500 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-blue-900">Activities</h2>
          </div>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Invite leading entrepreneurs to share ideas and update students on industry trends.</li>
            <li>Organize Entrepreneurship Awareness Camps, Development Programs, and Skill Development Programs.</li>
            <li>Create a Regional Information Centre on business opportunities, processes, technologies, market, etc.</li>
            <li>Raise awareness of Entrepreneurship as a career option among engineering students.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default EDCPage;
