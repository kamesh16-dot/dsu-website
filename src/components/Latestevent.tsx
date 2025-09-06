import React, { useState } from "react";

/**
 * LatestEventsPage.tsx
 * - LEFT (2/3): horizontal marquee carousel showing 4 latest posters (click opens modal)
 * - RIGHT (1/3): upcoming event card with details + CTAs
 *
 * Transparent style, wider carousel cards. Cloudinary URLs use f_auto to serve web-friendly formats.
 */

type Poster = {
  id: string;
  title: string;
  date: string;
  venue?: string;
  desc?: string;
  src: string;
  youtube?: string;
};

const POSTERS: Poster[] = [
  {
    id: "e1",
    title: "science club event ",
    date: "",
    src: "https://res.cloudinary.com/ds5x8xtyg/image/upload/f_auto/v1757185103/539096570_18058271357594845_24648575558765786_n_copy_uasgvd.tiff",
  },
  {
    id: "e2",
    title: "Onam function",
    date: "",
    src: "https://res.cloudinary.com/ds5x8xtyg/image/upload/f_auto/v1757185102/541349244_18059384348594845_8431253069464640150_n_copy_tk3h16.tiff",
  },
  {
    id: "e3",
    title: "Tech Flare sympoisum",
    date: "",
    src: "https://res.cloudinary.com/ds5x8xtyg/image/upload/f_auto/v1757185100/535316149_18057647024594845_6825782427301784855_n_copy_s0gg0z.tiff",
  },
  {
    id: "e4",
    title: "short film conterst",
    date: "",
    src: "https://res.cloudinary.com/ds5x8xtyg/image/upload/v1757185090/538841281_18058271039594845_6277286876640892192_n_fukg9e.jpg",
  },
];

export default function LatestEventsPage() {
  const [open, setOpen] = useState<null | Poster>(null);
  const [stopScroll, setStopScroll] = useState(false);

  const carouselPosters = POSTERS.slice(0, 4);

  return (
    <main className="min-h-screen bg-transparent py-12">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold">Latest Events In Dsu</h1>
         
        </header>

        <style>{`
          .marquee-inner { animation: marqueeScroll linear infinite; }
          @keyframes marqueeScroll { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        `}</style>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* LEFT: Carousel */}
          <div className="md:col-span-2">
            <div
              className="overflow-hidden w-full relative py-8"
              onMouseEnter={() => setStopScroll(true)}
              onMouseLeave={() => setStopScroll(false)}
            >
              <div
                className="marquee-inner flex w-fit"
                style={{
                  animationPlayState: stopScroll ? "paused" : "running",
                  animationDuration: carouselPosters.length * 2400 + "ms",
                }}
              >
                <div className="flex items-stretch py-2">
                  {[...carouselPosters, ...carouselPosters].map((p, i) => (
                    <button
                      key={i}
                      onClick={() => setOpen(p)}
                      className="w-64 md:w-80 mx-4 relative group hover:scale-95 transition-all duration-300 h-[20rem] md:h-[28rem] rounded-lg overflow-hidden"
                      aria-label={`Open poster ${p.title}`}
                    >
                      <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
                      
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-black/30 flex items-end p-4">
                        <div className="text-white font-semibold">{p.title}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Upcoming Event */}
          {/* RIGHT: Redesigned Upcoming Event Card */}
<aside className="md:col-span-1">
  <div className="rounded-2xl overflow-hidden border border-gray-200">
    {/* Top image with gradient overlay */}
    <div className="relative h-64">
      <img src="data:image/jpeg;base64,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" alt={POSTERS[0].title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute left-4 top-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Upcoming</div>
      <div className="absolute right-4 bottom-4 bg-white/90 px-2 py-1 rounded text-xs font-medium">{POSTERS[0].date}</div>
    </div>

    {/* Content area */}
    <div className="p-5 bg-white">
      <h3 className="text-lg font-bold">title-anounce-will-soon</h3>
      <p className="text-sm text-slate-600 mt-2">
        Stay tuned — details and registration opening soon. Follow the student portal for updates.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={() => setOpen(POSTERS[0])}
          className="w-full px-3 py-2 rounded-md border text-sm font-medium hover:bg-slate-50"
        >
          Details
        </button>

        <a
          href={POSTERS[0].youtube ?? "#"}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center px-3 py-2 rounded-md bg-red-600 text-white font-semibold text-sm"
        >
          Watch
        </a>
      </div>

      <div className="mt-4 text-xs text-slate-400">Location: {POSTERS[0].venue ?? "Campus"}</div>
    </div>
  </div>
</aside>

        </section>

       
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full overflow-hidden">
            <div className="relative">
              <button onClick={() => setOpen(null)} className="absolute right-3 top-3 bg-white rounded-full p-2 shadow">✕</button>
              <img src={open.src} alt={open.title} className="w-full h-96 object-cover" />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold">{open.title}</h2>
              <p className="mt-3 text-slate-700">{open.desc}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
