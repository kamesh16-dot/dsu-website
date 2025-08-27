import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import dsu_pic from "../assets/logo-pic.png";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#Hero", isHash: true },
    { name: "About", href: "#about", isHash: true },
    { name: "Programs", href: "/program", isHash: false },
    {
      name: "Facilities",
      subItems: [
        { name: "Laboratories", href: "#facilities" },
        { name: "Culturals and Sports", href: "/cul" },
        { name: "Hostels", href: "#hostels" },
        { name: "Cafeteria", href: "#cafeteria" },
      ],
    },
    { name: "Faculties", href: "/facult", isHash: false },
    { name: "Admissions", href: "#admissions", isHash: true },
    { name: "Contact", href: "#contact", isHash: true },
    {
      name: "More",
      subItems: [
        { name: "Research & Development", href: "/Research" },
        { name: "Academic Calendar", href: "/clander" },
      ],
    },
  ];

  const quickLinks = [
    { name: "Student Login", href: "#student-login" },
    { name: "Faculty Login", href: "#faculty-login" },
    { name: "Alumni", href: "#alumni" },
    { name: "Careers", href: "#careers" },
  ];

  const handleNavigation = (href, isHash) => {
    if (isHash) {
      if (location.pathname !== "/") window.location.href = `/${href}`;
      else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "shadow-md bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3">
        {/* ===== Desktop Header ===== */}
        <div className="hidden lg:flex flex-col w-full">
          {/* Top Row: Logo + Quick Links */}
          <div className="flex justify-between items-center mb-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={dsu_pic} alt="DSU Logo" className="h-14 w-20 object-contain" />
              <div className="flex flex-col">
                <h1 className={`text-3xl font-extrabold ${isScrolled ? "text-yellow-300" : "text-white"}`}>
                  Dhanalakshmi Srinivasan University
                </h1>
                <p className={`text-lg ${isScrolled ? "text-gray-900 font-semibold" : "text-white"}`}>
                  School of Engineering & Technology
                </p>
              </div>
            </Link>
            <div className={`flex items-center gap-6 text-sm ${ isScrolled ?"text-black":"text-white"}`}>
              {quickLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-yellow-300 transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Row */}
          <div className="flex justify-center items-center space-x-4 border-t border-gray-200 pt-3">
            {navItems.map(item =>
              item.subItems ? (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className={`flex items-center font-medium px-3 py-2 transition-colors ${
                      isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white py-1 z-50">
                      {item.subItems.map(sub =>
                        sub.href.startsWith("#") ? (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href, true)}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {sub.name}
                          </button>
                        ) : (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                          >
                            {sub.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.isHash ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, true)}
                  className={`font-medium px-3 py-2 transition-colors ${
                    isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-200"
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
                        ? isActive ? "text-blue-600" : "text-gray-800 hover:text-blue-600"
                        : isActive ? "text-blue-800" : "text-white hover:text-blue-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4 bg-yellow-600 text-white px-4 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <a href="https://forms.gle/QekMLvWTsepzdASG9" target="_blank" rel="noreferrer">
                Apply now
              </a>
            </motion.button>
          </div>
        </div>

        {/* ===== Mobile Header ===== */}
        <div className="flex justify-between items-center lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <img src={dsu_pic} alt="DSU Logo" className="h-12 w-16 object-contain" />
            <div className="flex flex-col">
              <h1 className={`text-sm font-bold ${isScrolled ? "text-black" : "text-gray-100"}`}>
                DSUUniversity
              </h1>
              <p className={`text-xs font-semibold ${isScrolled ? "text-gray-900" : "text-gray-100"}`}>
                School of Engineering&Technology
              </p>
            </div>
          </Link>
          <button
            className={`p-2 rounded-md ${isScrolled ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* ===== Mobile Menu ===== */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-white shadow-xl p-4 rounded-b-md"
          >
            {navItems.map(item =>
              item.subItems ? (
                <div key={item.name} className="mb-2">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                    className="flex justify-between w-full px-4 py-2 text-gray-800 rounded hover:bg-gray-100 transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={`ml-1 h-4 w-4 ${openDropdown === item.name ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 mt-1">
                      {item.subItems.map(sub =>
                        sub.href.startsWith("#") ? (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href, true)}
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                          >
                            {sub.name}
                          </button>
                        ) : (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : item.isHash ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, true)}
                  className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 rounded mb-1"
                >
                  {item.name}
                </button>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `block w-full text-left px-4 py-2 rounded mb-1 ${isActive ? "text-blue-600 font-medium" : "text-gray-800"}`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            )}

            {/* Mobile Quick Links */}
            <div className="mt-3 border-t border-gray-200 pt-2">
              {quickLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button className="w-full mt-2 bg-yellow-600 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-700 transition-colors">
              <a href="https://forms.gle/QekMLvWTsepzdASG9" target="_blank" rel="noreferrer">
                Apply Now
              </a>
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
