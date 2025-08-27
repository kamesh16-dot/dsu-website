import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Award, BookOpen, Users } from 'lucide-react';

const Faculty = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });

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
  ];

  const stats = [
    { icon: Users, label: 'Faculty Members', value: '150+' },
    { icon: Award, label: 'Ph.D. Holders', value: '75+' },
    { icon: BookOpen, label: 'Research Publications', value: '500+' },
    { icon: Mail, label: 'Industry Experience', value: '15+ Years' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="faculty" className="py-48 bg-gray-500" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 bg-gray"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
           School of Engineering & Technology Faculties
          </h2>
          
        </motion.div>

        {/* Faculty Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
            >
              <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

       
       {/* Faculty Grid */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
>
  {facultyMembers.map((faculty, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      {/* Image with responsive height */}
      <div className="aspect-square overflow-hidden">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      {/* Content area with responsive padding */}
      <div className="p-3 sm:p-4 flex-grow flex flex-col">
        {/* Name and position with responsive text */}
        <div className="mb-1 sm:mb-2 min-h-[3.5rem]">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight line-clamp-2">
            {faculty.name}
          </h3>
          <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">
            {faculty.position}
          </p>
        </div>

        {/* Department tag - responsive size */}
        {faculty.department && (
          <div className="mt-auto mb-2">
            <span className="inline-block bg-blue-50 text-blue-600 text-[0.6rem] xs:text-xs px-2 py-1 rounded-full">
              {faculty.department}
            </span>
          </div>
        )}

        {/* Experience and publications - responsive icons */}
        <div className="space-y-1 text-xs xs:text-sm">
          <div className="flex items-center text-gray-600">
            <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{faculty.experience}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg className="w-3 h-3 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>{faculty.publications}</span>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>
        {/* Research Excellence */}
        
      </div>
    </section>
  );
};

export default Faculty;