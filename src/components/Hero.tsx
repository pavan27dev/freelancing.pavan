import React from 'react';
import { ChevronDown, MessageCircle, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'd like to discuss a development project with you.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/7993637003?text=${encodedMessage}`, '_blank');
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Java Full Stack Developer</span>
              <br />
              <span className="text-gray-700">React, Spring Boot, AWS</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            I build secure, scalable, and high-performance web applications for businesses and startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={openWhatsApp}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Hire Me on WhatsApp
            </button>
            
            <button
              onClick={scrollToPortfolio}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Briefcase className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View My Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;