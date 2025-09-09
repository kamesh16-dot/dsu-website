import React from "react";

// LifeAtDSUPage — dedicated page for "Life @ DSU" with YouTube Shorts-style row + carousel background image (responsive video height)

const cardData = [

  {
    title: "Pongal-function",
    youtube: "https://youtu.be/BGzmReBvm68?si=RaBv0HKvFDYfTRcF",
    id: "BGzmReBvm68",
  },
  {
    title: "Anantra-Event",
    youtube: "https://youtu.be/LG-InHJ-Xl0?si=mOcWb5QoLXyNad5h",
    id: "LG-InHJ-Xl0",
  },
  {
    title: "Dj-night",
    youtube: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    id: "ysz5S6PUM-U",
  },
   
];

export default function LifeAtDSUPage() {
  const [stopScroll, setStopScroll] = React.useState(false);

  return (
    <main className="min-h-screen bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 py-8 relative">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold">Campus Life @ DSU</h1>
        
        </header>

        <style>{`
          .marquee-inner { animation: marqueeScroll linear infinite; }

          @keyframes marqueeScroll { 
            0% { transform: translateX(0%); } 
            100% { transform: translateX(-30%); } 
          }
        `}</style>

        {/* Carousel section with background image */}
        <div className="relative w-full py-8 rounded-2xl overflow-hidden shadow-xl">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&auto=format&fit=crop&q=60"
            alt="Carousel background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/30 -z-10" />

          {/* Carousel */}
          <div
            className="overflow-hidden w-full relative"
            onMouseEnter={() => setStopScroll(true)}
            onMouseLeave={() => setStopScroll(false)}
          >
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black/60 to-transparent" />

            <div
              className="marquee-inner flex w-fit"
              style={{
                animationPlayState: stopScroll ? "paused" : "running",
                animationDuration: cardData.length * 2500 + "ms",
              }}
            >
              <div className="flex">
                {[...cardData, ...cardData].map((card, index) => (
                  <a
                    key={index}
                    href={card.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-44 md:w-52 mx-3 relative group hover:scale-95 transition-all duration-300 h-[18rem] md:h-[32rem]"
                  >
                    {/* YouTube thumbnail mapped by ID */}
                    <img
                      src={`https://img.youtube.com/vi/${card.id}/hqdefault.jpg`}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:blur-sm transition"
                    />

                    {/* Official YouTube play button overlay */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="68"
                        height="48"
                        viewBox="0 0 68 48"
                      >
                        <path
                          d="M66.52,7.06a8,8,0,0,0-5.65-5.65C56.84,0,34,0,34,0
                          S11.16,0,7.13,1.41A8,8,0,0,0,1.48,7.06,83.64,83.64,0,0,0,0,24
                          a83.64,83.64,0,0,0,1.48,16.94,8,8,0,0,0,5.65,5.65C11.16,48,34,48,
                          34,48s22.84,0,26.87-1.41a8,8,0,0,0,5.65-5.65A83.64,83.64,0,0,0,
                          68,24,83.64,83.64,0,0,0,66.52,7.06Z"
                          fill="#f00"
                        />
                        <path d="M45,24,27,14V34Z" fill="#fff" />
                      </svg>
                    </div>

                    {/* Title overlay centered on hover with blur background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-bold text-lg text-center drop-shadow-lg">
                        {card.title}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black/60 to-transparent" />
          </div>
        </div>

     
      </div>
    </main>
  );
}