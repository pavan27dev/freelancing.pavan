import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Financial Services',
      description: 'A comprehensive financial services platform with real-time transaction tracking, secure payment integration, and portfolio management system.',
      problem: 'Local grocery stores needed an online presence with delivery management and inventory tracking.',
      solution: 'Built a full-stack application with Spring Boot backend, React frontend, and MySQL database with AWS deployment.',
      techStack: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS', 'Stripe API'],
      image: './src/assests/bussiness.png',
      liveDemo: 'https://pavan27dev.github.io/Financial-Services/',
      github: 'https://pavan27dev.github.io/Financial-Services/'
    },
    {
      title: 'E-commerce Platform',
      description: 'A user-friendly online shopping solution with product catalog management, secure payment integration, order tracking, and customer engagement features.',
      problem: 'Teams needed a centralized platform for project collaboration and task management.',
      solution: 'Developed a scalable web application with role-based access control and real-time notifications.',
      techStack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'JWT', 'WebSocket'],
      image: './src/assests/food.png',
      liveDemo: ' https://freelancingpavan27-art.github.io/foodmart/',
      github: ' https://freelancingpavan27-art.github.io/foodmart/'
    },
     {
      title: 'Genocare scientific Pvt Ltd',
      description: 'A reliable pharma company offering an easy-to-use online platform for ordering medicines and healthcare products. It provides a comprehensive product catalog, secure payment options, doorstep delivery, order tracking, and customer support to ensure convenient and timely access to medical essentials.',
      problem: 'Teams needed a centralized platform for project collaboration and task management.',
      solution: 'Developed a scalable web application with role-based access control and real-time notifications.',
      techStack: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'JWT', 'WebSocket'],
      image: './src/assests/genocare.png',
      liveDemo: 'https://genocarescientific.com/',
      github: 'https://genocarescientific.com/'
    },
    {
      title: 'Insurance Agent Portfolio',
      description: 'A professional platform that showcases insurance plans, policies, and services. It enables clients to explore coverage options, compare plans, track policy details, and connect directly with the agent for personalized guidance and support.',
      problem: 'Users needed an intuitive way to track expenses and manage their personal finances.',
      solution: 'Created a responsive web app with data visualization, automated categorization, and financial insights.',
      techStack: ['Java', 'Spring Boot', 'React', 'Chart.js', 'MySQL', 'AWS'],
      image: './src/assests/insurance.png',
      liveDemo: 'https://pavan27dev.github.io/insurance_Agent/',
      github: 'https://pavan27dev.github.io/insurance_Agent/'
    },
    {
      title: 'Invoice generator and Pdf',
      description: 'A smart billing solution that allows users to easily create, customize, and download professional invoices in PDF format. It includes features for client management, automated calculations, tax handling, payment tracking, and secure record keeping.',
      problem: 'Educational institutions needed a digital platform for remote learning and course management.',
      solution: 'Built a comprehensive LMS with video integration, quiz system, and analytics dashboard.',
      techStack: ['Spring Boot', 'React', 'MySQL', 'AWS S3', 'Video.js', 'PayPal API'],
      image: './src/assests/invoice.png',
      liveDemo: 'https://pavan27dev.github.io/invoice/',
      github: 'https://pavan27dev.github.io/invoice/'
    },
    {
      title: 'Travel Agency Website',
      description: 'A comprehensive platform for booking and managing travel itineraries, offering features like flight and hotel reservations, itinerary planning, and customer support.',
      problem: 'Travelers needed a seamless way to plan and book their trips online.',
      solution: 'Developed a user-friendly web application with integrated booking systems and real-time updates.',
      techStack: ['Spring Boot', 'React', 'MySQL', 'AWS S3', 'Stripe API'],
      image: './src/assests/travel.png',
      liveDemo: ' https://freelancingpavan27-art.github.io/travel-platform/',
      github: ' https://freelancingpavan27-art.github.io/travel-platform/'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications that solve business problems with modern technology stacks
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Problem & Solution:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Problem:</span> {project.problem}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Solution:</span> {project.solution}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 hover:text-gray-900 transform hover:scale-105 transition-all duration-200 font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;