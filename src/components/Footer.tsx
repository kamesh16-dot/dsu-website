import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

interface LinkItem {
  name: string;
  href: string;
}

interface ProgramItem {
  name: string;
  href: string;
}

const Footer = () => {
  const quickLinks: LinkItem[] = [
    { name: 'About', href: '/program' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs: ProgramItem[] = [
    { name: 'Computer Science Engineering', href: '/program/cse' },
    { name: 'Electronics & Communication', href: '/program/ece' },
    { name: 'Mechanical Engineering', href: '/program/mech' },
    { name: 'Civil Engineering', href: '/program/civil' },
    { name: 'M.Tech Programs', href: '/program/mtech' },
    { name: 'Ph.D. Programs', href: '/program/phd' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100091800559494&mibextid=ZbWKw', label: 'Facebook' },
    { icon: Twitter, url: 'https://x.com/dscolleges', label: 'Twitter' },
    { icon: Instagram, url: 'https://www.instagram.com/dsu_trichy?igsh=MTliYjVocmpuMGJoaQ==', label: 'Instagram' },
    { icon: Linkedin, url: 'https://www.linkedin.com/school/dhanalakshmisrinivasanuniversity/', label: 'LinkedIn' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* University Info */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-yellow-400" />
                <span className="text-xl font-bold">DSU Engineering</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering the next generation of engineers with world-class education, 
                cutting-edge research, and innovative solutions for tomorrow's challenges.
              </p>
            </motion.div>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Dhanalakshmi Srinivasan University<br />
                  Perambalur - Trichy Highway<br />
                  Tamil Nadu 621112, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">+91 4328 220 555</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <p className="text-gray-300 text-sm">admissions@dsu.edu.in</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Programs */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="sm:ml-9">
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Academic Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <Link to={program.href} className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="sm:ml-9">
            <h4 className="text-lg font-semibold mb-6 text-yellow-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button onClick={() => scrollToSection(link.href)} className="text-gray-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>© 2024 Dhanalakshmi Srinivasan University School of Engineering. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <motion.button onClick={scrollToTop} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-yellow-500 text-gray-900 p-2 rounded-full hover:bg-yellow-400 transition-colors" aria-label="Scroll to top">
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
