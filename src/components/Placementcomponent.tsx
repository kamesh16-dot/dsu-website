import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";

const statsConfig = [
  { Icon: Users, label: "Students Placed", value: 8500 },
  { Icon: Award, label: "Recruiters", value: 300 },
  { Icon: TrendingUp, label: "Placement Rate", value: 94 },
  { Icon: Briefcase, label: "Highest Package", value: 25 },
];

const defaultCompanyLogos = [
  "https://www.dsuniversity.ac.in/img/lc1.jpg",
  "https://www.dsuniversity.ac.in/img/lc2.jpg",
  "https://www.dsuniversity.ac.in/img/lc3.jpg",
  "https://www.dsuniversity.ac.in/img/lc4.jpg",
  "https://www.dsuniversity.ac.in/img/lc5.jpg",
  "https://www.dsuniversity.ac.in/img/lc6.jpg",
  "https://www.dsuniversity.ac.in/img/lc7.jpg",
  "https://www.dsuniversity.ac.in/img/lc8.jpg",
  "https://www.dsuniversity.ac.in/img/lc9.jpg",
  "https://www.dsuniversity.ac.in/img/lc10.jpg",
  "https://www.dsuniversity.ac.in/img/lc12.jpg",
  "https://www.dsuniversity.ac.in/img/lc13.jpg",
  "https://www.dsuniversity.ac.in/img/lc14.jpg",
  "https://www.dsuniversity.ac.in/img/lc15.jpg",
  "https://www.dsuniversity.ac.in/img/lc16.jpg",
  "https://www.dsuniversity.ac.in/img/lc17.jpg",
  "https://www.dsuniversity.ac.in/img/lc18.jpg",
  "https://www.dsuniversity.ac.in/img/lc19.jpg",
  "https://www.dsuniversity.ac.in/img/lc20.jpg",
];

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

const Placement = ({ companyLogos = defaultCompanyLogos }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [counters, setCounters] = useState(statsConfig.map(() => 0));
  const trackBRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const targets = statsConfig.map((s) => s.value);
    let raf = null;
    const step = (now) => {
      const t = clamp((now - start) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCounters(targets.map((v) => Math.round(v * eased)));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [inView]);

  // resolve logo url (either plain name -> github svg or full url)
  const resolveLogoSrc = (logo) => {
    if (typeof logo === "string" && logo.trim() !== "" && !/^https?:\/\//i.test(logo)) {
      return `https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${logo}.svg`;
    }
    return logo;
  };

  // two rows data
  const rowA = [...companyLogos];
  const rowB = [...companyLogos].slice().reverse();

  // flip second track visually while keeping DOM layout intact
  useEffect(() => {
    const el = trackBRef.current;
    if (!el) return;
    el.style.transform = "scaleX(-1)";
    // flip each child back so images aren't mirrored
    Array.from(el.querySelectorAll(".marquee-item")).forEach((child) => {
      child.style.transform = "scaleX(-1)";
    });
  }, []);

  return (
    <section
      id="placement"
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-sky-50 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Placement Success</h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3">
            Empowering students with career opportunities at leading global companies. Our strong recruiter network ensures a bright future.
          </p>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {statsConfig.map((s, i) => {
            const display =
              s.label === "Placement Rate"
                ? `${counters[i]}%`
                : s.label === "Highest Package"
                ? `₹${counters[i]} LPA`
                : `${counters[i]}+`;
            return (
              <div key={s.label} className="bg-white rounded-lg shadow-sm p-4 text-center">
                <s.Icon className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-xl md:text-2xl font-bold text-gray-800">{display}</div>
                <div className="text-xs md:text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-center text-lg font-semibold text-gray-800 mb-4">
            Top Recruiters & Partners
          </h3>

          <div className="space-y-4">
            {/* Row A */}
            <div className="relative overflow-hidden rounded-xl bg-white/60 px-3 py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

              {/* track wrapper keeps overflow hidden; track itself is max-content (no page overflow) */}
              <div
                className="marquee-track flex gap-3 items-center will-change-transform box-border"
                style={{ animation: "marquee-left 18s linear infinite" }}
                onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
                onTouchStart={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onTouchEnd={(e) => (e.currentTarget.style.animationPlayState = "running")}
              >
                {/* duplicate the inline items — track width is determined by content (max-content) */}
                {[...rowA, ...rowA].map((logo, idx) => {
                  const src = resolveLogoSrc(logo);
                  return (
                    <div
                      key={`a-${idx}`}
                      className="marquee-item shrink-0 w-28 sm:w-36 h-16 sm:h-20 flex items-center justify-center p-1 bg-white/90 rounded-md"
                    >
                      <img
                        src={src}
                        alt={`company-${idx}`}
                        className="max-h-10 max-w-full object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row B - reversed visual direction (slower) */}
            <div className="relative overflow-hidden rounded-xl bg-white/60 px-3 py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />

              <div
                ref={trackBRef}
                className="marquee-track flex gap-3 items-center will-change-transform box-border"
                style={{ animation: "marquee-left 28s linear infinite" }}
                onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
                onTouchStart={(e) => (e.currentTarget.style.animationPlayState = "paused")}
                onTouchEnd={(e) => (e.currentTarget.style.animationPlayState = "running")}
              >
                {[...rowB, ...rowB].map((logo, idx) => {
                  const src = resolveLogoSrc(logo);
                  return (
                    <div
                      key={`b-${idx}`}
                      className="marquee-item shrink-0 w-28 sm:w-36 h-16 sm:h-20 flex items-center justify-center p-1 bg-white/90 rounded-md"
                    >
                      <img
                        src={src}
                        alt={`company-b-${idx}`}
                        className="max-h-10 max-w-full object-contain"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <style>{`
            /* The track uses max-content width so it doesn't push the page width.
               The animation translates the track left by 50% of its own width to loop smoothly. */
            .marquee-track {
              width: max-content;
            }

            @keyframes marquee-left {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            /* small safeguard: prevent any element from creating viewport overflow due to transforms */
            section#placement, section#placement * {
              -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Placement;
