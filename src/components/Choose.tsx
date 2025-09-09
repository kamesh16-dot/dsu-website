import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  BookOpen,
  Users,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle,
  Sparkles,
  Briefcase,
} from "lucide-react";

const reasons = [
  { title: "Industry-aligned Curriculum", desc: "Programs updated with industry input...", icon: BookOpen, color: "from-sky-500 to-indigo-500" },
  { title: "Strong Placement Support", desc: "Dedicated placement cell...", icon: Users, color: "from-emerald-400 to-sky-600" },
  { title: "Research & Innovation", desc: "Active R&D centres...", icon: Globe, color: "from-violet-500 to-rose-500" },
  { title: "Experienced Faculty", desc: "Faculty with industry backgrounds...", icon: Award, color: "from-amber-400 to-orange-500" },
  { title: "Safe, Student-first Campus", desc: "Well-being and modern facilities...", icon: ShieldCheck, color: "from-cyan-400 to-sky-600" },
  { title: "Strategic Location — Trichy", desc: "Centrally located with connectivity...", icon: MapPin, color: "from-lime-400 to-emerald-500" },
];

const stats = [
  { label: "Students Placed", value: "8,500+", small: "Career-ready graduates" },
  { label: "Recruiters", value: "300+", small: "National & global" },
  { label: "Avg. Package", value: "₹6.2 LPA", small: "Across streams" },
  { label: "Research Grants", value: "120+", small: "Sponsored projects" },
];

const ProgramCard = ({ title, bullets, icon: Icon, gradient }) => (
  <article className="bg-gradient-to-br rounded-2xl p-4 shadow-2xl backdrop-blur-sm bg-opacity-10 ring-1 ring-white/6">
    <div className={`inline-flex p-2 rounded-xl bg-white/5 ring-1 ring-white/6 mb-3 ${gradient}`}>
      <Icon className="w-5 h-5 text-white/90" />
    </div>
    <h4 className="text-white font-semibold text-base">{title}</h4>
    <ul className="mt-2 text-xs text-slate-300 space-y-1">
      {bullets.map((b, i) => (<li key={i}>• {b}</li>))}
    </ul>
  </article>
);

const WhyChooseDsu = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.12 });

  return (
    <section ref={ref} id="why-choose-dsu" className="relative pb-12 md:pb-20 overflow-hidden">
      {/* HERO (no negative -mx that overflows) */}
      <div className="relative">
        <div
          className="h-56 sm:h-72 md:h-96 rounded-b-3xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(6,8,27,0.6), rgba(6,8,27,0.7)), url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1400&auto=format&fit=crop')",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="max-w-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Why choose <span className="text-amber-300">DSU — Trichy</span> for engineering?
              </h1>
              <p className="mt-3 text-slate-200 text-sm sm:text-base">
                Transformative learning, industry partnerships and campus life crafted to launch high-impact careers and research.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <a href="#programs" className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-slate-900 px-3 py-2 rounded-lg text-sm font-semibold">Explore Programs</a>
                <a href="#placement" className="inline-flex items-center gap-2 border border-white/20 text-white/90 px-3 py-2 rounded-lg hover:bg-white/5 text-sm">Placement & Partners</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (use container with px to avoid horizontal overflow) */}
      <div className="max-w-6xl lg:mt-10  mx-auto px-4 sm:px-6  sm:mt-28 md:-mt-12">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 grid gap-6">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {reasons.slice(0, 4).map((r) => {
                const Icon = r.icon;
                return (
                  <motion.article key={r.title} whileHover={{ y: -6 }} className="relative rounded-xl p-4 sm:p-5 bg-slate-800/60 ring-1 ring-white/6">
                    <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-2 h-16 sm:h-20 rounded-r-full bg-gradient-to-b ${r.color}`} />
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-white/6"><Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                      <div><h3 className="text-white font-semibold text-sm sm:text-base">{r.title}</h3><p className="mt-1 text-xs sm:text-sm text-yellow-300">{r.desc}</p></div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {reasons.slice(4).map((r) => {
                const Icon = r.icon;
                return (
                  <motion.article key={r.title} whileHover={{ scale: 1.02 }} className="rounded-xl p-4 sm:p-5 bg-slate-900/50 ring-1 ring-white/6">
                    <div className="flex items-start gap-3"><div className="p-2 sm:p-3 rounded-lg bg-white/6"><Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" /></div><div><h3 className="text-white font-semibold text-sm sm:text-base">{r.title}</h3><p className="mt-1 text-xs sm:text-sm text-yellow-300">{r.desc}</p></div></div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <div>
            <div className="rounded-2xl p-4 md:p-6 bg-gradient-to-tr from-slate-900/70 to-slate-800/60 ring-1 ring-white/6 shadow-2xl">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-white text-lg md:text-xl  font-bold">Programs & Skill Paths</h4>
                  <p className="mt-1 text-slate-300 text-xs md:text-sm">Undergraduate, postgraduate & research with industry-driven skilling programs.</p>
                </div> 
                <div className="inline-flex p-2 md:p-3 rounded-lg bg-white/5"><Sparkles className="w-5 h-5 md:w-6 md:h-6 text-amber-300" /></div>
              </div>

              <div className="mt-4 grid gap-3">
                <ProgramCard title="Undergraduate (B.E / B.Tech)" bullets={["Core & emerging streams","Accredited labs & workshops"]} icon={Briefcase} gradient="bg-gradient-to-br from-indigo-600 to-sky-500" />
                <ProgramCard title="Postgraduate & Research" bullets={["M.E / M.Tech / MBA / PhD","Sponsored projects & publications"]} icon={BookOpen} gradient="bg-gradient-to-br from-emerald-500 to-teal-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* stats row */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.06 }} className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl p-4 bg-slate-900/60 ring-1 ring-white/6">
              <div className="text-xs text-slate-300">{s.label}</div>
              <div className="mt-2 text-lg md:text-2xl text-yellow-400 font-bold">{s.value}</div>
              <div className="mt-1 text-xs text-white">{s.small}</div>
            </div>
          ))}
        </motion.div>

        {/* testimonials */}
       
         

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default WhyChooseDsu;
