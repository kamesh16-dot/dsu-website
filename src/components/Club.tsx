import React from 'react';

export default function Clubs() {
  const clubs = [
    {
      name: 'The Cliqs',
      desc: 'Photography Club',
      faculty: 'Dr. S. Dineshkumar',
      president: 'Mr. D. Avishek',
      vice: 'Ms. V. Jasmine Princy',
      logo: 'https://www.dsuniversity.ac.in/Logos/cliqs-logo.png'
    },
    {
      name: 'The Brainiacs',
      desc: 'Science Club',
      faculty: 'Dr.V.Senthamarai Selvi, Ms.V.Priyadharshini',
      president: 'Ms. M.S.G Ezhil Nilaa',
      vice: 'Mr. S.Vasanthakumar',
      logo: 'https://www.dsuniversity.ac.in/Logos/science-logo.png'
    },
    {
      name: 'The Organics',
      desc: 'Environment Club',
      faculty: 'Prof. P. Bharathi',
      president: 'Mr. S. Gokul',
      vice: 'Ms. T. Hemapriya',
      logo: 'https://www.dsuniversity.ac.in/Logos/environment-logo.PNG'
    },
    {
      name: '360 Creatives',
      desc: 'Fine Arts Club',
      faculty: 'Ar. S. M. Sindhu',
      president: 'Ms. B. Lavanya',
      vice: 'Ms. H. Hemasri Haushala',
      logo: 'https://www.dsuniversity.ac.in/Logos/360-logo.png'
    },
    {
      name: 'Mix Tapes',
      desc: 'Music Club',
      faculty: 'Mr. Shiyam Ganesh',
      president: 'Mr. V. Arul Mozhi Varman',
      vice: 'Ms. G.S. Naveena Vani',
      extra: 'Music Band Lead: Mr. Avishek D',
      logo: 'https://www.dsuniversity.ac.in/Logos/music-club-logo.PNG'
    },
    {
      name: 'English Literary Club',
      desc: 'Literature Club',
      faculty: 'Dr. R. Vijayalakshmi',
      president: 'P.D.S.S. Durga Prasad',
      vice: 'Vetrivel Punithan',
      logo: 'https://www.dsuniversity.ac.in/Logos/english-literary-logo.png'
    },
    {
      name: 'Culinary Club',
      desc: 'Cooking & Food Club',
      faculty: 'Ms. R. Bhuvaneshwari',
      president: 'Ms. A. Lourdes Maria Maurice',
      vice: 'Ms. A Arokiya Helan',
      logo: 'https://www.dsuniversity.ac.in/Logos/culinary-logo.PNG'
    },
    {
      name: 'Electoral Literacy Club',
      desc: 'Awareness Club',
      faculty: 'Dr. R. Vijayalakshmi',
      president: 'R. Anusha',
      vice: 'S.V. Siva Dharani',
      logo: 'https://www.dsuniversity.ac.in/Logos/electoral-literacy-logo.png'
    },
    {
      name: 'Tamil Illakkiya Mandram',
      desc: 'Tamil Literature Club',
      faculty: 'Dr. R. Meganathan',
      president: 'Mr. Sri Vigneswaran',
      vice: 'Mr. R.S. Sri Rajharan',
      logo: 'https://www.dsuniversity.ac.in/Logos/tamil-illakiya-logo.png'
    },
    {
      name: 'The Endurance Club',
      desc: 'Fitness & Wellbeing Club',
      faculty: 'Mr. M Venkatesh Kannan, Ms. A Keerthana',
      president: 'Mr. G Varun Karthik',
      vice: 'Mr. Vasanta Saiprasad',
      logo: 'https://www.dsuniversity.ac.in/Logos/endurance-logo.PNG'
    },
    {
      name: 'Movie Critics Club',
      desc: 'Film Analysis Club',
      faculty: 'Dr. N. Parthasharathy',
      president: 'Mr. S. Kishor',
      vice: 'Mr. Manikanta Easwar',
      logo: 'https://img.icons8.com/ios-filled/100/movie-projector.png'
    },
    {
      name: 'Know Your Rights & Responsibilities Club',
      desc: 'Legal Awareness Club',
      faculty: 'Mr. Harish Kumar',
      president: 'Mr. B. Saigurucharan',
      vice: 'Ms. S.A. Bavadharani',
      logo: 'https://www.dsuniversity.ac.in/Logos/movie-critics-logo.jpg'
    },
    {
      name: "Gender Champions' Club",
      desc: 'Equality & Awareness',
      faculty: 'Dr. R. Sathiya Priya',
      president: 'Ms. S.S. Kalpana Devi',
      vice: 'Mr. C. Jayesh Adithya',
      logo: 'https://www.dsuniversity.ac.in/Logos/know-your-logo.PNG'
    },
    {
      name: 'Sports Clubs',
      desc: 'Athletics & Games',
      faculty: 'Dr. K. Tharmar (Director of Sports)',
      logo: 'https://www.dsuniversity.ac.in/Logos/gender-logo.PNG'
    },
    {
      name: "Students' Counselor",
      desc: 'Counseling & Guidance',
      faculty: 'Mrs. Meera Ramesh, Psychologist & Counselor',
      extra: 'Contact: 93631 07292',
      logo: 'https://img.icons8.com/ios-filled/100/psychology.png'
    }
  ];

  return (
    <section id="clubs" className="bg-gradient-to-b from-slate-50 to-white text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-b-3xl shadow-lg">
        <img
          src="https://www.dsuniversity.ac.in/infra/campus-img-01.jpg"
          alt="clubs hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-purple-800/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">Explore Our Club Activities</h1>
        </div>
      </div>

      {/* Clubs Section */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Club Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow border hover:shadow-lg transition flex flex-col items-center text-center">
              {club.logo && <img src={club.logo} alt={`${club.name} logo`} className="w-16 h-16 mb-4" />}
              <h3 className="text-2xl font-semibold text-indigo-700 mb-1">{club.name}</h3>
              <p className="text-sm text-gray-500 mb-3">({club.desc})</p>
              <p><span className="font-semibold">Faculty Coordinator:</span> {club.faculty}</p>
              {club.president && <p><span className="font-semibold">Student President:</span> {club.president}</p>}
              {club.vice && <p><span className="font-semibold">Vice-President:</span> {club.vice}</p>}
              {club.extra && <p className="text-indigo-600 mt-2">{club.extra}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
