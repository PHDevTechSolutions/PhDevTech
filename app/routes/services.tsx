import React from "react";
import Nav from './components/Nav'; // Import Nav component
import Footer from './components/Footer';
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build responsive and high-performance websites tailored to your business needs.",
    },
    {
      title: "E-Commerce Solutions",
      description: "Enhance your online store with custom e-commerce platforms that drive sales and engagement.",
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions that streamline your business processes efficiently.",
    },
    {
      title: "SEO Services",
      description: "Improve your search rankings and online visibility with our expert SEO strategies.",
    },
    {
      title: "Website & System Maintenance",
      description: "Keep your website and system up-to-date with our reliable maintenance services.",
    },
    {
      title: "Security & Protection",
      description: "Protect your business from cyber threats with our advanced security solutions.",
    },
  ];

  return (
    <div className="relative bg-[#0a192f] text-white min-h-screen">
      <Nav />
    <div className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6 py-12">

      <motion.h1
        className="text-4xl font-bold text-teal-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h1>
      <motion.p
        className="text-gray-300 text-lg mb-10 max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        We offer a range of professional digital solutions to help businesses grow and thrive in the online world.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#112240] p-6 rounded-lg shadow-lg hover:bg-teal-400 hover:text-[#0a192f] transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <Footer />
    </div>
  );
}
