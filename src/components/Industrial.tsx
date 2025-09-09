import React from "react";

export default function IndustryCollaborationPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: `url('https://www.kolabtree.com/blog/wp-content/uploads/2018/07/Untitled-design-1.png')`}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">Industry Collaboration</h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
            At Dhanalakshmi Srinivasan University (DSU), strategic industry partnerships drive innovation,
            hands-on learning, and research that answers real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Joint Research</span>
            <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Curriculum Alignment</span>
            <span className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Industry Training</span>
          </div>
        </div>
      </section>

      {/* Content container */}
      <section className="container mx-auto px-6 py-16 -mt-20 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold">Driving Innovation Through Partnerships</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              DSU forges alliances across technology, agriculture, manufacturing, healthcare and more to
              facilitate knowledge exchange, co-development of technologies and joint research ventures that
              solve contemporary industry challenges.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Industry-Ready Education</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              Curriculum co-designed with industry partners ensures graduates are equipped with modern skills,
              practical experience and the mindset to succeed in professional environments.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Engagement Platforms</h3>
            <p className="mt-2 text-gray-600 leading-relaxed">
              DSU hosts seminars, workshops, hackathons and conferences that keep the dialogue active between
              academia and industry, building a vibrant ecosystem for learning and innovation.
            </p>
          </article>

          <aside className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl font-bold">Impact & SDGs</h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              DSU's collaborations advance Sustainable Development Goals (SDGs) including Zero Hunger, Good
              Health & Well-being, Decent Work & Economic Growth, Responsible Consumption & Production, Life
              below Water and Life on Land.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-indigo-50 text-indigo-600 rounded-full w-10 h-10 grid place-items-center font-bold">1</div>
                <div>
                  <p className="font-semibold">Joint Research Projects</p>
                  <p className="text-sm text-gray-500">Co-funded projects focusing on practical outcomes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-indigo-50 text-indigo-600 rounded-full w-10 h-10 grid place-items-center font-bold">2</div>
                <div>
                  <p className="font-semibold">Curriculum Co-design</p>
                  <p className="text-sm text-gray-500">Industry inputs shaping modern coursework.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 bg-indigo-50 text-indigo-600 rounded-full w-10 h-10 grid place-items-center font-bold">3</div>
                <div>
                  <p className="font-semibold">Talent Development</p>
                  <p className="text-sm text-gray-500">Internships, workshops and upskilling programs.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Partnerships grid */}
        <div className="mt-14">
          <h3 className="text-2xl font-bold mb-6">Existing Partnerships</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl shadow p-6 flex gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-indigo-100 to-pink-100 flex items-center justify-center text-indigo-700 font-bold">{p.short}</div>
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/60">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dhanalakshmi Srinivasan University</p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600">Contact: industry@dsu.edu.in</div>
        </div>
      </footer>
    </main>
  );
}

const partners = [
  {
    title: "Insecticides (India) Limited, Delhi",
    short: "IIL",
    desc:
      'Collaborative research on "Development of Eco-friendly Biocides" focused on SDGs including Zero Hunger, Good Health and Responsible Consumption.'
  },
  {
    title: "IBM",
    short: "IBM",
    desc: "Access to IBM technologies for research, curriculum development and skill-building programs."
  },
  {
    title: "L&T EduTech",
    short: "L&T",
    desc: "Joint research and industry-aligned programs in AI, data analytics, IoT and sustainable tech."
  },
  {
    title: "PMC Global Systems Pvt Ltd, Chennai",
    short: "PMC",
    desc: "Technology & knowledge transfer initiatives in the Internet of Things (IoT)."
  },
  {
    title: "Dlithe Consultancy Services Pvt. Ltd, Bengaluru",
    short: "Dlithe",
    desc: "Industry-led extracurricular activities and hackathon preparation in AI, ML and cybersecurity."
  },
  {
    title: "Plasmaart Resto Pvt. Ltd., Trichy",
    short: "Plasmaart",
    desc: "Collaborative research in cell/gene therapy and tissue regeneration."
  }
];
