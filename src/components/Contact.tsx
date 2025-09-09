import  { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'NH-45, Trichy Chennai Trunk Road, Samayapuram (Near Samayapuram Toll Plaza),Tiruchirappalli - 621 112.Tamil Nadu,India.',
      color: 'bg-blue-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 63841 76766 \n+91 63841 76769\nToll Free: 1800-5322-222',
      color: 'bg-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'enquiry@dsuniversity.ac.in\ninfo@dsu.edu.in\nengineerig@dsu.edu.in',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 9:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
      color: 'bg-yellow-500'
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/profile.php?id=100091800559494&mibextid=ZbWKwL', color: 'hover:text-blue-600' },
    { icon: Twitter, url: 'https://x.com/dscolleges', color: 'hover:text-blue-400' },
    { icon: Instagram, url: 'https://www.instagram.com/dsu_trichy?igsh=MTliYjVocmpuMGJoaQ==', color: 'hover:text-pink-500' },
    { icon: Linkedin, url: 'https://www.linkedin.com/school/dhanalakshmisrinivasanuniversity/', color: 'hover:text-blue-700' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs or admissions? We're here to help you start 
            your engineering journey. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        {/* Contact Information Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className={`${info.color} p-3 rounded-lg inline-flex mb-4`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-lg mb-3">{info.title}</h4>
                <p className="text-gray-600 whitespace-pre-line">{info.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h4 className="font-semibold text-gray-800 text-xl mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`bg-white p-3 rounded-full shadow-lg text-gray-600 ${social.color} transition-colors`}
              >
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Find Us on Map</h3>
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4097.973341801973!2d78.74367409556106!3d10.930204199588253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf70ca2847e99%3A0xcf6f7bb049ba92a6!2sDHANALAKSHMI%20SRINIVASAN%20UNIVERSITY!5e0!3m2!1sen!2sin!4v1755159846138!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DSU Map"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;