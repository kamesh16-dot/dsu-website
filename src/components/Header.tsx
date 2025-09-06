import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Trophy,
  Star,
  Award,
} from "lucide-react";
import dsu_pic from "../assets/logo-pic.png";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openQuickDropdown, setOpenQuickDropdown] = useState<string | null>(
    null
  );
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [mobileQuickSubMenu, setMobileQuickSubMenu] = useState<string | null>(
    null
  );
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setOpenQuickDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigation Items
  const navItems = [
    { name: "Home", href: "#", isHash: true, icon: Users },
    { name: "About", href: "#about", isHash: true, icon: Users },
    { name: "Programs", href: "/program", isHash: false, icon: Briefcase },
    {
      name: "Placements",
      icon: Trophy,
      subItems: [
        { name: "Objectives", href: "/placement", isHash: false, icon: Trophy },
        { name: "Vision & Mission", href: "/research", isHash: false, icon: Star },
        { name: "About HRDC", href: "/hrdc", isHash: false, icon: Award },
        { name: "HRDC Faculty", href: "/clander", isHash: false, icon: Users },
        { name: "Internship", href: "/intern", isHash: false, icon: Briefcase },
        { name: "Training & Placement Cell", href: "/placement-cell", isHash: false, icon: Trophy },
        { name: "Entrepreneur Development Cell", href: "/erc", isHash: false, icon: Briefcase },
        { name: "Higher Education Cell", href: "/higher-education", isHash: false, icon: Star },
        { name: "Career Guidance Cell", href: "/career-guidance", isHash: false, icon: Users },
        { name: "Internship Drive", href: "/internship-drive", isHash: false, icon: Trophy },
        { name: "Industrial Visit", href: "/industrial-visit", isHash: false, icon: Briefcase },
        { name: "MoU", href: "/mou", isHash: false, icon: Award },
        { name: "MoU Activity", href: "/mou-activity", isHash: false, icon: Award },
      ],
    },
    {
      name: "Facilities",
      icon: Users,
      subItems: [
        { name: "Laboratories", href: "/lab", isHash: false, icon: Trophy },
        { name: "Culturals and Sports", href: "/cul", isHash: false, icon: Star },
        { name: "Hostels", href: "#hostels", isHash: true, icon: Users },
        { name: "Cafeteria", href: "#cafeteria", isHash: true, icon: Award },
      ],
    },
    
    { name: "Admissions", href: "#admissions", isHash: true, icon: Star },
    { name: "Contact", href: "#contact", isHash: true, icon: Users },
  ];

  // Quick Links
  const quickLinks = [
    {
      name: "Student",
      icon: Users,
      subItems: [
        { name: "Students' Affairs", href: "/Sa", isHash: false, icon: Users },
        { name: "Academic Bank of Credits", href: "/student-exams", isHash: false, icon: Star },
        { name: "Scholarship", href: "/scholarship", isHash: false, icon: Trophy },
        { name: "Student-achievment", href: "/Students", isHash: false, icon: Award },
      ],
    },
    {
      name: "Faculty Login",
      icon: Users,
      subItems: [
        { name: "Faculties", href: "/faculty", isHash: false, icon: Users },
        { name: "Faculty Portal", href: "/faculty-portal", isHash: false, icon: Star },
      ],
    },
    { name: "Alumni", href: "#alumni", isHash: true, icon: Users },
    { name: "Careers", href: "#careers", isHash: true, icon: Briefcase },
  ];

  // Navigation handler
  const handleNavigation = (href: string, isHash: boolean) => {
    if (isHash) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
    setMobileSubMenu(null);
    setMobileQuickSubMenu(null);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-950 shadow-md" : "bg-transparent shadow-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 py-3">

        {/* Desktop Header */}
        <div className="hidden lg:flex flex-col w-full" ref={dropdownRef}>
          <div className="flex justify-between items-center mb-3">
            {/* Logo */}
         <button
  onClick={() => handleNavigation("#hero", true)}
  className="flex items-center gap-3"
>
  <img
    src={dsu_pic}
    alt="DSU Logo"
    className="h-14 w-20 object-contain"
  />
  <div className="flex flex-col text-left">
    <h1
      className={`text-3xl font-extrabold ${
        isScrolled ? "text-yellow-400" : "text-white"
      }`}
    >
      Dhanalakshmi Srinivasan University
    </h1>
    <p
      className={`text-lg ${
        isScrolled ? "text-white" : "text-white"
      }`}
    >
      School of Engineering & Technology
    </p>
  </div>
</button>


            {/* Quick Links */}
            <div className="flex items-center gap-6 text-sm">
              {quickLinks.map((link) =>
                link.subItems ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenQuickDropdown(link.name)}
                    onMouseLeave={() => setOpenQuickDropdown(null)}
                  >
                    <button
                      aria-expanded={openQuickDropdown === link.name}
                      className={`flex items-center gap-1 font-medium px-2 py-1 transition-colors ${
                        isScrolled ? "text-white" : "text-white"
                      } hover:text-yellow-300`}
                    >
                      {link.name} <ChevronDown className="h-4 w-4" />
                    </button>
                    {openQuickDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-1 w-max min-w-[300px] rounded-xl shadow-xl bg-white p-4 grid grid-cols-2 gap-3 z-50"
                      >
                        {link.subItems.map((sub) =>
                          sub.isHash ? (
                            <button
                              key={sub.name}
                              onClick={() => handleNavigation(sub.href, true)}
                              className="flex items-center gap-2 p-3 rounded-xl hover:bg-blue-50 transition text-gray-800"
                            >
                              <sub.icon className="h-5 w-5 text-blue-600" />
                              {sub.name}
                            </button>
                          ) : (
                            <NavLink
                              key={sub.name}
                              to={sub.href}
                              className="flex items-center gap-2 p-3 rounded-xl hover:bg-blue-50 transition text-white-800"
                              onClick={() => setOpenQuickDropdown(null)}
                            >
                              <sub.icon className="h-5 w-5 text-blue-600" />
                              {sub.name}
                            </NavLink>
                          )
                        )}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href, link.isHash!)}
                    className={`transition-colors font-medium ${
                      isScrolled ? "text-white" : "text-white"
                    } hover:text-yellow-300`}
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Main Nav */}
          <div className="flex justify-center items-center space-x-4 border-t border-gray-200 pt-4">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="relative group">
                  <button
                    aria-expanded={openDropdown === item.name}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.name ? null : item.name)
                    }
                    className={`flex items-center font-medium px-3 py-2 transition-colors ${
                      isScrolled ? "text-white" : "text-white"
                    } hover:text-yellow-300`}
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.name}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-6 w-max rounded-none shadow-xl bg-white p-4 grid grid-cols-2 gap-2 z-50"
                    >
                      {item.subItems.map((sub) =>
                        sub.isHash ? (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href, true)}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition text-gray-800 text-left"
                          >
                            <sub.icon className="h-5 w-5 text-blue-600" />
                            {sub.name}
                          </button>
                        ) : (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50 transition text-gray-800"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <sub.icon className="h-5 w-5 text-blue-600" />
                            {sub.name}
                          </NavLink>
                        )
                      )}
                    </motion.div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.isHash!)}
                  className={`flex items-center gap-1 font-medium px-3 py-2 transition-colors ${
                    isScrolled ? "text-white" : "text-white"
                  } hover:text-yellow-300`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </button>
              )
            )}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex justify-between items-center lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={dsu_pic}
              alt="DSU Logo"
              className="h-12 w-16 object-contain"
            />
            <div className="flex flex-col">
              <h1
                className={`text-sm font-bold ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              > DSU
              </h1>
              <p
                className={`text-xs font-semibold ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                School of Engineering & Technology
              </p>
            </div>
          </Link>
          <button
            className={`p-2 rounded-md ${
              isScrolled ? "bg-gray-100 text-gray-800" : "bg-white/20 text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-white shadow-xl p-4 rounded-b-md space-y-2 max-h-[80vh] overflow-y-auto"
          >
            {/* Navigation Items */}
            <h3 className="font-bold text-lg text-blue-800 border-b pb-2 mb-2">
              Navigation
            </h3>
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.name} className="flex flex-col">
                  <button
                    onClick={() =>
                      setMobileSubMenu(
                        mobileSubMenu === item.name ? null : item.name
                      )
                    }
                    className="flex justify-between items-center w-full font-medium p-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    <span className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileSubMenu === item.name && (
                    <div className="flex flex-col ml-4 mt-1 space-y-1">
                      {item.subItems.map((sub) =>
                        sub.isHash ? (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href, true)}
                            className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition text-gray-800 text-left"
                          >
                            <sub.icon className="h-4 w-4 text-blue-600" />
                            {sub.name}
                          </button>
                        ) : (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition text-gray-800"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileSubMenu(null);
                            }}
                          >
                            <sub.icon className="h-4 w-4 text-blue-600" />
                            {sub.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.isHash!)}
                  className="flex items-center gap-2 p-2 font-medium text-gray-800 rounded hover:bg-blue-50 transition text-left w-full"
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </button>
              )
            )}

            {/* Quick Links Section */}
            <h3 className="font-bold text-lg text-blue-800 border-b pb-2 mt-4 mb-2">
              Quick Links
            </h3>
            {quickLinks.map((link) =>
              link.subItems ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={() =>
                      setMobileQuickSubMenu(
                        mobileQuickSubMenu === link.name ? null : link.name
                      )
                    }
                    className="flex justify-between items-center w-full font-medium p-2 bg-gray-100 rounded hover:bg-gray-200"
                  >
                    <span className="flex items-center gap-2">
                      <link.icon className="h-4 w-4" />
                      {link.name}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileQuickSubMenu === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileQuickSubMenu === link.name && (
                    <div className="flex flex-col ml-4 mt-1 space-y-1">
                      {link.subItems.map((sub) =>
                        sub.isHash ? (
                          <button
                            key={sub.name}
                            onClick={() => handleNavigation(sub.href, true)}
                            className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition text-gray-800 text-left"
                          >
                            <sub.icon className="h-4 w-4 text-blue-600" />
                            {sub.name}
                          </button>
                        ) : (
                          <NavLink
                            key={sub.name}
                            to={sub.href}
                            className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 transition text-gray-800"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setMobileQuickSubMenu(null);
                            }}
                          >
                            <sub.icon className="h-4 w-4 text-blue-600" />
                            {sub.name}
                          </NavLink>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href, link.isHash!)}
                  className="flex items-center gap-2 p-2 font-medium text-gray-800 rounded hover:bg-blue-50 transition text-left w-full"
                >
                  <link.icon className="h-4 w-4" />
                  {link.name}
                </button>
              )
            )}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;

