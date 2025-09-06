import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// HomeCampusActivity - alternative design (horizontal image carousel)
// - Full-bleed image cards with overlay text
// - Horizontal scroll + snap for touch and mouse
// - Minimal controls (prev / next) and keyboard accessibility
// - Good for a homepage hero preview section

const cards = [
  {
    id: "c1",
    title: "Cultural Fest",
    subtitle: "Music • Dance • Theatre",
    img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1600&q=60&auto=format&fit=crop",
  },
  {
    id: "c2",
    title: "Sports Meet",
    subtitle: "Tournaments & Matches",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=60&auto=format&fit=crop",
  },
  {
    id: "c3",
    title: "Clubs Expo",
    subtitle: "Tech • Arts • Robotics",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1600&q=60&auto=format&fit=crop",
  },
];

export default function HomeCampusActivity() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.clientWidth ?? el.clientWidth * 0.8;
    const offset = direction === "left" ? -cardWidth - 24 : cardWidth + 24; // include gap
    el.scrollBy({ left: offset, behavior: "smooth" });
  };

  const Navigate = useNavigate()

  return (
    <section className="mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">Campus Activities & Life</h2>

          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollBy("left")}
              aria-label="Previous"
              className="p-2 rounded-md bg-white shadow hover:brightness-95"
            >
              ‹
            </button>
            <button
              onClick={() => scrollBy("right")}
              aria-label="Next"
              className="p-2 rounded-md bg-white shadow hover:brightness-95"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4"
          tabIndex={0}
          role="list"
          aria-label="Campus highlights carousel"
        >
          {cards.map((c) => (
            <article
              key={c.id}
              data-card
              role="listitem"
             onClick={()=>Navigate('/cul')} className="snap-start min-w-[320px] md:min-w-[420px] lg:min-w-[500px] rounded-2xl overflow-hidden relative flex-shrink-0"
            >
              <img src={c.img} alt={c.title} className="w-full h-56 md:h-64 object-cover" loading="lazy" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                <div>
                  <div className="inline-block bg-white/90 text-xs text-slate-800 px-3 py-1 rounded-full mb-2">Featured</div>
                  <h3 className="text-white text-lg font-semibold">{c.title}</h3>
                  <p className="text-sm text-white/90 mt-1">{c.subtitle}</p>
                  <div className="mt-3">
                    <Link
                      to="/cul"
                      className="inline-block px-3 py-1 rounded-md bg-white text-sm font-medium text-slate-900"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

