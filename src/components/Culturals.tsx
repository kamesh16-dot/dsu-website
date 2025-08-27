import { useState, useRef, useEffect } from 'react';

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
}

const CulturalEventsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Sample cultural events data
  const culturalEvents: CulturalEvent[] = [
    {
      id: 1,
      title: "Annual Music Festival",
      description: "Join us for a day of live performances from various genres featuring our talented students.",
      date: "2023-10-15",
      time: "6:00 PM",
      venue: "College Amphitheater",
      image: "/api/placeholder/300/200",
      category: "music"
    },
    {
      id: 2,
      title: "Dance Competition",
      description: "Watch our dance teams compete in various styles from classical to contemporary.",
      date: "2023-10-22",
      time: "4:00 PM",
      venue: "Main Auditorium",
      image: "/api/placeholder/300/200",
      category: "dance"
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Showcasing the creative works of our art students across multiple mediums.",
      date: "2023-10-29",
      time: "10:00 AM",
      venue: "Art Gallery",
      image: "/api/placeholder/300/200",
      category: "art"
    },
    {
      id: 4,
      title: "Drama Performance",
      description: "Our theater group presents an original play written and directed by students.",
      date: "2023-11-05",
      time: "7:00 PM",
      venue: "Black Box Theater",
      image: "/api/placeholder/300/200",
      category: "theater"
    },
    {
      id: 5,
      title: "Literary Symposium",
      description: "Poetry readings, author talks, and creative writing workshops.",
      date: "2023-11-12",
      time: "2:00 PM",
      venue: "Library Conference Hall",
      image: "/api/placeholder/300/200",
      category: "literary"
    },
    {
      id: 6,
      title: "Cultural Food Fair",
      description: "Taste dishes from around the world prepared by our international student community.",
      date: "2023-11-19",
      time: "12:00 PM",
      venue: "College Green",
      image: "/api/placeholder/300/200",
      category: "food"
    }
  ];

  // Filter events based on selected category
  const filteredEvents = activeCategory === 'all' 
    ? culturalEvents 
    : culturalEvents.filter(event => event.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'music', name: 'Music' },
    { id: 'dance', name: 'Dance' },
    { id: 'art', name: 'Art' },
    { id: 'theater', name: 'Theater' },
    { id: 'literary', name: 'Literary' },
    { id: 'food', name: 'Food' }
  ];

  // Effect for parallax scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrolled = window.pageYOffset;
        const parallaxElements = containerRef.current.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
          const speed = 0.5;
          (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100" ref={containerRef}>
      {/* Header with animated background */}
      <header className="relative py-20 overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="absolute inset-0 overflow-hidden">
          <div className="parallax absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="parallax absolute top-1/4 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
          <div className="parallax absolute bottom-10 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="parallax absolute bottom-1/4 right-10 w-20 h-20 bg-white opacity-10 rounded-full"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">College Cultural Events</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Experience the vibrant cultural diversity of our campus through various events and activities
          </p>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Event Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 ${
                  hoveredCard === event.id 
                    ? 'transform scale-105 shadow-2xl' 
                    : 'hover:shadow-xl'
                }`}
                onMouseEnter={() => setHoveredCard(event.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoveredCard === event.id ? 'rotateY(5deg) rotateX(5deg)' : 'none'
                }}
              >
                {/* 3D effect layer */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300"
                  style={{ 
                    transform: 'translateZ(1rem)',
                    opacity: hoveredCard === event.id ? 1 : 0
                  }}
                ></div>
                
                <div className="h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {event.date}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {event.time}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {event.venue}
                  </div>
                  
                  <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:-translate-y-1">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-600">No events found in this category</h3>
              <p className="text-gray-500 mt-2">Please check back later or select a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Upcoming Highlights</h2>
          
          <div className="relative">
            {/* 3D animated spotlight effect */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
            
            <div className="relative bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Annual Cultural Night</h3>
                  <p className="text-gray-600 mb-6">
                    Join us for our flagship event featuring performances, exhibitions, and food from around the world. 
                    This year's theme is "Global Harmony" celebrating cultural diversity and unity.
                  </p>
                  <div className="flex items-center text-purple-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="font-semibold">December 15, 2023 | 5:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="font-semibold">College Main Ground</span>
                  </div>
                  <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
                
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="w-64 h-64 mx-auto bg-purple-200 rounded-xl shadow-lg transform rotate-3 transition-transform duration-700 hover:rotate-0"></div>
                    <div className="absolute -inset-2 border-2 border-purple-300 rounded-xl transform -rotate-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">College Cultural Committee</h3>
              <p className="text-gray-400 mt-2">Promoting arts and cultural activities on campus</p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.7 14.077c-1.75.362-5.453.362-7.203 0-1.896-.391-2.117-1.538-2.246-2.077-.02-.086-.029-.176-.029-.265v-2.97c0-.182.108-.35.27-.431l2.5-1.423c.094-.055.204-.055.298 0l2.5 1.423c.161.08.27.25.27.431v2.97c0 .089-.01.179-.03.265-.056.244-.172.642-1.017.898.26.432.908 1.01 1.746 1.45 1.28.677 2.953.77 3.788.77.299 0 .486-.107.486-.231 0-.231-.724-.254-1.274-.424z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} College Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CulturalEventsPage;