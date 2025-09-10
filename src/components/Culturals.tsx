import { useState, useRef, useEffect } from 'react';
import {

  Music,
  Palette,
  Users,
  Star,
  
  Play,

} from 'lucide-react';

// Types for our cultural events
interface CulturalEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;


  featured?: boolean;
}

// <-- HERO IMAGE: change this URL to use your own image or local path (e.g. '/images/hero.jpg') -->
const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600';

const CulturalEventsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [scrollY, setScrollY] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const eventsGridRef = useRef<HTMLElement | null>(null);

  // Sample cultural events data
  const culturalEvents: CulturalEvent[] = [
    {
      id: 1,
      title: 'Ananthara',
      description:
        'Join us for a spectacular day of traditional Indian music performances and cultural celebrations on campus.',
      date: '2025-10-15',
      time: '6:00 PM',
      venue: 'College Amphitheater',
      image:
        'https://www.sathyabama.ac.in/sites/default/files/inline-images/0S5A1147.JPG', // truncated in display
      
      featured: true
    },
    {
      id: 2,
      title: 'DJ Night',
      description:
        'Watch our dance teams compete in vibrant traditional and contemporary Indian styles.',
      date: '2025-10-22',
      time: '4:00 PM',
      venue: 'Main Auditorium',
      image:
        'https://thf.bing.com/th/id/OIP.o1S2Ztb9JjuOTYhjFcWPVwHaEJ?w=288&h=180&c=7&r=0&o=5&cb=thfc1&pid=1.7',
      
    },
    {
      id: 3,
      title: 'Pongal',
      description:
        'Showcasing the creative works of our students inspired by Indian heritage and modern art.',
      date: '2025-10-29',
      time: '10:00 AM',
      venue: 'Art Gallery',
      image:
        'https://thf.bing.com/th/id/OIP.Hb7tjl09rHwEPk8AIPsr-gHaHa?w=166&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3',
     
    },
    {
      id: 4,
      title: 'Onam',
      description:
        'Our theater group presents an original play drawing from Indian folklore and contemporary themes.',
      date: '2025-11-05',
      time: '7:00 PM',
      venue: 'Black Box Theater',
      image:
        'https://images.pexels.com/photos/29451111/pexels-photo-29451111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      
    },
    {
      id: 5,
      title: 'Food Festival',
      description:
        'Poetry readings, author talks, and workshops on Indian literature and global perspectives.',
      date: '2025-11-12',
      time: '2:00 PM',
      venue: 'Library Conference Hall',
      image:
        'https://thf.bing.com/th/id/OIP.0DANlloZLelhcZQIdzig5AHaFW?w=256&h=185&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3',
     
    },
    {
      id: 6,
      title: 'Christmas',
      description:
        'Taste dishes from around India and the world, celebrating our diverse campus community.',
      date: '2025-11-19',
      time: '12:00 PM',
      venue: 'College Green',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.GTr4ecUzzMG3MmSdoVhf4wHaH0?cb=thfc1&pid=ImgDet&w=203&h=214&c=7&o=7&rm=3',
      
    }
  ];

  // Filter events based on selected category
  const filteredEvents =
    activeCategory === 'all'
      ? culturalEvents
      : culturalEvents.filter((event) => event.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Events', icon: Star, color: 'linear-gradient(90deg,#7c3aed,#ff6bcb)' },
    { id: 'Ananthara', name: 'ANANTHARA', icon: Star , color: 'linear-gradient(90deg,#7c3aed,#ff6bcb)' },
    { id: 'music', name: 'Music', icon: Music, color: 'linear-gradient(90deg,#2563eb,#06b6d4)' },
    { id: 'dance', name: 'Dance', icon: Users, color: 'linear-gradient(90deg,#10b981,#14b8a6)' },
    { id: 'art', name: 'Art', icon: Palette, color: 'linear-gradient(90deg,#fb923c,#f97316)' },
    { id: 'theater', name: 'Theater', icon: Play, color: 'linear-gradient(90deg,#7c3aed,#4f46e5)' },
    { id: 'food', name: 'Food', icon: Star, color: 'linear-gradient(90deg,#ec4899,#fb7185)' }
  ];

  // Handle like functionality


  // scroll to events
  

  // initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // scrollY for scroll-to-top button
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // parallax elements transform (non-critical)
  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;
      containerRef.current.querySelectorAll('.parallax').forEach((element, index) => {
        const speed = 0.25 + index * 0.08;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-28 h-28 border-4 border-white/20 rounded-full animate-spin">
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
            </div>
          </div>
          <h2 className="mt-6 text-white font-semibold">Loading Cultural Events...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden" ref={containerRef}>
      {/* HERO: background-image uses HERO_IMAGE_URL */}
      <section
        ref={heroRef}
        className="relative min-h-[72vh] flex items-center justify-center pt-[35px] overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(17,24,39,0.65), rgba(0,0,0,0.15)), url(${HERO_IMAGE_URL})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        aria-label="Cultural events hero"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="parallax absolute -top-20 -left-20 w-96 h-96 rounded-full"
            style={{ filter: 'blur(48px)', background: 'radial-gradient(closest-side,#7c3aed33,transparent 40%)' }}
          />
          <div
            className="parallax absolute -bottom-20 right-10 w-72 h-72 rounded-full"
            style={{ filter: 'blur(40px)', background: 'radial-gradient(closest-side,#ff6bcb33,transparent 40%)' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl px-6 mt-8 text-center">
          <h1
            className="font-extrabold leading-tight mb-4 select-none"
            style={{
              fontSize: 'clamp(48px, 8vw, 96px)',
              backgroundImage: 'linear-gradient(90deg,#FFA500,#FF4500,#FFD700)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 10px 30px rgba(0,0,0,0.55)'
            }}
          >
            Cultural
            <span className="block font-black" style={{ fontSize: 'clamp(56px, 12vw, 140px)' }}>
              EVENTS
            </span>
          </h1>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           
           
          </div>
        </div>
      </section>

      
     

      {/* Events Grid */}
      <section className="py-20" ref={eventsGridRef as any}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400">Upcoming Events</h1>
            <h3 className="text-gray-400 max-w-2xl mx-auto">Join thousands of students in celebrating creativity and culture</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => {
              const progress = (event.registered / event.capacity) * 100;
              return (
                <article
                  key={event.id}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 transform transition-transform duration-500 hover:scale-[1.03]"
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  aria-labelledby={`event-title-${event.id}`}
                >
                  <div className="bg-white/6 rounded-2xl">
                    {/* Featured Badge */}
                    {event.featured && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center animate-pulse">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </div>
                    )}

                    <div className="relative h-56 overflow-hidden rounded-t-2xl cursor-zoom-in" onClick={() => alert('Open lightbox (demo)')}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6 relative">
                      <div className="flex justify-between items-start mb-3">
                        <h3 id={`event-title-${event.id}`} className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {event.title}
                        </h3>
                        
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                        {event.description}
                      </p>

                     
                     
                      

                      
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

         
        </div>
      </section>


     
    </div>
  );
};

export default CulturalEventsPage;