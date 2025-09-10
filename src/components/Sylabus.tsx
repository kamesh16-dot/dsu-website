import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  ChevronDown,
  ChevronUp,
  BookOpen,
  GraduationCap,
  Clock,
  Users,
  Award,
  Download,
  Printer,
  Calendar,
  Star,
  Tag,
  Mail,
  Phone,
} from 'lucide-react';

type Course = {
  no?: number | string;
  code?: string;
  name: string;
  category?: string;
  L?: number | string;
  T?: number | string;
  P?: number | string;
  C?: number | string;
  contactHours?: number | string;
};

type Semester = {
  title: string;
  courses: Course[];
  totals?: string;
  totalCredits?: number;
  contactHours?: number;
  ltp?: string;
};

type ElectiveGroup = {
  title: string;
  items: Course[];
};

type Program = {
  id: string;
  title: string;
  years?: string[];
  semesters: Semester[];
  electives?: ElectiveGroup[];
  description?: string;
  duration?: string;
  pdf?: string;
  totalCredits?: number;
};

const programs: Program[] = [
  {
    id: 'aids',
    title: 'Artificial Intelligence & Data Science',
    description: 'Specialized program focusing on AI, ML, data analytics, and intelligent systems with hands-on experience in modern technologies.',
    duration: '4 Years',
    years: ['YEAR I', 'YEAR II', 'YEAR III', 'YEAR IV'],
    totalCredits: 160,
    semesters: [
      {
        title: 'Semester I',
        courses: [
          { no: 1, code: '21ENG01', name: 'Basics In Communication', category: 'HS', contactHours: 4, L: 3, T: 0, P: 1, C: 3 },
          { no: 2, code: '21MAT01', name: 'Algebra and Calculus', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 3, code: '23PHY01', name: 'Engineering Physics', category: 'BS', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21GEN01', name: 'Engineering Graphics & Design', category: 'ES', contactHours: 5, L: 1, T: 0, P: 4, C: 3 },
          { no: 5, code: '21ACY01', name: 'Python Programming', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21PHYP1', name: 'Engineering Physics Laboratory', category: 'BS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 7, code: '21ACYP1', name: 'Python Programming Laboratory', category: 'ES', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 8, code: '21NCP01', name: 'Yoga', category: 'NC', contactHours: 2, L: 0, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 18,
        contactHours: 25,
        ltp: '13-1-9',
        totals: 'Total: Contact Hours 25 — L 13, T 1, P 9, C 18',
      },
      {
        title: 'Semester II',
        courses: [
          { no: 1, code: '21ENG02', name: 'Technical Communication', category: 'HS', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 2, code: '21MAT02', name: 'Advanced Calculus and ODE', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 3, code: '21CHY01', name: 'Engineering Chemistry', category: 'BS', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21GEN03', name: 'Basic Electrical & Electronics Engineering', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 5, code: '21CSE01', name: 'Programming in C', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21AID01', name: 'Java Programming', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 7, code: '21GEN05', name: 'Workshop Practices', category: 'ES', contactHours: 4, L: 0, T: 0, P: 4, C: 2 },
          { no: 8, code: '21CHYP1', name: 'Engineering Chemistry Laboratory', category: 'BS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21ENGP2', name: 'Communication Skills Laboratory', category: 'HS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21AIDP1', name: 'Java Programming Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 11, code: '21CSEP1', name: 'Programming in C Laboratory', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 12, code: '21NCP02', name: 'NSS', category: 'NC', contactHours: 3, L: 3, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 23,
        contactHours: 34,
        ltp: '21-1-12',
        totals: 'Total: Contact Hours 34 — L 21, T 1, P 12, C 23',
      },
      {
        title: 'Semester III',
        courses: [
          { no: 1, code: '21MAT03', name: 'Discrete Structures', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 2, code: '21AID02', name: 'Foundations of Artificial Intelligence', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE05', name: 'Computer Architecture', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21ECE61', name: 'Analog and Digital Electronics', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 5, code: '21CSE02', name: 'Data Structures', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21ACY02', name: 'RDBMS & MySQL', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 7, code: '21ENG03', name: 'Professional Communication', category: 'HS', contactHours: 4, L: 2, T: 0, P: 0, C: 2 },
          { no: 8, code: '21CSEP3', name: 'Data structures Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21AIDP2', name: 'Artificial Intelligence Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21ACYP2', name: 'RDBMS & MySQL Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 11, code: '21NCP03', name: 'Environmental Science', category: 'NC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
        ],
        totalCredits: 24,
        contactHours: 31,
        ltp: '24-1-6',
        totals: 'Total: Contact Hours 31 — L 24, T 1, P 6, C 24',
      },
      {
        title: 'Semester IV',
        courses: [
          { no: 1, code: '21MAT06', name: 'Probability and Statistics', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 2, code: '21AID03', name: 'Foundations of Data Science', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE07', name: 'Design and Analysis of Algorithms', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CSE06', name: 'Operating System', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 5, code: '21CSE11', name: 'Computer Networks', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21AID04', name: 'Microservices Architecture and implementation', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 7, code: '21ENG04', name: 'Advanced Technical Communication', category: 'HS', contactHours: 4, L: 4, T: 0, P: 0, C: 2 },
          { no: 8, code: '21CSEP8', name: 'Computer Networks lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21CSEP6', name: 'Operating System lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21AIDP3', name: 'Microservices Architecture & implementation Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 11, code: '21NCP04', name: 'Renewable Energy Source', category: 'NC', contactHours: 3, L: 3, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 23,
        contactHours: 31,
        ltp: '24-1-6',
        totals: 'Total: Contact Hours 31 — L 24, T 1, P 6, C 23',
      },
      {
        title: 'Semester V',
        courses: [
          { no: 1, code: '21AID05', name: 'Data Visualization (R, Python, Watson Studio)', category: 'BS', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 2, code: '21INT02', name: 'Web Programming', category: 'PC', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21AML03', name: 'Deep Learning and its applications', category: 'PC', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21AID06', name: 'Algorithm for Intelligent Systems', category: 'PC', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 5, code: '', name: 'Professional Elective-I', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 6, code: '21UHV02', name: 'Universal Human Values 2: Understanding Harmony', category: 'HS', contactHours: 2, L: 2, T: 1, P: 0, C: 3 },
          { no: 7, code: '21AIDP4', name: 'Data Visualization (R, Python, Watson Studio) Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 8, code: '21INTP1', name: 'Web Programming Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21ENGP3', name: 'Professional Communication Lab', category: 'HS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21NCP05', name: 'Essence of Indian Traditional Knowledge', category: 'NC', contactHours: 3, L: 3, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 20,
        contactHours: 29,
        ltp: '23-1-6',
        totals: 'Total: Contact Hours 29 — L 23, T 1, P 6, C 20',
      },
      {
        title: 'Semester VI',
        courses: [
          { no: 1, code: '21CSE12', name: 'Mobile Computing', category: 'PC', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21INT01', name: 'Information Retrieval Systems', category: 'PC', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '', name: 'Professional Elective-II', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '', name: 'Open Elective-I', category: 'OE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 5, code: '21AID07', name: 'Predictive Modeling', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 6, code: '21AIDP5', name: 'Predictive Modeling Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 7, code: '21INTP2', name: 'Mobile Application Development Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 8, code: '21CYSMP', name: 'Mini Project', category: 'EEC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
        ],
        totalCredits: 17,
        contactHours: 24,
        ltp: '18-0-6',
        totals: 'Total: Contact Hours 24 — L 18, T 0, P 6, C 17',
      },
      {
        title: 'Semester VII',
        courses: [
          { no: 1, code: '21GEN06', name: 'Disaster Management', category: 'HS', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '', name: 'Open Elective-II', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '', name: 'Professional Elective-III', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '', name: 'Professional Elective-IV', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 5, code: '21AID08', name: 'Machine Learning using Watson Studio', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 6, code: '21AIDP6', name: 'Machine Learning using Watson Studio Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 7, code: '21AIDIN', name: 'Internship & Publication', category: 'EEC', contactHours: 4, L: 0, T: 0, P: 4, C: 3 },
        ],
        totalCredits: 18,
        contactHours: 24,
        ltp: '18-0-6',
        totals: 'Total: Contact Hours 24 — L 18, T 0, P 6, C 18',
      },
      {
        title: 'Semester VIII',
        courses: [
          { no: 1, code: '', name: 'Professional Elective-V', category: 'PE', contactHours: 4, L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21AID09', name: 'AI Analyst – AP skills', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 3, code: '21AIDP7', name: 'AI Analyst – AP skills Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 4, code: '21AIDPW', name: 'Project Work', category: 'EEC', contactHours: 20, L: 0, T: 0, P: 20, C: 12 },
        ],
        totalCredits: 18,
        contactHours: 28,
        ltp: '6-0-22',
        totals: 'Total: Contact Hours 28 — L 6, T 0, P 22, C 18',
      },
    ],
    electives: [
      {
        title: 'Professional Elective - I',
        items: [
          { no: 1, code: '21CSE14', name: 'Image and Video Processing', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21AID11', name: 'Computational Intelligence', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CYS01', name: 'Foundations of Cyber Security', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CSE19', name: 'Augumented Reality', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
      {
        title: 'Professional Elective - II',
        items: [
          { no: 1, code: '21AID12', name: 'Reinforcement Learning', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21CSE26', name: 'Parallel Algorithms', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE16', name: 'Robotics', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21IoT02', name: 'Internet of Things', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
      {
        title: 'Professional Elective - III',
        items: [
          { no: 1, code: '21AID13', name: 'Unix and Shell Programming', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21AID14', name: 'Node Js', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE18', name: 'High Performance Computing', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CSE17', name: 'Sensor Networks', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
      {
        title: 'Professional Elective - IV',
        items: [
          { no: 1, code: '21AID15', name: 'Robotics and Intelligent Systems', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21CSE20', name: 'Natural Language Processing', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '23MAT08', name: 'Optimization Techniques', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21ECE68', name: 'Embedded System Design and Architecture', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
      {
        title: 'Professional Elective - V',
        items: [
          { no: 1, code: '21AML07', name: 'Business Intelligence', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21INT09', name: 'Linux Programming', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE24', name: 'Computer Forensics', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CSE21', name: 'Digital Signal Processing', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
    ],
  },
  {
    id: 'cse-cyber',
    title: 'Computer Science & Engineering (Cyber Security)',
    description: 'Specialized computer science program with focus on cybersecurity, ethical hacking, and information security.',
    duration: '4 Years',
    years: ['YEAR I', 'YEAR II', 'YEAR III', 'YEAR IV'],
    totalCredits: 160,
    semesters: [
      {
        title: 'Semester I',
        courses: [
          { no: 1, code: '21ENG01', name: 'Basics In Communication', category: 'HS', contactHours: 4, L: 3, T: 0, P: 1, C: 3 },
          { no: 2, code: '21MAT01', name: 'Algebra and Calculus', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 3, code: '23PHY01', name: 'Engineering Physics', category: 'BS', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21GEN01', name: 'Engineering Graphics & Design', category: 'ES', contactHours: 5, L: 1, T: 0, P: 4, C: 3 },
          { no: 5, code: '21ACY01', name: 'Python Programming', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21PHYP1', name: 'Engineering Physics Laboratory', category: 'BS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 7, code: '21ACYP1', name: 'Python Programming Laboratory', category: 'ES', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 8, code: '21NCP01', name: 'Yoga', category: 'NC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
        ],
        totalCredits: 18,
        contactHours: 25,
        ltp: '13-1-9',
        totals: 'Total: Contact Hours 25 — L 13, T 1, P 9, C 18',
      },
      {
        title: 'Semester II',
        courses: [
          { no: 1, code: '21ENG02', name: 'Technical Communication', category: 'HS', contactHours: 4, L: 4, T: 0, P: 0, C: 2 },
          { no: 2, code: '21MAT02', name: 'Advanced Calculus and ODE', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 3, code: '21CHY01', name: 'Engineering Chemistry', category: 'BS', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21GEN03', name: 'Basic Electrical & Electronics Engineering', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 5, code: '21CSE01', name: 'Programming in C', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21ACY02', name: 'RDBMS & MySQL', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 7, code: '21GEN05', name: 'Workshop Practices', category: 'ES', contactHours: 4, L: 0, T: 0, P: 4, C: 2 },
          { no: 8, code: '21CHYP1', name: 'Engineering Chemistry Laboratory', category: 'BS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21ENGP2', name: 'Communication Skills Laboratory', category: 'HS', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21ACYP2', name: 'RDBMS & MySQL Laboratory', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 11, code: '21CSEP1', name: 'Programming in C Laboratory', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 12, code: '21NCP02', name: 'NSS', category: 'NC', contactHours: 3, L: 3, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 23,
        contactHours: 34,
        ltp: '21-1-12',
        totals: 'Total: Contact Hours 34 — L 21, T 1, P 12, C 23',
      },
      {
        title: 'Semester III',
        courses: [
          { no: 1, code: '21MAT03', name: 'Discrete Structures', category: 'BS', contactHours: 4, L: 3, T: 1, P: 0, C: 4 },
          { no: 2, code: '21ECE50', name: 'Analog and Digital Electronics', category: 'ES', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CSE02', name: 'Data Structures', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CSE03', name: 'Object Oriented Programming', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 5, code: '21CSE05', name: 'Computer Architecture', category: 'PC', contactHours: 3, L: 3, T: 0, P: 0, C: 3 },
          { no: 6, code: '21ACY03', name: 'Cloud Application Developer', category: 'PC', contactHours: 2, L: 2, T: 0, P: 0, C: 2 },
          { no: 7, code: '21ENG03', name: 'Professional Communication', category: 'HS', contactHours: 4, L: 4, T: 0, P: 0, C: 2 },
          { no: 8, code: '21CSEP3', name: 'Data Structures Laboratory', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 9, code: '21CSEP4', name: 'Object Oriented Programming Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 10, code: '21ACYP3', name: 'Cloud Application Developer Lab', category: 'PC', contactHours: 2, L: 0, T: 0, P: 2, C: 1 },
          { no: 11, code: '21NCP03', name: 'Environmental Science', category: 'NC', contactHours: 3, L: 3, T: 0, P: 0, C: 0 },
        ],
        totalCredits: 23,
        contactHours: 31,
        ltp: '24-1-6',
        totals: 'Total: Contact Hours 31 — L 24, T 1, P 6, C 23',
      },
    ],
    electives: [
      {
        title: 'Cybersecurity Specialization Electives',
        items: [
          { no: 1, code: '21CYS01', name: 'Foundations of Cyber Security', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 2, code: '21CYS02', name: 'Ethical Hacking', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 3, code: '21CYS03', name: 'Digital Forensics', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
          { no: 4, code: '21CYS04', name: 'Network Security', category: 'PE', L: 4, T: 0, P: 0, C: 3 },
        ],
      },
    ],
  },
  {
    id: 'cse',
    title: 'Computer Science Engineering',
    description: 'Core computer science program with focus on software development, algorithms, and system design.',
    duration: '4 Years',
    years: ['YEAR I', 'YEAR II', 'YEAR III', 'YEAR IV'],
    semesters: [
      {
        title: 'Semester I',
        courses: [
          { no: 1, code: '21ENG01', name: 'Basics In Communication', category: 'HS', L: 3, T: 0, P: 1, C: 3 },
          { no: 2, code: '21MAT01', name: 'Algebra and Calculus', category: 'BS', L: 3, T: 1, P: 0, C: 4 },
        ],
        totals: 'Total: Contact Hours 25 — L 13, T 1, P 9, C 18',
      },
    ],
    electives: [
      {
        title: 'Professional Electives - I',
        items: [{ no: 1, code: '21CSE14', name: 'Image and Video Processing', category: 'PE', L: 4, T: 0, P: 0, C: 3 }],
      },
    ],
  },
  {
    id: 'ece',
    title: 'Electronics & Communication Engineering',
    description: 'ECE Curriculum & Syllabus',
    duration: '4 Years',
    semesters: [{ title: 'Overview (PDF)', courses: [{ name: 'See PDF', code: 'PDF' }] }],
    pdf: '/assets/B.Tech-ECE-Syllabus.pdf',
  },
  {
    id: 'eee',
    title: 'Electrical & Electronics Engineering',
    description: 'EEE Curriculum & Syllabus',
    duration: '4 Years',
    semesters: [{ title: 'Overview (PDF)', courses: [{ name: 'See PDF', code: 'PDF' }] }],
    pdf: '/assets/EEE-Curriculum&Syllabus.pdf',
  },
  {
    id: 'agri',
    title: 'Agricultural Engineering',
    description: 'Agricultural Engineering curriculum',
    duration: '4 Years',
    years: ['YEAR I', 'YEAR II', 'YEAR III', 'YEAR IV'],
    semesters: [{ title: 'Overview (PDF available)', courses: [{ name: 'Full curriculum in PDF', code: 'PDF' }] }],
    pdf: '/assets/B.Tech_Agriculture_Engineering_Curriculum_and_Syllabus.pdf',
  },
];

const CategoryBadge: React.FC<{ category?: string }> = ({ category = '' }) => {
  if (!category) return null;
  const colorMap: Record<string, string> = {
    HS: 'bg-purple-100 text-purple-800 border-purple-200',
    BS: 'bg-blue-100 text-blue-800 border-blue-200',
    ES: 'bg-green-100 text-green-800 border-green-200',
    PC: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    PE: 'bg-orange-100 text-orange-800 border-orange-200',
    OE: 'bg-pink-100 text-pink-800 border-pink-200',
    EEC: 'bg-teal-100 text-teal-800 border-teal-200',
    NC: 'bg-gray-100 text-gray-800 border-gray-200',
  };
  const nameMap: Record<string, string> = {
    HS: 'Humanities & Social Sciences',
    BS: 'Basic Sciences',
    ES: 'Engineering Sciences',
    PC: 'Professional Core',
    PE: 'Professional Elective',
    OE: 'Open Elective',
    EEC: 'Employability Enhancement',
    NC: 'Non-Credit',
  };
  const cls = colorMap[category] || 'bg-gray-100 text-gray-800 border-gray-200';

  return (
    <div className="group relative inline-block">
      <span className={`px-2 py-1 rounded text-xs font-medium border ${cls} cursor-help`}>{category}</span>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
        {nameMap[category] || category}
      </div>
    </div>
  );
};

const SearchBar: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <div className="relative">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <input
      data-testid="input-search-courses"
      aria-label="Search courses"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search courses, subjects, or codes..."
      className="w-full pl-10 pr-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all hover:border-primary/50 bg-background"
    />
  </div>
);

export default function SyllabusPage(): JSX.Element {
  const [selectedProgramId, setSelectedProgramId] = useState<string>(programs[0].id);
  const [openSemester, setOpenSemester] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showElectives, setShowElectives] = useState<boolean>(false);

  const program = programs.find((p) => p.id === selectedProgramId)!;

  useEffect(() => {
    setOpenSemester(null);
    setSearchQuery('');
    setShowElectives(false);
  }, [selectedProgramId]);

  const filteredSemesters = useMemo(() => {
    if (!searchQuery.trim()) return program.semesters;
    const q = searchQuery.toLowerCase();
    return program.semesters
      .map((semester) => ({
        ...semester,
        courses: semester.courses.filter(
          (course) =>
            (course.name && course.name.toLowerCase().includes(q)) ||
            (course.code && course.code.toLowerCase().includes(q)) ||
            (course.category && course.category.toLowerCase().includes(q))
        ),
      }))
      .filter((sem) => sem.courses.length > 0);
  }, [program, searchQuery]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    if (program.pdf) {
      window.open(program.pdf, '_blank');
    } else {
      alert('PDF curriculum not available for this program');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header
        className="relative overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-indigo-700"
        role="banner"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=800')"
          }}
          aria-hidden="true"
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <GraduationCap className="h-4 w-4 text-white/90" />
             
            </div>
            
            <h1 className="text-4xl sm:text-5xl mt-36 lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Academic Syllabus
              
            </h1>
            
           
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" role="main">
        
        {/* Program Selection & Controls */}
        <section className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8" aria-labelledby="program-selection">
          <h2 id="program-selection" className="sr-only">Program Selection and Search</h2>
          
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Program Selector */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <GraduationCap className="h-5 w-5 text-primary" />
                <label htmlFor="program-select" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Academic Program
                </label>
              </div>

              <select 
                id="program-select"
                data-testid="select-program"
                value={selectedProgramId}
                onChange={(e) => setSelectedProgramId(e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg bg-card text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring transition-all hover:border-primary/50"
                aria-label="Select academic program"
              >
                {programs.map((p) => (
                  <option key={p.id} value={p.id}>
                    B.Tech — {p.title}
                  </option>
                ))}
              </select>

              {/* Program Info Card */}
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <p className="text-sm text-muted-foreground mb-3" data-testid="text-program-description">
                  {program.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3 text-primary" />
                    <span data-testid="text-program-duration">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-3 w-3 text-primary" />
                    <span data-testid="text-program-semesters">{program.semesters.length} Semesters</span>
                  </div>
                  {program.totalCredits && (
                    <div className="flex items-center gap-2">
                      <Award className="h-3 w-3 text-primary" />
                      <span data-testid="text-program-credits">{program.totalCredits} Credits</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Search & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5 text-primary" />
                <label htmlFor="course-search" className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Search Courses
                </label>
              </div>
              
              <SearchBar value={searchQuery} onChange={setSearchQuery} />

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button 
                  type="button"
                  data-testid="button-download-pdf"
                  onClick={handleDownloadPDF}
                  className="w-full bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                >
                  <Download className="h-4 w-4 mr-2 inline" />
                  Download Curriculum PDF
                </button>
                
                <button 
                  type="button" 
                  data-testid="button-print"
                  onClick={handlePrint}
                  className="no-print w-full bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-medium shadow-sm hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                >
                  <Printer className="h-4 w-4 mr-2 inline" />
                  Print Syllabus
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories Legend */}
        <section className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8" aria-labelledby="categories-legend">
          <h2 id="categories-legend" className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            Course Categories
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <div className="bg-purple-100 text-purple-800 border border-purple-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Humanities & Social Sciences">
              <div className="font-semibold">HS</div>
              <div className="text-xs opacity-75">Humanities</div>
            </div>
            <div className="bg-blue-100 text-blue-800 border border-blue-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Basic Sciences">
              <div className="font-semibold">BS</div>
              <div className="text-xs opacity-75">Basic Sci.</div>
            </div>
            <div className="bg-green-100 text-green-800 border border-green-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Engineering Sciences">
              <div className="font-semibold">ES</div>
              <div className="text-xs opacity-75">Eng. Sci.</div>
            </div>
            <div className="bg-indigo-100 text-indigo-800 border border-indigo-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Professional Core">
              <div className="font-semibold">PC</div>
              <div className="text-xs opacity-75">Prof. Core</div>
            </div>
            <div className="bg-orange-100 text-orange-800 border border-orange-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Professional Elective">
              <div className="font-semibold">PE</div>
              <div className="text-xs opacity-75">Prof. Elect.</div>
            </div>
            <div className="bg-pink-100 text-pink-800 border border-pink-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Open Elective">
              <div className="font-semibold">OE</div>
              <div className="text-xs opacity-75">Open Elect.</div>
            </div>
            <div className="bg-teal-100 text-teal-800 border border-teal-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Employability Enhancement">
              <div className="font-semibold">EEC</div>
              <div className="text-xs opacity-75">Employment</div>
            </div>
            <div className="bg-gray-100 text-gray-800 border border-gray-200 px-3 py-2 rounded-lg text-xs font-medium text-center" title="Non-Credit">
              <div className="font-semibold">NC</div>
              <div className="text-xs opacity-75">Non-Credit</div>
            </div>
          </div>
        </section>

        {/* Academic Years Overview */}
        {program.years && (
          <section className="bg-card rounded-xl shadow-sm border border-border p-6 mb-8" aria-labelledby="years-overview">
            <h2 id="years-overview" className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Academic Structure
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {program.years.map((year, idx) => (
                <div key={year} className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-primary mb-1">{year}</div>
                  <div className="text-sm text-muted-foreground">
                    Semester {idx * 2 + 1} & {idx * 2 + 2}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    {idx === 0 && 'Foundation Courses'}
                    {idx === 1 && 'Core Subjects'}
                    {idx === 2 && 'Specialization'}
                    {idx === 3 && 'Projects & Electives'}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Semester Details */}
        <section className="space-y-4" aria-labelledby="semester-details">
          <h2 id="semester-details" className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Semester-wise Course Details
          </h2>
          
          {filteredSemesters.length === 0 && searchQuery && (
            <div className="bg-card rounded-xl shadow-sm border border-border p-8 text-center">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try different search terms or clear the search to see all courses.</p>
            </div>
          )}

          {filteredSemesters.map((sem, idx) => {
            const semId = `${program.id}-sem-${idx}`;
            const isOpen = openSemester === semId;

            return (
              <article
                key={semId}
                className="bg-card rounded-xl shadow-sm border border-border overflow-hidden transition-all duration-200 hover:shadow-md print-break"
              >
                <button
                  data-testid={`button-toggle-semester-${idx + 1}`}
                  aria-controls={`${semId}-panel`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenSemester(isOpen ? null : semId)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary/5 to-blue-50 border-b border-border flex items-center justify-between hover:from-primary/10 transition-all focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm">
                      {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][idx] || idx + 1}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">{sem.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {sem.totalCredits && `${sem.totalCredits} Credits`}
                        {sem.contactHours && ` • ${sem.contactHours} Contact Hours`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-sm font-medium" data-testid={`text-course-count-${idx + 1}`}>
                      {sem.courses.length} Course{sem.courses.length !== 1 ? 's' : ''}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-5 w-5 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`${semId}-panel`} 
                    role="region" 
                    aria-labelledby={`${semId}-btn`} 
                    className="px-6 py-4"
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" role="table" aria-label={`${sem.title} courses`}>
                        <thead>
                          <tr className="bg-muted/50 border-b border-border">
                            <th className="text-left py-3 px-4 font-semibold text-foreground" scope="col">S.No</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground" scope="col">Course Code</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground" scope="col">Course Name</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground" scope="col">Category</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground" scope="col">L</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground" scope="col">T</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground" scope="col">P</th>
                            <th className="text-center py-3 px-4 font-semibold text-foreground" scope="col">Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sem.courses.map((course, i) => (
                            <tr 
                              key={i} 
                              className={`border-b border-border hover:bg-muted/30 transition-colors ${
                                i % 2 === 0 ? 'bg-background' : 'bg-muted/20'
                              }`}
                              data-testid={`row-course-${idx + 1}-${i + 1}`}
                            >
                              <td className="py-3 px-4 text-muted-foreground">{course.no ?? '—'}</td>
                              <td className="py-3 px-4 font-mono text-sm">{course.code ?? '—'}</td>
                              <td className="py-3 px-4 font-medium">{course.name}</td>
                              <td className="py-3 px-4 text-center">
                                <CategoryBadge category={course.category} />
                              </td>
                              <td className="py-3 px-4 text-center">{course.L ?? '—'}</td>
                              <td className="py-3 px-4 text-center">{course.T ?? '—'}</td>
                              <td className="py-3 px-4 text-center">{course.P ?? '—'}</td>
                              <td className="py-3 px-4 text-center font-semibold text-primary">{course.C ?? '—'}</td>
                            </tr>
                          ))}
                        </tbody>
                        {sem.totals && (
                          <tfoot>
                            <tr className="bg-primary/5 border-t-2 border-primary">
                              <td colSpan={4} className="py-3 px-4 font-semibold text-foreground">Total</td>
                              <td className="py-3 px-4 text-center font-bold" data-testid={`text-total-l-${idx + 1}`}>
                                {sem.ltp?.split('-')[0] || '—'}
                              </td>
                              <td className="py-3 px-4 text-center font-bold" data-testid={`text-total-t-${idx + 1}`}>
                                {sem.ltp?.split('-')[1] || '—'}
                              </td>
                              <td className="py-3 px-4 text-center font-bold" data-testid={`text-total-p-${idx + 1}`}>
                                {sem.ltp?.split('-')[2] || '—'}
                              </td>
                              <td className="py-3 px-4 text-center font-bold text-primary" data-testid={`text-total-credits-${idx + 1}`}>
                                {sem.totalCredits || '—'}
                              </td>
                            </tr>
                          </tfoot>
                        )}
                      </table>
                    </div>

                    {/* Semester Summary */}
                    {(sem.contactHours || sem.totalCredits || sem.ltp) && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          {sem.contactHours && (
                            <div className="text-sm">
                              <span className="text-muted-foreground">Contact Hours:</span>
                              <span className="font-semibold text-foreground ml-1" data-testid={`text-contact-hours-${idx + 1}`}>
                                {sem.contactHours}
                              </span>
                            </div>
                          )}
                          {sem.totalCredits && (
                            <div className="text-sm">
                              <span className="text-muted-foreground">Total Credits:</span>
                              <span className="font-semibold text-primary ml-1" data-testid={`text-semester-credits-${idx + 1}`}>
                                {sem.totalCredits}
                              </span>
                            </div>
                          )}
                          {sem.ltp && (
                            <div className="text-sm">
                              <span className="text-muted-foreground">L-T-P:</span>
                              <span className="font-semibold text-foreground ml-1" data-testid={`text-ltp-${idx + 1}`}>
                                {sem.ltp}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </section>

        {/* Professional Electives */}
        {program.electives && program.electives.length > 0 && (
          <section className="bg-card rounded-xl shadow-sm border border-border p-6 mt-8" aria-labelledby="electives-section">
            <div className="flex items-center justify-between mb-6">
              <h2 id="electives-section" className="text-xl font-bold text-foreground flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Professional Electives
              </h2>
              <button 
                type="button"
                data-testid="button-toggle-electives"
                onClick={() => setShowElectives(!showElectives)}
                className="text-primary hover:text-primary/80 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring px-3 py-1 rounded"
              >
                {showElectives ? 'Hide' : 'View All'} Electives
              </button>
            </div>

            {showElectives && (
              <div className="grid md:grid-cols-2 gap-6">
                {program.electives.map((group, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-4" data-testid={`card-elective-group-${idx + 1}`}>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      {group.title}
                    </h3>
                    <div className="space-y-2">
                      {group.items.map((item, jdx) => (
                        <div 
                          key={jdx} 
                          className="flex items-center justify-between p-2 bg-muted/30 rounded text-sm"
                          data-testid={`item-elective-${idx + 1}-${jdx + 1}`}
                        >
                          <div>
                            {item.code && (
                              <span className="font-mono text-xs text-muted-foreground">{item.code}</span>
                            )}
                            <span className="font-medium ml-2">{item.name}</span>
                          </div>
                          {item.C && (
                            <span className="text-primary font-semibold">{item.C} Credits</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* PDF-only program notice */}
        {program.pdf && (
          <section className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Download Curriculum PDF</h3>
                <p className="text-blue-800 mb-4">
                  Click below to open or download the full curriculum document for <strong>{program.title}</strong>.
                </p>
                <a 
                  href={program.pdf} 
                  target="_blank" 
                  rel="noreferrer" 
                  data-testid="link-curriculum-pdf"
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-sm hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2 inline" />
                  Open PDF
                </a>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      
    </div>
  );
}