import { useState, useRef, useEffect } from 'react';

import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Palette,
  Users,
  Star,
  ArrowRight,
  Play,
  Heart,
  Share2
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
  category: string;
  capacity: number;
  registered: number;
 
}

// <-- HERO IMAGE: change this URL to use your own image or local path (e.g. '/images/hero.jpg') -->
const HERO_IMAGE_URL =
  'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1600';

const CulturalEventsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [likedEvents, setLikedEvents] = useState<number[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Sample cultural events data
  const culturalEvents: CulturalEvent[] = [
    {
      id: 1,
      title: 'Ananthara',
      description:
        'Join us for a spectacular day of traditional Indian music performances and cultural celebrations on campus.',
      date: '2024-03-15',
      time: '6:00 PM',
      venue: 'College Amphitheater',
      image:
        'data:image/webp;base64,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',
      category: 'Ananthara', 
      capacity: 500,
      registered: 342,
      
    },
    {
      id: 2,
      title: 'DJ Night',
      description:
        'Watch our dance teams compete in vibrant traditional and contemporary Indian styles.',
      date: '2024-03-22',
      time: '4:00 PM',
      venue: 'Main Auditorium',
      image:
        'https://thf.bing.com/th/id/OIP.o1S2Ztb9JjuOTYhjFcWPVwHaEJ?w=288&h=180&c=7&r=0&o=5&cb=thfc1&pid=1.7',
      category: 'dance',
      capacity: 300,
      registered: 187,
     
    },
    {
      id: 3,
      title: 'Pongal',
      description:
        'Showcasing the creative works of our students inspired by Indian heritage and modern art.',
      date: '2024-03-29',
      time: '10:00 AM',
      venue: 'Art Gallery',
      image:
        'https://thf.bing.com/th/id/OIP.Hb7tjl09rHwEPk8AIPsr-gHaHa?w=166&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3',
      category: 'art',
      capacity: 200,
      registered: 156,
    
    },
    {
      id: 4,
      title: 'Onam',
      description:
        'Our theater group presents an original play drawing from Indian folklore and contemporary themes.',
      date: '2024-04-05',
      time: '7:00 PM',
      venue: 'Black Box Theater',
      image:
        'https://images.pexels.com/photos/29451111/pexels-photo-29451111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      category: 'theater',
      capacity: 150,
      registered: 89,
    
    },
    {
      id: 5,
      title: 'Food Festival',
      description:
        'Poetry readings, author talks, and workshops on Indian literature and global perspectives.',
      date: '2024-04-12',
      time: '2:00 PM',
      venue: 'Library Conference Hall',
      image:
        'https://thf.bing.com/th/id/OIP.0DANlloZLelhcZQIdzig5AHaFW?w=256&h=185&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3',
      category: 'food' ,
      capacity: 100,
      registered: 67,
      
    },
    {
      id: 6,
      title: 'Christmas',
      description:
        'Taste dishes from around India and the world, celebrating our diverse campus community.',
      date: '2024-04-19',
      time: '12:00 PM',
      venue: 'College Green',
      image:
        'https://tse4.mm.bing.net/th/id/OIP.GTr4ecUzzMG3MmSdoVhf4wHaH0?cb=thfc1&pid=ImgDet&w=203&h=214&c=7&o=7&rm=3',
      category: 'music',
      capacity: 400,
      registered: 298,
     
    }
  ];

  // Filter events based on selected category
  const filteredEvents =
    activeCategory === 'all'
      ? culturalEvents
      : culturalEvents.filter((event) => event.category === activeCategory);

  // Categories for filter
  const categories = [
     
    { id: 'all', name: 'All Events', icon: Palette, color: 'from-orange-500 to-red-500' },
    { id: 'Ananthara', name: 'ANANTHARA', icon: Star , color: 'from-purple-500 to-pink-500' },
    { id: 'music', name: 'Music', icon: Music, color: 'from-blue-500 to-cyan-500' },
    { id: 'dance', name: 'Dance', icon: Users, color: 'from-green-500 to-teal-500' },
    
    { id: 'food', name: 'Food', icon: Heart, color: 'from-pink-500 to-rose-500' }
  ];

  // Handle like functionality
  const handleLike = (eventId: number) => {
    setLikedEvents((prev) =>
      prev.includes(eventId) ? prev.filter((id) => id !== eventId) : [...prev, eventId]
    );
  };

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
          backgroundImage: `linear-gradient(180deg, rgba(17,24,39,0.65), rgba(0,0,0,0.15)), url('${HERO_IMAGE_URL}')`,
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
              backgroundImage: 'linear-gradient(90deg,#ff6bcb,#7c3aed,#60a5fa)',
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

          {/* small stats */}
          
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-14 relative bg-gradient-to-b from-transparent to-black/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">Event Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive ? `text-white bg-gradient-to-r ${cat.color} shadow-lg` : 'bg-white/6 text-gray-200 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5" />
                    <span>{cat.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming Events</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Join thousands of students in celebrating creativity and culture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => {
              const progress = (event.registered / event.capacity) * 100;
              return (
                <article
                  key={event.id}
                  className={`group relative rounded-2xl overflow-hidden border border-white/10 transform transition-transform duration-500 hover:scale-[1.03]`}
                  onMouseEnter={() => setHoveredCard(event.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  aria-labelledby={`event-title-${event.id}`}
                >
                  <div className="bg-white/6 rounded-2xl">
                    {event.featured && (
                      <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center animate-pulse">
                        <Star className="w-4 h-4 mr-1" /> Featured
                      </div>
                    )}

                    <div className="relative h-56 overflow-hidden rounded-t-2xl">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {event.rating && (
                        <div className="absolute bottom-3 left-3 flex items-center bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 pointer-events-none">
                          <Star className="w-4 h-4 text-yellow-400 mr-1" />
                          <span className="text-white font-semibold">{event.rating}</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 relative">
                      <div className="flex justify-between items-start mb-3">
                        <h3 id={`event-title-${event.id}`} className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <span className="text-lg font-bold text-green-400">{event.price}</span>
                      </div>

                      <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
                        {event.description}
                      </p>

                      <div className="space-y-2 mb-6 flex flex-wrap gap-2">
                        <div className="inline-flex items-center gap-2 text-sm text-gray-400 px-3 py-1 rounded-full bg-white/5">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm text-gray-400 px-3 py-1 rounded-full bg-white/5">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-sm text-gray-400 px-3 py-1 rounded-full bg-white/5">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate max-w-[120px]">{event.venue}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>{event.registered} registered</span>
                          <span>of {event.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            style={{ width: `${progress}%`, transition: 'width 1s ease-in-out' }}
                          />
                        </div>
                      </div>

                      <div className="flex gap-3">
                        
                        <button
                          onClick={() => handleLike(event.id)}
                          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20"
                          aria-pressed={likedEvents.includes(event.id)}
                        >
                          <Heart className={`w-5 h-5 transition-all duration-300 ${likedEvents.includes(event.id) ? 'text-red-400 scale-110' : 'text-white'}`} />
                        </button>

                        <button
                          className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:bg-white/20"
                          title="Share"
                          onClick={() => alert('Share (demo)')}
                        >
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Star className="w-16 h-16 text-purple-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">No events found</h3>
                <p className="text-gray-400 text-lg">We couldn't find any events in this category. Check back later or explore other categories!</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Scroll to Top Button */}
      
    </div>
  );
};

export default CulturalEventsPage;