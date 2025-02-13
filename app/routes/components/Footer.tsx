import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Footer = () => {
  return (
    <footer className="bg-[#112240] py-12 px-6 text-center">
      <motion.h2
        className="text-3xl font-semibold text-teal-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Have any questions? We're here to help! Reach out to us and let us assist you with your digital needs.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Link
          to="/contact" // Replace with actual route path
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* Links Section */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <ul className="flex justify-center gap-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-teal-400">Home</Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-300 hover:text-teal-400">Services</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-300 hover:text-teal-400">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-teal-400">Contact</Link>
          </li>
        </ul>
      </motion.div>

      {/* Copyright Notice */}
      <motion.p
        className="text-gray-400 text-sm mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        &copy; {new Date().getFullYear()} PH Dev-Tech Solutions. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
