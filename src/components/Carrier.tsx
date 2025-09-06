import React from "react";

export default function CareerGuidance(): JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-500 to-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <section className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mt-48">
        {/* Hero Section with Image */}
        <div className="relative w-full h-64 md:h-80 lg:h-96">
          <img
            src="https://www.univariety.com/blog/wp-content/uploads/2018/04/career-counselling-and-guidance.jpg"
            alt="Career Guidance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
              Career Guidance Cell
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-6">
          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">About the Cell</h2>
            <p className="mt-2 text-gray-700 text-base leading-relaxed">
              Career and Counseling Cell at <span className="font-semibold text-indigo-600">Dhanalakshmi Srinivasan University</span> has been
              formulated to bridge the gap between the student's skills and the
              industry's expectations. Counseling thus addresses both academic and career
              and other opportunities.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">Our Purpose</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
              <li>Assist students in selecting appropriate careers based on their skills and interests.</li>
              <li>Work closely with students to uncover their <span className="italic">Passions, Strengths, and Interests</span>.</li>
              <li>Guide students in choosing the best career pathways.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">Workshops & Seminars</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
              <li>Personality Development</li>
              <li>Interpersonal Relationships</li>
              <li>Communication Skills</li>
              <li>Presentation Skills</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">Eminent Resource Persons</h2>
            <p className="mt-2 text-gray-700 text-base leading-relaxed">
              Eminent speakers from a variety of fields and prestigious institutions have been invited to share their insights.
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-indigo-700">Student Benefits</h2>
            <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-2">
              <li>Boosts student confidence.</li>
              <li>Provides clear information about skills required for chosen career paths.</li>
              <li>Helps students perform better academically and professionally.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
