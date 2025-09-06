// src/pages/Mou.jsx
import React from "react";

const Mou = () => {
  return (
    <div className="p-8 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-white mt-48">
        Memorandum of Understanding (MoU)
      </h1>

      {/* MoU 1 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU with Veranda Learning Solutions Pvt. Ltd
        </h2>
        <p className="mb-4 text-gray-700">
          The Human Resource Development Centre of our reputed university has signed 
          a Memorandum of Understanding with Veranda Learning Solutions Pvt. Ltd 
          on 22nd December 2023 at DSU Campus.
        </p>
        {/* Image Carousel */}
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-02.jpg" alt="Veranda" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-01.jpg" alt="Veranda" className="h-48 rounded-lg" />
         
        </div>
      </section>

      {/* MoU 2 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU with Morais City International Business Park
        </h2>
        <p className="mb-4 text-gray-700">
          Our Human Resource Development Centre has signed a Memorandum of Understanding 
          (MoU) with Morais City International Business Park, Tiruchirappalli on 
          16-05-2024 at DSU Campus.
        </p>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-04.jpg" alt="Morais" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-03.jpg" alt="Morais" className="h-48 rounded-lg" />
         
        </div>
      </section>

      {/* MoU 3 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU with National Research Centre for Banana
        </h2>
        <p className="mb-2 text-gray-700">
          The department of HRDC has signed MoU with:
        </p>
        <ul className="list-disc ml-6 text-gray-700 mb-4">
          <li>
            ICAR - National Research Centre for Banana (ICAR - NRCB) Central Institute 
            29th October 2024, focusing on bridging the gap between institute and academia 
            through research, internships, and knowledge sharing.
          </li>
          <li>
            The GTT Foundation, Pune – providing employability enhancement through 
            blended learning.
          </li>
          <li>
            The founder of Inlustro – exploring opportunities in Centre of Excellence, 
            Value Added programs, Impact internship program, FDP, Research and Industry 
            Consultation.
          </li>
        </ul>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-11.jpg" alt="NRCB" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-13.jpg" alt="NRCB" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-12.jpg" alt="NRCB" className="h-48 rounded-lg" />
        </div>
      </section>

      {/* MoU 4 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU with Three of the Companies
        </h2>
        <p className="mb-2 text-gray-700">
          The department of HRDC has signed MoU with three companies on 
          28th October 2024 to enhance employability:
        </p>
        <ul className="list-decimal ml-6 text-gray-700 mb-4">
          <li>Sun max Energy Systems Private Limited, Pondicherry.</li>
          <li>Balaji Consultant, Chennai.</li>
          <li>Kaarlo Training & HR Solutions Pvt Ltd, Trichy.</li>
        </ul>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-06.jpg" alt="Company" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-07.jpg" alt="Company" className="h-48 rounded-lg" />
         
        </div>
      </section>
    </div>
  );
};

export default Mou;
