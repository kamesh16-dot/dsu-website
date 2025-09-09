import React from "react";
import { motion } from "framer-motion";

const ForeignCollaborationPage = () => {
  // image1 and image2 are props so you can pass your own URLs.
  // If you prefer hardcoded links, replace image1/image2 usage with strings.
  const img1 = "https://www.dsuniversity.ac.in/images/Kadiri-pic-01.jpg";
  const img2 =  "https://www.dsuniversity.ac.in/images/foreign-collaboration.jpg";

  return (
    <section id="foreign-collaboration" className="bg-gray-50">
      {/* Hero */}
      <div className="relative w-full h-[56vh]">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/851/311/non_2x/volunteer-travel-chalk-white-icon-on-dark-background-international-collaboration-hands-share-handshake-culture-exchange-tourism-industry-category-isolated-chalkboard-illustration-on-black-vector.jpg"
          alt="Foreign Collaboration Hero"
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Foreign Collaboration</h1>
            <p className="text-lg md:text-xl">
              International partnership to foster academic exchange, research collaboration and cultural interchange.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="prose prose-lg max-w-5xl mx-auto text-gray-800"
        >
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Dhanalakshmi Srinivasan University & Kadiri University</h2>

          <p>
            Dhanalakshmi Srinivasan University, Tiruchirappalli, Tamil Nadu has signed a Memorandum of Understanding with
            Kadiri University, Indonesia to develop academic and cultural interchange in the areas of education, research, culture
            and other activities, and to cooperate and work together towards Internationalization of higher education. The objective
            of the MOU includes:
          </p>

          {/* Objectives - lettered */}
          <div className="mt-6">
            <ol className="list-none space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-blue-600 text-white font-semibold mr-4">A</span>
                <div>
                  <strong>Exchange of professors and faculty members.</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-green-600 text-white font-semibold mr-4">B</span>
                <div>
                  <strong>Exchange of students through transfer program, top up and fast track program, internship, exchange and visits, as appropriate.</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-indigo-600 text-white font-semibold mr-4">C</span>
                <div>
                  <strong>Exchange of information, academic materials and publications in fields of mutual interest.</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-yellow-600 text-white font-semibold mr-4">D</span>
                <div>
                  <strong>Joint conferences and research projects.</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-pink-600 text-white font-semibold mr-4">E</span>
                <div>
                  <strong>Joint cultural programs, internship programs and short term visits.</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 inline-grid place-items-center w-10 h-10 rounded-md bg-red-600 text-white font-semibold mr-4">F</span>
                <div>
                  <strong>Joint any other academic activities for benefit of both parties.</strong>
                </div>
              </li>
            </ol>
          </div>

          {/* Two images placed correctly */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <article className="overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src={img1}
                alt="Foreign collaboration image 1"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Signing Ceremony / Delegation</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Photo representing the MoU signing, delegation visit, or joint events. Replace with your image for better context.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-xl shadow-lg bg-white">
              <img
                src={img2}
                alt="Foreign collaboration image 2"
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Academic Exchange / Workshops</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Image showcasing student exchanges, joint workshops, or cultural programs. Replace with your second image.
                </p>
              </div>
            </article>
          </div>

          {/* CTA or contact */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Contact International Relations Office
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeignCollaborationPage;
