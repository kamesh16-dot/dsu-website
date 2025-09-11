import React, { useRef, useState, useMemo, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Award, BookOpen, Users, X } from 'lucide-react';

const normalize = (str = '') =>
  String(str || '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

const Faculty = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [positionFilter, setPositionFilter] = useState('All');

  // hoveredFacultyData: { faculty, rect } when a card is hovered
  const [hoveredFacultyData, setHoveredFacultyData] = useState(null);

  // timer ref to avoid micro-flicker
  const hideTimerRef = useRef(null);

  // store reference to modal element for pointer checks
  const modalRef = useRef(null);

  // -------------------------
  // Your faculty array (kept as you provided)
  // -------------------------
  const facultyMembers = [
    {
      name: 'Dr. V. Sekar',
      position: 'Dean & Professor',
      department: 'Electrical and Electronics Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__V__Sekar3.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
    
    {
      name: 'Dr. V. Raju',
      position: 'Associate Dean',
      department: 'imformation technology',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__V__Raju2.jpg',
      experience: '20+ years',
      publications: '60+ Research Papers',
     
    },
    {
      name: 'Dr. Sasikumar G',
      position: 'Associate DeanComputer Science Engineering',
      department: 'Computer Science Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Sasikumar_G.jpg',
      education: 'Ph.D. in Mechanical Engineering, IIT Mumbai',
      experience: '22+ years',
      publications: '70+ Research Papers',
      
    },
    {
      name: 'Dr. B. Ramesh',
      position: 'Associate Dean',
      department: 'Mechanical Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-B-Ramesh.jpg',
      experience: '15+ years',
     publications: '70+ Research Papers'
    },
    {
      name: 'Dr. R. Meganathan',
      position: 'Professor',
      department: 'Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Meganathan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     {
      name: 'Dr. B. Shanmugham',
      position: 'Professor',
      department: 'Electronics and Communication Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/1.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     
     {
      name: 'Dr. S. Selvakumar',
      position: 'Professor',
      department: 'Computer Science Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__S__Selvakumar1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     {
      name: 'Dr. S. John Ethilton',
      position: 'Professor',
      department: 'Physics',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/John1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. J. Mercy Geraldine',
      position: 'Professor',
      department: 'Computer Science Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/mercy.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     {
      name: 'Dr. B. Revathi',
      position: 'Professor',
      department: 'Electronics and Communication Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Revathi_-SET1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     {
      name: 'Dr. B. Suganthi',
      position: 'Professor',
      department: 'Electronics and Communication Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Suganthi_B.png',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
     {
      name: 'Dr. G.M. Balamurugan',
      position: 'Professor',
      department: 'Mechanical Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_G_M_Balamurugan11.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. R. Vijayalakshmi',
      position: 'Professor',
      department: 'English',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_R_Vijayalakshmi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. E. Rameshkumar',
      position: 'Professor',
      department: 'Mathematics',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_E_Rameshkumar1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Suresh C',
      position: 'Professor',
      department: 'EEE',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Suresh1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. K. Rajakumar',
      position: 'Professor',
      department: 'Mathematics',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Rajakumar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Sundara Rajulu Navaneethakrishnan',
      position: 'Professor',
      department: 'Computer Science Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Sundara-Rajulu1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. A. Sirajunnisa',
      position: 'Professor',
      department: 'Chemistry',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-A-Sirajunnisa.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. V. Thamil Selvi',
      position: 'Associate Professor',
      department: 'English',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/v_selvi1.JPG',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. A. Krishnamoorthy',
      position: 'Associate Professor',
      department: 'Chemistry',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Krsihnamoorthy.JPG',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. A. X. Amal Rebin',
      position: 'Associate Professor',
      department: 'Mechanical Engineering',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_A_X_Amal-Rebin.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. K. Krishna Veni',
      position: 'Associate Professor',
      
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Krishna-Veni-English.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Rafi Ahamed S',
      position: 'Associate Professor',
     
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Rafi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Elancheran Ramakrishnan',
      position: 'Associate Professor',
  
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_-Elancheran-Ramakrishnan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. R. Nagarajaprakash',
      position: 'Associate Professor',
      
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Naga.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. N. Kumaran',
      position: 'Associate Professor',
 
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_N_Kumaran.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. T. Sathis Kumar',
      position: 'Associate Professor',
     
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Sathis.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Parthasarathy Nanjundan',
      position: 'Associate Professor',
     
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/PART.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. P. Rajiniganth',
      position: 'Associate Professor',
      
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Rajini.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. R. Shobia',
      position: 'Associate Professor',
  
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/sob.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. R. Sathiyapriya',
      position: 'Associate Professor',
    
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Sathiya.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. M. Lakshmi',
      position: 'Associate Professor',
      department: '',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/lakshmi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. J. Britto Dennis',
      position: 'Associate Professor',
     
      image:'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/PHOTO1.jpg' ,
      experience: '15+ years',
       publications: '70+ Research Papers'
    }, {
      name: 'Dr. Sharad Porwal',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/SHA.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }
    
    ,{
      name: 'Dr. G. Karthy',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_G_Karthy_Associate_Professor_ECE.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
    
    {
      name: 'Dr. N. Shanmugapriya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/WhatsApp_Image_2022-04-12_at_9_52_02_AM.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. N. Shankar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_N_Shankar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Balamurugan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Balamurugan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Balamurugan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_K_Balamurugan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. C. Priya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-C-Priya.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Sughasiny',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_M_Sughasiny.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. VR. Nagarajan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Nagaraj-MCA.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. V. Anitha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_V_Anitha.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. I .Loyala Poul RAj',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_I_-Loyola-Poul-Raj.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. S. Padmapriya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Padmapriya.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Rajalakshmi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-K-Rajalakshmi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Geetha P',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-Geetha-P1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. G. Raja Annamalai',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Raja_Annamala.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. A. Kovalan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__A__Kovalan.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. T. Sheela',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__T__Sheela.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. P.V. Indira',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__P_V__Indira1.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Dr. M. Santhosh',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_M_Santhosh.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Akila',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Akila-Sathishkumar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Maruthanila-VL',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__Maruthanila-VL.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr A. Kalaiyarasi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_A_Kalaiyarasi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Indirajith k',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Indirajith-K1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. V. Helan Sinthiya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Helan1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Dr. R. Ramkumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_R_Ramkumar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Narmadhaa',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Narmatha.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Venkatesh Kannan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/new_pp_2.png',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Mr. B. Deepan Kumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Deepan1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. L. Bhuvana',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Bhuvana-chemistry.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. R. Abinaya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Abinaya-R1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. P. Vinothini',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/P_Vinothini.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Anu',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/ANU.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Ismail Gani',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_m_ismail-gani.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Dr. R. Nathiya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_R_Nathiya.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. S. Bharath',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Bharath.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Ramkumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/ramkumar1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. P. Kalidoss',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Kalidoss1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. V. Vasanthi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_V_Vasanthi1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. J. Henry',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/henry.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Sameerabanu P',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_SameeraBanu-P.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. O. S. Asiq Rahman',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/WhatsApp_Image_2022-04-13_at_11_33_16_AM.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Manoranjani',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_R_Manoranjani.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. S. Muthupandiyan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_S_Muthupandiyan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Josuva D.Silva A',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_Josuva-DSilva-A.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K.K. Ilavenil',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_K_K_Illavenil.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. S. Arul Manikandan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_Arul.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. Shabeer V V',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Shabeer-V-V.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. T. Aparna',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Aparna.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. P. Yasodai',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__P_Yasodai.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. P. Pratheema',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Pratheema-chemistry.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Amutha Surabi M',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Amutha-Surabi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. V. Vijayareka',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-V-Vijayareka.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. S. Mohan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mohan-S.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. V. Venkatachalam',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-V-Venkatachalam.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. N. Gomathi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/gomathi-priya.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M. Manickam',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-M-Manickam.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. M.G. Geena',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Geena-Jeyaprakash1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Devika',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-R-Devika.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Muthukumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__K__Muthukumar.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. K. Karthika',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr-K-Karthika.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr.S.Malathi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_S_Malathi.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. S. Swarnalatha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-S-Swarnalatha.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. Sheeba',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-Sheeba.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. S. Poongkodi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-S-Poongkodi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. R. Ranjithkumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr-R-Ranjithkumar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Mr. R. Vishagar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/vishagar.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K. Rajesh Kumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Rajesh-Kumar-K.JPG',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Amutha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Amutha.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. R.C. Arun Chander',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__R_C__Arun_Chander.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K. Jeeva',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/cJeeva.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. C. Baskar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr_-C_-Bhaskar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr.A. Joseph Vinoth Kumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/WhatsApp_Image_2024-12-05_at_3_22_13_PM.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr .T. Mani',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/mani.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs.M.JAYASRI',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_M_JAYASRI.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Mrs. L. Sarojini',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/WhatsApp_Image_2024-12-26_at_12_07_05_32de847b.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Rajavaishnavi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/WhatsApp_Image_2025-01-08_at_13_00_02_4da69fe9.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. S. Radhika',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__S__Radhika.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs.J.Reka',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/J_Reka.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. B. Renuga Devi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__B__Renuga_Devi.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Dr. Swagata Chowdhury',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Dr__Swagata_Chowdhury.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. Sathiya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__Sathiya.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. M. Nageswaran',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Nageswaran.JPG',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. B. Vidhya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Vidhiya-english.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. Kalyani Dharma',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_Kalyani-Dharma.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. T. Sathish Sudhandra Bharathi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_T_Sathish-Sudhandra-Bharathi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. C. Sudhakar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/C_Sudhakar.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Dhayalini',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/M_Dhayalini.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Dorothy',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_R_Dorothy.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
    {
      name: 'Ms. R. Jaishri',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_R_Saishri.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Vasuki',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_R_Vasuki.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. B. Gopi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_B_Gopi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. T. Prasanna Vengatesh',
      position: 'Associate Professor -junior',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/T_-Prasanna-Vengatesh.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. K. Tamilselvi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/TAMILSELVI_PHOTO1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. Kannan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_Kannan.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. M. Dhanapal',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_M_Dhanapal.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K. Senthilkumararaja',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/SENTHILKUMARARAJA.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. C. Ramachandran',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ramachandran1.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. G. Keerthanasri',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Keerthanasri.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Mr. R. Roshan Chandrapal',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/R-Roshan-chandrapal.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. A. Jeraldine Ruby',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__A__Jeraldine_Ruby.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. Devaki',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Devaki-Kodivallal.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Anusuya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Anusuya-M.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. P. Anitha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Anitha-Parthasarathy.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. S. Sashikumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Sashikumar-S.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. J. Fahamitha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/J_Fahamitha.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. Mesiya Stalin',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/W_Mesiya-Stalin.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Ms. K. Bharathi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms-K-Bharathi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. A. Saranya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-A-Saranya.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. J. Anitha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-J-Anitha.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. S. Gowthami',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs-S-Gowthami.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    
    },{
      name: 'Mr. S. Thavamaniyan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__S__Thavamaniyan.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Vijayalakshmi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Vijayalakshmi.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K. Saravanan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Saravanan.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. A.T.Barani Vijaya Kumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__A_T_Barani_Vijaya_Kumar.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },
    {
      name: 'Mrs. T. Nandhini Raju',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__T__Nandhini_Raju.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. R. Priyadharshini,',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__R__Priyadharshini.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. N. Subashini',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__N__Subashini,.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. M. Mohamed Nizarudeen',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__M__Mohamed_Nizarudeen.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. J. Jane Yazhini',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__J__Jane_Yazhini,.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. A. Winny',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__A__Winny.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. C. Aarthy',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__C__Aarthy.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K.Sridhar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr_K__Sridhar.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. G. Mahalakshmi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__G__Mahalakshmi.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Suguna',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__M__Suguna.jpg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Ms. B. Sasi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Ms__B__Sasi.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. S.N. Lalitha Parameswari',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__S_N__Lalitha_Parameswari.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. M. Kanimozhi',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__S__Vijayalakshmi.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs. D. Suvetha',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs__D__Suvetha.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. J. Manivannan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__J__Manivannan.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. N. Vinothkumar',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__N__Vinothkumar.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mr. K. Karhikeyan',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mr__K__Karhikeyan.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    },{
      name: 'Mrs.S .Lavanya',
      position: 'Associate Professor',
      image: 'https://www.dsuniversity.ac.in/dsu-university/datas/staff_photos/Mrs_S__Lavanya.jpeg',
      experience: '15+ years',
       publications: '70+ Research Papers'
    }
    // ... you included many more — keep rest as needed ...
  ];

  // Cancel hide timer
  const cancelHideTimer = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  };

  // Start hide timer (short)
  const startHideTimer = (delay = 60) => {
    cancelHideTimer();
    hideTimerRef.current = setTimeout(() => {
      setHoveredFacultyData(null);
      hideTimerRef.current = null;
    }, delay);
  };

  // pointermove safety: closes modal if pointer not over card or modal
  useEffect(() => {
    if (!hoveredFacultyData) return;

    const onPointerMove = (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (!el) {
        setHoveredFacultyData(null);
        return;
      }
      const overCard = !!el.closest('[data-faculty-card]');
      const overModal = !!el.closest('#hover-modal');
      if (!overCard && !overModal) {
        cancelHideTimer();
        setHoveredFacultyData(null);
      }
    };

    document.addEventListener('pointermove', onPointerMove);
    return () => document.removeEventListener('pointermove', onPointerMove);
  }, [hoveredFacultyData]);

  useEffect(() => {
    return () => {
      cancelHideTimer();
    };
  }, []);

  // Departments & Positions (normalized lists)
  const departments = useMemo(() => {
    const map = new Map();
    let hasUnknown = false;
    facultyMembers.forEach((f) => {
      const raw = (f.department ?? '').trim();
      if (!raw) {
        hasUnknown = true;
        return;
      }
      const key = normalize(raw);
      if (!map.has(key)) map.set(key, raw);
    });
    const items = ['All', ...Array.from(map.values()).sort((a, b) => a.localeCompare(b))];
    if (hasUnknown) items.push('Unknown');
    return items;
  }, [facultyMembers]);

  const positions = useMemo(() => {
    const map = new Map();
    let hasUnknown = false;
    facultyMembers.forEach((f) => {
      const raw = (f.position ?? '').trim();
      if (!raw) {
        hasUnknown = true;
        return;
      }
      const key = normalize(raw);
      if (!map.has(key)) map.set(key, raw);
    });
    const items = ['All', ...Array.from(map.values()).sort((a, b) => a.localeCompare(b))];
    if (hasUnknown) items.push('Unknown');
    return items;
  }, [facultyMembers]);

  // Filtering logic (keeps your robust normalization)
  const filteredFaculty = useMemo(() => {
    const deptFilterNorm = departmentFilter === 'All' ? null : departmentFilter === 'Unknown' ? '__unknown__' : normalize(departmentFilter);
    const posFilterNorm = positionFilter === 'All' ? null : positionFilter === 'Unknown' ? '__unknown__' : normalize(positionFilter);

    return facultyMembers.filter((f) => {
      const rawDept = (f.department ?? '').trim();
      const rawPos = (f.position ?? '').trim();
      const deptNorm = rawDept ? normalize(rawDept) : null;
      const posNorm = rawPos ? normalize(rawPos) : null;

      let deptMatch = true;
      if (deptFilterNorm === '__unknown__') {
        deptMatch = !deptNorm;
      } else if (deptFilterNorm) {
        deptMatch = deptNorm ? deptNorm.includes(deptFilterNorm) || deptFilterNorm.includes(deptNorm) : false;
      }

      let posMatch = true;
      if (posFilterNorm === '__unknown__') {
        posMatch = !posNorm;
      } else if (posFilterNorm) {
        posMatch = posNorm ? posNorm.includes(posFilterNorm) || posFilterNorm.includes(posNorm) : false;
      }

      return deptMatch && posMatch;
    });
  }, [facultyMembers, departmentFilter, positionFilter]);

  const stats = [
    { icon: Users, label: 'Faculty Members', value: `${filteredFaculty.length}` },
    { icon: Award, label: 'Ph.D. Holders', value: '75+' },
    { icon: BookOpen, label: 'Research Publications', value: '500+' },
    { icon: Mail, label: 'Industry Experience', value: '15+ Years' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // compute modal position (near card) and clamp within viewport
  const computeModalStyle = (rect) => {
    if (!rect) return { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' };
    const padding = 8;
    const modalWidth = Math.min(360, window.innerWidth - 32); // approximate
    const topBelow = rect.bottom + padding;
    const topAbove = rect.top - padding - 320; // approx modal height
    let top = topBelow;
    // if not enough space below, open above
    if (top + 320 > window.innerHeight) top = Math.max(padding, topAbove);
    // prefer left aligned with card left, but clamp
    const left = clamp(rect.left, padding, window.innerWidth - modalWidth - padding);
    return { position: 'fixed', top: `${top}px`, left: `${left}px`, width: `${modalWidth}px`, zIndex: 9999 };
  };

  return (
    <section id="faculty" className="bg-gray-50" ref={ref}>
      {/* Hero */}
      <div className="relative w-full h-56 md:h-72 lg:h-96">
        <img
          src="https://t4.ftcdn.net/jpg/03/58/79/77/360_F_358797751_Gh6SS9Omu05oSC2Kv09PrUTlWTV8QErX.jpg"
          alt="Faculty Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mt-32 text-white drop-shadow-lg text-center max-w-4xl">
            Meet Our School of Engineering & Technology Faculties
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-6" />

        {/* Filters Row */}
        <div className="mb-6">
          <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="department" className="text-sm font-medium text-gray-700 mb-2 sm:mb-1">Department</label>
              <select id="department" value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)} className="w-full sm:w-64 bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
                {departments.map((d) => <option key={d} value={d}>{d || 'Unknown'}</option>)}
              </select>
            </div>

            <div className="flex flex-col w-full sm:w-auto">
              <label htmlFor="position" className="text-sm font-medium text-gray-700 mb-2 sm:mb-1">Position</label>
              <select id="position" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)} className="w-full sm:w-64 bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
                {positions.map((p) => <option key={p} value={p}>{p || 'Unknown'}</option>)}
              </select>
            </div>

            <div className="mt-3 sm:mt-6 text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-800">{filteredFaculty.length}</span> results
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-6 lg:p-7">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 h-40">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ scale: 0.95, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.35, delay: 0.15 + i * 0.05 }} className="bg-white rounded-lg shadow-sm flex flex-col lg:font-bold lg:text-5xl items-center justify-center min-h-[72px]">
                  <stat.icon className="h-6 w-6 text-blue-600 mb-1" />
                  <div className="text-sm font-semibold text-gray-800 leading-none">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Faculty Grid */}
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredFaculty.map((faculty, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              data-faculty-card
              onMouseEnter={(e) => {
                cancelHideTimer();
                // compute bounding rect of the card to position modal
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredFacultyData({ faculty, rect });
              }}
              onMouseLeave={() => {
                startHideTimer(60);
              }}
              onFocus={(e) => {
                // keyboard focus: behave same as hover
                cancelHideTimer();
                const rect = e.currentTarget.getBoundingClientRect();
                setHoveredFacultyData({ faculty, rect });
              }}
              onBlur={() => startHideTimer(60)}
              className="relative group bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer focus:outline-none"
              tabIndex={0}
              aria-label={`Faculty card: ${faculty.name}`}
            >
              {/* Uniform image */}
              <div className="w-full h-60 bg-gray-100 overflow-hidden">
                <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>

              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <div className="mb-2 min-h-[3.25rem]">
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight line-clamp-2">{faculty.name}</h3>
                  <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">{faculty.position}</p>
                </div>

                {faculty.department && (
                  <div className="mt-auto mb-2">
                    <span className="inline-block bg-blue-50 text-blue-600 text-[0.65rem] xs:text-xs px-2 py-1 rounded-full">{faculty.department}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Hover Modal (positioned ne ar card) */}
      {hoveredFacultyData && (
        <div
          id="hover-modal"
          ref={modalRef}
          // keep modal open while pointer is over modal
          onMouseEnter={() => cancelHideTimer()}
          onMouseLeave={() => startHideTimer(60)}
          style={computeModalStyle(hoveredFacultyData.rect)}
          aria-live="polite"
        >
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 max-w-full">
            <button onClick={() => setHoveredFacultyData(null)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700" aria-label="Close">
              <X className="w-5 h-5" />
            </button>

            <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg mb-3">
              <img src={hoveredFacultyData.faculty.image} alt={hoveredFacultyData.faculty.name} className="max-h-80 w-auto object-contain rounded-lg" />
            </div>

            <h2 className="text-lg font-bold text-gray-800 mb-1">{hoveredFacultyData.faculty.name}</h2>
            <p className="text-blue-600 font-medium mb-2">{hoveredFacultyData.faculty.position}</p>
            <p className="text-sm text-gray-600 mb-1">Department: {hoveredFacultyData.faculty.department || 'N/A'}</p>
            <p className="text-sm text-gray-600 mb-1">Experience: {hoveredFacultyData.faculty.experience}</p>
            <p className="text-sm text-gray-600">Publications: {hoveredFacultyData.faculty.publications}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Faculty;
