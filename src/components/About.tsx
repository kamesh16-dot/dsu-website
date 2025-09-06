import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Award, Users, Microscope } from 'lucide-react';

// Redesigned About section — modern, card-driven, accessible, and animated.
// TailwindCSS required. Uses framer-motion for entrance/transitions and lucide-react for icons.

export default function AboutRedesign() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-120px' });

  // Animated counters (simple, lightweight)
  const stats = [
    { id: 'students', icon: Users, label: 'Students', value: 8500 },
    { id: 'programs', icon: Award, label: 'Programs', value: 15 },
    { id: 'placement', icon: Target, label: 'Placement Rate', value: 94 },
  ];

  const [counters, setCounters] = useState(() => stats.map(() => 0));

  // Simple ease-out counter animation
  useEffect(() => {
    if (!isInView) return;
    const durations = [1400, 1000, 1200];
    const target = stats.map((s) => s.value);

    const start = performance.now();
    let rafId;

    const animate = (now) => {
      const elapsed = now - start;
      const next = target.map((t, i) => {
        const d = durations[i];
        const progress = Math.min(elapsed / d, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        return Math.floor(eased * t);
      });
      setCounters(next);
      if (elapsed < Math.max(...durations)) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView]);

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-white via-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center mb-12"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              About School of Engineering & Technology
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-700 max-w-xl">
              Dhanalakshmi Srinivasan University (DSU) is dedicated to academic excellence, innovation,
              and holistic student development. With world-class infrastructure, experienced faculty,
              and strong industry collaborations, DSU nurtures future-ready engineers who contribute
              to society with knowledge, skills, and values.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/program"
                className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-sky-700 transition"
              >
                Explore Programs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md text-slate-700 hover:shadow-sm transition"
              >
                Contact Admissions
              </a>
            </div>
          </div>

          {/* Accent card with college photo */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-100 h-80"
          >
            <img
              src="https://www.dsuniversity.ac.in/infra/campus-img-01.jpg"
              alt="College Campus"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.header>

        {/* Vision / Mission / Core Values cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.article
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-1 bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 rounded-md bg-amber-50">
                <Eye className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold">Vision</h3>
            </div>
            <p className="text-slate-600">To empower students to become leaders in engineering and technology, driving innovation and ethical practice worldwide.</p>
          </motion.article>

          <motion.article
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="col-span-1 bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 rounded-md bg-sky-50">
                <Microscope className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold">Mission</h3>
            </div>
            <p className="text-slate-600">Deliver transformative education through project-based learning, research, and strong industry ties.</p>
          </motion.article>

          <motion.article
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="col-span-1 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 rounded-md bg-white/10">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Core Values</h3>
            </div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>• Excellence — high academic & research standards</li>
              <li>• Innovation — creative problem solving & entrepreneurship</li>
              <li>• Integrity — ethical conduct & social responsibility</li>
              <li>• Collaboration — partnerships with industry & community</li>
            </ul>
          </motion.article>
        </div>

        {/* Statistics grid */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">By the numbers</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((s, i) => {
              const Icon = s.icon;
              const display = s.label === 'Placement Rate' ? `${counters[i]}%` : `${counters[i]}${s.label === 'Programs' ? '+' : s.label === 'Students' ? '+' : ''}`;

              return (
                <motion.div
                  key={s.id}
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-full bg-slate-50 ring-1 ring-slate-100">
                      <Icon className="h-7 w-7 text-sky-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-extrabold text-slate-900">{display}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Callout / CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-sky-50 via-white to-indigo-50 p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-lg font-bold text-slate-900">Ready to start your engineering journey?</h4>
            <p className="text-slate-600 mt-1">Apply now or schedule a campus visit to experience our labs and community firsthand.</p>
          </div>
          <div className="flex-shrink-0 flex gap-3">
            <a className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded-md shadow hover:bg-sky-700 transition" href="#apply">Apply Now</a>
            <a className="inline-flex items-center px-4 py-2 border border-slate-200 rounded-md text-slate-700 hover:shadow-sm transition" href="#visit">Schedule Visit</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}