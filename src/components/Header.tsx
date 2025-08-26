import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import dsu_pic from '../assets/logo-pic.png';
import { Link, useLocation, NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#about', isHash: true },
     { name: 'About', href: '#about', isHash: true },
    { name: 'Programs', href: '/program', isHash: false },
    { name: 'Facilities', href: '#facilities', isHash: true },
    { name: 'Faculties', href: '/faculty', isHash: false },
    { name: 'Admissions', href: '#admissions', isHash: true },
    { name: 'Contact', href: '#contact', isHash: true },
    { 
      name: 'More', 
   
      isHash: true,
      subItems: [
        { name: 'Research & Development', href: '/Research' },
        { name: 'Academic Calender', href: '/Research' }
      ]
    },
  ];

  const handleNavigation = (href: string, isHash: boolean) => {
    if (isHash) {
      if (location.pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0  right-1 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-blue-100 bg-opacity-10 shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-3 py-3 ml-90">
        <div className="flex items-center justify-between s ">
          {/* Logo */}
          <motion.div className="flex items-center space-x- " whileHover={{ scale: 1.03 }}>
            <Link to="/" className="flex items-center">
              <img src={dsu_pic} alt="DSU Logo" className="h-12 w-23 object-cover" />
              <div className="ml-3 gap-2">
                <h1 className={`text-xs lg:text-md font-bold  ${isScrolled ? 'text-black' : 'text-gray-100'}`}>
                  Dhanalakshmi Srinivasan University
                </h1>
                <p className={`text-xs lg:text-lg  font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-100'}`}>
                  School of Engineering & Technology
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1    ">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className={`flex items-center font-medium px-3  py-2 transition-colors ${
                      isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white py-1 z-50 ${
                    isAboutOpen ? 'block' : 'hidden group-hover:block'
                  }`}>
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => setIsAboutOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : item.isHash ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, true)}
                  className={`font-medium px-3 py-2 transition-colors ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `font-medium px-3 py-2 transition-colors ${
                      isScrolled
                        ? isActive ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'
                        : isActive ? 'text-blue-800' : 'text-white hover:text-blue-200'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 bg-yellow-600 text-white px-4 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <a href="https://forms.gle/QekMLvWTsepzdASG9" target='blank'>Apply now</a>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-4 rounded-md ${
              isScrolled ? 'bg-gray-100 text-gray-800' : 'bg-white/20 text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-white rounded-lg shadow-xl p-4"
          >
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {isAboutOpen && (
                    <div className="pl-4 mt-1">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.isHash ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, true)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition-colors ${
                      isActive ? 'text-blue-600 font-medium' : 'text-gray-800'
                    }`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <button className="w-full mt-3 bg-yellow-600 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-700 transition-colors">
              <a href="https://forms.gle/QekMLvWTsepzdASG9" target='blank'>Apply Now</a>
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;