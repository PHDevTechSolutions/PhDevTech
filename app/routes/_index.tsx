import React from 'react';
import Nav from './components/Nav';
import { motion } from 'framer-motion';
import Footer from './components/Footer';

export default function Index() {
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

  const featuredProjects = [
    {
      title: "Task Flow 2024",
      image: "/xchire-taskflow.png", // Replace with actual image path
      description: "Task Flow 2024 is a time and motion tracking system designed to streamline the daily activities of agents, TSMs, and their managers. By providing real-time monitoring and detailed reports, this system helps optimize task allocation, identify inefficiencies, and improve overall performance across teams.",
    },
    {
      title: "Ecoshift Corporation",
      image: "/xchire-ecoshift.png", // Replace with actual image path
      description: "An online shop offering high-quality, affordable LED lighting solutions for homes, offices, and businesses.",
    },
    {
      title: "Ecoshift Shopify",
      image: "/xchire-shopify.png", // Replace with actual image path
      description: "An e-commerce site offering a wide range of LED lighting products tailored for various applications.",
    },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="relative bg-[#0a192f] text-white min-h-screen">
      <Nav /> {/* Include the Nav component */}

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        {/* Background Abstract Shapes */}
        <div className="absolute inset-0">
          <div className="absolute w-32 h-32 bg-blue-600 rounded-full opacity-50 top-10 left-10 blur-2xl"></div>
          <div className="absolute w-40 h-40 bg-teal-500 rounded-full opacity-50 bottom-10 right-10 blur-3xl"></div>
          <div className="absolute w-24 h-24 bg-purple-500 rounded-full opacity-40 top-1/3 left-1/2 blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Left Side (Text Content) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Empower Your Digital Experience
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Discover cutting-edge analytics and technology solutions to drive your business forward.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg transform hover:scale-105 transition duration-300">
                Get Started
              </button>
            </motion.div>

            {/* Right Side (Laptop Illustration with Data Analytics Theme) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-80 md:w-[400px] h-[250px] bg-gray-900 rounded-lg shadow-lg p-4">
                {/* Laptop Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-8 bg-gray-700 rounded-b-lg"></div>

                {/* Laptop Screen */}
                <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
                  {/* Mock Data Analytics (Bars & Pie Charts) */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-blue-500 rounded-lg"></div>
                  <div className="absolute top-6 right-6 w-10 h-10 bg-green-500 rounded-full"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-8 bg-yellow-500 rounded-md"></div>
                  <div className="absolute bottom-12 right-12 w-12 h-12 bg-red-500 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#112240] py-12 px-6">
        <motion.h2
          className="text-3xl font-semibold text-teal-400 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#1b2a41] p-6 rounded-lg shadow-lg hover:bg-teal-400 hover:text-[#0a192f] transition cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technology Importance Section */}
      <section className="bg-[#0a192f] py-12 px-6">
        <motion.h2
          className="text-3xl font-semibold text-teal-400 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Importance of Technology in Our Lives
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          As technology continues to evolve, its impact on our daily lives becomes more profound. From simplifying communication to enhancing business efficiency, the role of technology in shaping our world cannot be overstated. In the coming years, we can expect even greater advances in artificial intelligence, automation, and data analytics, which will revolutionize industries, improve healthcare, and create new opportunities for innovation. Embracing these technological advancements is not just a choice, but a necessity to stay ahead in an ever-changing digital landscape.
        </motion.p>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-[#112240] py-12 px-6">
        <motion.h2
          className="text-3xl font-semibold text-teal-400 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1b2a41] p-6 rounded-lg shadow-lg hover:bg-teal-400 hover:text-[#0a192f] transition cursor-pointer w-full sm:w-72 md:w-80 lg:w-96 xl:w-[350px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-38 bg-gray-700 rounded-lg mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-sm font-semibold mb-2">{project.title}</h3>
              <p className='text-sm'>{project.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />

    </div>
  );
}
