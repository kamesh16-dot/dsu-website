// src/pages/MouActivity.jsx
import React from "react";

const MouActivity = () => {
  return (
    <div className="p-8 bg-gray-600 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-white mt-48">
        MOU Activities
      </h1>

      {/* Activity 1 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU Activity - 1: AWARENESS ON GOVERNMENT COMPETITIVE EXAM
        </h2>
        <p className="mb-4 text-gray-700">
          Human Resource Development Center organized awareness cum orientation programme on
          "AWARENESS ON GOVERNMENT COMPETITIVE EXAM" for the students of III year Engineering.
          This event is arranged as a part of MoU proceedings.
        </p>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-acitivity-02.jpg" alt="Awareness 1" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-acitivity-02.jpg" alt="Awareness 2" className="h-48 rounded-lg" />
         
        </div>
      </section>

      {/* Activity 2 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU Activity - 2: EMOTIONAL INTELLIGENCE IN WORKPLACE
        </h2>
        <p className="mb-4 text-gray-700">
          Human Resource Development Center organised a special Talk on "EMOTIONAL INTELLIGENCE
          IN WORKPLACE" for the Engineering Students of Second and Third year. The Resource person
          highlighted the importance of Team work and Communication in a working Environment.
        </p>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-acitivity-03.jpg" alt="Emotional 1" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/hrdc-mou-acitivity-03.jpg" alt="Emotional 2" className="h-48 rounded-lg" />
         
        </div>
      </section>

      {/* Activity 3 */}
      <section className="mb-12 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          MoU Activity - 3: Exploring the Techniques to Crack Government Examinations
        </h2>
        <p className="mb-4 text-gray-700">
          Our Human Resource Development Centre of DSU organized a programme on Exploring the
          Techniques to Crack Government Examinations for the 205 students of First Year School of
          Engineering and Technology in the branches of Mechanical, EEE, ECE & Agricultural Engineering
          on 05-09-2024 at Seminar Hall, SET Block from 11.00 a.m. to 12.30 p.m. Mr. Ramesh Kumar,
          Trainer, Government Examinations Lead and Mrs. Shantha Sheela, Branch Manager from Veranda
          Race Learning Solutions acted as Resource Persons for the programme. They elucidated the
          eligibility criteria for the various examinations like Banking, TNPSC, SSC, RRB, and UPSC.
          They opened an interaction with the students about the positions and vacancies available in
          the government sectors and emphasized constant preparation in subjects such as Quantitative
          Aptitude, General English, Logical Reasoning, Banking Awareness, Political Science and General Knowledge.
        </p>
        <div className="flex gap-4 overflow-x-auto">
          <img src="https://www.dsuniversity.ac.in/images/HRDC-MoU-Activity-3-05.jpg" alt="Techniques 1" className="h-48 rounded-lg" />
          <img src="https://www.dsuniversity.ac.in/images/HRDC-MoU-Activity-3-06.jpg" alt="Techniques 2" className="h-48 rounded-lg" />
         
        </div>
      </section>
    </div>
  );
};

export default MouActivity;
