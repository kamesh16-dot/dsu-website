import  { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Home, Bed, Wifi, Coffee, ShieldCheck, MapPin, X } from 'lucide-react';

export default function Hostel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.15 });
  const [modalImg, setModalImg] = useState(null);

  const highlights = [
    { label: '1200+ Rooms', icon: Bed },
    { label: '2000+ Mess Capacity', icon: Coffee },
    { label: '24/7 Security', icon: ShieldCheck },
    { label: 'Campus-wide Wi‑Fi', icon: Wifi }
  ];

  const rooms = [
    {
      id: 1,
      type: 'Single AC Room',
      price: '₹60,000 / year',
      desc: 'Private room with attached bath, wardrobe & desk.',
      img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      type: 'Double Sharing (AC)',
      price: '₹40,000 / year',
      desc: 'Shared with one roommate, comfortable and spacious.',
      img: 'https://images.unsplash.com/photo-1505691723518-36a6f27c69b9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      type: 'Triple Sharing (Non-AC)',
      price: '₹28,000 / year',
      desc: 'Affordable triple sharing with community vibe.',
      img: 'https://images.unsplash.com/photo-1551882547-ff7f0e0e7d3a?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const amenities = [
    { icon: Wifi, title: 'High-Speed Wi‑Fi' },
    { icon: Coffee, title: 'Mess & Cafeteria' },
    { icon: ShieldCheck, title: '24/7 Security' },
    { icon: Home, title: 'Common Lounges' },
    { icon: Bed, title: 'Laundry Service' },
    { icon: MapPin, title: 'Near Campus' }
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1543002588-bfa74002ed3f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
  ];

  const testimonials = [
    { name: 'Asha K.', text: 'Safe, clean and close to labs — great hostel experience.' },
    { name: 'Rahul P.', text: 'Mess food is good and Wi‑Fi kept me connected during project nights.' },
    { name: 'Meera S.', text: 'Supportive wardens and quick maintenance response.' }
  ];

  return (
    <section id="hostel" ref={ref} className="bg-white text-gray-800">
      <div className="relative h-[500px] w-full overflow-hidden">
        <img src="https://images.unsplash.com/photo-1560185008-5a2d6f8b8e3a?auto=format&fit=crop&w=2000&q=80" alt="hostel" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-extrabold">Campus Hostels</motion.h1>
          <p className="mt-4 max-w-2xl">Comfortable, secure and affordable living for our students.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {highlights.map((h, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="p-6 bg-gray-50 rounded-xl shadow-sm">
            <h.icon className="mx-auto w-8 h-8 text-indigo-600 mb-3" />
            <div className="font-semibold text-gray-800">{h.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Room Options</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div key={room.id} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.03 }} className="bg-white rounded-xl overflow-hidden shadow border">
              <img src={room.img} alt={room.type} className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{room.type}</h3>
                <div className="text-indigo-600 font-semibold mb-2">{room.price}</div>
                <p className="text-sm text-gray-600 mb-4">{room.desc}</p>
                <a href="#apply" className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold">Apply</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Amenities</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {amenities.map((a, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }} className="bg-white p-6 rounded-xl shadow border flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <a.icon className="w-6 h-6" />
                </div>
                <div className="font-semibold">{a.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {gallery.map((src, i) => (
            <button key={i} onClick={() => setModalImg(src)} className="h-40 rounded-xl overflow-hidden">
              <img src={src} alt={`gallery-${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Student Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="bg-white p-6 rounded-xl shadow border">
                <p className="text-gray-700 mb-4">“{t.text}”</p>
                <div className="font-semibold">— {t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Accommodation?</h2>
          <p className="mb-6 text-indigo-100">Reach out to the Hostel Office for availability, rules and support.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:hostel@dsu.edu.in" className="px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold">Email</a>
            <a href="tel:+911234567890" className="px-6 py-3 border border-white/40 rounded-full">Call</a>
          </div>
        </div>
      </div>

      {modalImg && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="relative max-w-3xl w-full mx-4">
            <button onClick={() => setModalImg(null)} className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"><X className="w-4 h-4" /></button>
            <img src={modalImg} alt="enlarged" className="w-full h-[500px] object-cover rounded-xl" />
          </div>
        </div>
      )}
    </section>
  );
}
