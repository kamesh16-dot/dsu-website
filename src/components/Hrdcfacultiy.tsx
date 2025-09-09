import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// HRDC Faculty page with full-width hero image + blue gradient overlay, search, accessible cards, image fallback, and modal
export default function HRDCFaculty() {
  const faculty = [
    {
      name: 'Dr. B. Vidya',
      position: 'Director, HRDC',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-B-Vidya.jpg'
    },
    {
      name: 'Dr. R. Karthick Babu',
      position: 'Deputy Director',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_R_Karthick-Babu.jpg'
    },
    {
      name: 'Mr. A. James Anto.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/James-Anto.jpg'
    },
    {
      name: 'Ms. Girijalakshmi B.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/grija-hrdc.jpg'
    },
    {
      name: 'Mr. M. Santhosh Kumar.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr-M-Santhosh-Kumar1.jpg'
    },
    {
      name: 'Ms. R. Pooja',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms-R-Pooja2.jpg'
    },
    {
      name: 'Mr. C. Raguraman',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_C_Raguraman.jpeg'
    },
    {
      name: 'Mr. R. Aslam.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_R_Aslam.jpeg'
    },
    {
      name: 'Mrs. M. Lavanya.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Leenashri.jpeg'
    },
    {
      name: 'Ms. K. Rajashree.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__K__Rajashree1.jpeg'
    },
    {
      name: 'Mr. V. Venkadesh.',
      position: 'Assistant Professor',
      img: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__V__Venkadesh.jpeg'
    }
  ]

  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faculty
    return faculty.filter(f => f.name.toLowerCase().includes(q) || f.position.toLowerCase().includes(q))
  }, [query])

  const cardVariant = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 }
  }

  function initialsFallback(name, size = 256) {
    const initials = (name || 'A')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(s => s[0].toUpperCase())
      .join('')

    const bg = '#E6EEF8'
    const fg = '#0F172A'
    const svg = `<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><rect width='100%' height='100%' fill='${bg}' rx='20' /><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui, -apple-system, \"Segoe UI\", Roboto' font-size='${size / 3}' fill='${fg}'>${initials}</text></svg>`
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
  }

  function handleImgError(e, name) {
    e.currentTarget.src = initialsFallback(name, 512)
  }

  return (
    <section id="hrdc" className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Full-width Hero Section with blue gradient overlay */}
      <div className="relative w-full h-64 md:h-80 lg:h-[28rem] mb-12 shadow-lg">
        <img
          src="https://nyggs.com/images/erp/get-valuable.webp"
          alt="HRDC Hero"
          className="absolute inset-0 w-full h-full bg-cover bg-center object-cover"
          loading="lazy"
        />
        {/* Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-700/70 to-blue-500/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow mt-12">HRDC Faculty</h1>
         
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Search and CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <label htmlFor="search" className="sr-only">Search faculty</label>
          <div className="flex items-center gap-3 w-full sm:w-1/2">
            <input
              id="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search by name or position..."
              className="w-full px-4 py-2 rounded-full border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          
        </div>

        {/* Faculty Cards */}
        <motion.div initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((member, i) => (
            <motion.button
              key={member.name + i}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setSelected(member)}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-left focus:outline-none focus:ring-4 focus:ring-blue-100"
              aria-label={`Open details for ${member.name}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-4 border-slate-50 shadow">
                  <img
                    src={member.img}
                    alt={member.name}
                    onError={e => handleImgError(e, member.name)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{member.position}</p>
                  <p className="text-xs text-slate-400 mt-1">Click to view details</p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-8 text-center text-slate-500">No faculty matched &quot;{query}&quot;.</div>
        )}

        <AnimatePresence>
          {selected && (
            <motion.div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="relative bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl z-10"
                role="dialog"
                aria-modal="true"
                aria-label={`Details for ${selected.name}`}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border shadow">
                    <img src={selected.img} alt={selected.name} onError={e => handleImgError(e, selected.name)} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selected.name}</h3>
                    <p className="text-sm text-slate-500">{selected.position}</p>
                  </div>
                </div>

                <div className="mt-4 text-slate-600">
                  <p>This is a brief detail pane. Add more fields like qualifications, research interests or contact info in the data model to expand this view.</p>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button onClick={() => setSelected(null)} className="px-4 py-2 rounded-full border border-slate-200">Close</button>
                  <a href={`mailto:hrdc@dsu.edu.in?subject=Contact%20${encodeURIComponent(selected.name)}`} className="px-4 py-2 rounded-full bg-blue-600 text-white">Email</a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        
      </div>
    </section>
  )
}
