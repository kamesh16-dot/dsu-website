import React from "react";

export default function ScholarshipPage(): JSX.Element {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="relative h-screen flex items-center justify-center bg-center bg-cover" style={{backgroundImage: `url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80')`}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">DSU Doctoral Fellowship</h1>
        

          
        </div>
      </header>

      {/* Main content */}
      <section id="details" className="container mx-auto px-6 py-16 -mt-24 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Dhanalakshmi Srinivasan University doctoral fellowship (DSU–Doctoral Fellowship) is awarded to
            meritorious full‑time research scholars on the recommendation of the selection committee and
            approval of the Dean – Centre for Research.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-semibold">Monthly Stipend</h3>
              <p className="mt-2 text-xl font-bold">₹20,000 / month</p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-semibold">Contingency Grant</h3>
              <p className="mt-2 text-xl font-bold">₹50,000 / year</p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-xl">
              <h3 className="font-semibold">Duration</h3>
              <p className="mt-2 text-xl font-bold">Minimum 2 years (extendable by 1 year)</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Eligibility & Selection</h3>
            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2">
              <li>Open to meritorious full‑time Ph.D. research scholars registered at DSU.</li>
              <li>Selection will be based on a pre‑registration eligibility entrance exam followed by an interview.</li>
              <li>Final award is subject to the recommendation of the selection committee and approval of the Dean – Centre for Research.</li>
              <li>Candidates are encouraged to seek external fellowships (JRF/SRF from UGC, CSIR, etc.).</li>
            </ul>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
            <div>
              <h3 className="text-lg font-semibold">Application Process</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Interested candidates should submit the completed application form along with required
                documents to the Centre for Research. Shortlisted applicants will be called for the
                entrance test and interview. Fellowship awards are announced after committee recommendation.
              </p>

              <a id="apply" href="mailto:research@dsu.edu.in" className="mt-6 inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full font-semibold">
                Contact Research Office
              </a>
            </div>

            <aside className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold">Need to know</h4>
              <ul className="mt-3 list-disc list-inside text-gray-600 space-y-2 text-sm">
                <li>Stipend and contingency are subject to DSU rules and periodic review.</li>
                <li>Extension beyond the initial period depends on satisfactory research progress.</li>
                <li>Awardees are encouraged to also pursue external funding alongside DSU support.</li>
                <li>For timelines and forms, contact Centre for Research: <br /><span className="font-medium">research@dsu.edu.in</span></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/60">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dhanalakshmi Srinivasan University</p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600">Centre for Research • research@dsu.edu.in</div>
        </div>
      </footer>
    </main>
  );
}
