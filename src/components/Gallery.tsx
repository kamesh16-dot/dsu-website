import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const videos = [
  { id: 1, url: "https://www.dsuniversity.ac.in/video/DSU-Vice-Chancellor-Msg.mp4" },
  { id: 2, url: "https://www.dsuniversity.ac.in/video/Campus.mp4" },
  { id: 3, url: "https://www.dsuniversity.ac.in/video/DSU_30%20SEC_V1.mp4" },
  { id: 4, url: "https://www.dsuniversity.ac.in/video/1.mp4" },
  { id: 5, url: "https://www.dsuniversity.ac.in/video/3.mp4" },
  { id: 6, url: "https://www.dsuniversity.ac.in/video/13.mp4" },
  { id: 7, url: "https://www.dsuniversity.ac.in/video/14.mp4" },
  { id: 8, url: "https://www.dsuniversity.ac.in/video/16.mp4" },
  { id: 9, url: "https://www.dsuniversity.ac.in/video/4.mp4" },
  { id: 10, url: "https://www.dsuniversity.ac.in/video/5.mp4" },
  { id: 11, url: "https://www.dsuniversity.ac.in/video/18.mp4" },

];

const CollegeVideosGallery: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const usenavigate= useNavigate()
  

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* HERO WITH IMAGE */}
      <section className="relative overflow-hidden h-96 flex items-center justify-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHc1k3_V0hZpeQKlrQFaC_hGFY1I9AsvGntGY_hKZaDMlyXP3z86vyp65fgBMIXht5g&usqp=CAU"
          alt="College Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg mt-32">
            College Video Gallery
          </h1>
         
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelected(video.url + "?autoplay=1")}
              className="group bg-white rounded-2xl shadow-md overflow-hidden relative focus:outline-none hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <div className="aspect-video bg-slate-50">
                <iframe
                  src={video.url}
                  title={`video-${video.id}`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-48 pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full bg-white/90 p-3 shadow-lg transform scale-100 group-hover:scale-110 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL PLAYER */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="relative w-full max-w-4xl rounded-xl overflow-hidden bg-black shadow-lg">
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 bg-white/80 rounded-full p-2 hover:scale-105"
              aria-label="close"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                src={selected}
                title="player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-96"
              />
            </div>
          </div>
        </div>

        
        
      )}
 <div className="mt-12 text-center" onClick={()=>usenavigate('/Photos')}>
          <p className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Explore the Campus Infrastructure
          </p>
        </div>
        
    </main>
  );
};

export default CollegeVideosGallery;
