import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, BookOpen, ExternalLink } from 'lucide-react';

// Academic Bank of Credits (ABC) — single-page component with hero image

const benefits = [
  'Secure storage of earned credits and academic achievements',
  'Flexible credit transfer between programs or institutions',
  'Easy redemption for certificate issuance via NAD',
  'Transparent student-owned academic record',
  'Faster recognition of prior learning and credentials'
];

const steps = [
  { title: 'Register with ABC', description: 'Students register using their university credentials and create an ABC account linked to NAD.' },
  { title: 'Deposit credits', description: 'Credits earned (course codes, grades, credit points) are deposited into your ABC record via the university/NAD.' },
  { title: 'Request transfer or redemption', description: 'Use ABC to request credit transfers, apply for certificate issuance, or redeem credits for eligibility.' },
  { title: 'Track & share', description: 'View your credit history, download authenticated transcripts, or share a read-only link with employers and institutions.' }
];

const faqs = [
  { q: 'What is the relationship between ABC and NAD?', a: 'NAD (National Academic Depository) is the secure digital backbone used by ABC for storing authenticated academic records. DSU uses NAD to issue and redeem credits and certificates.' },
  { q: 'Can I transfer credits to other universities?', a: 'Yes — ABC supports credit transfer requests. Transfers depend on receiving institution policies and equivalence checks.' },
  { q: 'Is my data safe?', a: 'Student academic records are stored on NAD and accessed through ABC using secure authorization. Privacy and consent controls are built into the system.' },
  { q: 'How do I get help?', a: 'Contact the ABC helpdesk at enquiry@dsuniversity.ac.in or visit the registrar’s office for in-person support.' }
];

export default function ABCPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 font-sans text-slate-800">
      {/* HERO WITH IMAGE */}
      <section className="relative bg-slate-400">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1600&auto=format&fit=crop&q=60"
            alt="Academic Credits Hero"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative py-48">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold text-amber-900">Academic Bank of Credits (ABC)</motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-4 text-lg text-slate-700">
                  In line with the National Academic Depository (NAD), the Academic Bank of Credits (ABC) at
                  Dhanalakshmi Srinivasan University securely stores students’ credits and academic achievements — enabling registration, credit transfer and authenticated certificate issuance.
                </motion.p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                
                  <a href="https://nad.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border bg-amber-100 border-amber-600 text-amber-700 px-4 py-3 rounded-lg hover:bg-amber-50 transition">Learn about NAD <ExternalLink className="w-4 h-4" /></a>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.slice(0,4).map((b, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white/80 rounded-lg shadow-sm">
                      <CheckCircle className="w-6 h-6 text-amber-600 mt-1" />
                      <div className="text-sm text-slate-700">{b}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl shadow-lg overflow-hidden bg-white/90 backdrop-blur-sm">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg">Why ABC matters</h3>
                    <p className="mt-2 text-sm text-slate-600">ABC gives students control over their earned credits, makes transfers smoother, and ensures certificates issued via NAD are verifiable and tamper-proof.</p>

                    <ul className="mt-4 space-y-2 text-sm">
                      {benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2"><span className="text-amber-600">•</span>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-4 text-sm text-slate-600">Need help? Contact: <a href="mailto:enquiry@dsuniversity.ac.in" className="text-amber-600 hover:underline">enquiry@dsuniversity.ac.in</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">How ABC works at DSU</h2>
            <p className="mt-2 text-slate-600 max-w-2xl mx-auto">A simple flow from registration to credit redemption using NAD.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.article key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }} className="bg-white p-5 rounded-xl shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 rounded-md p-2"><BookOpen className="w-5 h-5 text-amber-700" /></div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{s.title}</h4>
                    <p className="text-sm text-slate-600 mt-1">{s.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* TABLE / DETAILS */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4">Credits & Records — what’s stored</h3>

          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="text-left bg-amber-50">
                <tr>
                  <th className="p-3">Field</th>
                  <th className="p-3">Stored Data</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Course & Code</td>
                  <td className="p-3">Course title, course code, semester</td>
                </tr>
                <tr className="border-t bg-slate-50">
                  <td className="p-3 font-medium">Credits</td>
                  <td className="p-3">Credit points earned for each course</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Grade / Outcome</td>
                  <td className="p-3">Grade, pass/fail or competency outcome</td>
                </tr>
                <tr className="border-t bg-slate-50">
                  <td className="p-3 font-medium">Certificate Issuance</td>
                  <td className="p-3">Authenticated certificate records issued via NAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-xl font-semibold mb-4">Frequently asked questions</h3>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="bg-white rounded-lg p-4 shadow-sm">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
