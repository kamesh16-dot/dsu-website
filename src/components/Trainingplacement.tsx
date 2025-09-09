import React from "react";

export default function TrainingPlacementPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <header
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1341238845/vector/business-presentation-flat-color-vector-illustration.jpg?s=612x612&w=0&k=20&c=Q_ZdJGoS09hmX5NrrzpKx94sC-os_xus3pGpYsBYRTA=')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Training & Placement Cell</h1>
          <p className="mt-4 text-sm md:text-lg text-gray-200">
            Preparing DSU students for successful careers — industry-ready skills, internships, in-plant training
            and campus placements through structured programs and industry partnerships.
          </p>

         
        </div>
      </header>

      {/* Core sections */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold">About the Cell</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The Training & Placement Cell specialises in helping students develop employability skills and
              securing the best placements. With a deep understanding of industry expectations, the cell runs
              targeted events that expose students to the world of work and prepare them for professional
              success.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-indigo-50 rounded-xl">
                <h3 className="font-semibold">Workshops & Webinars</h3>
                <p className="mt-2 text-gray-600 text-sm">Regular sessions on soft skills, domain tools and case studies.</p>
              </div>

              <div className="p-6 bg-indigo-50 rounded-xl">
                <h3 className="font-semibold">Internships & In-plant Training</h3>
                <p className="mt-2 text-gray-600 text-sm">Hands-on exposure with corporate partners before graduation.</p>
              </div>

              <div className="p-6 bg-indigo-50 rounded-xl">
                <h3 className="font-semibold">Personality Development</h3>
                <p className="mt-2 text-gray-600 text-sm">Sessions on communication, leadership and confidence building.</p>
              </div>

              <div className="p-6 bg-indigo-50 rounded-xl">
                <h3 className="font-semibold">Technical & Aptitude Training</h3>
                <p className="mt-2 text-gray-600 text-sm">Training in Quant, Reasoning, Coding and domain skills from 2nd year onwards.</p>
              </div>
            </div>

            <h3 className="mt-8 text-lg font-semibold">How We Work</h3>
            <ol className="mt-3 list-decimal list-inside text-gray-600 space-y-2">
              <li>Identify industry needs through continuous engagement with corporate partners.</li>
              <li>Design and deliver tailored training modules with academic and industry experts.</li>
              <li>Provide career counselling, mock interviews and placement drives on campus.</li>
              <li>Encourage certifications, projects and internships to strengthen student profiles.</li>
            </ol>
          </article>

          <aside className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold">Quick Facts</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li><strong>Trainings:</strong> Webinars, Workshops, Guest Lectures</li>
              <li><strong>Focus:</strong> Aptitude, English, Soft Skills, Technical</li>
              <li><strong>Support:</strong> Internship & In‑plant placements</li>
              <li><strong>From:</strong> Training begins from 2nd Year onward</li>
            </ul>

            <div className="mt-6">
              <h4 className="font-semibold">Contact</h4>
              <p className="mt-2 text-sm text-gray-600">Training & Placement Cell<br />Dhanalakshmi Srinivasan University</p>
              <a href="mailto:placement@dsu.edu.in" className="mt-3 inline-block text-sm text-indigo-600 font-medium">placement@dsu.edu.in</a>
            </div>
          </aside>
        </div>

        {/* Programs */}
        <div id="programs" className="mt-14">
          <h3 className="text-2xl font-bold mb-6">Programs & Activities</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">Personality Development Program</h4>
              <p className="mt-2 text-sm text-gray-600">Soft skills, confidence building, group dynamics and presentation practice.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">Career Readiness Workshops</h4>
              <p className="mt-2 text-sm text-gray-600">Resume building, LinkedIn profile coaching, interview simulations.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">Technical Bootcamps</h4>
              <p className="mt-2 text-sm text-gray-600">Domain-specific mini‑courses (AI/ML, Web, Embedded systems, Data Analytics).</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">Mock Interviews & Aptitude Tests</h4>
              <p className="mt-2 text-sm text-gray-600">Regular mocks with feedback from industry mentors.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">In-house Training</h4>
              <p className="mt-2 text-sm text-gray-600">Intensive training modules delivered by experts and faculty.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold">Industry Connect</h4>
              <p className="mt-2 text-sm text-gray-600">Guest lectures, industry visits and corporate mentorship programs.</p>
            </div>
          </div>
        </div>

      </section>

      <footer className="border-t bg-white/60">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dhanalakshmi Srinivasan University</p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600">Training & Placement Cell • placement@dsu.edu.in</div>
        </div>
      </footer>
    </main>
  );
}
