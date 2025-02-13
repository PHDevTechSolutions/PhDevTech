import { useState } from "react";
import { Link } from "@remix-run/react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const MenuIcon = dynamic(() => import("lucide-react").then((mod) => mod.Menu), { ssr: false });
const XIcon = dynamic(() => import("lucide-react").then((mod) => mod.X), { ssr: false });
const ChevronDownIcon = dynamic(() => import("lucide-react").then((mod) => mod.ChevronDown), { ssr: false });

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProjectsMenu = () => setIsProjectsOpen(!isProjectsOpen);

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
            <Link
              key={index}
              to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
              className="hover:text-teal-400 transition"
            >
              {item}
            </Link>
          ))}
          {/* Projects Dropdown */}
          <div className="relative">
            <button onClick={toggleProjectsMenu} className="flex items-center gap-1 hover:text-teal-400 transition">
              Projects <ChevronDownIcon className="w-5 h-5" />
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
                      <Link to="/projects/software" className="block hover:text-teal-400 transition">Software</Link>
                    </li>
                    <li>
                      <Link to="/projects/website" className="block hover:text-teal-400 transition">Website</Link>
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
            {isOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-[#0a192f] shadow-lg p-6 z-50"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4">
              <XIcon className="w-6 h-6 text-white" />
            </button>
            <ul className="space-y-4 text-lg font-medium mt-10">
              {["Home", "About Us", "Services"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="block hover:text-teal-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {/* Mobile Projects Dropdown */}
              <li className="relative">
                <button
                  onClick={toggleProjectsMenu}
                  className="flex items-center justify-between w-full hover:text-teal-400 transition"
                >
                  Projects <ChevronDown className={`w-5 h-5 transition ${isProjectsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isProjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pl-4 border-l border-gray-600"
                    >
                      <ul className="space-y-2">
                        <li>
                          <Link to="/projects/software" className="block hover:text-teal-400 transition">Software</Link>
                        </li>
                        <li>
                          <Link to="/projects/website" className="block hover:text-teal-400 transition">Website</Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}