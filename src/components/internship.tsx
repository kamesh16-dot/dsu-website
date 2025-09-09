import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import Slider from "react-slick"; // Carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const internships = [
  {
    title: "INTERNSHIP - INDIAN COUNCIL OF AGRICULTURE RESEARCH - BANANA RESEARCH CENTER, TRICHY",
    desc: "HRDC of Dhanalakshmi Srinivasan University provided internship for the students of III Year Agriculture Engineering. A batch of 10 students had undergone research activities and understood their proficiency on Food Processing Technology, Soil Testing etc.",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-01.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-02.jpg",
    ]
  },
  {
    title: "INTERNSHIP - NEYVELI LIGNITE CORPORATION, NEYVELI",
    desc: "HRDC of DSU provided internship for III Year ECE students. A batch of 2 students underwent training in Telecom center (Department of Telecommunication, NLC).",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-04.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-03.jpg"
    ]
  },
  {
    title: "INTERNSHIP - INDUSTRIAL RUBBER COMPANY (MBA - First Batch)",
    desc: "Final year MBA students gained experience at Industrial Rubber Company, Trichy. They worked on voice processing, data compilation, HR and financial management.",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-08.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-09.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-07.jpg"
    ]
  },
  {
    title: "INTERNSHIP - VDART IT",
    desc: "III Year IT students underwent a 15-day internship at V Dart Technologies, Trichy. They provided IT support and worked with Tableau for data extraction.",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-11.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-12.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-10.jpg"
    ]
  },
  {
    title: "INTERNSHIP - VDART MBA",
    desc: "Final Year MBA students interned at V Dart Technologies, Trichy. They worked as Junior Recruiters, HR and Recruitment Crew, preparing checklists and understanding HRBP responsibilities.",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-14.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-13.jpg"
    ]
  },
  {
    title: "INTERNSHIP - CYBER VAULT INNOVATION AND TECHNOLOGIES",
    desc: "Two students from III Year IT & Cyber Security completed a 2-month internship with stipend at Cyber Vault, Coimbatore. They worked on AI, Python and Cyber Security live projects.",
    photos: [
      "https://www.dsuniversity.ac.in/images/hrdc-internship-17.jpg",
      "https://www.dsuniversity.ac.in/images/hrdc-internship-15.jpg"
    ]
  },
  {
    title: "INTERNSHIP - ASTONIS INFOTECH PVT. LTD",
    desc: "Five III Year Cyber Security students completed a 1-month internship at Astonis Infotech Pvt. Ltd, Trichy. They worked on Debugging, Web Development, and Database Management.",
    photos: [
     "https://www.dsuniversity.ac.in/images/hrdc-internship-19.jpg",
     "https://www.dsuniversity.ac.in/images/hrdc-internship-20.jpg"
    
    ]
  },
  {
    title: "INTERNSHIP - VETRI TECHNOLOGY SOLUTIONS",
    desc: "A III Year Cyber Security student completed a 1-month internship at Vetri Technology Solutions, Trichy, working as a SOC Analyst.",
    photos: [
     "https://www.dsuniversity.ac.in/images/hrdc-internship-21.jpg"
    ]
  }
];

const InternshipPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="bg-gray-50 text-gray-900 ">
      
      {/* Hero Section */}
      {/* Hero Section */}
<section 
  className="relative bg-gradient-to-r from-blue-900/80 to-blue-700/80 text-white py-20"
  style={{
    backgroundImage: `url("https://assets.telegraphindia.com/telegraph/2022/Mar/1648546454_internshala1.jpg")`, // <-- hero image
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay (optional, for dark effect) */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative max-w-5xl mx-auto text-center px-6">
    <motion.h1 
      className="text-4xl md:text-5xl font-serif font-bold mb-6 mt-40"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Internship Opportunities
    </motion.h1>
    
  </div>
</section>


      {/* Internship Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        {internships.map((item, i) => (
          <motion.div 
            key={i}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-700 mr-3" />
              <h2 className="text-2xl font-semibold">{item.title}</h2>
            </div>
            <p className="text-gray-700 mb-6">{item.desc}</p>
            
            {/* Carousel */}
            <Slider {...sliderSettings}>
              {item.photos.map((photo, idx) => (
                <div key={idx} className="px-2">
                  <img 
                    src={photo} 
                    alt="student" 
                    className="rounded-xl shadow-md h-64 w-full object-cover" 
                  />
                </div>
              ))}
            </Slider>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default InternshipPage;
