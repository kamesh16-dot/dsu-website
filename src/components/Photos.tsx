import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const photos = [
  { id: 1, src: "https://www.dsuniversity.ac.in/gallery/g1.jpg", alt: "Main Building" },
  { id: 2, src: "https://www.dsuniversity.ac.in/gallery/g2.jpg", alt: "Library" },
  { id: 3, src: "https://www.dsuniversity.ac.in/gallery/g3.jpg", alt: "Laboratory" },
  { id: 4, src: "https://www.dsuniversity.ac.in/gallery/g4.jpg", alt: "Auditorium" },
  { id: 5, src: "https://www.dsuniversity.ac.in/gallery/g5.jpg", alt: "Sports Ground" },
  { id: 6, src: "https://www.dsuniversity.ac.in/gallery/g6.jpg", alt: "Cafeteria" },
  { id: 7, src: "https://www.dsuniversity.ac.in/gallery/g7.jpg", alt: "Auditorium" },
  { id: 8, src: "https://www.dsuniversity.ac.in/gallery/g8.jpg", alt: "Sports Ground" },
  { id: 9, src: "https://www.dsuniversity.ac.in/gallery/g9.jpg", alt: "Cafeteria" },
  { id: 10, src: "https://www.dsuniversity.ac.in/gallery/g10.jpg", alt: "Auditorium" },
  { id: 11, src: "https://www.dsuniversity.ac.in/gallery/g11.jpg", alt: "Sports Ground" },
  { id: 12, src: "https://www.dsuniversity.ac.in/gallery/g12.jpg", alt: "Cafeteria" },
    { id: 13, src: "https://www.dsuniversity.ac.in/gallery/g13.jpg", alt: "Auditorium" },
  { id: 14, src: "https://www.dsuniversity.ac.in/gallery/g14.jpg", alt: "Sports Ground" },
  { id: 15, src: "https://www.dsuniversity.ac.in/gallery/g15.jpg", alt: "Cafeteria" },
];

const CampusInfrastructure: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const usenaviagte = useNavigate()

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = () => setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <main className="min-h-screen bg-gray-500 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-40">Campus Infrastructure</h1>
        </header>

        <section className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.id}
              onClick={() => openAt(i)}
              className="block rounded-xl overflow-hidden shadow-lg bg-white focus:outline-none transform hover:scale-105 transition"
              aria-label={`open-${p.alt}`}
            >
              <img src={p.src} alt={p.alt} className="w-full h-44 object-cover" />
            </button>
          ))}
        </section>

        {/* Lightbox modal */}
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-xl">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-20 bg-white/90 rounded-full p-2 hover:scale-105"
                aria-label="close"
              >
                ✕
              </button>

              <div className="aspect-video bg-black">
                <img src={photos[index].src} alt={photos[index].alt} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center justify-between p-4 bg-white">
                <div />
                <div className="flex items-center gap-3">
                  <button onClick={prev} className="px-3 py-2 rounded bg-slate-100 hover:bg-slate-200">Prev</button>
                  <button onClick={next} className="px-3 py-2 rounded bg-slate-100 hover:bg-slate-200">Next</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explore Button */}
        <div className="mt-12 text-center" onClick={()=> usenaviagte('/Gallery')}>
          <p
          
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Back to gallery
          </p>
        </div>
      </div>
    </main>
  );
};

export default CampusInfrastructure;
