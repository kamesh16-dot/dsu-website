import React from "react";


const StudentsAffairs: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Full-page Hero Section */}
      <section className="relative h-screen w-full">
        <img
          src="https://www.dsuniversity.ac.in/infra/campus-img-06.jpg"
          alt="Students Affairs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Student's Affairs
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-md">
            Division of Students' Affairs at Dhanalakshmi Srinivasan University
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-gray-600 text-sm">
        Home &gt; Students' Affairs
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">About the Division</h2>
          <p className="text-gray-700 leading-relaxed">
            The Division of Students' Affairs at Dhanalakshmi Srinivasan University (DSU) 
            is the heartbeat of campus life, dedicated to nurturing a vibrant, inclusive, 
            and dynamic student community. This division goes beyond academics, ensuring 
            that every student enjoys a holistic university experience by providing unwavering 
            support in welfare, career development, and extracurricular engagement.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From grievance redressal and counseling services to leadership opportunities 
            and professional skill-building, the division empowers students to thrive in 
            all aspects of life. A diverse range of student-led clubs—including the Science 
            Club, Fine Arts Club, Music Club, Photography Club, and Environmental Club—fosters 
            creativity, innovation, and personal expression.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The university actively promotes student leadership through the Student Council 
            and cultural festivals while maintaining a strong focus on ethics, discipline, 
            and a safe learning environment through committees like the Anti-Ragging and 
            Grievance Redressal Committees.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Beyond academics, the division ensures a comfortable and enriching campus experience 
            with well-managed hostel facilities, transportation services, and recreational activities. 
            DSU’s Division of Students' Affairs is the backbone of student success, transforming their 
            university journey into a truly unforgettable experience.
          </p>
        </div>

        {/* Optional small image or illustration */}
        <div className="flex justify-center items-center">
          <img
            src="https://www.dsuniversity.ac.in/infra/campus-img-06.jpg"
            alt="Students Affairs"
            className="rounded-lg shadow-lg object-cover h-full w-full"
          />
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Join the DSU Community Today!</h3>
        <p className="mb-6">
          Explore clubs, leadership programs, and services designed to make your university life extraordinary.
        </p>
        <button className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors">
          Learn More
        </button>
      </section>
    </div>
  );
};

export default StudentsAffairs;
