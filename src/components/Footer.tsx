import React from 'react';
import { Code2, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/yourprofile',
      color: 'hover:text-blue-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/7993637003',
      color: 'hover:text-green-600'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:freelancing.pavan27@gmail.com',
      color: 'hover:text-red-600'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Designer Studio</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Java Developer specializing in React, Spring Boot, and AWS. 
              Building scalable web applications that drive business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800 text-gray-300 ${social.color} transform hover:scale-110 transition-all duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-300 hover:text-blue-400 transition-colors duration-200 py-1"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">freelancing.pavan27@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">+91 7993637003</span>
              </div>
            </div>
            <div className="pt-4">
              <p className="text-gray-300 text-sm mb-3">
                Available for freelance projects and full-time opportunities.
              </p>
              <a
                href="https://wa.me/7993637003?text=Hi! I'd like to discuss a project with you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 text-sm font-medium"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Pavan. All Rights Reserved. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;