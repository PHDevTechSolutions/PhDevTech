import React from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-[#0a192f] text-white min-h-screen">
      <Nav />
      <section className="py-16 px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-teal-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>

        {/* History */}
        <motion.div
          className="mb-16 max-w-4xl mx-auto bg-[#112240] shadow-lg p-8 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-4">Our History</h3>
          <p className="text-lg leading-relaxed text-gray-300">
            We started as a small development team with a mission to create innovative digital solutions.
            Over the years, we have grown into a full-service agency, helping businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Clients Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">Our Clients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["jjv", "retro", "cut", "celo"].map((client, index) => (
              <motion.div
                key={index}
                className="bg-[#112240] shadow-lg p-4 rounded-lg flex items-center justify-center hover:bg-teal-400 transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`/logos/${client}.png`}
                  alt={`Client ${index + 1}`}
                  className="h-16 w-auto object-contain filter brightness-75 hover:brightness-100"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Members */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">Meet the Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {[ 
              { name: "Liesther Roluna", role: "Founder / DevOps", img: "/team/xchire-ceo.png" },
              { name: "Baby Rose Nebril", role: "React Developer", img: "/team/xchire-itspecialist.jpg" },
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-[#112240] shadow-lg p-6 rounded-lg text-center hover:bg-teal-400 transition transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-400 object-cover"
                  loading="lazy"
                />
                <h4 className="text-xl font-medium">{member.name}</h4>
                <p className="text-gray-300">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;