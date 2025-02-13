import { useState } from "react";
import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false); // State for project dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProjectsMenu = () => setIsProjectsOpen(!isProjectsOpen); // Toggle for project dropdown

  return (
    <nav className="bg-[#0a192f] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/phdevlogo.png" alt="Logo" className="h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 text-lg font-medium">
          {["Home", "About Us", "Services"].map((item, index) => (
            <div key={index} className="relative">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-teal-400 transition"
              >
                {item}
              </Link>
              <motion.div
                className="absolute left-0 bottom-0 h-1 bg-teal-400 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          ))}
          {/* Projects Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProjectsMenu}
              className="text-lg font-medium hover:text-teal-400 transition"
            >
              Projects
            </button>
            <AnimatePresence>
              {isProjectsOpen && (
                <motion.div
                  className="absolute left-0 bg-[#0a192f] p-4 mt-2 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-2 text-lg">
                    <li>
                      <Link
                        to="/projects/software"
                        className="block text-white hover:text-teal-400 transition"
                      >
                        Software
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/projects/website"
                        className="block text-white hover:text-teal-400 transition"
                      >
                        Website
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a192f] p-4"
          >
            <ul className="flex flex-col space-y-4 text-center text-lg font-medium">
              {["Home", "About Us", "Services"].map((item, index) => (
                <motion.li key={index} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="block hover:text-teal-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              {/* Mobile Projects Dropdown */}
              <motion.li
                key="projects"
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={toggleProjectsMenu}
                  className="block hover:text-teal-400 transition"
                >
                  Projects
                </button>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#0a192f] p-4 mt-2 rounded-lg shadow-lg"
                  >
                    <ul className="space-y-2 text-lg">
                      <li>
                        <Link
                          to="/projects/software"
                          className="block text-white hover:text-teal-400 transition"
                        >
                          Software
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects/website"
                          className="block text-white hover:text-teal-400 transition"
                        >
                          Website
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
